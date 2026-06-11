import { useEffect, useState } from 'react';
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
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Initial theme set
    document.documentElement.classList.add('dark');

    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = 'home';
      
      sections.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 100;
          if (pageYOffset >= offsetTop) {
            newActiveSection = id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 w-full md:w-64 md:h-screen p-8 md:p-12 flex flex-row md:flex-col justify-between items-center md:items-start z-50 bg-minimal-bg/90 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none border-b md:border-b-0 border-minimal-border">
      <a href="/" className="text-xl md:text-2xl font-bold tracking-tighter text-minimal-white hover:opacity-80 transition-opacity">
        Jaswanth<span className="text-minimal-accent">.</span>
      </a>

      <div className="hidden md:flex flex-col gap-6 mt-20">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`text-xs tracking-[0.2em] font-semibold transition-all duration-300 relative group flex items-center gap-4 ${
              activeSection === id ? 'text-minimal-accent' : 'text-minimal-text hover:text-minimal-textHover'
            }`}
          >
            <span className={`h-[1px] bg-minimal-accent transition-all duration-300 ${activeSection === id ? 'w-12' : 'w-4 group-hover:w-8'}`}></span>
            {label}
          </a>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-4">
        <button 
          onClick={toggleTheme}
          className="text-minimal-text hover:text-minimal-white transition-colors flex items-center gap-3"
          aria-label="Toggle Theme"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
          <span className="hidden md:inline text-xs font-semibold tracking-widest uppercase">{isDark ? 'Light' : 'Dark'}</span>
        </button>
        <div className="hidden md:block text-xs text-minimal-text/50">
          &copy; {new Date().getFullYear()} Jaswanth
        </div>
      </div>
    </nav>
  );
}
