import EmailContact from "./EmailContact";
import {
  siteMetadata,
  personalInfo,
  socialLinks,
  footerContent,
} from "@/config/siteConfig";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
  const visitorContainer = useRef<HTMLDivElement>(null);
  const [visitorStatus, setVisitorStatus] = useState<
    "loading" | "ready" | "error"
  >("loading");
  const [visitorAttempt, setVisitorAttempt] = useState(0);
  useEffect(() => {
    const container = visitorContainer.current;
    if (!container) return;
    setVisitorStatus("loading");
    let ready = false;
    const timeout = window.setTimeout(() => {
      if (!ready) setVisitorStatus("error");
    }, 12000);
    const markReady = () => {
      ready = true;
      window.clearTimeout(timeout);
      setVisitorStatus("ready");
    };
    const inspect = () => {
      const image = container.querySelector("img");
      if (
        (image?.complete && image.naturalWidth > 0) ||
        container.querySelector("canvas, svg")
      )
        markReady();
    };
    const onLoad = (event: Event) => {
      if (
        event.target instanceof HTMLImageElement ||
        event.target instanceof HTMLIFrameElement
      )
        markReady();
      else inspect();
    };
    const observer = new MutationObserver(inspect);
    observer.observe(container, { childList: true, subtree: true });
    container.addEventListener("load", onLoad, true);
    const script = document.createElement("script");
    script.id = "mapmyvisitors";
    script.src =
      "https://mapmyvisitors.com/map.js?cl=ffffff&w=400&t=tt&d=OsdhPxdEczfiTFHwqskcKzqDSwDY6eYWewwj-JzD56E&co=0f1827";
    script.async = true;
    script.onerror = () => {
      if (!ready) setVisitorStatus("error");
    };
    container.appendChild(script);
    return () => {
      window.clearTimeout(timeout);
      observer.disconnect();
      container.removeEventListener("load", onLoad, true);
      script.onerror = null;
      container.replaceChildren();
    };
  }, [visitorAttempt]);
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-top">
          <div className="footer-intro">
            <a className="footer-name" href="/">
              {personalInfo.name}
              <span>{personalInfo.chineseName}</span>
            </a>
            <p className="footer-location">
              {personalInfo.pronouns} · {personalInfo.location}
            </p>
            <div className="footer-social" aria-label="Contact links">
              <EmailContact className="footer-email" textLabel />
              <a
                href={socialLinks.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Scholar
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href={socialLinks.x} target="_blank" rel="noopener noreferrer">
                X
              </a>
            </div>
            <div className="footer-fork">
              <p>{footerContent.forkInvitation}</p>
              <a
                className="text-link"
                href={footerContent.repositoryUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {footerContent.repositoryLabel}
              </a>
            </div>
          </div>
          <section className="visitor-section" aria-label="Visitor statistics">
            <div className="visitor-heading">
              <h2>Visitors</h2>
              <a
                href="https://mapmyvisitors.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MapMyVisitors
              </a>
            </div>
            <div className="visitor-frame">
              <div
                id="mapmyvisitors-container"
                ref={visitorContainer}
                className="visitor-map"
              />
              {visitorStatus !== "ready" && (
                <div className="visitor-placeholder">
                  <p role="status">
                    {visitorStatus === "loading"
                      ? "Loading visitor map…"
                      : "The visitor map is temporarily unavailable."}
                  </p>
                  {visitorStatus === "error" && (
                    <button
                      type="button"
                      className="text-link"
                      onClick={() =>
                        setVisitorAttempt((attempt) => attempt + 1)
                      }
                    >
                      Retry
                    </button>
                  )}
                </div>
              )}
            </div>
          </section>
        </div>
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="footer-updated">Updated {siteMetadata.lastUpdated}</p>
        </div>
      </div>
    </footer>
  );
}
