import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import ThreeScene from "./ThreeScene";

export default function HeroSection({ isDark }) {
  const glowRef = useRef(null);
  const canvasRef = useRef(null);
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const move = (e) => {
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }

      setTrail((prev) => [
        ...prev.slice(-15),
        {
          x: e.clientX,
          y: e.clientY,
          id: Date.now() + Math.random(),
        },
      ]);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-gradient-to-br from-[#0b1d13] via-[#1f3b2c] to-[#3f5f45]"
    >
      <canvas ref={canvasRef} className="absolute inset-0 -z-20" />

      {/* CURSOR GLOW */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed w-[420px] h-[420px] rounded-full
        bg-gradient-to-br from-lime-200/35 via-emerald-300/35 to-green-400/35
        blur-[140px] -translate-x-1/2 -translate-y-1/2 z-10"
      />

      {/* MOUSE TRAIL */}
      {trail.map((t) => (
        <motion.div
          key={t.id}
          className="pointer-events-none fixed w-2 h-2 rounded-full blur-[2px] z-20 bg-white/80"
          style={{ left: t.x, top: t.y }}
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 2.8 }}
          transition={{ duration: 0.7 }}
        />
      ))}

      <ThreeScene />

      <div className="container mx-auto px-4 relative z-30">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">

          {/* TEXT LEFT */}
          <div className="text-center md:text-left order-2 md:order-1">

            {/* BADGE */}
            <span
              className="inline-block px-5 py-2 rounded-full
              bg-gradient-to-r from-lime-300 to-emerald-400
              text-black text-xs font-bold mb-6 tracking-[0.2em]
              font-['Poppins']"
            >
              FUTURE IN PROGRESS ✦
            </span>

            {/* TITLE */}
            <h1
              className="text-4xl md:text-6xl font-bold leading-tight text-white
              font-['Cinzel']"
            >
              Journey Starts
            </h1>

            {/* NAME */}
            <h2
              className="mt-3 text-3xl md:text-5xl font-bold whitespace-nowrap
              bg-gradient-to-r from-lime-200 via-emerald-300 to-green-400
              bg-clip-text text-transparent
              font-['Cinzel'] tracking-wide"
            >
              Qathrun Nada Chalisan
            </h2>

            {/* PARAGRAPH */}
            <p
              className="mt-8 max-w-xl text-lg leading-relaxed
              text-green-100 font-medium
              font-['Poppins']"
            >
              🍁 Tetap semangat, jangan berhenti di tengah jalan.
              Tidak ada kehidupan tanpa masalah, dan tidak ada
              perjuangan tanpa rasa lelah.
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-10 justify-center md:justify-start">
              <button
                onClick={scrollToAbout}
                className="px-8 py-3 rounded-full text-black font-semibold
                bg-gradient-to-r from-lime-300 to-emerald-400
                hover:scale-105 transition
                font-['Poppins']"
              >
                🚀 Explore
              </button>

              <a
                href="#contact"
                className="px-8 py-3 rounded-full font-semibold
                text-white bg-white/10 border border-white/30
                hover:bg-white/20 transition
                font-['Poppins']"
              >
                ✉️ Contact
              </a>
            </div>
          </div>

          {/* FOTO RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center md:justify-end order-1 md:order-2"
          >
            <div className="relative group md:mr-[-10px] md:mt-8">

              {/* GLOW UTAMA */}
              <div
                className="absolute -inset-6 rounded-full blur-[110px] opacity-100
                bg-gradient-to-r from-lime-200 via-emerald-300 to-green-500"
              />

              {/* GLOW LAYER 2 */}
              <div
                className="absolute -inset-8 rounded-full blur-[140px] opacity-70
                bg-emerald-300"
              />

              {/* FRAME BULAT */}
              <div
                className="relative rounded-full p-[5px]
                bg-gradient-to-r from-lime-200 via-emerald-300 to-green-400"
              >
                <div
                  className="w-[280px] h-[280px] md:w-[380px] md:h-[380px]
                  rounded-full overflow-hidden
                  bg-white/10 backdrop-blur-xl border border-white/20"
                >
                  <img
                    src="/helm.jpg"
                    alt="profile"
                    className="w-full h-full
                    object-cover
                    object-top
                    scale-[1.18]
                    translate-y-8
                    group-hover:scale-[1.23]
                    transition duration-700"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
        p-3 rounded-full bg-white/10 border border-white/20
        backdrop-blur-md z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <ArrowDown className="text-lime-200 w-6 h-6" />
      </motion.button>
    </section>
  );
}