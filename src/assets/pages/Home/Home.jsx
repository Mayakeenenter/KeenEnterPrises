import { Outlet } from "react-router-dom";
import CardLine from "../../component/CardLine/CardLine";
import ExpertSupportSection from "../../component/ExpertSupportSection/ExpertSupportSection";
import Hero from "../../component/Hero/Hero";
import InnovationTools from "../../component/InnovationTools/InnovationTools";
import OurServices from "../../component/OurServices/OurServices";
import Pricing from "../../component/Pricing/Pricing";
import Slider from "../../component/Slider/Slider";
import Values from "../../component/Values/Values";

export default function Home() {
  return (
    <>
      
      <Hero />
      <OurServices />
      <Values />
      <ExpertSupportSection />
      <Pricing />
      <CardLine text={"Business Partners"} />
      <InnovationTools />
      <Slider />
      <Outlet />
    </>
  );
}
