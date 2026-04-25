import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const projects = [
  {
    title: "Asmalibrasi – Soegi Bornean 🌙",
    description:
      "A song about love that is never simple, yet always feels warm and deep.",
    image: "/asma.jpg",
    color: "from-emerald-400 via-green-500 to-teal-600",
  },
  {
    title: "One in a Million – Aaliyah 💎",
    description:
      "About someone rare, precious, and impossible to replace.",
    image: "/aliyah.jpg",
    color: "from-lime-300 via-emerald-500 to-green-700",
  },
  {
    title: "Risk It All – Bruno Mars 🔥",
    description:
      "The courage to risk everything for love and for your purpose.",
    image: "/bruno.jpg",
    color: "from-emerald-300 via-teal-500 to-cyan-700",
  },
  {
    title: "Everything U Are – Hindia 💖",
    description:
      "Accepting someone completely, with no conditions and no doubts.",
    image: "/hindia.jpg",
    color: "from-green-400 via-emerald-600 to-slate-800",
  },
  {
    title: "Monolog – Pamungkas 🎧",
    description:
      "A quiet conversation with yourself about thoughts, hopes, and silent pain.",
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
      {/* background glow */}
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
          <span className="text-lime-300 tracking-[0.25em] uppercase text-sm font-semibold block mb-3 font-['Poppins']">
            Personal Playlist
          </span>

          <h2
            className="text-4xl md:text-6xl font-bold text-white
            font-['Cinzel'] tracking-wide"
          >
            Midnight Soundtrack 🎵
          </h2>

          <p
            className="text-green-200 mt-4 text-sm md:text-base
            max-w-xl mx-auto leading-relaxed
            font-['Poppins']"
          >
            Songs that stay quiet in the background,
            but somehow tell the loudest stories.
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
                    <h3 className="font-bold text-lg mt-4 text-white font-['Poppins']">
                      {project.title}
                    </h3>

                    <p className="text-sm text-gray-300 mt-2 leading-relaxed font-['Poppins']">
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
            bg-white/10 hover:bg-white/30 text-white
            backdrop-blur border border-white/20"
          >
            <ChevronLeft />
          </Button>

          <Button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2
            bg-white/10 hover:bg-white/30 text-white
            backdrop-blur border border-white/20"
          >
            <ChevronRight />
          </Button>

        </div>
      </div>
    </section>
  );
}