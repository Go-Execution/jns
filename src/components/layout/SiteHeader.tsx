import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';
import { EASE_OUT, SPRING_LAYOUT } from '@/components/ui/ease';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { to: '/services', label: 'Services' },
  { to: '/fleet', label: 'The Fleet' },
  { to: '/service-area', label: 'Service Area' },
  { to: '/about', label: 'About' },
  { to: '/careers', label: 'Careers' },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 24);
  });

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || isOpen
          ? 'bg-white/92 backdrop-blur-xl border-b border-border/80 shadow-[0_6px_30px_rgba(9,9,11,0.06)] py-3.5'
          : 'bg-white/75 backdrop-blur-md border-b border-transparent py-5'
      )}
    >
      <div className="container mx-auto max-w-[1400px] px-6 flex justify-between items-center gap-4">
        {/* Brand Wordmark */}
        <Link
          to="/"
          className="flex items-center gap-3 shrink-0 group focus-visible:rounded-lg"
        >
          <img
            src="/Jns Logo Transparent.png"
            alt="JNS Hauling LLC Logo"
            className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
          />
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-base md:text-lg font-bold tracking-tight text-foreground uppercase leading-none">
              JNS Hauling LLC
            </span>
            <span className="font-mono text-[10px] text-muted uppercase tracking-[0.16em] mt-1">
              DBE Certified · Est. 2014
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'relative px-4 py-2 text-sm font-semibold transition-colors rounded-full',
                  isActive
                    ? 'text-foreground'
                    : 'text-muted hover:text-foreground'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="header-active-pill"
                      transition={SPRING_LAYOUT}
                      className="absolute inset-0 rounded-full bg-secondary border border-border/80 -z-0"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={COMPANY_INFO.phoneHref}
            className="hidden xl:inline-flex items-center gap-2 font-mono text-xs font-semibold text-foreground hover:text-primary-hover px-3 py-2 rounded-full transition-colors"
          >
            <Phone size={14} className="text-primary" />
            {COMPANY_INFO.phoneDisplay}
          </a>
          <Link
            to="/quote"
            className="btn bg-foreground text-background hover:bg-zinc-800 px-5 py-2.5 text-sm font-semibold"
          >
            Get a Quote
          </Link>
          <Link
            to="/careers"
            className="btn bg-transparent border border-border text-foreground hover:bg-secondary px-5 py-2.5 text-sm font-semibold"
          >
            Apply
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={COMPANY_INFO.phoneHref}
            aria-label="Call JNS Hauling dispatch"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-secondary/70 text-foreground hover:border-primary transition-colors"
          >
            <Phone size={18} />
          </a>
          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-white text-foreground"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: EASE_OUT }}
            className="lg:hidden overflow-hidden border-t border-b border-border bg-white shadow-2xl"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                    isActive ? 'bg-secondary text-foreground' : 'text-muted hover:bg-secondary/60 hover:text-foreground'
                  )
                }
              >
                Home
              </NavLink>
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      'px-4 py-3 rounded-xl text-base font-semibold transition-colors',
                      isActive ? 'bg-secondary text-foreground' : 'text-muted hover:bg-secondary/60 hover:text-foreground'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 mt-2 border-t border-border">
                <Link
                  to="/quote"
                  className="btn bg-foreground text-background hover:bg-zinc-800 py-3 text-sm font-semibold w-full"
                >
                  Get a Quote
                </Link>
                <Link
                  to="/careers"
                  className="btn bg-primary text-primary-foreground hover:bg-primary-hover py-3 text-sm font-semibold w-full"
                >
                  Apply to Drive
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
