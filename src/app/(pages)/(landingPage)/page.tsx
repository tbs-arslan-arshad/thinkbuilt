import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import ImageSection from "./components/ImageSection"
import Village from "./components/Village";
import Divsection from "./components/Divsection";
import Founders from "./components/Founders";
import Review from "./components/Review";
import Clarity from "./components/Clarity";
import Image from "next/image";


export default function Home() {
  return (
    <>
      <div className="relative min-h-screen">
        <Image
          src="/images/hero_bottom_bg.png"
          alt="hero-background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <Hero/>
      </div>
      <Trusted/>  
     <ImageSection/>
      <Village/>
      <Divsection/>
      <div
        className="z-50"
        style={{
          backgroundImage: " url('/images/Bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Founders />
      </div>
      <Review />
      <Clarity />

    </>
  );
}
