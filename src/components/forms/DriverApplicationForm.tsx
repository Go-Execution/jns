import { useState } from 'react';
import { CheckCircle2, Mail, Phone, Send } from 'lucide-react';
import { COMPANY_INFO } from '@/data/siteData';

interface DriverFormState {
  name: string;
  phone: string;
  email: string;
  experienceYears: string;
  licenseClass: string;
  availability: string;
  notes: string;
}

const INITIAL_DRIVER_STATE: DriverFormState = {
  name: '',
  phone: '',
  email: '',
  experienceYears: '',
  licenseClass: '',
  availability: '',
  notes: '',
};

const PHONE_REGEX = /^[0-9+\-().\s]{7,20}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function DriverApplicationForm() {
  const [form, setForm] = useState<DriverFormState>(INITIAL_DRIVER_STATE);
  const [errors, setErrors] = useState<Partial<Record<keyof DriverFormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [ticketCode, setTicketCode] = useState('');
  const [submittedPayload, setSubmittedPayload] = useState<DriverFormState | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof DriverFormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Enter your full name.';
    if (!PHONE_REGEX.test(form.phone.trim())) nextErrors.phone = 'Enter a valid phone number.';
    if (!EMAIL_REGEX.test(form.email.trim())) nextErrors.email = 'Enter a valid email address.';
    if (form.experienceYears === '' || Number(form.experienceYears) < 0) {
      nextErrors.experienceYears = 'Enter years of CDL driving experience.';
    }
    if (!form.licenseClass) nextErrors.licenseClass = 'Select your CDL license class.';

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');
    const code = `JNS-D-${Math.floor(1000 + Math.random() * 9000)}`;
    const snapshot = { ...form };

    window.setTimeout(() => {
      setTicketCode(code);
      setSubmittedPayload(snapshot);
      setStatus('success');
      setForm(INITIAL_DRIVER_STATE);
    }, 450);
  };

  const buildMailtoHref = (payload: DriverFormState, code: string) => {
    const subject = encodeURIComponent(`Driver Application (${code}) — ${payload.name}`);
    const body = encodeURIComponent(
      [
        `Reference: ${code}`,
        `Applicant Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${payload.email}`,
        `CDL Experience (Years): ${payload.experienceYears}`,
        `License Class: ${payload.licenseClass}`,
        `Availability: ${payload.availability || 'Not specified'}`,
        `Notes / Resume Link: ${payload.notes || 'None'}`,
      ].join('\n')
    );
    return `${COMPANY_INFO.emailHref}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="d-name" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
          Full Name *
        </label>
        <input
          id="d-name"
          type="text"
          value={form.name}
          onChange={(e) => {
            setForm((p) => ({ ...p, name: e.target.value }));
            if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
          }}
          placeholder="First and last name"
          className="form-control"
          required
        />
        {errors.name && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="d-phone" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
            Phone Number *
          </label>
          <input
            id="d-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => {
              setForm((p) => ({ ...p, phone: e.target.value }));
              if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
            }}
            placeholder="(706) 555-0192"
            className="form-control"
            required
          />
          {errors.phone && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="d-email" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
            Email Address *
          </label>
          <input
            id="d-email"
            type="email"
            value={form.email}
            onChange={(e) => {
              setForm((p) => ({ ...p, email: e.target.value }));
              if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
            }}
            placeholder="driver@email.com"
            className="form-control"
            required
          />
          {errors.email && <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="d-experience" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
            Years of CDL Experience *
          </label>
          <input
            id="d-experience"
            type="number"
            min="0"
            value={form.experienceYears}
            onChange={(e) => {
              setForm((p) => ({ ...p, experienceYears: e.target.value }));
              if (errors.experienceYears) setErrors((p) => ({ ...p, experienceYears: undefined }));
            }}
            placeholder="e.g. 5"
            className="form-control"
            required
          />
          {errors.experienceYears && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.experienceYears}</p>
          )}
        </div>

        <div>
          <label htmlFor="d-license" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
            License Class *
          </label>
          <select
            id="d-license"
            value={form.licenseClass}
            onChange={(e) => {
              setForm((p) => ({ ...p, licenseClass: e.target.value }));
              if (errors.licenseClass) setErrors((p) => ({ ...p, licenseClass: undefined }));
            }}
            className="form-control"
            required
          >
            <option value="">Select CDL Class...</option>
            <option value="Class A">Class A CDL</option>
            <option value="Class B">Class B CDL</option>
            <option value="Other">Other</option>
          </select>
          {errors.licenseClass && (
            <p className="mt-1.5 text-xs text-red-600 font-medium">{errors.licenseClass}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="d-availability" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
          Availability
        </label>
        <input
          id="d-availability"
          type="text"
          value={form.availability}
          onChange={(e) => setForm((p) => ({ ...p, availability: e.target.value }))}
          placeholder="Immediate / 2 weeks notice"
          className="form-control"
        />
      </div>

      <div>
        <label htmlFor="d-notes" className="block text-xs font-mono uppercase tracking-widest text-foreground/80 font-semibold mb-2">
          Experience Notes or Resume Link
        </label>
        <textarea
          id="d-notes"
          rows={4}
          value={form.notes}
          onChange={(e) => setForm((p) => ({ ...p, notes: e.target.value }))}
          placeholder="Tandem dump truck, asphalt paving, quarry hauling experience, or link to resume..."
          className="form-control"
        />
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-foreground hover:bg-zinc-800 text-background font-bold text-base py-4 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-lg"
      >
        <Send size={18} />
        {status === 'sending' ? 'Preparing Application...' : 'Submit Driver Application'}
      </button>

      {status === 'success' && submittedPayload && (
        <div role="status" className="p-5 rounded-2xl border bg-emerald-50 border-emerald-200 text-emerald-950 space-y-3">
          <div className="flex items-start gap-3">
            <CheckCircle2 size={20} className="text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm">
                Application Prepared · Reference <span className="font-mono">{ticketCode}</span>
              </p>
              <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                Send your completed application directly to management or call the office to follow up.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-1">
            <a
              href={buildMailtoHref(submittedPayload, ticketCode)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold hover:bg-primary-hover transition-colors"
            >
              <Mail size={14} /> Email Application to {COMPANY_INFO.email}
            </a>
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-white text-foreground text-xs font-mono font-semibold hover:bg-secondary transition-colors"
            >
              <Phone size={14} /> Call {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </form>
  );
}
