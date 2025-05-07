import Footer from "../components/Common/Footer";
import Hero from "../components/Common/Heronew";
import HeroSlider from "../components/Common/HeroSlider";
import Category from "../components/Category/Category";
import DealsSection from "../components/Deals/DealsSection";
import BrandsSection from "../components/Common/Brand";
import Deals from "../components/Common/Deals";

function Homepage() {
  return (
    <>
    <div className="bg-white">
      <div className="flex max-w-7xl mx-auto gap-3 mt-2">
        <Hero />
        <HeroSlider />
      </div>
      <Category/>
        <Deals />
        <DealsSection />
        <BrandsSection/>
        <Footer />
    </div>
    </>
  );
}

export default Homepage;