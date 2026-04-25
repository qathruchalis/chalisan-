import { motion } from "framer-motion";
import { Github, Instagram, Heart } from "lucide-react";

export default function Footer({ isDark }) {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer
      className={`
      py-8 transition-all duration-500

      ${
        isDark
          ? `
          bg-gradient-to-r
          from-[#0b1d13]
          via-[#163020]
          to-[#1f3b2c]
          border-t border-emerald-300/10
          shadow-[0_-10px_30px_rgba(16,185,129,0.12)]
        `
          : `
          bg-gradient-to-r
          from-[#f7fee7]
          via-[#dcfce7]
          to-[#bbf7d0]
          border-t border-lime-300/30
          shadow-[0_-10px_30px_rgba(132,204,22,0.08)]
        `
      }
      `}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`
              flex items-center gap-2 text-sm md:text-base
              font-medium tracking-wide
              ${
                isDark
                  ? "text-white/80"
                  : "text-slate-700"
              }
            `}
          >
            <span>© {currentYear} Crafted with</span>

            <Heart className="h-4 w-4 text-red-400 fill-red-400 animate-pulse" />

            <span
              className={`
                font-semibold tracking-wide
                ${
                  isDark
                    ? `
                    bg-gradient-to-r
                    from-lime-200
                    via-emerald-300
                    to-green-400
                    bg-clip-text text-transparent
                  `
                    : `
                    bg-gradient-to-r
                    from-[#14532d]
                    via-[#166534]
                    to-[#15803d]
                    bg-clip-text text-transparent
                  `
                }
              `}
            >
              Designed by Qathrun Nada Chalisan
            </span>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={`
                  p-2 rounded-full transition-all duration-300 hover:scale-110
                  ${
                    isDark
                      ? `
                      text-white/70
                      hover:text-lime-200
                      hover:bg-emerald-400/10
                    `
                      : `
                      text-slate-700
                      hover:text-green-700
                      hover:bg-lime-200/40
                    `
                  }
                `}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>

        </div>
      </div>
    </footer>
  );
}