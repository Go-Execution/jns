import { useEffect, useRef, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { ReactLenis, useLenis, type LenisRef } from 'lenis/react';
import {
  cancelFrame,
  frame,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
} from 'framer-motion';

function SamePageHashHandler() {
  const { pathname, hash } = useLocation();
  const prevPathRef = useRef(pathname);
  const lenis = useLenis();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const isSamePath = prevPathRef.current === pathname;
    prevPathRef.current = pathname;

    // Cross-page transitions are handled by AnimatePresence onExitComplete
    // so exiting pages do not snap to scrollY=0 before fading out.
    if (!isSamePath && !shouldReduceMotion) return;

    if (hash) {
      const targetId = hash.replace('#', '');
      const timer = window.setTimeout(() => {
        const el = document.getElementById(targetId);
        if (!el) return;
        if (lenis && !shouldReduceMotion) {
          lenis.scrollTo(el, { offset: -96, duration: 0.9 });
        } else {
          el.scrollIntoView({ behavior: shouldReduceMotion ? 'auto' : 'smooth', block: 'start' });
        }
      }, 60);
      return () => window.clearTimeout(timer);
    }

    if (shouldReduceMotion) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, lenis, shouldReduceMotion]);

  return null;
}

function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 32,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary origin-left z-[60] pointer-events-none"
      style={{ scaleX }}
    />
  );
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    function update(data: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(data.timestamp);
    }

    frame.update(update, true);
    return () => cancelFrame(update);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion) {
    return (
      <>
        <SamePageHashHandler />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        autoRaf: false,
        lerp: 0.085,
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.4,
        anchors: { offset: -96 },
        stopInertiaOnNavigate: true,
      }}
    >
      <ScrollProgressBar />
      <SamePageHashHandler />
      {children}
    </ReactLenis>
  );
}
