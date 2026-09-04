import { motion } from 'framer-motion';
import { Mail, ArrowRight, Sparkles } from 'lucide-react';
import { aboutMe } from '../data/resumeData';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-24 flex flex-col justify-center border-t border-minimal-border/50 relative">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-xs sm:text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-16 flex items-center gap-3"
      >
        <span className="w-8 h-[2px] bg-minimal-accent rounded-full inline-block" />
        05. Contact & Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center max-w-3xl mx-auto px-4"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-minimal-accent/10 border border-minimal-accent/20 text-minimal-accent text-xs font-mono font-semibold mb-6">
          <Sparkles size={14} />
          <span>What's Next?</span>
        </div>

        <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-minimal-white mb-6 tracking-tight leading-tight">
          Let's Build <br/>
          <span className="animate-shimmer">Something Great</span>
        </h3>
        
        <p className="text-minimal-text text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          Currently open to new opportunities, freelance projects, and tech collaborations. 
          Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        {/* Call to Action Button */}
        <div className="relative inline-block mb-16 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-minimal-accent via-cyan-400 to-indigo-500 opacity-40 blur-lg group-hover:opacity-80 transition-opacity duration-500 animate-pulse-glow" />
          <motion.a 
            href={`mailto:${aboutMe.email}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center gap-3 bg-minimal-accent hover:bg-minimal-accentHover text-minimal-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-minimal-accent/30 transition-colors"
          >
            <span>Say Hello</span>
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center gap-8 border-t border-minimal-border/70 pt-10">
          <motion.a 
            href={aboutMe.github}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="text-minimal-text hover:text-minimal-accent transition-colors p-2.5 bg-minimal-surface/60 border border-minimal-border rounded-xl hover:border-minimal-accent/40"
            aria-label="GitHub Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </motion.a>

          <motion.a 
            href={aboutMe.linkedin}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="text-minimal-text hover:text-[#0077b5] transition-colors p-2.5 bg-minimal-surface/60 border border-minimal-border rounded-xl hover:border-[#0077b5]/40"
            aria-label="LinkedIn Profile"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </motion.a>

          <motion.a 
            href={`mailto:${aboutMe.email}`}
            whileHover={{ scale: 1.2, y: -4 }}
            whileTap={{ scale: 0.9 }}
            className="text-minimal-text hover:text-minimal-accent transition-colors p-2.5 bg-minimal-surface/60 border border-minimal-border rounded-xl hover:border-minimal-accent/40"
            aria-label="Email"
          >
            <Mail size={22} />
          </motion.a>
        </div>

      </motion.div>
    </section>
  );
}
