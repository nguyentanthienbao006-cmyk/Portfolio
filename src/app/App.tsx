import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { TimelineSection } from "./components/TimelineSection";
import { PortfolioGrid } from "./components/PortfolioGrid";
import { Footer } from "./components/Footer";
import { BackgroundPattern } from "./components/BackgroundPattern";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundPattern />

      {/* HEADER */}
      <Header />

      {/* MAIN BODY */}
      <main>
        <HeroSection />
        <TimelineSection />
        <PortfolioGrid />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}