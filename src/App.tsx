import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HomePage } from './pages/HomePage';
import { TimelinePage } from './pages/TimelinePage';
import { ContactPage } from './pages/ContactPage';
import { ScrollToTop } from './components/ScrollToTop';

const TechnicalBlueprint = () => (
  <div 
    className="fixed top-0 right-0 w-[600px] h-[300px] pointer-events-none z-[100] opacity-[0.15] overflow-hidden select-none"
    style={{
      maskImage: 'linear-gradient(to bottom left, black 20%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to bottom left, black 20%, transparent 100%)'
    }}
  >
    <svg width="100%" height="100%" viewBox="0 0 600 300" xmlns="http://www.w3.org/2000/svg">
      <defs>
        {/* Uniform Grid Pattern of Small Boxes */}
        <pattern id="blueprint-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#000000" strokeWidth="1" />
        </pattern>
      </defs>
      
      {/* Background Grid */}
      <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
    </svg>
  </div>
);

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
      <TechnicalBlueprint />
    </Router>
  );
}
