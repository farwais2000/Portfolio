import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { SiGithub, SiWhatsapp, SiInstagram, SiFacebook, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { socials } from "../data/socials";
import myimage from "../assets/far profile.JPG";

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  whatsapp: SiWhatsapp,
  instagram: SiInstagram,
  facebook: SiFacebook,
  twitter: SiX,
};

const roles = [
  "Full Stack Developer",
  "React Developer",
  "HICT Undergraduate",
  "UI/UX Enthusiast",
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

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

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 90;
    const pauseAtEnd = 1500;
    const pauseAtStart = 400;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseAtEnd);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTimeout(() => {}, pauseAtStart);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const sectionSubtext = darkMode ? "text-white-50" : "text-secondary";
  const cardBorder = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";

  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="d-flex align-items-center"
      style={{ minHeight: "100vh", position: "relative", paddingTop: "90px" }}
    >
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: Text content */}
          <motion.div
            className="col-lg-7 order-2 order-lg-1 text-center text-lg-start"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="d-inline-flex align-items-center gap-2 px-3 py-1 mb-3"
              style={{
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: 600,
                background: darkMode
                  ? "rgba(99,102,241,0.12)"
                  : "rgba(79,70,229,0.08)",
                color: darkMode ? "#a5b4fc" : "#4f46e5",
              }}
            >
              👋 Welcome to my portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="fw-bold mb-2"
              style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: 1.15 }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #4f46e5, #db2777, #4f46e5)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  animation: "shimmer 6s linear infinite",
                }}
              >
                Mohamed Farwais
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4 d-flex align-items-center justify-content-center justify-content-lg-start"
              style={{
                fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)",
                fontWeight: 600,
                minHeight: "2.2rem",
              }}
            >
              <span className={darkMode ? "text-white-50" : "text-secondary"}>
                I'm a&nbsp;
              </span>
              <span style={{ color: darkMode ? "#a5b4fc" : "#4f46e5" }}>
                {displayText}
              </span>
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
                style={{
                  display: "inline-block",
                  width: "2px",
                  height: "1.4rem",
                  marginLeft: "4px",
                  background: darkMode ? "#a5b4fc" : "#4f46e5",
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`${sectionSubtext} mb-4 mx-auto mx-lg-0`}
              style={{ maxWidth: "540px", lineHeight: 1.75, fontSize: "1rem" }}
            >
              I build full-stack web applications with clean code and
              thoughtful design — from responsive frontends to robust
              backends, turning ideas into real, deployed products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start gap-3 mb-4"
            >
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`btn d-inline-flex align-items-center gap-2 px-4 py-2 ${
                  darkMode ? "btn-light" : "btn-dark"
                }`}
                style={{
                  borderRadius: "999px",
                  boxShadow: darkMode
                    ? "0 4px 14px rgba(255,255,255,0.12)"
                    : "0 4px 14px rgba(0,0,0,0.18)",
                }}
              >
                <Mail size={16} />
                Get In Touch
              </motion.a>

              <motion.a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("work");
                }}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className={`btn px-4 py-2 ${
                  darkMode ? "btn-outline-light" : "btn-outline-dark"
                }`}
                style={{ borderRadius: "999px" }}
              >
                View My Work
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="d-flex align-items-center justify-content-center justify-content-lg-start gap-2"
            >
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
                    <Icon size={17} />
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right: Profile image */}
          <motion.div
            className="col-lg-5 order-1 order-lg-2 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto position-relative"
              style={{
                width: "min(340px, 78%)",
                aspectRatio: "1 / 1",
              }}
            >
              {/* Glow ring */}
              <div
                style={{
                  position: "absolute",
                  inset: "-10px",
                  borderRadius: "50%",
                  background: darkMode
                    ? "linear-gradient(135deg, rgba(99,102,241,0.4), rgba(236,72,153,0.4))"
                    : "linear-gradient(135deg, rgba(79,70,229,0.3), rgba(219,39,119,0.3))",
                  filter: "blur(24px)",
                  zIndex: 0,
                }}
              />

              <div
                className="position-relative w-100 h-100"
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `4px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.9)"}`,
                  boxShadow: darkMode
                    ? "0 20px 50px rgba(0,0,0,0.5)"
                    : "0 20px 50px rgba(0,0,0,0.15)",
                }}
              >
                <img
                  src={myimage}
                  alt="S. Sathuska"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="d-none d-lg-flex justify-content-center mt-5"
        >
          <motion.a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("about");
            }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="d-flex align-items-center justify-content-center"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: `1px solid ${cardBorder}`,
              color: darkMode ? "#fff" : "#111",
            }}
            aria-label="Scroll to About"
          >
            <ArrowDown size={18} />
          </motion.a>
        </motion.div>
      </div>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}