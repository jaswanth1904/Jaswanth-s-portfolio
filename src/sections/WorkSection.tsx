import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';
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
          className="text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-12"
        >
          03. Work
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-minimal-surface border border-minimal-border rounded-2xl overflow-hidden hover:border-minimal-accent/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <div className="absolute inset-0 bg-minimal-bg/60 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-minimal-white mb-3 group-hover:text-minimal-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-minimal-text line-clamp-2 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 bg-minimal-bg rounded-full text-minimal-textHover">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium px-3 py-1 bg-minimal-bg rounded-full text-minimal-textHover">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-minimal-bg/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-minimal-surface w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col md:flex-row relative max-h-[85vh] border border-minimal-border shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-minimal-bg/50 hover:bg-minimal-accent text-minimal-white rounded-full transition-colors backdrop-blur-sm shadow-md"
              >
                <X size={20} />
              </button>

              <div className="md:w-1/2 bg-minimal-bg relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-full object-cover object-top opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-minimal-surface to-transparent pointer-events-none" />
              </div>

              <div className="md:w-1/2 p-8 md:p-10 flex flex-col overflow-y-auto custom-scrollbar">
                <h3 className="text-2xl md:text-3xl font-bold text-minimal-white mb-4 leading-tight">{selectedProject.title}</h3>
                
                <p className="text-minimal-text leading-relaxed mb-6 text-sm md:text-base">
                  {selectedProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-minimal-white uppercase tracking-wider mb-3">Highlights</h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-3 text-minimal-text text-sm">
                        <span className="text-minimal-accent mt-1 flex-shrink-0">•</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-xs font-medium px-3 py-1 border border-minimal-border rounded-full text-minimal-accent">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a 
                    href={selectedProject.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex flex-1 justify-center items-center gap-2 bg-minimal-accent text-[#ffffff] px-6 py-3 rounded-full font-bold hover:opacity-90 transition-opacity"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    GitHub
                  </a>
                  {selectedProject.live !== '#' && (
                    <a 
                      href={selectedProject.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex flex-1 justify-center items-center gap-2 bg-transparent border-2 border-minimal-accent text-minimal-accent hover:bg-minimal-accent hover:text-[#ffffff] px-6 py-3 rounded-full font-bold transition-colors"
                    >
                      <ExternalLink size={18} />
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
