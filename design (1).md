# JNS Hauling LLC — Design System

**Client:** JNS Hauling LLC (Owner: Jeremy Gabrielson)
**Location:** 1254 Noland Dr, Columbus, GA 31907
**Service area:** Georgia & Alabama
**Brief date:** 7-21-2026

---

## 1. Grounding the brief

JNS isn't a consumer brand — it's a **DBE-certified dump truck outfit** that gets hired by general contractors and public-project bidders who need aggregate hauled (dirt, sand, aggregate, asphalt) reliably, on a fleet that can be verified at a glance. The site has exactly two jobs:

1. Convert a contractor/GC into a **quote request**.
2. Convert a driver into a **job application**.

Everything else — the DBE certification, the 2014 founding date, the fleet of 11 Western Star 4700 tandems — exists to make those two actions feel low-risk. This isn't a lifestyle brand; it's a **credentials-and-capacity** page. The design should read like a company that's been moving material since 2014, not like a startup's landing page.

Rejected defaults: cream/serif/terracotta (soft, editorial — wrong industry), near-black/acid-green (too tech/SaaS), broadsheet newspaper columns (too editorial for a trade site). Instead, the design should borrow from the actual vernacular of the hauling trade: **weigh tickets, DOT signage, manifest paperwork, stamped certifications.**

---

## 2. Color

Named palette, drawn from asphalt, aggregate, and DOT/safety signage — the literal materials JNS works in:

| Name | Hex | Use |
|---|---|---|
| **Asphalt** | `#1B1B1A` | Primary dark ground — header, footer, hero background |
| **Steel** | `#3F4448` | Secondary dark surface, card backgrounds on dark sections |
| **Haul Amber** | `#F2A900` | Primary accent — CTAs, active states, certification stamp. Pulled straight from DOT/road-crew signage, not a generic "brand orange" |
| **Aggregate Tan** | `#C9A876` | Warm secondary accent — dividers, ticket-paper details, icon fills |
| **Ticket Paper** | `#F3EFE7` | Light background — form sections, "manifest" panels |
| **Ink** | `#211F1C` | Body text on light backgrounds |

Amber is the only saturated color on the page — used sparingly enough that it reads as a stamp of authority (DOT-certified, DBE-certified) rather than decoration. No gradients. No soft pastel accents.

---

## 3. Typography

| Role | Typeface | Notes |
|---|---|---|
| **Display** | **Oswald** (700/600) | Condensed, road-sign-derived letterforms — the same visual family as highway signage and truck-door lettering. Set in tight tracking, uppercase for section labels |
| **Body** | **IBM Plex Sans** (400/500) | Neutral, legible workhorse — reads like equipment documentation, not marketing copy |
| **Utility/data** | **IBM Plex Mono** (500) | Reserved for anything that reads as a *number that matters*: phone number, established year, fleet count, DBE cert reference, tonnage/material specs. Monospace gives these the weight of a printed ticket |

Type scale is condensed-display-heavy at the top (hero headline in Oswald, tight leading, all-caps) and settles into plain, generous IBM Plex Sans body copy lower on the page. No script or decorative faces anywhere — this brand doesn't whisper.

---

## 4. Layout concept

Single long-scroll page (this is a lead-gen site, not a content site — one page keeps both conversion paths, quote and application, always one scroll away).

```
┌─────────────────────────────────────┐
│  HEADER: logo mark · phone · nav    │  sticky, asphalt bg
├─────────────────────────────────────┤
│  HERO                                │
│  "MOVING GEORGIA & ALABAMA          │
│   SINCE 2014"                        │  Oswald, huge, tight
│  [Get a Quote]  [Apply to Drive]     │  amber + outline btns
│  fleet photo/graphic, full bleed     │
├─────────────────────────────────────┤
│  TRUST STRIP (the Manifest)          │  ticket-styled data row
│  DBE CERTIFIED · EST. 2014 ·         │  IBM Plex Mono
│  11 TANDEMS · GA + AL                │
├─────────────────────────────────────┤
│  WHAT WE HAUL                        │  dirt/sand/aggregate/asphalt
│  4 material cards, icon + label      │
├─────────────────────────────────────┤
│  THE FLEET                           │
│  11 Western Star 4700 tandems        │  single strong fleet visual
│  + short capability copy             │
├─────────────────────────────────────┤
│  SERVICE AREA                        │  GA/AL — simple map or
│                                       │  two-state graphic device
├─────────────────────────────────────┤
│  REQUEST A QUOTE (form)              │  ticket-paper panel
├─────────────────────────────────────┤
│  DRIVE FOR JNS (application form)    │  ticket-paper panel
├─────────────────────────────────────┤
│  FOOTER: address, phone, email,      │  asphalt bg
│  Facebook, DBE cert line             │
└─────────────────────────────────────┘
```

No sequential numbered steps anywhere (01/02/03) unless something is genuinely a process — nothing here is. Materials and trust facts are presented as **parallel facts**, not a journey.

---

## 5. Signature element: The Manifest strip

The one memorable device on the page is a horizontal **"load ticket" strip** styled after an actual weigh/haul ticket — the paper every dispatcher, contractor, and driver in this industry already recognizes. It runs just under the hero:

```
TICKET NO. 0001   ESTABLISHED 2014   DBE CERTIFIED   FLEET: 11 TANDEMS   SERVICE: GA · AL
```

Set in IBM Plex Mono on an Asphalt or Ticket Paper strip with amber tick-marks between entries, like a stamped manifest. It's not decorative — every field on it is a real, load-bearing trust signal pulled straight from the brief. This single element does the work three separate "why choose us" badges would otherwise do, and it's specific to this business rather than a generic trust bar.

---

## 6. Imagery direction

Real photography of the actual fleet is ideal if Jeremy can supply it (11 Western Star 4700 tandems, job sites, loaded beds). Until then:

- Hero: a bold, high-contrast photo of a loaded dump truck / tandem rig (stock or AI-generated, warm dusty light, low angle — conveys scale and weight)
- Fleet section: a repeating truck-silhouette graphic (simple SVG) if no photography exists yet, styled in Steel/Asphalt
- Materials section: simple textured icon tiles for dirt, sand, aggregate, asphalt — not stock photography, keeps it clean and fast-loading
- Avoid: generic "handshake," "hard hat smiling at camera," or clip-art-style construction imagery. This audience trusts equipment and paperwork, not stock smiles.

---

## 7. Voice

Direct, plain, low on adjectives. A dispatcher's voice, not a marketer's.

- "Get a quote" not "Unlock your next project"
- "Apply to drive" not "Join our team of professionals"
- Lead with facts (established year, fleet size, certification, service area) before any persuasive copy
- Short sentences. No exclamation points.

---

## 8. Accessibility & responsiveness

- Amber-on-Asphalt and Ink-on-Ticket Paper both meet AA contrast for body text; verify amber-on-white CTA text separately (may need Ink text on amber buttons rather than white)
- Visible keyboard focus rings in amber
- Mobile: Manifest strip wraps to two rows rather than shrinking below legibility; hero headline drops one size step at mobile widths
- Forms: large tap targets, clear error states in the interface's own voice ("Enter a valid phone number" not "Invalid input")
- Respect `prefers-reduced-motion` — the only motion on the page should be a restrained hero fade-in and subtle hover states, nothing ambient or looping
