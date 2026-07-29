import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Code2, Download } from "lucide-react";
import myimage from "../assets/far 3.jpg";

const stats = [
  { label: "Years Learning", value: "3+" },
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
];

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "3rd Year Undergraduate, Health Information & Communication Technology (HICT)",
  },
  {
    icon: Code2,
    title: "Focus",
    text: "Full-stack web development — React, Node.js, and database-driven applications",
  },
  {
    icon: MapPin,
    title: "Based In",
    text: "Sri Lanka",
  },
];

export default function About() {
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

  const cardBg = darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)";
  const cardBorder = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const sectionSubtext = darkMode ? "text-white-50" : "text-secondary";

  return (
    <section
      id="about"
      className="py-5"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container py-5">
        {/* Section heading */}
        <motion.div
          className="text-center mb-5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span
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
            <GraduationCap size={14} />
            About Me
          </span>

          <h2
            className="fw-bold mb-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Get to Know Me
          </h2>
        </motion.div>

        <div className="row align-items-center g-5">
          {/* Left: Image */}
          <motion.div
            className="col-lg-5 text-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="mx-auto position-relative"
              style={{
                width: "min(320px, 80%)",
                aspectRatio: "1 / 1",
                borderRadius: "24px",
                overflow: "hidden",
                border: `1px solid ${cardBorder}`,
                background: darkMode
                  ? "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(236,72,153,0.15))"
                  : "linear-gradient(135deg, rgba(79,70,229,0.1), rgba(219,39,119,0.1))",
                boxShadow: darkMode
                  ? "0 20px 50px rgba(0,0,0,0.4)"
                  : "0 20px 50px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={myimage}
                alt="Profile"
                className="w-100 h-100"
                style={{ objectFit: "cover" }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="fw-bold mb-3">
              Hi, I'm a Web Developer & HICT Undergraduate
            </h3>

            <p className={`${sectionSubtext} mb-3`} style={{ lineHeight: 1.75 }}>
              I'm currently pursuing a degree in Health Information &
              Communication Technology, where I combine my interest in
              healthcare systems with modern web development. I enjoy building
              full-stack applications — from responsive frontends with React
              to robust backends with Node.js and databases like MongoDB and
              MySQL.
            </p>

            <p className={`${sectionSubtext} mb-4`} style={{ lineHeight: 1.75 }}>
              Over the past few years I've built and deployed several
              real-world projects, worked with CI/CD pipelines, and
              continuously sharpened my skills across the stack. I'm always
              looking for new challenges to grow as a developer.
            </p>

            {/* Highlight cards */}
            <div className="row g-3 mb-4">
              {highlights.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="col-md-4">
                    <motion.div
                      className="p-3 h-100"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      style={{
                        borderRadius: "14px",
                        background: cardBg,
                        border: `1px solid ${cardBorder}`,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                      }}
                    >
                      <Icon
                        size={20}
                        style={{ color: darkMode ? "#a5b4fc" : "#4f46e5" }}
                        className="mb-2"
                      />
                      <div
                        className={`fw-semibold mb-1 ${
                          darkMode ? "text-white" : "text-dark"
                        }`}
                        style={{ fontSize: "0.9rem" }}
                      >
                        {item.title}
                      </div>
                      <div
                        className={sectionSubtext}
                        style={{ fontSize: "0.8rem", lineHeight: 1.5 }}
                      >
                        {item.text}
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="row g-3 mb-4">
              {stats.map((stat, i) => (
                <div key={stat.label} className="col-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <div
                      className="fw-bold"
                      style={{
                        fontSize: "1.6rem",
                        backgroundImage:
                          "linear-gradient(90deg, #4f46e5, #db2777)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className={sectionSubtext}
                      style={{ fontSize: "0.78rem" }}
                    >
                      {stat.label}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
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
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}