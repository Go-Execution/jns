"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useReducedMotion,
  wrap,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollBasedVelocityProps {
  text: string;
  default_velocity?: number;
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
  singleRow?: boolean;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
  containerRef?: React.RefObject<HTMLElement | null>;
}

function ParallaxText({
  children,
  baseVelocity = 100,
  className,
  containerRef,
}: ParallaxProps) {
  const shouldReduceMotion = useReducedMotion();
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll(
    containerRef ? { container: containerRef } : undefined
  );
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 55,
    stiffness: 320,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1200], [0, 3.5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-12.5, 0, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((_, delta) => {
    if (shouldReduceMotion) return;
    // Cap frame delta to prevent velocity spikes when returning to a background tab
    const clampedDelta = Math.min(delta, 50);
    let moveBy = directionFactor.current * baseVelocity * (clampedDelta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap w-full">
      <motion.div
        className={cn("flex whitespace-nowrap will-change-transform", className)}
        style={shouldReduceMotion ? undefined : { x }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="block mr-10 last:mr-10">
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollBasedVelocity({
  text,
  default_velocity = 1.6,
  className,
  containerRef,
  singleRow = false,
}: ScrollBasedVelocityProps) {
  return (
    <div className="relative w-full overflow-hidden">
      <ParallaxText
        baseVelocity={default_velocity}
        className={className}
        containerRef={containerRef}
      >
        {text}
      </ParallaxText>
      {!singleRow && (
        <ParallaxText
          baseVelocity={-default_velocity}
          className={className}
          containerRef={containerRef}
        >
          {text}
        </ParallaxText>
      )}
    </div>
  );
}
