import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, FileCheck2, ShieldCheck, Truck } from 'lucide-react';
import { ABOUT_FAQ, COMPANY_INFO } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import {
  ParallaxMedia,
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/ScrollPrimitives';
import { BouncyAccordion } from '@/components/ui/bouncy-accordion';

export function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="CREDENTIALS · EST. 2014"
        breadcrumb="About & DBE"
        title="Built on Dispatch Discipline Since 2014"
        description="Founded in Columbus, Georgia by Jeremy Gabrielson, JNS Hauling LLC provides DBE-certified tandem dump truck hauling for general contractors, civil engineers, and paving crews across Georgia and Alabama."
        action={
          <Link
            to="/quote"
            className="btn bg-foreground text-background hover:bg-zinc-800 px-7 py-3.5 text-sm font-bold"
          >
            Work With Us <ArrowRight size={16} />
          </Link>
        }
      />

      {/* Company Overview & Credentials Table */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <Reveal className="lg:col-span-6">
            <ParallaxMedia className="rounded-3xl h-[340px] md:h-[460px] shadow-xl bg-zinc-900">
              <img
                src="/pexels-soner-mazlum-182555-6890415.jpg"
                alt="Industrial aggregate processing and stockpiles"
                loading="eager"
                decoding="sync"
                className="w-full h-full object-cover"
              />
            </ParallaxMedia>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block">
              COMPANY PROFILE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Straightforward Hauling Backed by Verifiable Capacity
            </h2>
            <p className="text-muted text-base leading-relaxed">
              Contractors hire JNS Hauling when schedules cannot slip. With 11 Western Star 4700 tandem dump trucks stationed in Columbus, Georgia, we focus on clean weigh tickets, on-time quarry cycles, and direct communication with jobsite superintendents.
            </p>

            {/* Stamped Credentials Ledger */}
            <div className="rounded-3xl bg-secondary/70 border border-border overflow-hidden">
              <div className="px-6 py-4 bg-foreground text-background flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest font-semibold text-primary">
                  CREDENTIALS MANIFEST
                </span>
                <span className="font-mono text-xs text-zinc-400">VERIFIED RECORD</span>
              </div>
              <dl className="divide-y divide-border text-sm">
                {[
                  { label: 'Legal Entity', value: COMPANY_INFO.name },
                  { label: 'Owner', value: COMPANY_INFO.owner },
                  { label: 'Year Established', value: String(COMPANY_INFO.established) },
                  { label: 'Certification', value: COMPANY_INFO.certification },
                  { label: 'Fleet Composition', value: `${COMPANY_INFO.fleetCount} ${COMPANY_INFO.fleetModel} Tandems` },
                  { label: 'Primary Yard', value: COMPANY_INFO.fullAddress },
                  { label: 'Service Territory', value: 'Georgia & Alabama' },
                ].map((row) => (
                  <div key={row.label} className="px-6 py-3.5 flex flex-wrap justify-between gap-2">
                    <dt className="font-mono text-xs uppercase tracking-wider text-muted">
                      {row.label}
                    </dt>
                    <dd className="font-semibold text-foreground text-right">{row.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Operating Pillars */}
      <section className="py-20 px-6 bg-foreground text-background">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="max-w-2xl mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-3">
              HOW WE OPERATE
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white">
              Built for Public Bidders &amp; Prime Contractors
            </h2>
          </Reveal>

          <StaggerGroup className="grid md:grid-cols-3 gap-6">
            <StaggerItem className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <ShieldCheck size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                DBE Certified Partner
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Supports prime contractors meeting Disadvantaged Business Enterprise requirements on state, municipal, and federally funded infrastructure projects.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <Truck size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Owned Tandem Capacity
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Eleven company-owned Western Star 4700 dump trucks ensure accountable scheduling without scrambling to piece together unknown brokers.
              </p>
            </StaggerItem>

            <StaggerItem className="rounded-3xl bg-white/5 border border-white/10 p-8">
              <div className="w-12 h-12 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <FileCheck2 size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">
                Clear Ticket Paperwork
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Clean load tracking, scale receipts, and prompt billing documentation built for fast project closeouts and contractor accounting.
              </p>
            </StaggerItem>
          </StaggerGroup>
        </div>
      </section>

      {/* About FAQ */}
      <section className="py-20 md:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
                CONTRACTOR QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
                Credentials &amp; Company FAQ
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-foreground hover:text-primary-hover transition-colors"
            >
              View Materials <CheckCircle2 size={15} className="text-primary" />
            </Link>
          </Reveal>

          <Reveal delay={0.08}>
            <BouncyAccordion
              defaultValue={ABOUT_FAQ[0].id}
              items={ABOUT_FAQ.map((item) => ({
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
