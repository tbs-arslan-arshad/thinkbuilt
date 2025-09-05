import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialProviders from "next-auth/providers/credentials";
import { connect } from "@/libs/dbConfig";
import Admin from "@/models/admin";

const INACTIVITY_TIMEOUT_IN_SECONDS = 30 * 60; // 30 minutes

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialProviders({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Record<string, string> | undefined) {
        await connect();
        try {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Email and password are required");
          }
          const { email, password } = credentials;

          const admin = await Admin.findOne({ email, isActive: true });

          if (!admin) {
            throw new Error("No admin found with this email");
          }

          const isPasswordMatched = await admin.comparePassword(password);
          if (!isPasswordMatched) {
            throw new Error("Incorrect password");
          }

          // Return admin data for session
          return {
            id: admin._id.toString(),
            email: admin.email,
            firstName: admin.firstName,
            lastName: admin.lastName,
            role: admin.role,
          };
        } catch (error) {
          throw new Error((error as Error).message || "Authentication failed");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      const newExpiry = Math.floor(Date.now() / 1000) + INACTIVITY_TIMEOUT_IN_SECONDS;

      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.role = user.role;
      }

      token.exp = newExpiry;
      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.firstName = token.firstName as string;
        session.user.lastName = token.lastName as string;
        session.user.role = token.role as string;

        if (token.exp) {
          session.expires = new Date(Number(token.exp) * 1000).toISOString();
        }
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/admin/login",
    error: "/admin/login",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };