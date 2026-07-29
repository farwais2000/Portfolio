import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import {
  House,
  User,
  Code,
  Briefcase,
  Mail,
  Menu,
  X,
  Sun,
  Moon,
  Terminal,
} from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: House },
  { id: "about", label: "About", icon: User },
  { id: "work", label: "Work", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Header() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const lastY = useRef(0);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => {
    if (!menuOpen) {
      setHideOnScroll(y > lastY.current && y > 120);
    }
    lastY.current = y;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
      document.body.classList.remove("bg-white");
      window.localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
      document.body.classList.add("bg-white");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const handleNavClick = (id) => {
    setActive(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const neonColor = "#00f0ff";
  const neonAccent = "#ff2ee6";

  return (
    <>
      {/* Floating pill navbar */}
      <motion.nav
        animate={{ y: hideOnScroll ? -120 : 0 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        style={{
          position: "fixed",
          top: "18px",
          left: "50%",
          x: "-50%",
          zIndex: 1050,
          width: "min(94vw, 900px)",
        }}
        className="position-fixed start-50 translate-middle-x"
      >
        <div
          className="d-flex align-items-center justify-content-between px-3 px-md-4"
          style={{
            height: "62px",
            borderRadius: "999px",
            background: darkMode
              ? "rgba(10,10,15,0.75)"
              : "rgba(255,255,255,0.85)",
            backdropFilter: "blur(16px) saturate(160%)",
            WebkitBackdropFilter: "blur(16px) saturate(160%)",
            border: darkMode
              ? `1px solid ${neonColor}33`
              : "1px solid rgba(0,0,0,0.08)",
            boxShadow: darkMode
              ? `0 0 0 1px ${neonColor}11, 0 0 24px ${neonColor}22, 0 8px 30px rgba(0,0,0,0.5)`
              : "0 8px 30px rgba(0,0,0,0.1)",
          }}
        >
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="d-flex align-items-center gap-2 text-decoration-none"
          >
            <span
              className="d-flex align-items-center justify-content-center"
              style={{
                width: "34px",
                height: "34px",
                borderRadius: "10px",
                background: darkMode
                  ? `linear-gradient(135deg, ${neonColor}22, ${neonAccent}22)`
                  : "rgba(79,70,229,0.1)",
                border: darkMode ? `1px solid ${neonColor}44` : "none",
              }}
            >
              <Terminal size={17} color={darkMode ? neonColor : "#4f46e5"} />
            </span>
            <span
              className="fw-bold d-none d-sm-inline"
              style={{
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontSize: "1rem",
                letterSpacing: "-0.02em",
                color: darkMode ? "#fff" : "#111",
              }}
            >
              Mohamed Farwais<span style={{ color: darkMode ? neonColor : "#4f46e5" }}>_</span>
            </span>
          </motion.a>

          {/* Desktop nav pills */}
          <div className="d-none d-lg-flex align-items-center" style={{ gap: "2px" }}>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = active === item.id;
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  whileHover={{ y: -1 }}
                  className="d-flex align-items-center gap-1 position-relative text-decoration-none"
                  style={{
                    padding: "8px 16px",
                    borderRadius: "999px",
                    fontSize: "0.85rem",
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive
                      ? darkMode
                        ? neonColor
                        : "#4f46e5"
                      : darkMode
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(0,0,0,0.55)",
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="neon-pill"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "999px",
                        background: darkMode
                          ? `${neonColor}14`
                          : "rgba(79,70,229,0.08)",
                        border: darkMode ? `1px solid ${neonColor}55` : "1px solid rgba(79,70,229,0.15)",
                        boxShadow: darkMode ? `0 0 12px ${neonColor}33` : "none",
                        zIndex: -1,
                      }}
                    />
                  )}
                  <Icon size={13} />
                  {item.label}
                </motion.a>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="d-flex align-items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle theme"
              className="d-none d-lg-flex align-items-center justify-content-center border-0"
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: darkMode ? `${neonColor}14` : "rgba(0,0,0,0.05)",
                border: darkMode ? `1px solid ${neonColor}33` : "none",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={darkMode ? "sun" : "moon"}
                  initial={{ y: -10, opacity: 0, rotate: -90 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.25 }}
                  style={{ display: "inline-flex" }}
                >
                  {darkMode ? (
                    <Sun size={17} color={neonColor} />
                  ) : (
                    <Moon size={17} color="#111" />
                  )}
                </motion.span>
              </AnimatePresence>
            </motion.button>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="d-none d-lg-inline-flex align-items-center text-decoration-none px-3 py-2"
              style={{
                borderRadius: "999px",
                fontSize: "0.82rem",
                fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                fontWeight: 600,
                background: darkMode
                  ? `linear-gradient(135deg, ${neonColor}, ${neonAccent})`
                  : "#111",
                color: darkMode ? "#000" : "#fff",
                boxShadow: darkMode ? `0 0 16px ${neonColor}55` : "none",
              }}
            >
              Hire_Me()
            </motion.a>

            {/* Mobile toggle */}
            <motion.button
              className="d-lg-none d-flex align-items-center justify-content-center border-0"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              whileTap={{ scale: 0.9 }}
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "50%",
                background: darkMode ? `${neonColor}14` : "rgba(0,0,0,0.05)",
                color: darkMode ? "#fff" : "#111",
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "close" : "open"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "inline-flex" }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMenuOpen(false)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                backdropFilter: "blur(4px)",
                zIndex: 1055,
              }}
            />

            <motion.div
              key="panel"
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="position-fixed start-50 translate-middle-x"
              style={{
                top: "92px",
                zIndex: 1060,
                width: "min(92vw, 380px)",
                borderRadius: "24px",
                background: darkMode ? "rgba(10,10,15,0.95)" : "rgba(255,255,255,0.98)",
                border: darkMode ? `1px solid ${neonColor}33` : "1px solid rgba(0,0,0,0.08)",
                boxShadow: darkMode
                  ? `0 0 30px ${neonColor}22, 0 20px 60px rgba(0,0,0,0.6)`
                  : "0 20px 60px rgba(0,0,0,0.15)",
                overflow: "hidden",
              }}
            >
              <div className="p-3">
                <motion.div
                  initial="hidden"
                  animate="show"
                  variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                  }}
                >
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = active === item.id;
                    return (
                      <motion.a
                        key={item.id}
                        href={`#${item.id}`}
                        variants={{
                          hidden: { opacity: 0, x: 16 },
                          show: { opacity: 1, x: 0 },
                        }}
                        whileTap={{ scale: 0.97 }}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                        className="d-flex align-items-center gap-3 py-3 px-3 text-decoration-none mb-1"
                        style={{
                          borderRadius: "14px",
                          fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                          fontSize: "0.95rem",
                          fontWeight: isActive ? 600 : 400,
                          background: isActive
                            ? darkMode
                              ? `${neonColor}14`
                              : "rgba(79,70,229,0.08)"
                            : "transparent",
                          border: isActive
                            ? darkMode
                              ? `1px solid ${neonColor}44`
                              : "1px solid rgba(79,70,229,0.15)"
                            : "1px solid transparent",
                          color: isActive
                            ? darkMode
                              ? neonColor
                              : "#4f46e5"
                            : darkMode
                            ? "rgba(255,255,255,0.7)"
                            : "rgba(0,0,0,0.7)",
                        }}
                      >
                        <Icon size={17} />
                        {item.label}
                      </motion.a>
                    );
                  })}
                </motion.div>

                <motion.div
                  className="d-flex gap-2 mt-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                >
                  <motion.button
                    className="flex-fill border-0 d-flex align-items-center justify-content-center gap-2 py-2"
                    style={{
                      borderRadius: "999px",
                      background: darkMode ? `${neonColor}14` : "rgba(0,0,0,0.05)",
                      color: darkMode ? neonColor : "#111",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.85rem",
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={toggleTheme}
                  >
                    {darkMode ? <Sun size={16} /> : <Moon size={16} />}
                    {darkMode ? "Light" : "Dark"}
                  </motion.button>

                  <motion.button
                    className="flex-fill border-0 py-2"
                    style={{
                      borderRadius: "999px",
                      background: darkMode
                        ? `linear-gradient(135deg, ${neonColor}, ${neonAccent})`
                        : "#111",
                      color: darkMode ? "#000" : "#fff",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavClick("contact")}
                  >
                    Hire_Me()
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}