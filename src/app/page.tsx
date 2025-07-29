import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Trusted from "./sections/Trusted";
import Imagesection from "./sections/Imagesection";
import Village from "./sections/Village";
import Divsection from "./sections/Divsection";
import Founders from "./sections/Founders";
import Footer from "./components/Footer";
import Review from "./sections/Review";
import Clarity from "./sections/Clarity";

export default function Home() {
  return (
    <>
      <div
        className=" "
        style={{
          backgroundImage: " url('/Section.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <Navbar />
        <Hero />
      </div>
      <Trusted />
      <Imagesection />
      <Village />
      <Divsection />
      <div
        className=" z-50 "
        style={{
          backgroundImage: " url('/Bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}>
        <Founders />
      </div>
      <Review />
      
      <Clarity/>
      <Footer />
    </>
  );
}
