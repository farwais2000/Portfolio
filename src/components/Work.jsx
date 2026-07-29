import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, ExternalLink, X, Check } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";

export default function Work() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });
  const [activeProject, setActiveProject] = useState(null);

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

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = activeProject ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeProject]);

  const cardBg = darkMode ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.7)";
  const cardBorder = darkMode ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
  const sectionSubtext = darkMode ? "text-white-50" : "text-secondary";

  return (
    <section id="work" className="py-5" style={{ scrollMarginTop: "90px" }}>
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
            <Briefcase size={14} />
            Work
          </span>

          <h2
            className="fw-bold mb-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Featured Projects
          </h2>

          <p className={`${sectionSubtext} mx-auto`} style={{ maxWidth: "560px" }}>
            A selection of projects I've built — spanning full-stack web apps,
            mobile applications, and everything in between.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="row g-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <motion.div
                className="h-100 d-flex flex-column"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
                style={{
                  borderRadius: "18px",
                  overflow: "hidden",
                  background: cardBg,
                  border: `1px solid ${cardBorder}`,
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  boxShadow: darkMode
                    ? "0 10px 30px rgba(0,0,0,0.3)"
                    : "0 10px 30px rgba(0,0,0,0.06)",
                }}
              >
                {/* Image */}
                <div
                  style={{
                    position: "relative",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    background: darkMode
                      ? "rgba(255,255,255,0.03)"
                      : "rgba(0,0,0,0.02)",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                  <span
                    className="position-absolute top-0 start-0 m-3 px-2 py-1"
                    style={{
                      borderRadius: "999px",
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      background: darkMode
                        ? "rgba(17,17,17,0.75)"
                        : "rgba(255,255,255,0.9)",
                      color: darkMode ? "#fff" : "#111",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-4 d-flex flex-column flex-grow-1">
                  <h5
                    className={`fw-bold mb-2 ${
                      darkMode ? "text-white" : "text-dark"
                    }`}
                  >
                    {project.title}
                  </h5>

                  <p
                    className={sectionSubtext}
                    style={{
                      fontSize: "0.87rem",
                      lineHeight: 1.6,
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="d-flex flex-wrap gap-2 mb-4 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1"
                        style={{
                          borderRadius: "999px",
                          fontSize: "0.72rem",
                          fontWeight: 500,
                          background: darkMode
                            ? "rgba(255,255,255,0.06)"
                            : "rgba(0,0,0,0.04)",
                          color: darkMode ? "#e5e7eb" : "#374151",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="d-flex align-items-center gap-2 mt-auto">
                    <motion.button
                      onClick={() => setActiveProject(project)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`btn btn-sm flex-fill ${
                        darkMode ? "btn-outline-light" : "btn-outline-dark"
                      }`}
                      style={{ borderRadius: "999px", fontSize: "0.82rem" }}
                    >
                      Details
                    </motion.button>

                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="Live demo"
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: darkMode
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.05)",
                        color: darkMode ? "#fff" : "#111",
                        flexShrink: 0,
                      }}
                    >
                      <ExternalLink size={15} />
                    </motion.a>

                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label="GitHub repository"
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "50%",
                        background: darkMode
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.05)",
                        color: darkMode ? "#fff" : "#111",
                        flexShrink: 0,
                      }}
                    >
                      <SiGithub size={15} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project detail modal */}
      <AnimatePresence>
        {activeProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setActiveProject(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(3px)",
                zIndex: 1080,
              }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 320, damping: 30 }}
              className="position-fixed top-50 start-50 translate-middle"
              style={{
                zIndex: 1090,
                width: "min(92vw, 600px)",
                maxHeight: "85vh",
                overflowY: "auto",
                borderRadius: "20px",
                background: darkMode ? "#161616" : "#ffffff",
                border: `1px solid ${cardBorder}`,
                boxShadow: "0 30px 80px rgba(0,0,0,0.4)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  aspectRatio: "16 / 9",
                  overflow: "hidden",
                }}
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.title}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <button
                  onClick={() => setActiveProject(null)}
                  aria-label="Close"
                  className="position-absolute top-0 end-0 m-3 d-flex align-items-center justify-content-center btn p-0"
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: "rgba(17,17,17,0.7)",
                    color: "#fff",
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="p-4">
                <span
                  className="d-inline-block px-2 py-1 mb-2"
                  style={{
                    borderRadius: "999px",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    background: darkMode
                      ? "rgba(99,102,241,0.15)"
                      : "rgba(79,70,229,0.08)",
                    color: darkMode ? "#a5b4fc" : "#4f46e5",
                  }}
                >
                  {activeProject.category}
                </span>

                <h4 className={`fw-bold mb-3 ${darkMode ? "text-white" : "text-dark"}`}>
                  {activeProject.title}
                </h4>

                <p className={sectionSubtext} style={{ lineHeight: 1.7, fontSize: "0.92rem" }}>
                  {activeProject.description}
                </p>

                <div className="d-flex flex-wrap gap-2 my-3">
                  {activeProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1"
                      style={{
                        borderRadius: "999px",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        background: darkMode
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.04)",
                        color: darkMode ? "#e5e7eb" : "#374151",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {activeProject.features?.length > 0 && (
                  <>
                    <div
                      className={`fw-semibold mb-2 ${
                        darkMode ? "text-white" : "text-dark"
                      }`}
                      style={{ fontSize: "0.9rem" }}
                    >
                      Key Features
                    </div>
                    <ul className="list-unstyled mb-4">
                      {activeProject.features.map((feature) => (
                        <li
                          key={feature}
                          className="d-flex align-items-start gap-2 mb-2"
                        >
                          <Check
                            size={16}
                            style={{
                              color: darkMode ? "#a5b4fc" : "#4f46e5",
                              marginTop: "2px",
                              flexShrink: 0,
                            }}
                          />
                          <span
                            className={sectionSubtext}
                            style={{ fontSize: "0.88rem" }}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="d-flex gap-2">
                  <motion.a
                    href={activeProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`btn flex-fill d-flex align-items-center justify-content-center gap-2 ${
                      darkMode ? "btn-light" : "btn-dark"
                    }`}
                    style={{ borderRadius: "999px" }}
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`btn flex-fill d-flex align-items-center justify-content-center gap-2 ${
                      darkMode ? "btn-outline-light" : "btn-outline-dark"
                    }`}
                    style={{ borderRadius: "999px" }}
                  >
                    <SiGithub size={16} />
                    Source Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}