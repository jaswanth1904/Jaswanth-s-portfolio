import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';
import { aboutMe } from '../data/resumeData';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-24 flex flex-col justify-center border-t border-minimal-border/50">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-16"
      >
        05. Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto"
      >
        <h3 className="text-5xl md:text-7xl font-bold text-minimal-white mb-8 tracking-tighter">
          Let's Build <br/>
          <span className="text-minimal-accent">Something Great</span>
        </h3>
        
        <p className="text-minimal-text text-base md:text-lg leading-relaxed mb-8 md:mb-12">
          Currently seeking new opportunities to contribute to exciting projects. 
          Whether you have a question, a project idea, or just want to say hi, 
          I'll try my best to get back to you!
        </p>

        <a 
          href={`mailto:${aboutMe.email}`}
          className="inline-flex items-center gap-3 bg-minimal-accent text-[#ffffff] px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg hover:opacity-90 transition-opacity duration-300 mb-8 md:mb-16"
        >
          Say Hello
          <ArrowRight size={20} />
        </a>

        <div className="flex justify-center items-center gap-6 md:gap-8 border-t border-minimal-border pt-8 md:pt-12">
          <a 
            href={aboutMe.github}
            target="_blank"
            rel="noreferrer"
            className="text-minimal-text hover:text-minimal-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a 
            href={aboutMe.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-minimal-text hover:text-[#0077b5] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a 
            href={`mailto:${aboutMe.email}`}
            className="text-minimal-text hover:text-minimal-accent transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
