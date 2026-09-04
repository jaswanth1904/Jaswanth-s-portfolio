import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Sparkles } from 'lucide-react';
import { projects } from '../data/resumeData';

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="work" className="min-h-screen py-24 flex items-center border-t border-minimal-border/50 relative">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-minimal-accent rounded-full inline-block" />
          03. Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              whileHover={{ y: -8 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-minimal-surface/60 border border-minimal-border rounded-2xl overflow-hidden hover:border-minimal-accent/60 transition-all duration-500 shadow-md hover:shadow-2xl hover:shadow-minimal-accent/10 backdrop-blur-sm"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-minimal-surface via-transparent to-transparent opacity-60 z-10" />
                <div className="absolute top-4 right-4 z-20 bg-minimal-surface/80 backdrop-blur-md px-3 py-1 rounded-full border border-minimal-border text-[11px] font-mono text-minimal-accent flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Sparkles size={12} />
                  <span>Click for details</span>
                </div>
                <motion.img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold text-minimal-white mb-3 group-hover:text-minimal-accent transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ExternalLink size={18} className="text-minimal-text group-hover:text-minimal-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </h3>
                <p className="text-minimal-text line-clamp-2 mb-6 text-sm md:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map(t => (
                    <span key={t} className="text-xs font-mono px-3 py-1 bg-minimal-bg border border-minimal-border/60 rounded-full text-minimal-text font-medium group-hover:border-minimal-accent/30 transition-colors">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs font-mono px-2.5 py-1 bg-minimal-accent/10 text-minimal-accent rounded-full font-medium">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-minimal-bg/80 backdrop-blur-lg"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 10, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-minimal-surface w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col md:flex-row relative max-h-[85vh] border border-minimal-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-minimal-bg/70 hover:bg-minimal-accent text-minimal-white rounded-full transition-colors backdrop-blur-md shadow-md"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              <div className="md:w-1/2 bg-minimal-bg relative min-h-[220px]">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-minimal-surface via-transparent to-transparent pointer-events-none" />
              </div>

              <div className="md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                <h3 className="text-2xl md:text-3xl font-extrabold text-minimal-white mb-4 leading-tight">
                  {selectedProject.title}
                </h3>
                
                <p className="text-minimal-text leading-relaxed mb-6 text-sm">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-minimal-accent uppercase tracking-wider mb-3 flex items-center gap-2">
                    <Sparkles size={14} />
                    <span>Key Highlights</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-minimal-text text-xs leading-relaxed">
                        <span className="text-minimal-accent font-bold mt-0.5">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 border border-minimal-accent/30 bg-minimal-accent/10 rounded-full text-minimal-accent font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex flex-1 justify-center items-center gap-2 bg-minimal-accent hover:bg-minimal-accentHover text-minimal-white px-6 py-3 rounded-full font-bold transition-all shadow-md text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub Code
                  </a>
                  {selectedProject.live !== '#' && (
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex flex-1 justify-center items-center gap-2 border border-minimal-accent text-minimal-accent hover:bg-minimal-accent hover:text-minimal-white px-6 py-3 rounded-full font-bold transition-all text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
