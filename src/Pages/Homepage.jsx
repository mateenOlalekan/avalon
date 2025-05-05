import Footer from "../components/Common/Footer";
import Hero from "../components/Common/Heronew";
import HeroSlider from "../components/Common/HeroSlider";
import Category from "../components/Category/Category";
import DealsSection from "../components/Deals/DealsSection";
import BrandsSection from "../components/Common/Brand";

function Homepage() {
  return (
    <>
    <div className="bg-white">
      <div className="flex max-w-7xl mx-auto">
        <Hero />
        <HeroSlider />
      </div>
      <Category/>

        <DealsSection />
        <BrandsSection/>
        <Footer />
    </div>
    </>
  );
}

export default Homepage;