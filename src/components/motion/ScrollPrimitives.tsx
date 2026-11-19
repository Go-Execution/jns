import { useRef, type ReactNode } from 'react';
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type Variants,
} from 'framer-motion';
import { EASE_OUT } from '@/components/ui/ease';
import { cn } from '@/lib/utils';

const REVEAL_VIEWPORT = {
  once: true,
  amount: 0.12,
} as const;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  immediate?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 22,
  x = 0,
  duration = 0.65,
  immediate = false,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y, x }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration, delay, ease: EASE_OUT }}
        className={cn('will-change-transform', className)}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={{ duration, delay, ease: EASE_OUT }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}

const staggerContainerVariants: Variants = {
  hidden: {},
  visible: (stagger: number = 0.08) => ({
    transition: {
      staggerChildren: stagger,
    },
  }),
};

const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EASE_OUT,
    },
  },
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerContainerVariants}
      custom={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={staggerItemVariants}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}

interface ParallaxMediaProps {
  children: ReactNode;
  overlay?: ReactNode;
  className?: string;
  offsetY?: number;
}

export function ParallaxMedia({
  children,
  overlay,
  className,
  offsetY = 24,
}: ParallaxMediaProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 28,
    mass: 0.4,
  });

  const y = useTransform(smoothProgress, [0, 1], [-offsetY, offsetY]);

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        style={shouldReduceMotion ? undefined : { y }}
        className="absolute -inset-y-10 inset-x-0 will-change-transform"
      >
        {children}
      </motion.div>
      {overlay}
    </div>
  );
}

export function HeroParallaxFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 26,
    mass: 0.4,
  });

  const scale = useTransform(smoothProgress, [0, 0.6, 1], [0.97, 1, 1.03]);
  const y = useTransform(smoothProgress, [0, 1], [0, -28]);

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? undefined : { opacity: 0, y: 28 }}
      animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.75, delay: 0.25, ease: EASE_OUT }}
      style={shouldReduceMotion ? undefined : { scale, y }}
      className={cn('will-change-transform', className)}
    >
      {children}
    </motion.div>
  );
}

export function PageTransition({ children }: { children: ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.26,
        ease: EASE_OUT,
      }}
    >
      {children}
    </motion.div>
  );
}
