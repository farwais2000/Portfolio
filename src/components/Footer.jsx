import { motion } from "framer-motion";
import { Heart, ArrowUp, House, User, Briefcase, Code, Mail } from "lucide-react";
import { SiGithub, SiWhatsapp, SiInstagram, SiFacebook, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";
import { socials } from "../data/socials";

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  whatsapp: SiWhatsapp,
  instagram: SiInstagram,
  facebook: SiFacebook,
  twitter: SiX,
};

const navItems = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Footer() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const syncTheme = () => {
      setDarkMode(document.body.classList.contains("bg-dark"));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    window.addEventListener("storage", syncTheme);

    return () => {
      observer.disconnect();
      window.removeEventListener("storage", syncTheme);
    };
  }, []);

  const cardBorder = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const sectionSubtext = darkMode ? "text-white-50" : "text-secondary";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer
      style={{
        borderTop: `1px solid ${cardBorder}`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container py-5">
        <div className="row g-4 mb-4">
          {/* Brand */}
          <div className="col-lg-4">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
              className="fw-bold fs-4 d-inline-block mb-3"
              style={{
                letterSpacing: "-0.02em",
                backgroundImage: "linear-gradient(90deg, #4f46e5, #db2777, #4f46e5)",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textDecoration: "none",
              }}
            >
              Mohamed Farwais
            </a>
            <p
              className={sectionSubtext}
              style={{ fontSize: "0.88rem", lineHeight: 1.7, maxWidth: "320px" }}
            >
              Full-stack web developer & HICT undergraduate, building
              thoughtful, performant web experiences from Sri Lanka.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-sm-6">
            <div
              className={`fw-semibold mb-3 ${darkMode ? "text-white" : "text-dark"}`}
              style={{ fontSize: "0.9rem" }}
            >
              Quick Links
            </div>
            <div className="d-flex flex-column gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.id);
                    }}
                    className={`d-inline-flex align-items-center gap-2 ${sectionSubtext}`}
                    style={{
                      fontSize: "0.87rem",
                      textDecoration: "none",
                      width: "fit-content",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = darkMode ? "#a5b4fc" : "#4f46e5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "";
                    }}
                  >
                    <Icon size={14} />
                    {item.label}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Socials */}
          <div className="col-lg-4 col-sm-6">
            <div
              className={`fw-semibold mb-3 ${darkMode ? "text-white" : "text-dark"}`}
              style={{ fontSize: "0.9rem" }}
            >
              Connect
            </div>
            <div className="d-flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = iconMap[social.key];
                if (!Icon) return null;

                return (
                  <motion.a
                    key={social.key}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ y: -3, scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="d-flex align-items-center justify-content-center"
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "12px",
                      background: darkMode
                        ? "rgba(255,255,255,0.06)"
                        : "rgba(0,0,0,0.04)",
                      color: darkMode ? "#fff" : "#111",
                      textDecoration: "none",
                    }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        <hr style={{ borderColor: cardBorder, opacity: 1 }} />

        {/* Bottom bar */}
        <div className="d-flex flex-column flex-sm-row align-items-center justify-content-between gap-3 pt-2">
          <p className={`${sectionSubtext} mb-0 d-flex align-items-center gap-1`} style={{ fontSize: "0.82rem" }}>
            © {new Date().getFullYear()} Mohamed Farwais. Built with
            <Heart size={13} style={{ color: "#db2777" }} fill="#db2777" />
            using React
          </p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
            className="d-flex align-items-center justify-content-center border-0"
            style={{
              width: "38px",
              height: "38px",
              borderRadius: "50%",
              background: darkMode
                ? "rgba(255,255,255,0.06)"
                : "rgba(0,0,0,0.04)",
              color: darkMode ? "#fff" : "#111",
            }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}