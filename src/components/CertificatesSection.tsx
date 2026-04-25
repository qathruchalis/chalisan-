import { useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";

const destinations = [
  {
    title: "🗽 United States",
    image: "/Hollywood.jpg",
    description:
      "A country full of opportunities, bright cities, and endless ambition.",
    reason: "I want to experience a fast-paced and ambitious lifestyle.",
    badge: "🌟 Dream Destination",
    color: "from-amber-300 via-orange-400 to-yellow-400",
  },
  {
    title: "🏔️ Switzerland",
    image: "/alpen.jpg",
    description:
      "Silent mountains, crystal air, and landscapes that feel unreal.",
    reason: "Peaceful places help me reflect and recharge my mind.",
    badge: "❄️ Must Visit",
    color: "from-sky-300 via-cyan-400 to-blue-500",
  },
  {
    title: "🎈 Turkey",
    image: "/balon.jpg",
    description:
      "Hot air balloons, golden skies, and magical morning views.",
    reason: "The atmosphere feels warm, calm, and unforgettable.",
    badge: "🎈 Bucket List",
    color: "from-orange-300 via-amber-400 to-yellow-300",
  },
  {
    title: "🌸 Japan",
    image: "/fuji.jpg",
    description:
      "A perfect blend of modern cities, tradition, and peaceful nature.",
    reason: "Everything feels clean, organized, and aesthetically beautiful.",
    badge: "🌸 Future Trip",
    color: "from-pink-300 via-rose-400 to-red-400",
  },
];

export default function CertificatesSection() {
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
    }, 3000);

    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section
      id="certificates"
      className="relative py-20 overflow-hidden
      bg-gradient-to-br from-[#0b1d13] via-[#102a1f] to-[#1f3b2c]"
    >
      {/* glow background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-[400px] h-[400px] bg-emerald-500 blur-[140px] top-[-150px] left-[-150px]" />
        <div className="absolute w-[350px] h-[350px] bg-lime-400 blur-[140px] bottom-[-150px] right-[-150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Next Stop ✈️
          </h2>

          <p className="text-green-200 mt-3 text-sm md:text-base">
            Places I dream of visiting one day
          </p>
        </motion.div>

        {/* CAROUSEL */}
        <div className="relative max-w-6xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">

              {destinations.map((place, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                >
                  <div className="p-5 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 hover:-translate-y-3 transition-all duration-500">

                    {/* CARD */}
                    <div className="relative group">

                      {/* glow */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${place.color}
                        blur-2xl opacity-40 group-hover:opacity-80
                        scale-90 group-hover:scale-110 transition duration-500`}
                      />

                      {/* badge */}
                      <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full text-xs font-medium bg-black/40 backdrop-blur-md text-white border border-white/10">
                        {place.badge}
                      </div>

                      {/* image */}
                      <div
                        className={`relative p-[2px] rounded-3xl bg-gradient-to-r ${place.color}`}
                      >
                        <div className="aspect-square w-full rounded-3xl overflow-hidden bg-black">
                          <img
                            src={place.image}
                            alt={place.title}
                            className="w-full h-full object-cover object-center
                            group-hover:scale-110 transition duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* TEXT */}
                    <h3 className="font-bold text-lg mt-4 text-white">
                      {place.title}
                    </h3>

                    <p className="text-sm text-green-100/80 mt-2 leading-relaxed">
                      {place.description}
                    </p>

                    <p className="text-sm text-lime-200 mt-3 italic">
                      Why? {place.reason}
                    </p>

                  </div>
                </div>
              ))}

            </div>
          </div>

          {/* BUTTONS */}
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