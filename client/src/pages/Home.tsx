import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SidebarProfile from "@/components/SidebarProfile";
import MainContent from "@/components/MainContent";
import Footer from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    // Direct links can arrive before React has mounted the target section.
    const id = window.location.hash.slice(1);
    if (id)
      document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
  }, []);
  return (
    <div className="site-page">
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <div className="site-shell academic-layout">
          <SidebarProfile />
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
