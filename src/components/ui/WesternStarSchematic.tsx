export function WesternStarSchematic({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="rounded-3xl bg-zinc-950 border border-white/10 p-6 md:p-10 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-1">
              FLEET SPEC · UNIT SERIES 01–11
            </span>
            <h4 className="font-display text-xl md:text-2xl font-bold tracking-tight text-white">
              Western Star 4700 — Tandem Axle Dump Configuration
            </h4>
          </div>
          <span className="font-mono text-xs px-3 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-medium uppercase tracking-wider">
            11 Active Units
          </span>
        </div>

        {/* Technical tandem dump truck profile illustration */}
        <svg
          viewBox="0 0 820 260"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Technical silhouette diagram of a Western Star 4700 tandem dump truck"
          className="w-full h-auto relative z-10"
        >
          {/* Ground datum line */}
          <line x1="28" y1="216" x2="792" y2="216" stroke="#3F3F46" strokeWidth="2" strokeDasharray="6 6" />

          {/* Dump Bed */}
          <path
            d="M84 52 H488 L508 158 H74 L84 52 Z"
            fill="#18181B"
            stroke="#F4F4F5"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Bed side ribs */}
          <line x1="158" y1="54" x2="154" y2="156" stroke="#52525B" strokeWidth="2" />
          <line x1="242" y1="54" x2="238" y2="156" stroke="#52525B" strokeWidth="2" />
          <line x1="326" y1="54" x2="322" y2="156" stroke="#52525B" strokeWidth="2" />
          <line x1="410" y1="54" x2="406" y2="156" stroke="#52525B" strokeWidth="2" />
          {/* Cab guard / tarp shield */}
          <path
            d="M488 52 L532 52 L520 74 L492 74"
            fill="#F2A900"
            fillOpacity="0.18"
            stroke="#F2A900"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Amber DOT stripe on dump body */}
          <rect x="86" y="138" width="414" height="5" fill="#F2A900" rx="1.5" />

          {/* Chassis rail */}
          <rect x="66" y="158" width="676" height="16" rx="3" fill="#27272A" stroke="#A1A1AA" strokeWidth="1.5" />

          {/* Hydraulic hoist cylinder callout */}
          <line x1="448" y1="158" x2="478" y2="112" stroke="#F2A900" strokeWidth="4" strokeLinecap="round" />

          {/* Cab & Hood (Western Star 4700 set-forward vocational profile) */}
          <path
            d="M524 158 V74 H622 L646 106 H726 C735 106 742 113 742 122 V158 H524 Z"
            fill="#18181B"
            stroke="#F4F4F5"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Windshield & side window */}
          <path
            d="M542 88 H614 L632 114 H542 V88 Z"
            fill="#27272A"
            stroke="#A1A1AA"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Vertical exhaust stack */}
          <path d="M514 158 V36 L528 24" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          {/* Door badge */}
          <rect x="556" y="124" width="54" height="22" rx="3" fill="#F2A900" fillOpacity="0.16" stroke="#F2A900" strokeWidth="1.25" />
          <text x="583" y="139" textAnchor="middle" fill="#F2A900" fontSize="10" fontFamily="IBM Plex Mono, monospace" fontWeight="600">
            JNS
          </text>

          {/* Front bumper & grille */}
          <rect x="736" y="142" width="14" height="24" rx="2" fill="#3F3F46" stroke="#D4D4D8" strokeWidth="1.5" />
          <line x1="734" y1="114" x2="734" y2="140" stroke="#F2A900" strokeWidth="2.5" strokeLinecap="round" />

          {/* Fuel tank under cab */}
          <rect x="448" y="168" width="96" height="24" rx="8" fill="#27272A" stroke="#71717A" strokeWidth="1.5" />

          {/* Tandem Rear Axles (2 rear drive axles) */}
          {[148, 256].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="184" r="32" fill="#09090B" stroke="#F4F4F5" strokeWidth="3" />
              <circle cx={cx} cy="184" r="17" fill="#27272A" stroke="#A1A1AA" strokeWidth="2" />
              <circle cx={cx} cy="184" r="6" fill="#F2A900" />
            </g>
          ))}

          {/* Front Steer Axle */}
          <circle cx="678" cy="184" r="32" fill="#09090B" stroke="#F4F4F5" strokeWidth="3" />
          <circle cx="678" cy="184" r="17" fill="#27272A" stroke="#A1A1AA" strokeWidth="2" />
          <circle cx="678" cy="184" r="6" fill="#F2A900" />

          {/* Dimension / axle callouts */}
          <line x1="148" y1="226" x2="256" y2="226" stroke="#F2A900" strokeWidth="1.5" />
          <circle cx="148" cy="226" r="2.5" fill="#F2A900" />
          <circle cx="256" cy="226" r="2.5" fill="#F2A900" />
          <text x="202" y="246" textAnchor="middle" fill="#A1A1AA" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            TANDEM DRIVE AXLES
          </text>
          <text x="678" y="246" textAnchor="middle" fill="#A1A1AA" fontSize="11" fontFamily="IBM Plex Mono, monospace">
            STEER AXLE
          </text>
        </svg>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-white/10">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 block">Model</span>
            <span className="text-sm font-semibold text-white">Western Star 4700</span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 block">Configuration</span>
            <span className="text-sm font-semibold text-white">Tandem Axle Dump</span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 block">Active Fleet</span>
            <span className="text-sm font-semibold text-primary">11 Identical Units</span>
          </div>
          <div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 block">Home Yard</span>
            <span className="text-sm font-semibold text-white">Columbus, GA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
