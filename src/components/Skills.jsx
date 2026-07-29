import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiPostman,
  SiTypescript,
} from "react-icons/si";
import { Code2 } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
      { name: "Express.js", icon: SiExpress, color: "#000000" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    ],
  },
];

export default function Skills() {
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
      id="skills"
      className="py-5"
      style={{ scrollMarginTop: "90px" }}
    >
      <div className="container py-5">
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
            <Code2 size={14} />
            Skills
          </span>

          <h2
            className="fw-bold mb-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Technologies I Work With
          </h2>

          <p className={`${sectionSubtext} mx-auto`} style={{ maxWidth: "560px" }}>
            A collection of tools and technologies I use to design, build, and
            ship full-stack web applications.
          </p>
        </motion.div>

        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            className="mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
          >
            <h5
              className={`mb-3 fw-semibold ${
                darkMode ? "text-white-50" : "text-secondary"
              }`}
              style={{
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontSize: "0.85rem",
              }}
            >
              {category.title}
            </h5>

            <div className="row g-3">
              {category.skills.map((skill, i) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="col-6 col-sm-4 col-md-3 col-lg-2"
                  >
                    <motion.div
                      className="d-flex flex-column align-items-center justify-content-center text-center p-3 h-100"
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ duration: 0.35, delay: i * 0.04 }}
                      whileHover={{
                        y: -6,
                        boxShadow: darkMode
                          ? "0 12px 28px rgba(0,0,0,0.4)"
                          : "0 12px 28px rgba(0,0,0,0.1)",
                      }}
                      style={{
                        borderRadius: "16px",
                        background: cardBg,
                        border: `1px solid ${cardBorder}`,
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        transition: "box-shadow 0.25s ease",
                        cursor: "default",
                      }}
                    >
                      <Icon
                        size={34}
                        style={{
                          color: darkMode && skill.color === "#000000"
                            ? "#ffffff"
                            : skill.color,
                          marginBottom: "10px",
                        }}
                      />
                      <span
                        className={`fw-medium ${
                          darkMode ? "text-white" : "text-dark"
                        }`}
                        style={{ fontSize: "0.85rem" }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}