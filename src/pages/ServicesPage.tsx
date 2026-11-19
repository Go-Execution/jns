import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ClipboardCheck, Layers, Truck } from 'lucide-react';
import { MATERIALS, SERVICES_FAQ } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import {
  ParallaxMedia,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/ScrollPrimitives';
import { BouncyAccordion } from '@/components/ui/bouncy-accordion';
import { cn } from '@/lib/utils';

export function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'dirt' | 'sand' | 'aggregate' | 'asphalt'>('all');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setActiveFilter('all');
    }
  }, [hash]);

  const visibleMaterials =
    activeFilter === 'all'
      ? MATERIALS
      : MATERIALS.filter((m) => m.id === activeFilter);

  return (
    <div>
      <PageHero
        eyebrow="CAPABILITIES · BULK HAULING"
        breadcrumb="Services & Materials"
        title="Materials & Hauling Services"
        description="DBE-certified tandem dump truck transport across Georgia and Alabama. We haul dirt, sand, aggregate, and asphalt from quarries, borrow pits, and plants straight to active jobsites."
        action={
          <Link
            to="/quote"
            className="btn bg-foreground text-background hover:bg-zinc-800 px-7 py-3.5 text-sm font-bold"
          >
            Request Material Quote <ArrowRight size={16} />
          </Link>
        }
      />

      {/* Interactive Filter Tabs */}
      <section className="pt-10 pb-4 px-6 border-b border-border bg-white sticky top-[68px] z-30 backdrop-blur-md bg-white/90">
        <div className="container mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Materials (4)' },
              { id: 'dirt', label: 'Dirt & Soil' },
              { id: 'sand', label: 'Sand' },
              { id: 'aggregate', label: 'Aggregate' },
              { id: 'asphalt', label: 'Asphalt' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as typeof activeFilter)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer',
                  activeFilter === tab.id
                    ? 'bg-foreground text-background'
                    : 'bg-secondary text-muted hover:text-foreground'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <span className="font-mono text-xs text-muted uppercase tracking-widest hidden sm:inline">
            11 Western Star 4700 Tandems Available
          </span>
        </div>
      </section>

      {/* Detailed Material Cards */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl space-y-16 md:space-y-24">
          {visibleMaterials.map((material, index) => {
            const imageLeft = index % 2 === 0;
            return (
              <article
                id={material.id}
                key={material.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center scroll-mt-36"
              >
                <Reveal className={cn('lg:col-span-6', !imageLeft && 'lg:order-2')}>
                  <ParallaxMedia
                    className="rounded-3xl h-[320px] sm:h-[420px] shadow-xl bg-zinc-900"
                    overlay={
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-5 left-5 font-mono text-xs px-3.5 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md text-white border border-white/25">
                          {material.code} · {material.shortLabel}
                        </span>
                      </>
                    }
                  >
                    <img
                      src={material.image}
                      alt={material.imageAlt}
                      loading="eager"
                      decoding="sync"
                      className="w-full h-full object-cover"
                    />
                  </ParallaxMedia>
                </Reveal>

                <Reveal delay={0.08} className={cn('lg:col-span-6', !imageLeft && 'lg:order-1')}>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
                    {material.code} · HAULING SPECIFICATION
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground mb-3">
                    {material.title}
                  </h2>
                  <p className="text-base font-semibold text-foreground/80 mb-4">
                    {material.subtitle}
                  </p>
                  <p className="text-muted text-base leading-relaxed mb-6">
                    {material.description}
                  </p>

                  <div className="rounded-2xl bg-secondary/70 border border-border p-6 mb-6">
                    <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-4">
                      Common Project Applications
                    </h3>
                    <ul className="space-y-2.5">
                      {material.applications.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground/90">
                          <CheckCircle2 size={16} className="text-primary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-xs font-mono text-muted">
                      {material.dispatchNotes}
                    </span>
                    <Link
                      to={`/quote?material=${encodeURIComponent(
                        material.id === 'dirt'
                          ? 'Dirt'
                          : material.id === 'sand'
                            ? 'Sand'
                            : material.id === 'aggregate'
                              ? 'Aggregate'
                              : 'Asphalt'
                      )}`}
                      className="btn bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 text-sm font-bold"
                    >
                      Quote {material.title} <ArrowRight size={15} />
                    </Link>
                  </div>
                </Reveal>
              </article>
            );
          })}
        </div>
      </section>

      {/* Dispatch Workflow */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-3">
              HOW WE DISPATCH
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              Direct From Plant or Quarry to Jobsite
            </h2>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            <StaggerItem className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <ClipboardCheck size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Scope &amp; Truck Assignment
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Share your pickup source, jobsite address, material spec, and target schedule. Dispatch allocates single units or multi-truck cycles.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <Layers size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Loadout &amp; Scale Verification
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Drivers load at your designated quarry, borrow pit, or asphalt plant, secure tarps, and collect scale weigh tickets for every run.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <Truck size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Timed Jobsite Delivery
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Consistent arrival spacing keeps graders, excavators, and asphalt pavers moving without downtime or site bottlenecks.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* Services FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
              COMMON QUESTIONS
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Hauling &amp; Dispatch FAQ
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <BouncyAccordion
              defaultValue={SERVICES_FAQ[0].id}
              items={SERVICES_FAQ.map((item) => ({
                id: item.id,
                title: item.title,
                description: item.description,
              }))}
            />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
