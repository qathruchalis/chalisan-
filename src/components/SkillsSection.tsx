import { motion } from "framer-motion";

const skills = {
  ipa: [
    { name: "Matematika", level: 95 },
    { name: "Fisika", level: 95 },
    { name: "Biologi", level: 90 },
    { name: "Kimia", level: 90 },
  ],
  ips: [
    { name: "Sejarah", level: 95 },
    { name: "Sosiologi", level: 90 },
    { name: "Geografi", level: 93 },
    { name: "Ekonomi", level: 90 },
  ],
  olahraga: [
    { name: "Lari", level: 95 },
    { name: "Badminton", level: 90 },
    { name: "Basket", level: 90 },
    { name: "Billiard", level: 95 },
  ],
};

function SkillBar({
  name,
  level,
  delay,
  color,
}: {
  name: string;
  level: number;
  delay: number;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center text-white">
        <span className="font-medium">{name}</span>

        <span className="text-sm font-bold text-lime-300 drop-shadow-[0_0_8px_rgba(163,230,53,0.7)]">
          {level}%
        </span>
      </div>

      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2 }}
          className={`h-full rounded-full ${color}`}
        />
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden
      bg-gradient-to-br from-[#0b1d13] via-[#102a1f] to-[#1f3b2c]"
    >
      {/* soft glow background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[500px] h-[500px] bg-emerald-500 blur-[140px] top-[-200px] left-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-lime-400 blur-[140px] bottom-[-150px] right-[-150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-lime-300 font-medium mb-2 block tracking-widest">
            Growth Path
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Academic & Life Skills
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-lime-300 to-emerald-400 mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          {/* IPA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl
            bg-gradient-to-br from-[#0f2a1d] to-[#1b4332]
            border border-emerald-500/40
            shadow-xl hover:scale-105 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-emerald-400/20 border border-emerald-300">
                <span className="text-2xl">⚗️</span>
              </div>
              <h3 className="text-xl font-bold text-white">IPA</h3>
            </div>

            <div className="space-y-4">
              {skills.ipa.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={index * 0.1}
                  color="bg-gradient-to-r from-emerald-300 to-green-500"
                />
              ))}
            </div>
          </motion.div>

          {/* IPS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="p-6 rounded-2xl
            bg-gradient-to-br from-[#1a1a2e] to-[#2a1b3d]
            border border-purple-500/40
            shadow-xl hover:scale-105 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-purple-400/20 border border-purple-300">
                <span className="text-2xl">💼</span>
              </div>
              <h3 className="text-xl font-bold text-white">IPS</h3>
            </div>

            <div className="space-y-4">
              {skills.ips.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={index * 0.1}
                  color="bg-gradient-to-r from-purple-400 to-fuchsia-500"
                />
              ))}
            </div>
          </motion.div>

          {/* OLAHRAGA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="p-6 rounded-2xl
            bg-gradient-to-br from-[#0f172a] to-[#0b2b3a]
            border border-sky-500/40
            shadow-xl hover:scale-105 transition"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-sky-400/20 border border-sky-300">
                <span className="text-2xl">🏃</span>
              </div>
              <h3 className="text-xl font-bold text-white">Olahraga</h3>
            </div>

            <div className="space-y-4">
              {skills.olahraga.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  {...skill}
                  delay={index * 0.1}
                  color="bg-gradient-to-r from-sky-400 to-cyan-500"
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}