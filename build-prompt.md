# Lovable build prompt — JNS Hauling LLC

Paste this as a single `initial_message` when creating the Lovable project.

---

Build a one-page lead-generation website for **JNS Hauling LLC**, a DBE-certified dump truck hauling company based in Columbus, Georgia, serving Georgia and Alabama. Owner: Jeremy Gabrielson. This is a trade/industrial business site, not a consumer brand — the design should feel like it belongs to a company that's been moving material since 2014, grounded in the real vernacular of the hauling trade (weigh tickets, DOT signage, manifests), not a generic SaaS or agency template.

**Design system:**
- Colors: Asphalt `#1B1B1A` (primary dark), Steel `#3F4448` (secondary dark), Haul Amber `#F2A900` (the only saturated accent — CTAs and the trust strip), Aggregate Tan `#C9A876` (secondary accent/dividers), Ticket Paper `#F3EFE7` (light section backgrounds), Ink `#211F1C` (body text on light).
- Type: Oswald (700/600, condensed, uppercase) for headlines and section labels; IBM Plex Sans (400/500) for body copy; IBM Plex Mono (500) for anything numeric or credential-like — phone number, established year, fleet count, DBE reference.
- No gradients, no soft pastels, no stock "handshake"/hard-hat-smiling imagery. Amber should read like a stamp of certification, used sparingly.

**Page structure, top to bottom:**

1. **Sticky header** — JNS Hauling wordmark, click-to-call phone number `(706) 681-1765`, anchor nav linking to Fleet / Service Area / Get a Quote / Drive for Us.

2. **Hero** — Bold Oswald headline along the lines of "Moving Georgia & Alabama Since 2014," subheadline noting DBE-certified dump truck hauling of dirt, sand, aggregate, and asphalt. Two buttons: **Get a Quote** (filled amber, primary) and **Apply to Drive** (outlined, secondary), both jumping to their respective form sections. Full-bleed hero background image or graphic evoking a loaded tandem dump truck (use a strong stock or generated image with warm, dusty, low-angle lighting — no smiling stock people).

3. **Manifest strip** (the signature element) — a horizontal ticket/manifest-styled bar just under the hero, set in IBM Plex Mono on an Asphalt background with amber tick-mark dividers, reading something like: `TICKET NO. 0001 · ESTABLISHED 2014 · DBE CERTIFIED · FLEET: 11 TANDEMS · SERVICE: GA · AL`. This should look like a stamped weigh ticket, not a generic stat bar. Wrap to two rows on mobile rather than shrinking below legibility.

4. **What We Haul** — four simple cards (icon + one line each) for Dirt, Sand, Aggregate, Asphalt. Icon tiles, not stock photography.

5. **The Fleet** — a section on the fleet of 11 Western Star 4700 tandem dump trucks, with a short paragraph on capacity and reliability. Use a truck silhouette graphic if no real photography is supplied.

6. **Service Area** — Georgia and Alabama, presented with a simple two-state visual or list (use placeholder note that specific counties/cities can be added later).

7. **Request a Quote** — form on a Ticket Paper background panel with fields: Name, Company (optional), Phone, Email, Project location, Material needed (multi-select: dirt / sand / aggregate / asphalt), Estimated timeline, Notes. On submit, save to a Supabase table called `quote_requests` (include a `created_at` timestamp and a `status` field defaulting to `new`) and send a notification email to `jandshauling@icloud.com`.

8. **Drive for JNS** — application form on a Ticket Paper background panel with fields: Name, Phone, Email, Years of CDL experience, License class, Availability, Notes. On submit, save to a Supabase table called `driver_applications` (same `created_at`/`status` pattern) and send a notification email to `jandshauling@icloud.com`.

9. **Footer** — Asphalt background, with: address `1254 Noland Dr, Columbus, GA 31907`, phone `(706) 681-1765`, email `jandshauling@icloud.com`, a Facebook icon link, a line noting DBE certification, and copyright.

**Technical requirements:**
- Set up Supabase and create both tables as described above with working form submission, validation (required fields, phone/email format), and error states written in plain, direct language (e.g. "Enter a valid phone number").
- Add `LocalBusiness` JSON-LD schema with name, address, phone, email, service area (Georgia, Alabama), and founding date (2014). Title tag: "JNS Hauling LLC | DBE Certified Dump Truck Hauling — Columbus, GA". Meta description should lead with the DBE certification and service area.
- Fully responsive down to mobile, visible keyboard focus states in amber, and respect `prefers-reduced-motion` — keep motion to a restrained hero fade-in and simple hover states only, no ambient/looping animation.
- Copy throughout should be plain and direct (a dispatcher's voice, not a marketer's) — lead with facts (established 2014, DBE certified, 11-truck fleet, GA/AL service area) before any persuasive language, and don't invent testimonials, staff bios, or statistics not provided here.
