import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    title: "Asmalibrasi – Soegi Bornean 🌙",
    description:
      "Lagu tentang cinta yang tidak sederhana, tapi terasa hangat dan dalam.",
    image: "/asma.jpg",
    color: "from-emerald-400 via-green-500 to-teal-600",
  },
  {
    title: "One in a Million – Aaliyah 💎",
    description:
      "Seseorang yang sangat langka, berharga, dan tidak tergantikan.",
    image: "/aliyah.jpg",
    color: "from-lime-300 via-emerald-500 to-green-700",
  },
  {
    title: "Risk It All – Bruno Mars 🔥",
    description:
      "Tentang keberanian mengambil risiko demi cinta dan tujuan hidup.",
    image: "/bruno.jpg",
    color: "from-emerald-300 via-teal-500 to-cyan-700",
  },
  {
    title: "Everything U Are – Hindia 💖",
    description:
      "Menerima seseorang sepenuhnya, tanpa syarat dan tanpa tapi.",
    image: "/hindia.jpg",
    color: "from-green-400 via-emerald-600 to-slate-800",
  },
  {
    title: "Monolog – Pamungkas 🎧",
    description:
      "Percakapan dengan diri sendiri tentang pikiran, harapan, dan luka yang diam.",
    image: "/monolog.jpg",
    color: "from-lime-400 via-green-600 to-emerald-900",
  },
];

export default function ProjectsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="projects"
      className="py-24 overflow-hidden relative
      bg-gradient-to-br from-[#0b1d13] via-[#102a1f] to-[#1f3b2c]"
    >
      {/* soft background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500 blur-[120px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[350px] h-[350px] bg-lime-400 blur-[120px] bottom-[-150px] right-[-150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Soundtrack Hidup 🎵
          </h2>
          <p className="text-green-200 mt-3 text-sm md:text-base">
            Lagu yang jadi bagian dari perjalanan cerita
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">

              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div
                    className="p-5 rounded-2xl
                    bg-white/10 backdrop-blur-lg
                    border border-white/10
                    hover:-translate-y-2 transition-all duration-500"
                  >

                    {/* IMAGE */}
                    <div className="relative group">

                      {/* glow */}
                      <div
                        className={`absolute inset-0 rounded-xl bg-gradient-to-r ${project.color}
                        blur-2xl opacity-40 group-hover:opacity-70
                        scale-95 group-hover:scale-110 transition duration-500`}
                      />

                      <div
                        className={`relative p-[2px] rounded-xl bg-gradient-to-r ${project.color}`}
                      >
                        <div className="aspect-[2/3] w-full rounded-xl overflow-hidden bg-black">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover object-center
                            group-hover:scale-110 transition duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <h3 className="font-bold text-lg mt-4 text-white">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-300 mt-2">
                      {project.description}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* NAV BUTTONS */}
          <Button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2
            bg-white/10 hover:bg-white/30 text-white backdrop-blur border border-white/20"
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2
            bg-white/10 hover:bg-white/30 text-white backdrop-blur border border-white/20"
          >
            <ChevronRight />
          </Button>

        </div>
      </div>
    </section>
  );
}