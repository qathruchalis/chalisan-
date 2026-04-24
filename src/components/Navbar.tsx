import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'The Beginning', href: '#home' },
    { label: 'Behind The Name⚡', href: '#about' },
    { label: 'Academic Path🔥', href: '#skills' },
    { label: 'Midnight Soundtrack🎵', href: '#projects' },
    { label: 'Let’s Connect', href: 'https://wa.me/6285373819128' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(href, '_blank');
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? `backdrop-blur-xl
               bg-gradient-to-r
               from-[#0b1d13]/95 via-[#163020]/95 to-[#1f3b2c]/95
               border-b border-emerald-300/10
               shadow-[0_6px_30px_rgba(16,185,129,0.15)]`
            : `backdrop-blur-xl
               bg-gradient-to-r
               from-[#f7fee7]/95 via-[#dcfce7]/95 to-[#bbf7d0]/95
               border-b border-lime-300/30
               shadow-[0_6px_30px_rgba(132,204,22,0.12)]`
          : isDark
          ? `bg-gradient-to-r
             from-[#0b1d13]/80 via-[#163020]/80 to-[#1f3b2c]/80`
          : `bg-gradient-to-r
             from-[#f7fee7]/80 via-[#dcfce7]/80 to-[#bbf7d0]/80`
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">

          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            whileHover={{ scale: 1.05 }}
            className={`text-xl md:text-2xl font-bold cursor-pointer ${
              isDark
                ? 'bg-gradient-to-r from-lime-200 via-emerald-300 to-green-400 bg-clip-text text-transparent'
                : 'bg-gradient-to-r from-[#1f2937] via-[#14532d] to-[#166534] bg-clip-text text-transparent'
            }`}
          >
            Chalisan
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                whileHover={{ y: -2 }}
                className={`relative group font-medium transition-all ${
                  isDark
                    ? 'text-white/85 hover:text-lime-200'
                    : 'text-slate-800 hover:text-green-700'
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                    isDark ? 'bg-lime-300' : 'bg-green-700'
                  }`}
                />
              </motion.a>
            ))}

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className={`rounded-full ${
                isDark
                  ? 'text-white hover:bg-emerald-400/10'
                  : 'text-slate-800 hover:bg-lime-200/40'
              }`}
            >
              <AnimatePresence mode="wait">
                {isDark ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <Sun className="h-5 w-5 text-lime-200" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Moon className="h-5 w-5 text-green-700" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDark ? (
                <Sun className="h-5 w-5 text-lime-200" />
              ) : (
                <Moon className="h-5 w-5 text-green-700" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-white' : 'text-slate-800'}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden backdrop-blur-xl ${
              isDark
                ? 'bg-gradient-to-b from-[#0b1d13]/95 to-[#1f3b2c]/95 border-t border-emerald-300/10'
                : 'bg-gradient-to-b from-[#f7fee7]/95 to-[#bbf7d0]/95 border-t border-lime-300/30'
            }`}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className={`transition ${
                    isDark
                      ? 'text-white/85 hover:text-lime-200'
                      : 'text-slate-800 hover:text-green-700'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
