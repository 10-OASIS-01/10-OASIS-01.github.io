import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <div className="site-page">
      <Navigation />
      <main id="main-content" className="site-shell not-found">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>This page may have moved, or the link may be incorrect.</p>
        <a href="/" className="inline-link text-link">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to the homepage
        </a>
      </main>
      <Footer />
    </div>
  );
}
