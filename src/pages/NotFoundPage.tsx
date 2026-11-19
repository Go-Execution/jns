import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/motion/ScrollPrimitives';
import { useDocumentTitle } from '@/lib/useDocumentTitle';

export function NotFoundPage() {
  useDocumentTitle('Page Not Found');
  return (
    <section className="min-h-[75vh] flex items-center justify-center px-6 pt-28 pb-20">
      <Reveal immediate className="max-w-lg text-center space-y-6">
        <span className="inline-block font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary-hover bg-primary/15 border border-primary/30 px-4 py-1.5 rounded-full">
          ROUTE NOT FOUND · 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-foreground">
          Off the Haul Route
        </h1>
        <p className="text-muted text-base leading-relaxed">
          The page you requested could not be found. Use the links below to return to the home page, view hauling services, or request a quote.
        </p>
        <div className="flex flex-wrap justify-center gap-3 pt-2">
          <Link
            to="/"
            className="btn bg-foreground text-background hover:bg-zinc-800 px-6 py-3.5 text-sm font-bold"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <Link
            to="/quote"
            className="btn bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3.5 text-sm font-bold"
          >
            Get a Quote
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
