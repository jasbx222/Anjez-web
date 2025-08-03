import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Hero from "./Home/First-sction";
import About from "./Home/Second-section";
import Accordion from "./Home/third-section";
import FeatureSlider from "./Home/SliderPart";
import Pricing from "./Home/Pricing";
import Contact from "./Home/Contact";
import ClientsSection from "./Home/ClientsSection";



function Home() {
  return (
    <>
    <Header/>
<Hero/>
<About/>
<Accordion/>

<div className="container">
<FeatureSlider/>
</div>
<Pricing/>
{/* <Contact/> */}
<ClientsSection/>
    <Footer/>
      
    </>
  );
}

export default Home;
