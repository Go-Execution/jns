import { Link } from 'react-router-dom';
import { ChevronRight, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';
import { Reveal } from '@/components/motion/ScrollPrimitives';

export function SiteFooter() {
  return (
    <footer className="pt-20 pb-10 px-6 bg-secondary/40 relative border-t border-border">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-12 gap-12 mb-14 relative z-10">
        <Reveal className="md:col-span-5 text-center md:text-left">
          <Link to="/" className="inline-flex items-center justify-center md:justify-start gap-3 mb-6">
            <img
              src="/Jns Logo Transparent.png"
              alt="JNS Hauling LLC Logo"
              className="h-14 w-auto"
            />
            <span className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground">
              JNS<span className="text-primary">HAULING</span>
            </span>
          </Link>
          <p className="text-sm md:text-base text-muted mb-6 leading-relaxed max-w-sm font-medium mx-auto md:mx-0">
            DBE-certified dump truck hauling for dirt, sand, aggregate, and asphalt across Georgia and Alabama since 2014.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background font-mono text-xs uppercase tracking-wider font-semibold">
              <ShieldCheck size={15} className="text-primary" />
              {COMPANY_INFO.certification}
            </span>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="JNS Hauling LLC on Facebook"
              className="w-10 h-10 rounded-full bg-white border border-border shadow-sm flex items-center justify-center text-muted hover:text-foreground hover:border-primary transition-colors"
            >
              <span className="font-bold text-sm">f</span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="md:col-span-4 lg:col-span-3 md:col-start-6 text-center md:text-left">
          <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-[0.2em] mb-6">
            Dispatch &amp; Office
          </h4>
          <div className="space-y-4 text-sm font-medium text-muted flex flex-col items-center md:items-start">
            <a
              href={COMPANY_INFO.phoneHref}
              className="flex items-center gap-3 font-mono text-foreground hover:text-primary-hover transition-colors"
            >
              <Phone size={17} className="text-primary shrink-0" />
              {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={COMPANY_INFO.emailHref}
              className="flex items-center gap-3 hover:text-foreground transition-colors"
            >
              <Mail size={17} className="text-foreground shrink-0" />
              {COMPANY_INFO.email}
            </a>
            <p className="flex items-start gap-3 text-left">
              <MapPin size={17} className="text-foreground shrink-0 mt-0.5" />
              <span>
                {COMPANY_INFO.addressLine1}
                <br />
                {COMPANY_INFO.addressLine2}
              </span>
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14} className="md:col-span-3 text-center md:text-left">
          <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-[0.2em] mb-6">
            Explore Pages
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-1 gap-3 text-sm font-medium text-muted justify-items-center md:justify-items-start">
            <Link to="/services" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronRight size={15} className="text-primary" /> Services &amp; Materials
            </Link>
            <Link to="/fleet" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronRight size={15} className="text-primary" /> The Fleet
            </Link>
            <Link to="/service-area" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronRight size={15} className="text-primary" /> Service Area
            </Link>
            <Link to="/about" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronRight size={15} className="text-primary" /> About &amp; DBE
            </Link>
            <Link to="/quote" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronRight size={15} className="text-primary" /> Get a Quote
            </Link>
            <Link to="/careers" className="hover:text-foreground transition-colors inline-flex items-center gap-1.5">
              <ChevronRight size={15} className="text-primary" /> Drive for JNS
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-sm font-medium text-muted">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name} All rights reserved.</p>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
          <span className="flex items-center gap-2 text-foreground font-mono text-xs uppercase tracking-wider">
            <ShieldCheck size={15} className="text-primary" />
            {COMPANY_INFO.certification} · Columbus, GA
          </span>
          <span className="w-1 h-1 rounded-full bg-border hidden sm:inline-block" />
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
