import Hero from "./components/Hero";
import Trusted from "./components/Trusted";
import Imagesection from "./components/Imagesection";
import Village from "./components/Village";
import Divsection from "./components/Divsection";
import Founders from "./components/Founders";
import Review from "./components/Review";
import Clarity from "./components/Clarity";

export default function Home() {
  return (
    <>
      <div
        className=" "
        style={{
          backgroundImage: " url('/images/Section.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Hero />
      </div>
      <Trusted />
      <Imagesection />
      <Village />
      <Divsection />
      <div
        className=" z-50 "
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
