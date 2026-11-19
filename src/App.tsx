import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, useReducedMotion } from 'framer-motion';
import { useLenis } from 'lenis/react';
import { SmoothScrollProvider } from '@/components/motion/SmoothScrollProvider';
import { PageTransition } from '@/components/motion/ScrollPrimitives';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { HomePage } from '@/pages/HomePage';

const ServicesPage = lazy(() =>
  import('@/pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const FleetPage = lazy(() =>
  import('@/pages/FleetPage').then((m) => ({ default: m.FleetPage }))
);
const ServiceAreaPage = lazy(() =>
  import('@/pages/ServiceAreaPage').then((m) => ({ default: m.ServiceAreaPage }))
);
const AboutPage = lazy(() =>
  import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const CareersPage = lazy(() =>
  import('@/pages/CareersPage').then((m) => ({ default: m.CareersPage }))
);
const QuotePage = lazy(() =>
  import('@/pages/QuotePage').then((m) => ({ default: m.QuotePage }))
);
const PrivacyPage = lazy(() =>
  import('@/pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);
const NotFoundPage = lazy(() =>
  import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage }))
);

function AnimatedRoutes() {
  const location = useLocation();
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  const handleExitComplete = () => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      window.requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (!el) return;
        if (lenis && !shouldReduceMotion) {
          lenis.scrollTo(el, { offset: -96, duration: 0.9 });
        } else {
          el.scrollIntoView({
            behavior: shouldReduceMotion ? 'auto' : 'smooth',
            block: 'start',
          });
        }
      });
      return;
    }

    if (lenis && !shouldReduceMotion) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      <PageTransition key={location.pathname}>
        <Suspense fallback={<div className="min-h-[75vh]" />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/service-area" element={<ServiceAreaPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
}

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <SmoothScrollProvider>
          <div className="min-h-screen flex flex-col selection:bg-primary/30">
            <SiteHeader />
            <main className="flex-1">
              <AnimatedRoutes />
            </main>
            <SiteFooter />
          </div>
        </SmoothScrollProvider>
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
