import { motion } from 'framer-motion';
import { experience, aboutMe } from '../data/resumeData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen py-24 border-t border-minimal-border/50">
      
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-16"
      >
        04. Experience & Education
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Experience Column */}
        <div>
          <h3 className="text-2xl font-bold text-minimal-white mb-8 pb-4 border-b border-minimal-border">Experience</h3>
          <div className="space-y-12">
            {experience.map((exp, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-minimal-accent before:rounded-full after:absolute after:left-[3px] after:top-6 after:bottom-[-24px] after:w-[2px] after:bg-minimal-border last:after:hidden"
              >
                <div className="text-minimal-accent font-mono text-sm mb-2">{exp.period}</div>
                <h4 className="text-xl font-bold text-minimal-white mb-1">{exp.role}</h4>
                <div className="text-minimal-textHover font-medium mb-4">{exp.company} • {exp.location}</div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="text-minimal-text text-sm leading-relaxed flex items-start gap-3">
                      <span className="w-1 h-1 bg-minimal-text/50 rounded-full mt-2 shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div>
          <h3 className="text-2xl font-bold text-minimal-white mb-8 pb-4 border-b border-minimal-border">Education</h3>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-minimal-accent before:rounded-full"
          >
            <div className="text-minimal-accent font-mono text-sm mb-2">{aboutMe.education.year}</div>
            <h4 className="text-xl font-bold text-minimal-white mb-1">{aboutMe.education.degree}</h4>
            <div className="text-minimal-textHover font-medium mb-4">{aboutMe.education.college}</div>
            <p className="text-minimal-text text-sm">
              <span className="font-semibold text-minimal-white">GPA:</span> {aboutMe.education.gpa}
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
