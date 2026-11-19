import { useState } from 'react';
import { CheckCircle2, Mail, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';
import { cn } from '@/lib/utils';

interface QuoteFormState {
  name: string;
  company: string;
  phone: string;
  email: string;
  location: string;
  materials: string[];
  timeline: string;
  notes: string;
}

const MATERIAL_OPTIONS = ['Dirt', 'Sand', 'Aggregate', 'Asphalt'] as const;

const INITIAL_STATE: QuoteFormState = {
  name: '',
  company: '',
  phone: '',
  email: '',
  location: '',
  materials: [],
  timeline: '',
  notes: '',
};

const PHONE_REGEX = /^[0-9+\-().\s]{7,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function QuoteRequestForm({
  variant = 'dark',
  preselectedMaterial,
}: {
  variant?: 'dark' | 'light';
  preselectedMaterial?: string;
}) {
  const [form, setForm] = useState<QuoteFormState>(() => ({
    ...INITIAL_STATE,
    materials: preselectedMaterial ? [preselectedMaterial] : [],
  }));
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [ticketCode, setTicketCode] = useState<string>('');
  const [submittedPayload, setSubmittedPayload] = useState<QuoteFormState | null>(null);

  const isDark = variant === 'dark';

  const toggleMaterial = (material: string) => {
    setForm((prev) => {
      const exists = prev.materials.includes(material);
      const next = exists
        ? prev.materials.filter((m) => m !== material)
        : [...prev.materials, material];
      return { ...prev, materials: next };
    });
    if (errors.materials) {
      setErrors((prev) => ({ ...prev, materials: undefined }));
    }
  };

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof QuoteFormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Enter your full name.';
    if (!PHONE_REGEX.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.';
    if (!EMAIL_REGEX.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (!form.location.trim()) nextErrors.location = 'Enter the project city, county, or address.';
    if (form.materials.length === 0) nextErrors.materials = 'Select at least one material.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const code = `JNS-Q-${Math.floor(1000 + Math.random() * 9000)}`;
    const snapshot = { ...form };

    window.setTimeout(() => {
      setTicketCode(code);
      setSubmittedPayload(snapshot);
      setStatus('success');
      setForm(INITIAL_STATE);
    }, 450);
  };

  const buildMailtoHref = (payload: QuoteFormState, code: string) => {
    const subject = encodeURIComponent(`Load Ticket Quote Request (${code}) — ${payload.location}`);
    const body = encodeURIComponent(
      [
        `Reference: ${code}`,
        `Name: ${payload.name}`,
        `Company: ${payload.company || 'N/A'}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `Project Location: ${payload.location}`,
        `Material Needed: ${payload.materials.join(', ')}`,
        `Estimated Timeline: ${payload.timeline || 'Not specified'}`,
        `Notes: ${payload.notes || 'None'}`,
      ].join('\n')
    );
    return `${COMPANY_INFO.emailHref}?subject=${subject}&body=${body}`;
  };

  const inputCls = isDark
    ? 'w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3.5 text-sm text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all'
    : 'form-control';

  const labelCls = isDark
    ? 'block text-xs font-mono uppercase tracking-widest text-zinc-300 mb-2'
    : 'block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2';

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`q-name-${variant}`} className={labelCls}>
            Full Name *
          </label>
          <input
            id={`q-name-${variant}`}
            type="text"
            value={form.name}
            onChange={(e) => {
              setForm((p) => ({ ...p, name: e.target.value }));
              if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
            }}
            placeholder="Jordan Miller"
            className={inputCls}
            required
          />
          {errors.name && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor={`q-company-${variant}`} className={labelCls}>
            Company Name (Optional)
          </label>
          <input
            id={`q-company-${variant}`}
            type="text"
            value={form.company}
            onChange={(e) => setForm((p) => ({ ...p, company: e.target.value }))}
            placeholder="Chattahoochee Civil Contractors"
            className={inputCls}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`q-phone-${variant}`} className={labelCls}>
            Phone Number *
          </label>
          <input
            id={`q-phone-${variant}`}
            type="tel"
            value={form.phone}
            onChange={(e) => {
              setForm((p) => ({ ...p, phone: e.target.value }));
              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
            }}
            placeholder="(706) 555-0148"
            className={inputCls}
            required
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor={`q-email-${variant}`} className={labelCls}>
            Email Address *
          </label>
          <input
            id={`q-email-${variant}`}
            type="email"
            value={form.email}
            onChange={(e) => {
              setForm((p) => ({ ...p, email: e.target.value }));
              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            }}
            placeholder="estimating@company.com"
            className={inputCls}
            required
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor={`q-location-${variant}`} className={labelCls}>
            Project Location *
          </label>
          <input
            id={`q-location-${variant}`}
            type="text"
            value={form.location}
            onChange={(e) => {
              setForm((p) => ({ ...p, location: e.target.value }));
              if (errors.location) setErrors((p) => ({ ...p, location: undefined }));
            }}
            placeholder="Columbus, GA / Phenix City, AL"
            className={inputCls}
            required
          />
          {errors.location && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.location}</p>}
        </div>

        <div>
          <label htmlFor={`q-timeline-${variant}`} className={labelCls}>
            Estimated Timeline
          </label>
          <input
            id={`q-timeline-${variant}`}
            type="text"
            value={form.timeline}
            onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))}
            placeholder="Next week / 3-day paving run"
            className={inputCls}
          />
        </div>
      </div>

      <div className="pt-1">
        <span className={labelCls}>Material Needed *</span>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {MATERIAL_OPTIONS.map((m) => {
            const selected = form.materials.includes(m);
            return (
              <button
                key={m}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleMaterial(m)}
                className={cn(
                  'p-3.5 rounded-xl border text-sm font-bold transition-all cursor-pointer text-center',
                  selected
                    ? 'bg-primary text-primary-foreground border-primary shadow-md'
                    : isDark
                      ? 'border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10'
                      : 'border-border bg-white text-foreground hover:border-foreground/40'
                )}
              >
                {m}
              </button>
            );
          })}
        </div>
        {errors.materials && <p className="mt-1.5 text-xs text-red-400 font-medium">{errors.materials}</p>}
      </div>

      <div>
        <label htmlFor={`q-notes-${variant}`} className={labelCls}>
          Haul Notes &amp; Estimated Loads
        </label>
        <textarea
          id={`q-notes-${variant}`}
          rows={3}
          value={form.notes}
          onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
          placeholder="Quarry or plant pickup point, estimated truck count, or DBE bid requirements..."
          className={inputCls}
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className={cn(
          'w-full font-bold text-base py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70',
          isDark
            ? 'bg-primary hover:bg-primary-hover text-primary-foreground shadow-xl shadow-primary/20'
            : 'bg-foreground hover:bg-zinc-800 text-background shadow-lg'
        )}
      >
        <Send size={18} />
        {status === 'sending' ? 'Preparing Load Ticket...' : 'Submit Load Ticket'}
      </button>

      {status === 'success' && submittedPayload && (
        <div
          role="status"
          className={cn(
            'p-5 rounded-2xl border text-left space-y-3',
            isDark
              ? 'bg-emerald-500/15 border-emerald-500/35 text-emerald-100'
              : 'bg-emerald-50 border-emerald-200 text-emerald-950'
          )}
        >
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">
                Load Ticket Prepared · Reference <span className="font-mono">{ticketCode}</span>
              </p>
              <p className={cn('text-xs mt-1 leading-relaxed', isDark ? 'text-emerald-200/80' : 'text-emerald-800')}>
                Send your formatted load ticket straight to dispatch email or call directly for same-day scheduling.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href={buildMailtoHref(submittedPayload, ticketCode)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary-hover transition-colors"
            >
              <Mail size={14} /> Send Ticket to {COMPANY_INFO.email}
            </a>
            <a
              href={COMPANY_INFO.phoneHref}
              className={cn(
                'inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold border transition-colors',
                isDark
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-border bg-white text-foreground hover:bg-secondary'
              )}
            >
              <Phone size={14} /> Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
