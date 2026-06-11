import Navigation from './components/Navigation';
import StarryBackground from './components/layout/StarryBackground';
import CursorTrail from './components/CursorTrail';
import HomeSection from './sections/HomeSection';
import SkillsSection from './sections/SkillsSection';
import WorkSection from './sections/WorkSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-minimal-bg text-minimal-text font-sans relative selection:bg-minimal-accent/30 selection:text-minimal-white">
      <StarryBackground />
      <CursorTrail />
      
      <Navigation />
      
      <main className="md:ml-64 relative z-10 px-8 md:px-24 max-w-7xl mx-auto">
        <HomeSection />
        <SkillsSection />
        <WorkSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
