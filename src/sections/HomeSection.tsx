import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal } from 'lucide-react';
import { aboutMe } from '../data/resumeData';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden">
      <div className="max-w-5xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col md:flex-row-reverse gap-12 lg:gap-16 items-center md:items-start mb-8">
            
            {/* Avatar & Floating Badges */}
            <motion.div variants={itemVariants} className="relative group shrink-0">
              {/* Pulsing ambient background ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-minimal-accent via-cyan-500 to-indigo-500 opacity-30 blur-2xl group-hover:opacity-60 transition-opacity duration-700 animate-pulse-glow" />
              
              {/* Spinning gradient border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-minimal-accent to-sky-400 p-[2px] opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-spin-slow">
                <div className="w-full h-full bg-minimal-bg rounded-full" />
              </div>

              <div className="w-44 h-44 md:w-60 md:h-60 rounded-full overflow-hidden relative z-10 border-2 border-minimal-border/80 shadow-2xl">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="https://avatars.githubusercontent.com/jaswanth1904?v=2" 
                  alt={aboutMe.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Floating tech badges */}
              <motion.div 
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -left-4 z-20 bg-minimal-surface/90 backdrop-blur-md border border-minimal-border px-3 py-1.5 rounded-full text-xs font-mono font-medium text-minimal-white flex items-center gap-1.5 shadow-lg"
              >
                <Code2 size={14} className="text-minimal-accent" />
                <span>React / TS</span>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -right-4 z-20 bg-minimal-surface/90 backdrop-blur-md border border-minimal-border px-3 py-1.5 rounded-full text-xs font-mono font-medium text-minimal-white flex items-center gap-1.5 shadow-lg"
              >
                <Terminal size={14} className="text-minimal-accent" />
                <span>Full-Stack</span>
              </motion.div>
            </motion.div>

            {/* Intro Content */}
            <div className="flex-1 text-center md:text-left">
              
              <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-minimal-accent/10 border border-minimal-accent/20 text-minimal-accent text-xs font-mono font-semibold mb-6">
                <Sparkles size={14} />
                <span>Available for opportunities</span>
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-minimal-white mb-6 leading-[1.15]">
                Ampabathuni Venkata Sai Jaswanth
                <span className="block mt-2 text-2xl sm:text-3xl md:text-4xl font-bold animate-shimmer">
                  Web Developer & Software Engineer
                </span>
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-minimal-text text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {aboutMe.summary}
              </motion.p>

              {/* Action Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                <motion.a 
                  href="#work"
                  whileHover={{ scale: 1.03, x: 2 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative inline-flex items-center gap-3 bg-minimal-accent hover:bg-minimal-accentHover text-minimal-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-minimal-accent/25 transition-all"
                >
                  <span>View Work</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a 
                  href="#contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center bg-minimal-surface/60 hover:bg-minimal-surface border border-minimal-border hover:border-minimal-accent/60 text-minimal-white px-8 py-3.5 rounded-full font-bold transition-all backdrop-blur-sm"
                >
                  Contact Me
                </motion.a>
              </motion.div>

            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
