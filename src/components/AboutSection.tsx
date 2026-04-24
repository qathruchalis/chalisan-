import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  ChevronDown,
  Sparkles,
  GraduationCap,
  Target,
  CircleDot
} from "lucide-react";

const STATS = [
  {
    icon: CircleDot,
    value: "9000+",
    label: "Biliard"
  },
  {
    icon: Trophy,
    value: "1000+",
    label: "Skor Try Out"
  },
];

const ACCORDION_DATA = [
  {
    id: "intro",
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Perkenalan Diri",
    content:
      "Halo, perkenalkan nama saya Qathrun Nada Chalisan. Saya lahir pada 3 Februari 2010. Saya merupakan anak keempat dari empat bersaudara, atau bisa dibilang saya adalah anak terakhir di keluarga. Semua saudara saya laki-laki. Saat ini, saya bersekolah di MAN 1 Banda Aceh."
  },
  {
    id: "vision",
    icon: <Target className="w-5 h-5" />,
    title: "Visi & Cita-cita",
    content:
      "Saya memiliki cita-cita untuk menjadi seorang pengusaha besar dan sukses. Keinginan tersebut muncul karena saya mengenal seseorang yang telah lebih dulu menjadi pengusaha. Beliau menceritakan bagaimana kehidupan seorang pengusaha dan perjalanan menuju kesuksesan. Dari cerita tersebut, saya merasa termotivasi untuk mengikuti jejaknya dan berusaha meraih masa depan yang lebih baik."
  }
];

export default function AboutSection({ isDark }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden
      bg-gradient-to-br from-[#0b1d13] via-[#183325] to-[#2f4f3b]"
    >
      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span
            className="flex items-center justify-center gap-2
            text-lime-300 font-bold tracking-widest uppercase
            text-sm mb-3"
          >
            <Sparkles size={16} />
             Behind The Name⚡
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Know Me Better
          </h2>

          <div
            className="w-20 h-1 rounded-full mx-auto
            bg-gradient-to-r from-lime-300 to-emerald-400"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">

          {/* FOTO */}
          <div className="space-y-8">
            <div className="relative group">

              {/* GLOW UTAMA */}
              <motion.div
                className="absolute -inset-3 rounded-2xl blur-2xl opacity-90
                bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* GLOW LAYER 2 */}
              <motion.div
                className="absolute -inset-4 rounded-2xl blur-3xl opacity-50
                bg-green-300"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              />

              {/* FRAME FOTO */}
              <div className="relative p-[3px] rounded-2xl bg-white/10">
                <div
                  className="aspect-square rounded-2xl overflow-hidden
                  bg-white/10 backdrop-blur-sm"
                >
                  <img
                    src="/mobil.jpg"
                    alt="profile"
                    className="w-full h-full object-cover
                    group-hover:scale-110 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 rounded-xl text-center
                  backdrop-blur-md transition
                  bg-white/10 text-white hover:bg-white/20"
                >
                  <stat.icon
                    className="h-6 w-6 mx-auto mb-2 text-lime-300"
                  />
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-200">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* TEXT */}
          <div
            className="space-y-6 p-6 rounded-2xl shadow-lg
            bg-white/10 backdrop-blur-sm"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Future Entrepreneur 💼
            </h3>

            <p className="text-lg text-gray-200">
              Halo, saya{" "}
              <strong className="text-lime-300">
                Qathrun Nada Chalisan
              </strong>
              , pelajar dari MAN 1 Banda Aceh.
            </p>

            {/* ACCORDION */}
            <div className="space-y-3">
              {ACCORDION_DATA.map((item, idx) => (
                <div
                  key={item.id}
                  className="rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpanded(expanded === idx ? null : idx)
                    }
                    className="w-full flex justify-between items-center
                    p-4 transition
                    bg-white/10 text-white hover:bg-white/20"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lime-300">
                        {item.icon}
                      </span>
                      <span className="font-semibold">
                        {item.title}
                      </span>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        expanded === idx
                          ? "rotate-180 text-lime-300"
                          : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expanded === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 text-gray-200">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}