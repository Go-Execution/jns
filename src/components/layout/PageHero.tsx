import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Reveal } from '@/components/motion/ScrollPrimitives';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumb: string;
  pageTitle?: string;
  action?: ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  pageTitle,
  action,
}: PageHeroProps) {
  useDocumentTitle(pageTitle ?? breadcrumb);
  return (
    <section className="pt-32 md:pt-40 pb-14 md:pb-20 px-6 border-b border-border bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto max-w-7xl">
        <Reveal immediate y={14}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight size={13} className="text-primary" />
            <span className="text-foreground font-semibold">{breadcrumb}</span>
          </nav>
        </Reveal>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="max-w-3xl">
            <Reveal immediate delay={0.05} y={16}>
              <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-hover bg-primary/15 border border-primary/30 px-3.5 py-1.5 rounded-full mb-5">
                {eyebrow}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-foreground leading-[1.06]">
                {title}
              </h1>
            </Reveal>

            <Reveal immediate delay={0.12} y={16}>
              <p className="mt-5 text-base sm:text-lg text-muted font-medium leading-relaxed max-w-2xl">
                {description}
              </p>
            </Reveal>
          </div>

          {action && (
            <Reveal immediate delay={0.16} y={16} className="shrink-0">
              {action}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
