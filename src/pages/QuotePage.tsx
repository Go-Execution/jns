import { useSearchParams, Link } from 'react-router-dom';
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/motion/ScrollPrimitives';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';

export function QuotePage() {
  const [searchParams] = useSearchParams();
  const materialParam = searchParams.get('material') ?? undefined;

  return (
    <div>
      <PageHero
        eyebrow="DISPATCH · LOAD TICKET"
        breadcrumb="Get a Quote"
        title="Request a Hauling Quote"
        description="Send your project location, material requirements, and schedule below. Need urgent same-day or multi-truck coordination? Call our Columbus dispatch desk directly."
        action={
          <a
            href={COMPANY_INFO.phoneHref}
            className="btn bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3.5 text-sm font-mono font-bold"
          >
            <Phone size={15} />
            Call {COMPANY_INFO.phoneDisplay}
          </a>
        }
      />

      <section id="quote" className="py-16 md:py-24 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Contact & Dispatch Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal className="rounded-3xl bg-foreground text-background p-8 space-y-6">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-2">
                  DIRECT DISPATCH
                </span>
                <h2 className="text-2xl font-display font-bold text-white">
                  JNS Hauling LLC
                </h2>
              </div>

              <div className="space-y-4 text-sm">
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="flex items-center gap-3 font-mono text-white hover:text-primary transition-colors"
                >
                  <Phone size={17} className="text-primary shrink-0" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_INFO.emailHref}
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail size={17} className="text-primary shrink-0" />
                  {COMPANY_INFO.email}
                </a>
                <div className="flex items-start gap-3 text-zinc-300">
                  <MapPin size={17} className="text-primary shrink-0 mt-0.5" />
                  <span>
                    {COMPANY_INFO.addressLine1}
                    <br />
                    {COMPANY_INFO.addressLine2}
                  </span>
                </div>
              </div>

              <div className="pt-5 border-t border-white/10 flex items-center gap-2.5 text-xs font-mono uppercase tracking-wider text-primary">
                <ShieldCheck size={16} />
                {COMPANY_INFO.certification} · {COMPANY_INFO.fleetCount} Tandems
              </div>
            </Reveal>

            <Reveal delay={0.08} className="rounded-3xl bg-secondary/70 border border-border p-7 space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block">
                HELPFUL QUOTE DETAILS
              </span>
              <ul className="text-sm text-muted space-y-2 leading-relaxed">
                <li>1. City, county, or jobsite drop address</li>
                <li>2. Material(s): Dirt, Sand, Aggregate, or Asphalt</li>
                <li>3. Pickup quarry or asphalt plant (if known)</li>
                <li>4. Target start date or estimated truck count</li>
              </ul>
              <div className="pt-2">
                <Link
                  to="/services"
                  className="text-xs font-mono uppercase tracking-wider font-semibold text-foreground underline underline-offset-4 hover:text-primary-hover"
                >
                  Review Hauling Capabilities
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Quote Request Form */}
          <Reveal delay={0.08} className="lg:col-span-8">
            <div className="rounded-[2rem] bg-secondary/45 border border-border p-7 sm:p-10 shadow-sm">
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-2">
                  PROJECT LOAD TICKET
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
                  Submit Project Hauling Inquiry
                </h2>
              </div>

              <QuoteRequestForm
                variant="light"
                preselectedMaterial={materialParam}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
