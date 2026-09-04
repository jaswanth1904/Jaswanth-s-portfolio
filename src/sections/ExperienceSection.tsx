import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';
import { experience, aboutMe } from '../data/resumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-24 border-t border-minimal-border/50 relative">
      <div className="w-full">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-16 flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-minimal-accent rounded-full inline-block" />
          04. Experience & Education
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Experience Column */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-minimal-white mb-8 pb-4 border-b border-minimal-border/70 flex items-center gap-3"
            >
              <Briefcase size={22} className="text-minimal-accent" />
              <span>Work Experience</span>
            </motion.h3>

            <div className="space-y-10 relative">
              {experience.map((exp, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ x: 6 }}
                  className="relative pl-8 group bg-minimal-surface/30 p-6 rounded-2xl border border-minimal-border hover:border-minimal-accent/50 transition-all duration-300 backdrop-blur-sm"
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute -left-[9px] top-7 w-4 h-4 rounded-full bg-minimal-bg border-2 border-minimal-accent group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-minimal-accent animate-ping" />
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-minimal-accent font-mono text-xs font-semibold mb-2">
                    <span className="inline-flex items-center gap-1.5 bg-minimal-accent/10 px-3 py-1 rounded-full border border-minimal-accent/20">
                      <Calendar size={12} />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-minimal-white mb-1 group-hover:text-minimal-accent transition-colors">
                    {exp.role}
                  </h4>

                  <div className="text-minimal-text font-medium text-sm mb-4 flex items-center gap-2">
                    <span>{exp.company}</span>
                    <span>•</span>
                    <span className="inline-flex items-center gap-1 text-xs text-minimal-text/80">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.points.map((point, i) => (
                      <li key={i} className="text-minimal-text text-xs md:text-sm leading-relaxed flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 bg-minimal-accent/70 rounded-full mt-2 shrink-0 group-hover:bg-minimal-accent" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl font-bold text-minimal-white mb-8 pb-4 border-b border-minimal-border/70 flex items-center gap-3"
            >
              <GraduationCap size={24} className="text-minimal-accent" />
              <span>Education</span>
            </motion.h3>

            <motion.div 
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ x: 6 }}
              className="relative pl-8 group bg-minimal-surface/30 p-6 rounded-2xl border border-minimal-border hover:border-minimal-accent/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* Glowing Node Dot */}
              <div className="absolute -left-[9px] top-7 w-4 h-4 rounded-full bg-minimal-bg border-2 border-minimal-accent group-hover:scale-125 transition-transform duration-300 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-minimal-accent animate-ping" />
              </div>

              <div className="flex flex-wrap items-center gap-3 text-minimal-accent font-mono text-xs font-semibold mb-2">
                <span className="inline-flex items-center gap-1.5 bg-minimal-accent/10 px-3 py-1 rounded-full border border-minimal-accent/20">
                  <Calendar size={12} />
                  {aboutMe.education.year}
                </span>
              </div>

              <h4 className="text-lg md:text-xl font-bold text-minimal-white mb-1 group-hover:text-minimal-accent transition-colors">
                {aboutMe.education.degree}
              </h4>

              <div className="text-minimal-text font-medium text-sm mb-4">
                {aboutMe.education.college}
              </div>

              <div className="inline-block bg-minimal-surface border border-minimal-border/80 px-4 py-2 rounded-xl text-xs text-minimal-text">
                <span className="font-semibold text-minimal-white">GPA / Grade:</span>{' '}
                <span className="text-minimal-accent font-mono font-bold">{aboutMe.education.gpa}</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
