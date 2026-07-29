import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, User, MessageSquare } from "lucide-react";
import { SiGithub, SiWhatsapp, SiInstagram, SiFacebook, SiX } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { socials } from "../config/socials";

const iconMap = {
  github: SiGithub,
  linkedin: FaLinkedin,
  whatsapp: SiWhatsapp,
  instagram: SiInstagram,
  facebook: SiFacebook,
  twitter: SiX,
};

const YOUR_EMAIL = "your.email@example.com";

export default function Contact() {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

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
  const inputBg = darkMode ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.9)";

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    );

    window.location.href = `mailto:${YOUR_EMAIL}?subject=${subject}&body=${body}`;

    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-5" style={{ scrollMarginTop: "90px" }}>
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
            <Mail size={14} />
            Contact
          </span>

          <h2
            className="fw-bold mb-2"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)" }}
          >
            Let's Work Together
          </h2>

          <p className={`${sectionSubtext} mx-auto`} style={{ maxWidth: "560px" }}>
            Have a project in mind or just want to say hi? My inbox is always
            open.
          </p>
        </motion.div>

        <div className="row g-4">
          {/* Left: Info + Socials */}
          <motion.div
            className="col-lg-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="p-4 h-100"
              style={{
                borderRadius: "20px",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: darkMode
                      ? "rgba(99,102,241,0.15)"
                      : "rgba(79,70,229,0.1)",
                  }}
                >
                  <Mail size={18} style={{ color: darkMode ? "#a5b4fc" : "#4f46e5" }} />
                </div>
                <div>
                  <div className={`fw-semibold ${darkMode ? "text-white" : "text-dark"}`}>
                    Email
                  </div>
                  <a
                    href={`mailto:${YOUR_EMAIL}`}
                    className={sectionSubtext}
                    style={{ textDecoration: "none", fontSize: "0.9rem" }}
                  >
                    {YOUR_EMAIL}
                  </a>
                </div>
              </div>

              <div className="d-flex align-items-start gap-3 mb-4">
                <div
                  className="d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: darkMode
                      ? "rgba(99,102,241,0.15)"
                      : "rgba(79,70,229,0.1)",
                  }}
                >
                  <MapPin size={18} style={{ color: darkMode ? "#a5b4fc" : "#4f46e5" }} />
                </div>
                <div>
                  <div className={`fw-semibold ${darkMode ? "text-white" : "text-dark"}`}>
                    Location
                  </div>
                  <div className={sectionSubtext} style={{ fontSize: "0.9rem" }}>
                    Sri Lanka
                  </div>
                </div>
              </div>

              <hr
                style={{
                  borderColor: cardBorder,
                  opacity: 1,
                  margin: "1.5rem 0",
                }}
              />

              <div
                className={`fw-semibold mb-3 ${darkMode ? "text-white" : "text-dark"}`}
                style={{ fontSize: "0.9rem" }}
              >
                Find me on
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
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        background: darkMode
                          ? "rgba(255,255,255,0.06)"
                          : "rgba(0,0,0,0.04)",
                        color: darkMode ? "#fff" : "#111",
                        textDecoration: "none",
                      }}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            className="col-lg-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-4"
              style={{
                borderRadius: "20px",
                background: cardBg,
                border: `1px solid ${cardBorder}`,
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="mb-3">
                <label
                  htmlFor="name"
                  className={`form-label d-flex align-items-center gap-2 fw-medium ${
                    darkMode ? "text-white-50" : "text-secondary"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  <User size={14} /> Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={darkMode ? "text-white" : "text-dark"}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: `1px solid ${cardBorder}`,
                    background: inputBg,
                    outline: "none",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="email"
                  className={`form-label d-flex align-items-center gap-2 fw-medium ${
                    darkMode ? "text-white-50" : "text-secondary"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  <Mail size={14} /> Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={darkMode ? "text-white" : "text-dark"}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: `1px solid ${cardBorder}`,
                    background: inputBg,
                    outline: "none",
                    fontSize: "0.95rem",
                  }}
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={`form-label d-flex align-items-center gap-2 fw-medium ${
                    darkMode ? "text-white-50" : "text-secondary"
                  }`}
                  style={{ fontSize: "0.85rem" }}
                >
                  <MessageSquare size={14} /> Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className={darkMode ? "text-white" : "text-dark"}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    border: `1px solid ${cardBorder}`,
                    background: inputBg,
                    outline: "none",
                    fontSize: "0.95rem",
                    resize: "vertical",
                  }}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
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
                <Send size={16} />
                Send Message
              </motion.button>

              {sent && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 mb-0"
                  style={{ fontSize: "0.85rem", color: "#22c55e" }}
                >
                  Opening your email client...
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}