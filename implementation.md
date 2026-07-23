# JNS Hauling LLC — Implementation Plan

Companion to `design.md`. This covers structure, content mapping, forms/data, SEO, and build sequence.

---

## 1. Stack

- **Platform:** Lovable (React + Vite + Tailwind, per established workflow)
- **Backend:** Supabase (via Lovable native integration) — needed because the site must accept two kinds of submissions (quotes, driver applications) that Jeremy can review, not just fire-and-forget emails
- **Fonts:** Oswald, IBM Plex Sans, IBM Plex Mono (Google Fonts)
- **Single page, one route** — this is a lead-gen site, not a multi-page marketing site. Anchor-link nav only (`#quote`, `#fleet`, `#apply`, `#contact`)

---

## 2. Content mapping (brief → sections)

| Brief line | Where it lives on the site |
|---|---|
| Established 2014, Columbus GA | Manifest strip + About/trust copy |
| DBE Certified | Manifest strip (prominent) + footer + dedicated trust callout — this is the single most important credibility signal for a GC evaluating subcontractors |
| Services GA and AL | Manifest strip + Service Area section |
| Hauls dirt, sand, aggregate, asphalt | "What We Haul" material cards |
| Accepts quotes from site | Quote request form (primary CTA) |
| Accepts applications from site | Driver application form (secondary CTA) |
| Phone / email / address | Header (phone, click-to-call), Footer (full contact block), Contact section |
| Facebook | Footer icon link |
| Fleet of 11 Western Star 4700 tandems | Manifest strip + dedicated Fleet section |

No content in the brief is decorative filler — every line above maps to a visible, real element. Where copy is needed beyond these facts (section intros, form microcopy, meta descriptions), write in the plain/direct voice from `design.md` §7 — don't invent testimonials, staff bios, or stats not in the brief.

---

## 3. Page sections (build order)

1. **Header** — logo/wordmark, click-to-call phone number, anchor nav (Fleet / Service Area / Get a Quote / Drive for Us), sticky on scroll
2. **Hero** — headline ("Moving Georgia & Alabama Since 2014" or similar), subhead (DBE certified dump truck hauling — dirt, sand, aggregate, asphalt), two CTAs: **Get a Quote** (amber, primary) and **Apply to Drive** (outline, secondary)
3. **Manifest strip** — the signature ticket-styled trust bar (see design.md §5)
4. **What We Haul** — 4 cards: Dirt, Sand, Aggregate, Asphalt. Icon + one line each
5. **The Fleet** — fleet count (11), truck model (Western Star 4700, tandem), one paragraph on capacity/reliability
6. **Service Area** — GA + AL, simple two-state visual or list of primary counties/regions if Jeremy provides them (not in brief — placeholder text only, flag for Jeremy to confirm specific counties/cities served)
7. **Request a Quote** (form) — see §4
8. **Drive for JNS** (form) — see §4
9. **Footer** — address, phone, email, Facebook link, DBE certification line, copyright

---

## 4. Forms & data

### Quote request form
Fields: Name, Company (optional), Phone, Email, Project location, Material needed (dirt/sand/aggregate/asphalt — multi-select), Estimated timeline, Notes.

### Driver application form
Fields: Name, Phone, Email, Years of CDL experience, License class, Availability, Notes/resume link.

### Data handling
- Supabase table `quote_requests` and `driver_applications`, each with a `created_at` timestamp and `status` field (`new` / `contacted` / `closed`) so Jeremy has a lightweight pipeline rather than a pile of emails
- On submit: write to Supabase **and** send a notification email to `jandshauling@icloud.com` (Lovable/Supabase edge function or a simple email integration) so Jeremy doesn't have to log in to see new leads
- No public-facing admin dashboard in v1 — keep scope tight. If Jeremy wants to review submissions later, a simple password-gated `/admin` view reading both tables is a clean v2 addition, not required for launch
- Standard client + server-side validation: required fields, phone format, email format

---

## 5. SEO / local search

This is a local trade business competing for "dump truck company near me" / "aggregate hauling Columbus GA" type searches, and for GC searches specifically for **DBE-certified** haulers.

- `LocalBusiness` (or more specifically `MovingCompany`/`GeneralContractor`-adjacent schema — use `LocalBusiness` with `additionalType` noting DBE certification) JSON-LD with: name, address, phone, email, service area (GA, AL), founding date (2014)
- Title tag: something like "JNS Hauling LLC | DBE Certified Dump Truck Hauling — Columbus, GA"
- Meta description leading with DBE certification + service area, since that's the highest-intent differentiator
- H1 = hero headline, not a hidden SEO string
- Alt text on all truck/material imagery describing the actual content (not keyword-stuffed)
- NAP (name/address/phone) consistent, verbatim, in header/footer/schema — important for local pack ranking

---

## 6. Trust & compliance notes to flag for Jeremy

These aren't in the brief but should be confirmed before launch, since they materially affect the design/copy:

- **DBE certification number/issuing agency** — if Jeremy can provide the certifying body (e.g., GDOT) and cert number, display it explicitly; a bare "DBE Certified" claim is weaker than a verifiable one
- **DOT/MC number** for the fleet, if applicable — trucking sites conventionally show this in the footer
- **Specific counties/cities served in GA and AL** — brief only says "GA and AL"; a named list (even 5–6 places) reads far more credible than the state names alone
- **Real fleet/job-site photography** — flagged in design.md §6; placeholder imagery should be swapped for real photos as soon as available

---

## 7. Build sequence checklist

- [ ] Set up Lovable project, install Google Fonts (Oswald, IBM Plex Sans, IBM Plex Mono)
- [ ] Build static sections top to bottom per §3, using tokens from design.md §2–3
- [ ] Build Manifest strip signature component
- [ ] Provision Supabase, create `quote_requests` and `driver_applications` tables
- [ ] Wire both forms to Supabase with validation
- [ ] Add email notification on new submission
- [ ] Add JSON-LD LocalBusiness schema + meta tags
- [ ] Mobile pass: verify Manifest strip wraps correctly, forms are usable one-handed, tap targets are large enough
- [ ] Accessibility pass: contrast check on amber CTAs, keyboard focus states, reduced-motion check
- [ ] Swap placeholder imagery/copy for real fleet photos and confirmed service-area list once Jeremy provides them
