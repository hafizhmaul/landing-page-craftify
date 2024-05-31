import AboutSection from "./components/organisms/AboutSection/AboutSection";
import FooterSection from "./components/organisms/FooterSection/FooterSection";
import HeroSection from "./components/organisms/HeroSection/HeroSection";
import ProductSection from "./components/organisms/ProductSection/ProductSection";
import RootLayout from "./layout";
import { Navbar } from "./navbar";

export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <FooterSection />
    </RootLayout>
  );
}
