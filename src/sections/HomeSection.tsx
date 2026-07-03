import { motion } from 'framer-motion';
import { aboutMe } from '../data/resumeData';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center md:items-start mb-8">
            <div className="w-40 h-40 md:w-56 md:h-56 shrink-0 relative group">
              <div className="absolute inset-0 rounded-full bg-minimal-accent opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700"></div>
              <img 
                src="https://avatars.githubusercontent.com/jaswanth1904?v=2" 
                alt={aboutMe.name} 
                className="w-full h-full object-cover rounded-full relative z-10 border-2 border-minimal-border"
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <div className="w-full">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-minimal-white mb-6 leading-tight">
                  Ampabathuni Venkata Sai Jaswanth <span className="text-minimal-accent">Web Developer</span>
                </h1>
                
                <p className="text-minimal-text text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                  {aboutMe.summary}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">
                  <a href="#work" className="bg-minimal-accent text-minimal-white px-8 py-3 rounded-full font-bold hover:bg-minimal-accentHover transition-colors border border-transparent">
                    View Work
                  </a>
                  <a href="#contact" className="bg-transparent border border-minimal-border text-minimal-text hover:text-minimal-white hover:border-minimal-accent px-8 py-3 rounded-full font-bold transition-all">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
