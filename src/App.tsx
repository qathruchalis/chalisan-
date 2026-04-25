import { useState, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="fixed inset-0 z-[99999] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#071a12] via-[#0b2a1e] to-[#123d2b]" />

            {/* GLOW 1 */}
            <motion.div
              animate={{ x: [-300, 300] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute w-[550px] h-[550px] bg-emerald-400/20 blur-[140px] rounded-full"
            />

            {/* GLOW 2 */}
            <motion.div
              animate={{ y: [-120, 120] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[420px] h-[420px] bg-lime-300/10 blur-[130px] rounded-full"
            />

            {/* GLOW 3 */}
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[350px] h-[350px] bg-green-300/10 blur-[120px] rounded-full"
            />

            {/* GRAIN OVERLAY */}
            <div
              className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none"
              style={{
                backgroundImage:
                  "url('https://grainy-gradients.vercel.app/noise.svg')",
              }}
            />

            {/* LOTTIE */}
            <motion.div
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
              }}
              className="w-[260px] h-[260px] z-10"
            >
              <iframe
                src="https://lottie.host/5b62e716-b98e-4ae6-ab85-4d10a024abb8/v7N2WmhyFG.lottie"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </motion.div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-center mt-6 z-10"
            >
              <p className="text-lime-300 uppercase tracking-[0.35em] text-xs md:text-sm font-semibold">
                Welcome To My World
              </p>

              <h1 className="text-white text-3xl md:text-5xl font-black tracking-wide mt-3">
                Qathrun Nada Chalisan
              </h1>

              <p className="text-green-100/80 text-sm md:text-base mt-4 italic">
                Future Entrepreneur • Midnight Dreamer • Keep Moving Forward ✨
              </p>

              {/* PROGRESS BAR */}
              <div className="w-56 h-1.5 bg-white/10 rounded-full overflow-hidden mt-7 mx-auto backdrop-blur-sm">
                <div className="h-full bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500 animate-[loading_2s_infinite]" />
              </div>

              {/* EXTRA STATUS */}
              <p className="text-green-100/70 text-xs md:text-sm mt-6 tracking-wide">
                📍 Banda Aceh • 🎵 Midnight Soundtrack • ✈️ Dream Destinations
              </p>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes loading {
            0% {
              width: 0%;
            }
            50% {
              width: 100%;
            }
            100% {
              width: 0%;
            }
          }
        `}
      </style>
    </QueryClientProvider>
  );
};

export default App;