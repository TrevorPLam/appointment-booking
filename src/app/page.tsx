import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import HeroSection from "@/components/sections/HeroSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SocialProofSection from "@/components/sections/SocialProofSection";

const Home = () => (
  <div className="space-y-20">
    <HeroSection />
    <SocialProofSection />
    <ServicesSection />
    <PortfolioSection />
    <FAQSection />
    <CTASection />
  </div>
);

export default Home;
