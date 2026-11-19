import { CheckCircle2, Phone, ShieldCheck, Truck } from 'lucide-react';
import { CAREERS_FAQ, COMPANY_INFO } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import {
  Reveal,
  StaggerGroup,
  StaggerItem,
} from '@/components/motion/ScrollPrimitives';
import { DriverApplicationForm } from '@/components/forms/DriverApplicationForm';
import { BouncyAccordion } from '@/components/ui/bouncy-accordion';

export function CareersPage() {
  return (
    <div>
      <PageHero
        eyebrow="CAREERS · DRIVE FOR JNS"
        breadcrumb="Careers"
        title="Drive for JNS Hauling"
        description="Operate maintained Western Star 4700 tandem dump trucks on regional Georgia and Alabama construction, quarry, and paving runs out of our Columbus, GA yard."
        action={
          <a
            href={COMPANY_INFO.phoneHref}
            className="btn bg-foreground text-background hover:bg-zinc-800 px-6 py-3.5 text-sm font-mono font-semibold"
          >
            <Phone size={15} className="text-primary" />
            {COMPANY_INFO.phoneDisplay}
          </a>
        }
      />

      {/* Driver Expectations + Application Form */}
      <section id="apply" className="py-16 md:py-24 px-6 scroll-mt-24">
        <div className="container mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Qualifications & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
                DRIVER QUALIFICATIONS
              </span>
              <h2 className="text-3xl font-display font-extrabold text-foreground mb-4">
                What We Look For Behind the Wheel
              </h2>
              <p className="text-muted text-base leading-relaxed">
                We keep a dependable crew moving material across Georgia and Alabama. If you take pride in clean inspections, safe jobsite backing, and steady regional work, submit your application below.
              </p>
            </Reveal>

            <StaggerGroup className="space-y-4">
              {[
                {
                  icon: ShieldCheck,
                  title: 'Valid Class A or Class B CDL',
                  body: 'Active commercial driver license in good standing with current DOT medical certification.',
                },
                {
                  icon: Truck,
                  title: 'Dump Truck / Tandem Experience',
                  body: 'Experience operating tandem axle dump trucks in quarry, grading, or paving environments.',
                },
                {
                  icon: CheckCircle2,
                  title: 'Safety & Inspection Discipline',
                  body: 'Commitment to daily pre-trip/post-trip logs, proper load tarping, and attentive site awareness.',
                },
              ].map((item) => (
                <StaggerItem
                  key={item.title}
                  className="rounded-2xl bg-secondary/70 border border-border p-5 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-border flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-primary-hover" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <Reveal delay={0.12} className="rounded-3xl bg-foreground text-background p-7">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-2">
                COLUMBUS YARD LOCATION
              </span>
              <p className="font-semibold text-white">{COMPANY_INFO.fullAddress}</p>
              <p className="text-xs text-zinc-400 mt-2">
                Questions before applying? Call {COMPANY_INFO.phoneDisplay} or email {COMPANY_INFO.email}.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Driver Application Form */}
          <Reveal delay={0.08} className="lg:col-span-7">
            <div className="rounded-[2rem] bg-secondary/45 border border-border p-7 sm:p-10 shadow-sm">
              <div className="mb-8 pb-6 border-b border-border">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-2">
                  DRIVER APPLICATION FORM
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">
                  Apply for a Tandem Driver Position
                </h2>
              </div>

              <DriverApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Driver FAQ */}
      <section className="py-16 md:py-24 px-6 bg-secondary/35 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary-hover font-semibold block mb-3">
              DRIVER FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <BouncyAccordion
              defaultValue={CAREERS_FAQ[0].id}
              items={CAREERS_FAQ.map((item) => ({
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
