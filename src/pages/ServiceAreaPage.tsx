import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO, STATE_REGIONS } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/motion/ScrollPrimitives';
import { ServiceCorridorMap } from '@/components/ui/ServiceCorridorMap';

export function ServiceAreaPage() {
  const [activeState, setActiveState] = useState<'georgia' | 'alabama'>('georgia');
  const currentRegion = STATE_REGIONS[activeState];

  return (
    <div>
      <PageHero
        eyebrow="LOGISTICS NETWORK · GA & AL"
        breadcrumb="Service Area"
        title="Georgia & Alabama Coverage"
        description="Based at 1254 Noland Dr in Columbus, Georgia, JNS Hauling operates right on the Chattahoochee Valley border—serving jobsites, quarries, and asphalt plants across both Georgia and Alabama."
        action={
          <Link
            to="/quote"
            className="btn bg-foreground text-background hover:bg-zinc-800 px-7 py-3.5 text-sm font-bold"
          >
            Confirm Site Coverage <ArrowRight size={16} />
          </Link>
        }
      />

      {/* Interactive Map + Active State Card */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <Reveal className="lg:col-span-7">
            <ServiceCorridorMap
              activeState={activeState}
              onSelectState={setActiveState}
            />
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-white border border-border p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-primary/15 flex items-center justify-center">
                  <MapPin size={22} className="text-primary-hover" />
                </div>
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted block">
                    {currentRegion.badge}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
                    {currentRegion.name}
                  </h2>
                </div>
              </div>

              <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
                {currentRegion.summary}
              </p>

              <h3 className="font-mono text-xs uppercase tracking-widest text-foreground font-semibold mb-3">
                Primary Operating Corridors
              </h3>
              <ul className="space-y-2.5 mb-6">
                {currentRegion.corridors.map((corridor) => (
                  <li key={corridor} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                    <CheckCircle2 size={16} className="text-primary shrink-0" />
                    <span>{corridor}</span>
                  </li>
                ))}
              </ul>

              <p className="text-xs font-mono text-muted border-t border-border pt-4 leading-relaxed">
                {currentRegion.note}
              </p>
            </div>

            {/* Headquarters Card */}
            <div className="rounded-3xl bg-secondary/70 border border-border p-7 space-y-4">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block">
                COLUMBUS DISPATCH YARD
              </span>
              <p className="text-sm font-semibold text-foreground">
                {COMPANY_INFO.fullAddress}
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="inline-flex items-center gap-2 font-mono text-sm font-bold text-foreground hover:text-primary-hover transition-colors"
                >
                  <Phone size={15} className="text-primary" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <Link
                  to="/quote"
                  className="text-sm font-bold text-foreground underline underline-offset-4 hover:text-primary-hover transition-colors"
                >
                  Request Route Quote
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contractor DBE Support */}
      <section className="py-16 md:py-24 px-6 bg-secondary/40 border-t border-border">
        <div className="container mx-auto max-w-5xl">
          <Reveal className="rounded-[2rem] bg-white border border-border p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-start gap-8">
            <div className="w-14 h-14 rounded-2xl bg-foreground text-primary flex items-center justify-center shrink-0">
              <ShieldCheck size={28} />
            </div>
            <div className="flex-1">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-2">
                PUBLIC &amp; DOT SUBCONTRACTING
              </span>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground mb-3">
                DBE Participation Across Georgia &amp; Alabama Bids
              </h2>
              <p className="text-muted text-sm md:text-base leading-relaxed mb-6">
                Prime contractors and civil project estimators bidding public roadway, municipal utility, or commercial infrastructure jobs can request DBE hauling quotes directly through our dispatch office.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/quote"
                  className="btn bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 text-sm font-bold"
                >
                  Request Bid Quote
                </Link>
                <Link
                  to="/about"
                  className="btn btn-secondary px-6 py-3 text-sm font-semibold"
                >
                  View Company Credentials
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
