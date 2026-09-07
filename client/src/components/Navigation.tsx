import { useEffect, useRef, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { personalInfo, navigationMenu } from "@/config/siteConfig";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(window.location.hash);
  const menuButton = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);
  useEffect(() => {
    const onHash = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHash);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const close = () => {
      if (desktop.matches) setIsOpen(false);
    };
    desktop.addEventListener("change", close);
    return () => {
      window.removeEventListener("hashchange", onHash);
      desktop.removeEventListener("change", close);
    };
  }, []);
  const isBlog = window.location.pathname.startsWith("/blog");
  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeAction = `Switch to ${theme === "dark" ? "light" : "dark"} mode`;
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <nav className="site-shell nav-layout" aria-label="Main navigation">
          <a href="/" className="wordmark" aria-label="Yibin (Leon) Liu, home">
            {personalInfo.name}
            <span className="wordmark-cn">{personalInfo.chineseName}</span>
          </a>
          <div className="nav-controls">
            <div
              id="navigation-links"
              className={`nav-links ${isOpen ? "is-open" : ""}`}
            >
              {navigationMenu.map((link) => {
                const active =
                  link.label === "Blog"
                    ? isBlog
                    : window.location.pathname === "/" &&
                      (link.href === "/"
                        ? !activeHash
                        : link.href === `/${activeHash}`);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-current={
                      active
                        ? link.href.includes("#")
                          ? "location"
                          : "page"
                        : undefined
                    }
                    onClick={() => setIsOpen(false)}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
            <div className="theme-control">
              <button
                type="button"
                className="theme-toggle"
                onClick={toggleTheme}
                aria-label={themeAction}
                title={themeAction}
              >
                <ThemeIcon size={20} aria-hidden="true" />
              </button>
            </div>
            <button
              ref={menuButton}
              className="menu-button"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="navigation-links"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
