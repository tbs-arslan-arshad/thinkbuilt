import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/libs/dbConfig";
import Admin from "@/models/admin";

export async function POST(request: NextRequest) {
  try {
    await connect();

    const { email, password, firstName, lastName } = await request.json();

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json(
        { error: "Admin with this email already exists" },
        { status: 400 }
      );
    }

    // Create new admin
    const admin = new Admin({
      email,
      password,
      firstName,
      lastName,
    });

    await admin.save();

    return NextResponse.json(
      { message: "Admin created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating admin:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}