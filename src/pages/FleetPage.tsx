import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, Wrench } from 'lucide-react';
import { FLEET_HIGHLIGHTS, FLEET_STANDARDS } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import {
  ParallaxMedia,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/ScrollPrimitives';
import { WesternStarSchematic } from '@/components/ui/WesternStarSchematic';

export function FleetPage() {
  return (
    <div>
      <PageHero
        eyebrow="EQUIPMENT · 11 TANDEM UNITS"
        breadcrumb="The Fleet"
        title="Western Star 4700 Fleet"
        description="Standardized around 11 Western Star 4700 tandem dump trucks out of Columbus, Georgia. Consistent equipment across the fleet means predictable capacity, easier maintenance, and reliable jobsite readiness."
        action={
          <div className="flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="btn bg-foreground text-background hover:bg-zinc-800 px-6 py-3.5 text-sm font-bold"
            >
              Book Fleet Capacity <ArrowRight size={16} />
            </Link>
            <Link
              to="/careers"
              className="btn btn-secondary px-6 py-3.5 text-sm font-semibold"
            >
              Apply to Drive
            </Link>
          </div>
        }
      />

      {/* Fleet Key Metrics */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FLEET_HIGHLIGHTS.map((item) => (
              <StaggerItem
                key={item.label}
                className="rounded-3xl bg-secondary/70 border border-border p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted block mb-3">
                    {item.label}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-3">
                    {item.value}
                  </h2>
                </div>
                <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Western Star Schematic & Jobsite Image */}
      <section className="py-10 md:py-16 px-6">
        <div className="container mx-auto max-w-7xl space-y-10">
          <Reveal>
            <WesternStarSchematic />
          </Reveal>

          <div className="grid lg:grid-cols-12 gap-8 items-center pt-6">
            <Reveal className="lg:col-span-7">
              <ParallaxMedia className="rounded-3xl h-[340px] md:h-[440px] shadow-xl bg-zinc-900">
                <img
                  src="/pexels-zaiwizi-89700396-9529407.jpg"
                  alt="Loaded tandem dump truck navigating a gravel construction corridor"
                  loading="eager"
                  decoding="sync"
                  className="w-full h-full object-cover"
                />
              </ParallaxMedia>
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-5 space-y-6">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block">
                BUILT FOR SITE WORK &amp; PAVING
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                Why Tandem Standardization Matters
              </h2>
              <p className="text-muted text-base leading-relaxed">
                Operating 11 uniform Western Star 4700 tandem dump trucks gives general contractors consistent bed geometry, dependable cycle times, and predictable turnaround across tight site entrances and highway paving zones.
              </p>
              <ul className="space-y-3 text-sm font-medium text-foreground">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>Maneuverable tandem wheelbase for commercial pads and municipal streets</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>Scale from 1 truck for spot deliveries to multi-unit paving trains</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>Owned and dispatched out of our Columbus, GA operations yard</span>
                </li>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Maintenance & Safety Standards */}
      <section className="py-20 md:py-28 px-6 bg-secondary/40 border-y border-border mt-10">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
              OPERATIONAL DISCIPLINE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Maintenance &amp; Safety Standards
            </h2>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 gap-6">
            {FLEET_STANDARDS.map((std, i) => (
              <StaggerItem
                key={std.title}
                className="rounded-3xl bg-white border border-border p-8 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-secondary flex items-center justify-center">
                    {i % 2 === 0 ? (
                      <Wrench size={20} className="text-foreground" />
                    ) : (
                      <ShieldCheck size={20} className="text-primary-hover" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-muted uppercase tracking-widest">
                    STD · 0{i + 1}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  {std.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{std.description}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="rounded-[2.5rem] bg-foreground text-background p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-2">
                DISPATCH &amp; RECRUITING
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
                Schedule Trucks or Join the Crew
              </h2>
              <p className="text-zinc-400 text-sm md:text-base">
                Need tandem capacity for an upcoming Georgia or Alabama project, or hold a Class A/B CDL looking for steady regional dump-truck runs?
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                to="/quote"
                className="btn bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3.5 text-sm font-bold"
              >
                Get a Quote
              </Link>
              <Link
                to="/careers"
                className="btn bg-white/10 text-white border border-white/15 hover:bg-white/15 px-6 py-3.5 text-sm font-semibold"
              >
                Drive for JNS
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
