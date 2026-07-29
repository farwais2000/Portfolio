import { motion } from "framer-motion";

export default function AnimatedBackground({
  blob1Position = { top: "-10%", left: "5%" },
  blob2Position = { bottom: "-15%", right: "0%" },
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {/* subtle dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(79,70,229,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 40%, transparent 85%)",
          opacity: 0.5,
        }}
      />

      {/* slow drifting gradient blob 1 */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          ...blob1Position,
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* slow drifting gradient blob 2 */}
      <motion.div
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 25, -15, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          ...blob2Position,
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(219,39,119,0.07) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />

      {/* faint floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.span
          key={i}
          animate={{
            y: [0, -18, 0],
            opacity: [0.12, 0.35, 0.12],
          }}
          transition={{
            duration: 6 + i * 1.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.6,
          }}
          style={{
            position: "absolute",
            top: `${12 + i * 13}%`,
            left: `${10 + i * 15}%`,
            width: "5px",
            height: "5px",
            borderRadius: "50%",
            background: i % 2 === 0 ? "#4f46e5" : "#db2777",
          }}
        />
      ))}
    </div>
  );
}