import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/data/siteData';
import { PageHero } from '@/components/layout/PageHero';
import { Reveal } from '@/components/motion/ScrollPrimitives';

export function PrivacyPage() {
  return (
    <div>
      <PageHero
        eyebrow="LEGAL · PRIVACY"
        breadcrumb="Privacy Policy"
        title="Privacy Policy"
        description={`How ${COMPANY_INFO.name} handles contact details submitted through quote requests and driver applications.`}
      />

      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-3xl space-y-8 text-sm sm:text-base text-muted leading-relaxed">
          <Reveal className="space-y-3">
            <h2 className="text-xl font-display font-bold text-foreground">
              1. Information You Submit
            </h2>
            <p>
              When you submit a hauling quote request or driver application on this website, you provide contact and project or licensing information—such as your name, company name, phone number, email address, project location, material needs, or CDL experience details.
            </p>
          </Reveal>

          <Reveal delay={0.04} className="space-y-3">
            <h2 className="text-xl font-display font-bold text-foreground">
              2. How We Use Information
            </h2>
            <p>
              {COMPANY_INFO.name} uses submitted information strictly to prepare hauling quotes, coordinate dispatch scheduling across Georgia and Alabama, respond to contractor inquiries, and evaluate driver applications. We do not sell or rent your contact details to third parties.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="space-y-3">
            <h2 className="text-xl font-display font-bold text-foreground">
              3. Contact &amp; Data Requests
            </h2>
            <p>
              To update or request deletion of information you previously sent to our dispatch or hiring office, reach out directly:
            </p>
            <div className="rounded-2xl bg-secondary/70 border border-border p-6 font-mono text-xs sm:text-sm text-foreground space-y-1.5">
              <p>{COMPANY_INFO.name}</p>
              <p>{COMPANY_INFO.fullAddress}</p>
              <p>Phone: {COMPANY_INFO.phoneDisplay}</p>
              <p>Email: {COMPANY_INFO.email}</p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="pt-4">
            <Link
              to="/"
              className="btn btn-secondary px-6 py-3 text-sm font-semibold"
            >
              Return Home
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
