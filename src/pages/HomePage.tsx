import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import {
  COMPANY_INFO,
  MANIFEST_ENTRIES,
  MATERIALS,
} from '@/data/siteData';
import {
  HeroParallaxFrame,
  ParallaxMedia,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/ScrollPrimitives';
import { ScrollBasedVelocity } from '@/components/ui/scroll-based-velocity';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function HomePage() {
  useDocumentTitle();
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-32 md:pt-40 px-6 max-w-[1400px] mx-auto flex flex-col">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12 md:mb-16">
          <div className="w-full lg:w-[64%]">
            <Reveal immediate delay={0.02} y={14}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-secondary border border-border mb-6">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                  DBE Certified · Columbus, GA · Est. 2014
                </span>
              </div>
            </Reveal>

            <Reveal immediate delay={0.06} y={20}>
              <h1 className="text-[2.75rem] sm:text-[4rem] lg:text-[5.5rem] font-display tracking-tight font-bold leading-[1.03] text-foreground">
                Moving Georgia &amp; Alabama Forward
              </h1>
            </Reveal>
          </div>

          <div className="w-full lg:w-[32%] flex flex-col items-start lg:pb-2">
            <Reveal immediate delay={0.14} y={18}>
              <p className="text-base sm:text-lg text-muted mb-7 font-medium leading-relaxed">
                DBE-certified dump truck hauling for dirt, sand, aggregate, and asphalt. Grounded in dispatch discipline and backed by 11 Western Star 4700 tandems.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-foreground text-background hover:bg-zinc-800 rounded-full px-7 py-3.5 text-sm sm:text-base font-bold transition-colors"
                >
                  Get a Quote <ArrowRight size={17} />
                </Link>
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center bg-transparent border border-border text-foreground hover:bg-secondary rounded-full px-7 py-3.5 text-sm sm:text-base font-semibold transition-colors"
                >
                  Apply to Drive
                </Link>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Full-bleed video showcase with smooth scroll-linked parallax */}
        <HeroParallaxFrame className="w-full h-[48vh] sm:h-[60vh] lg:h-[70vh] rounded-[2rem] md:rounded-[3rem] overflow-hidden relative shadow-2xl bg-zinc-900">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            src="/8457855-uhd_3840_2160_24fps.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

          <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex flex-wrap items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/15 font-mono text-xs uppercase tracking-widest text-white">
              11 Western Star 4700 Tandems
            </span>
            <Link
              to="/fleet"
              className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-mono text-xs font-semibold uppercase tracking-wider hover:bg-primary-hover transition-colors inline-flex items-center gap-1.5"
            >
              View Fleet <ArrowRight size={13} />
            </Link>
          </div>

          <div className="absolute bottom-8 right-10 hidden md:block pointer-events-none">
            <span className="font-display text-[5.5rem] leading-none font-bold text-white/90 drop-shadow-2xl">
              JNS
            </span>
          </div>
        </HeroParallaxFrame>
      </section>

      {/* Manifest Strip */}
      <section aria-label="Company credentials manifest" className="mt-12 md:mt-16 border-y border-border bg-foreground text-background">
        <div className="container mx-auto max-w-7xl px-6 py-5">
          <StaggerGroup className="flex flex-wrap justify-center md:justify-between items-center gap-x-6 gap-y-3 font-mono text-xs sm:text-sm tracking-[0.14em] uppercase">
            {MANIFEST_ENTRIES.map((entry, idx) => (
              <StaggerItem key={entry.label} className="flex items-center gap-3">
                {idx > 0 && <span className="hidden md:inline-block w-1.5 h-4 bg-primary/80 mr-3" />}
                <span className="text-zinc-400">{entry.label}</span>
                <span className={entry.highlight ? 'text-primary font-semibold' : 'text-white font-semibold'}>
                  {entry.value}
                </span>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        <div className="border-t border-white/10 py-3 bg-zinc-950/80">
          <ScrollBasedVelocity
            singleRow
            default_velocity={1.2}
            text="DBE CERTIFIED · COLUMBUS, GA · 11 WESTERN STAR 4700 TANDEMS · DIRT · SAND · AGGREGATE · ASPHALT · GA & AL ·"
            className="font-mono text-xs tracking-[0.22em] text-zinc-400 uppercase"
          />
        </div>
      </section>

      {/* What We Haul */}
      <section id="services" className="py-24 md:py-32 relative">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <Reveal>
              <span className="font-mono text-xs font-semibold text-primary-hover tracking-[0.2em] uppercase block mb-3">
                Core Capabilities
              </span>
              <h2 className="text-3xl md:text-5xl font-display tracking-tight text-foreground font-extrabold">
                Materials We Transport
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col items-start md:items-end gap-4">
              <p className="text-muted max-w-md text-base font-medium md:text-right">
                Equipped to handle high-volume hauling for commercial, municipal, DOT, and residential infrastructure projects.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary-hover transition-colors"
              >
                Explore All Material Specs <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            {MATERIALS.map((card) => (
              <StaggerItem
                key={card.id}
                className={`${card.colSpan} ${card.rowSpan}`}
              >
                <Link
                  to={`/services#${card.id}`}
                  className="relative block w-full h-full rounded-3xl overflow-hidden group shadow-lg bg-zinc-900 focus-visible:ring-4 focus-visible:ring-primary"
                >
                  <img
                    src={card.image}
                    alt={card.imageAlt}
                    loading="eager"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-500" />

                  <div className="absolute top-6 left-6">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] px-3 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/25 text-white">
                      {card.code}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 p-7 md:p-8 w-full flex justify-between items-end gap-4">
                    <div className="transition-transform duration-500 ease-out group-hover:-translate-y-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                        {card.shortLabel}
                      </h3>
                      <p className="text-sm text-zinc-300 font-medium line-clamp-1">
                        {card.subtitle}
                      </p>
                    </div>
                    <div className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-lg transition-transform duration-300 group-hover:scale-110">
                      <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* The Fleet Preview */}
      <section
        id="fleet"
        className="py-20 md:py-28 px-6 relative bg-foreground text-background overflow-hidden rounded-[2rem] md:rounded-[3rem] mx-4 md:mx-6 my-6"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <Reveal className="order-2 lg:order-1">
              <ParallaxMedia
                className="rounded-3xl shadow-2xl h-[320px] md:h-[480px]"
                overlay={<div className="absolute inset-0 bg-primary/10 pointer-events-none" />}
              >
                <img
                  src="/pexels-zaiwizi-89700396-9529407.jpg"
                  alt="Loaded Western Star style tandem dump truck on haul road"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </ParallaxMedia>
            </Reveal>

            <Reveal delay={0.08} className="order-1 lg:order-2 lg:pl-6">
              <span className="font-mono text-xs font-bold text-primary tracking-[0.2em] uppercase block mb-4">
                Our Equipment
              </span>
              <h2 className="text-3xl md:text-5xl font-display tracking-tight text-white font-extrabold mb-6">
                11 Western Star 4700 Tandems
              </h2>
              <p className="text-base md:text-lg text-zinc-300 mb-8 leading-relaxed">
                Our operation runs on a dedicated fleet of Western Star 4700 tandem dump trucks maintained out of Columbus, Georgia. Built for quarry, grading, and asphalt schedules across the Southeast.
              </p>

              <div className="grid grid-cols-2 gap-5 mb-8">
                <div className="border border-white/10 bg-white/5 p-5 rounded-2xl">
                  <span className="block text-4xl md:text-5xl text-white font-display font-bold mb-1">
                    11
                  </span>
                  <span className="text-xs text-primary font-mono uppercase tracking-widest font-semibold">
                    Tandem Trucks
                  </span>
                </div>
                <div className="border border-white/10 bg-white/5 p-5 rounded-2xl">
                  <span className="block text-4xl md:text-5xl text-white font-display font-bold mb-1">
                    2014
                  </span>
                  <span className="text-xs text-primary font-mono uppercase tracking-widest font-semibold">
                    Year Established
                  </span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/fleet"
                  className="btn bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 text-sm font-bold"
                >
                  Inspect the Fleet <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="btn bg-white/10 text-white border border-white/15 hover:bg-white/15 px-7 py-3.5 text-sm font-semibold"
                >
                  DBE Credentials
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Service Area Preview */}
      <section id="service-area" className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="text-center mb-14 max-w-2xl mx-auto">
            <span className="font-mono text-xs font-semibold text-primary-hover tracking-[0.2em] uppercase block mb-3">
              Logistics Network
            </span>
            <h2 className="text-3xl md:text-5xl font-display tracking-tight text-foreground font-extrabold mb-5">
              Serving Georgia &amp; Alabama
            </h2>
            <p className="text-base md:text-lg text-muted font-medium">
              Headquartered at 1254 Noland Dr in Columbus, GA, we dispatch daily across West Georgia and East Alabama job corridors.
            </p>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <StaggerItem>
              <Link
                to="/service-area"
                className="glass-card p-7 md:p-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative overflow-hidden group hover:border-primary/60 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <MapPin size={26} className="text-primary-hover group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-center sm:justify-between gap-2 mb-1">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      Georgia
                    </h3>
                    <ArrowRight size={18} className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all hidden sm:block" />
                  </div>
                  <span className="font-mono text-xs text-muted font-semibold uppercase tracking-widest block mb-3">
                    Primary Hub · Columbus, GA
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    Muscogee County, West Georgia corridors, and statewide project schedules upon confirmation.
                  </p>
                </div>
              </Link>
            </StaggerItem>

            <StaggerItem>
              <Link
                to="/service-area"
                className="glass-card p-7 md:p-10 flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-6 relative overflow-hidden group hover:border-primary/60 transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-900 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                  <Truck size={26} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-center sm:justify-between gap-2 mb-1">
                    <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                      Alabama
                    </h3>
                    <ArrowRight size={18} className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all hidden sm:block" />
                  </div>
                  <span className="font-mono text-xs text-muted font-semibold uppercase tracking-widest block mb-3">
                    Interstate Border Network
                  </span>
                  <p className="text-sm text-muted leading-relaxed">
                    Phenix City, Lee County, and East Alabama civil and paving routes right across the Chattahoochee.
                  </p>
                </div>
              </Link>
            </StaggerItem>
          </StaggerGroup>

          <Reveal delay={0.1} className="text-center mt-10">
            <Link
              to="/service-area"
              className="btn btn-secondary px-7 py-3.5 text-sm font-semibold"
            >
              View Coverage Map &amp; Corridors <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Quote Load Ticket + Driver Application CTA */}
      <section className="py-16 md:py-24 px-6 relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 items-stretch">
            <Reveal className="lg:col-span-8 bg-foreground text-background p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <div className="mb-8">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-2">
                  DISPATCH TICKET · QUOTE
                </span>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  Request a Hauling Quote
                </h2>
                <p className="text-zinc-400 text-sm md:text-base">
                  Send your jobsite details for prompt tandem truck scheduling across Georgia and Alabama.
                </p>
              </div>
              <QuoteRequestForm variant="dark" />
            </Reveal>

            <Reveal delay={0.1} className="lg:col-span-4 flex flex-col gap-6">
              <div className="flex-1 rounded-[2rem] bg-secondary border border-border p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
                    CAREERS · CDL DRIVERS
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                    Drive for JNS Hauling
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    Operate maintained Western Star 4700 tandem dump trucks on regional Georgia and Alabama routes. Class A or Class B CDL drivers welcome.
                  </p>
                  <ul className="space-y-3 text-sm font-medium text-foreground mb-8">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      Regional day-haul schedules
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      11 Western Star 4700 units
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      Columbus, GA home yard
                    </li>
                  </ul>
                </div>

                <Link
                  to="/careers"
                  className="btn bg-primary text-primary-foreground hover:bg-primary-hover w-full py-4 font-bold text-sm"
                >
                  Open Driver Application <ArrowRight size={16} />
                </Link>
              </div>

              <div className="rounded-[2rem] bg-white border border-border p-7 shadow-sm">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted block mb-2">
                  DIRECT DISPATCH LINE
                </span>
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2.5 font-mono text-xl font-bold text-foreground hover:text-primary-hover transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <p className="text-xs text-muted mt-2 flex items-center gap-2">
                  <ShieldCheck size={14} className="text-primary shrink-0" />
                  {COMPANY_INFO.certification} · {COMPANY_INFO.fullAddress}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
