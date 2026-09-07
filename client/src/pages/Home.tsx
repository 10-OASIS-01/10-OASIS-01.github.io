import { useEffect } from "react";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/features/home/HeroSection";
import SidebarProfile from "@/features/home/SidebarProfile";
import MainContent from "@/features/home/MainContent";

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
        <div id="profile" className="site-shell academic-layout" tabIndex={-1}>
          <SidebarProfile />
          <MainContent />
        </div>
      </main>
      <Footer />
    </div>
  );
}
