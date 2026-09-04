import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

const sections = [
  { id: 'home', label: '01. HOME' },
  { id: 'skills', label: '02. SKILLS' },
  { id: 'work', label: '03. WORK' },
  { id: 'experience', label: '04. EXPERIENCE' },
  { id: 'contact', label: '05. CONTACT' }
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Initial theme set
    document.documentElement.classList.remove('dark');

    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = 'home';
      
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 120;
          if (pageYOffset >= offsetTop) {
            newActiveSection = id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <motion.nav 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full md:w-64 md:h-screen p-6 md:p-12 flex flex-row md:flex-col justify-between items-center md:items-start z-50 bg-minimal-bg/90 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border-b-0 border-minimal-border"
    >
      <motion.a 
        href="#home" 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-xl md:text-2xl font-bold tracking-tighter text-minimal-white hover:text-minimal-accent transition-colors flex items-center gap-1"
      >
        Jaswanth<span className="text-minimal-accent animate-pulse">.</span>
      </motion.a>

      <div className="hidden md:flex flex-col gap-6 mt-16">
        {sections.map(({ id, label }) => {
          const isActive = activeSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`text-xs tracking-[0.2em] font-semibold transition-colors duration-300 relative group flex items-center gap-4 ${
                isActive ? 'text-minimal-accent font-bold' : 'text-minimal-text hover:text-minimal-textHover'
              }`}
            >
              <div className="relative w-12 h-[2px] flex items-center">
                {isActive ? (
                  <motion.span
                    layoutId="navIndicator"
                    className="absolute inset-0 bg-minimal-accent rounded-full shadow-[0_0_8px_rgba(20,184,166,0.6)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                ) : (
                  <span className="w-4 h-[1px] bg-minimal-border group-hover:w-8 group-hover:bg-minimal-accent/60 transition-all duration-300" />
                )}
              </div>
              <span>{label}</span>
            </a>
          );
        })}
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <motion.button 
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="text-minimal-text hover:text-minimal-white transition-colors flex items-center gap-3 p-2 rounded-xl bg-minimal-surface/60 border border-minimal-border hover:border-minimal-accent/50 backdrop-blur-sm"
          aria-label="Toggle Theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDark ? 'dark' : 'light'}
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="text-minimal-accent"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </motion.div>
          </AnimatePresence>
          <span className="hidden md:inline text-xs font-semibold tracking-widest uppercase text-minimal-text">
            {isDark ? 'Light' : 'Dark'}
          </span>
        </motion.button>

        <div className="hidden md:block text-[11px] text-minimal-text/50 font-mono">
          &copy; {new Date().getFullYear()} Jaswanth
        </div>
      </div>
    </motion.nav>
  );
}
