import { motion, useReducedMotion } from 'framer-motion';

export function ServiceCorridorMap({
  activeState,
  onSelectState,
}: {
  activeState: 'georgia' | 'alabama';
  onSelectState?: (state: 'georgia' | 'alabama') => void;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-3xl bg-zinc-950 text-white p-6 md:p-10 border border-white/10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-primary block mb-1">
            REGIONAL DISPATCH CORRIDOR
          </span>
          <h4 className="font-display text-xl md:text-2xl font-bold">
            Chattahoochee Valley Border Hub
          </h4>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onSelectState?.('alabama')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              activeState === 'alabama'
                ? 'bg-primary text-primary-foreground font-semibold'
                : 'bg-white/10 text-zinc-300 hover:bg-white/15'
            }`}
          >
            Alabama
          </button>
          <button
            type="button"
            onClick={() => onSelectState?.('georgia')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
              activeState === 'georgia'
                ? 'bg-primary text-primary-foreground font-semibold'
                : 'bg-white/10 text-zinc-300 hover:bg-white/15'
            }`}
          >
            Georgia
          </button>
        </div>
      </div>

      <svg
        viewBox="0 0 640 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Schematic dispatch map showing JNS Hauling serving Alabama and Georgia from Columbus, GA"
        className="w-full h-auto relative z-10"
      >
        {/* Alabama stylized state polygon (left) */}
        <motion.path
          d="M84 42 H262 L274 148 L294 218 L286 306 H134 L122 336 L84 320 L84 42 Z"
          animate={{
            fill: activeState === 'alabama' ? 'rgba(242, 169, 0, 0.16)' : 'rgba(255, 255, 255, 0.04)',
            stroke: activeState === 'alabama' ? '#F2A900' : '#52525B',
          }}
          transition={{ duration: 0.35 }}
          strokeWidth="2.2"
          strokeLinejoin="round"
          className="cursor-pointer"
          onClick={() => onSelectState?.('alabama')}
        />

        {/* Georgia stylized state polygon (right) */}
        <motion.path
          d="M276 42 H444 L542 172 L516 282 L494 326 L310 318 L298 220 L278 150 L276 42 Z"
          animate={{
            fill: activeState === 'georgia' ? 'rgba(242, 169, 0, 0.16)' : 'rgba(255, 255, 255, 0.04)',
            stroke: activeState === 'georgia' ? '#F2A900' : '#52525B',
          }}
          transition={{ duration: 0.35 }}
          strokeWidth="2.2"
          strokeLinejoin="round"
          className="cursor-pointer"
          onClick={() => onSelectState?.('georgia')}
        />

        {/* Chattahoochee border river accent */}
        <path
          d="M272 128 L294 218 L290 306"
          stroke="#71717A"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />

        {/* Dispatch routes radiating from Columbus, GA (x:294, y:214) */}
        <g stroke="#F2A900" strokeOpacity="0.65" strokeWidth="1.75" strokeDasharray="5 5">
          {/* Columbus -> Auburn/Opelika & I-85 AL */}
          <line x1="294" y1="214" x2="236" y2="170" />
          {/* Columbus -> Montgomery/Central AL */}
          <line x1="294" y1="214" x2="188" y2="218" />
          {/* Columbus -> LaGrange / I-185 North */}
          <line x1="294" y1="214" x2="316" y2="144" />
          {/* Columbus -> Macon / Central GA */}
          <line x1="294" y1="214" x2="404" y2="188" />
          {/* Columbus -> South GA corridor */}
          <line x1="294" y1="214" x2="362" y2="274" />
        </g>

        {/* Regional Nodes */}
        {[
          { x: 236, y: 170, label: 'Auburn / Opelika', align: 'end' as const, dx: -10, dy: -8 },
          { x: 188, y: 218, label: 'Central AL', align: 'end' as const, dx: -10, dy: 4 },
          { x: 316, y: 144, label: 'West GA / I-185', align: 'start' as const, dx: 10, dy: -6 },
          { x: 404, y: 188, label: 'Central GA', align: 'start' as const, dx: 10, dy: 4 },
          { x: 362, y: 274, label: 'SW Georgia', align: 'start' as const, dx: 10, dy: 4 },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r="4.5" fill="#18181B" stroke="#F2A900" strokeWidth="2" />
            <text
              x={node.x + node.dx}
              y={node.y + node.dy}
              textAnchor={node.align}
              fill="#D4D4D8"
              fontSize="11"
              fontFamily="IBM Plex Mono, monospace"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Columbus HQ Marker */}
        {!shouldReduceMotion && (
          <motion.circle
            cx="294"
            cy="214"
            r="16"
            fill="none"
            stroke="#F2A900"
            strokeWidth="1.5"
            initial={{ scale: 0.7, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
            style={{ transformOrigin: '294px 214px' }}
          />
        )}
        <circle cx="294" cy="214" r="7" fill="#F2A900" stroke="#09090B" strokeWidth="2.5" />
        <rect x="228" y="228" width="132" height="24" rx="12" fill="#09090B" stroke="#F2A900" strokeWidth="1.2" />
        <text
          x="294"
          y="244"
          textAnchor="middle"
          fill="#F2A900"
          fontSize="10.5"
          fontFamily="IBM Plex Mono, monospace"
          fontWeight="600"
        >
          COLUMBUS, GA · HQ
        </text>

        {/* State Labels */}
        <text x="176" y="92" textAnchor="middle" fill="#A1A1AA" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="2">
          ALABAMA
        </text>
        <text x="394" y="92" textAnchor="middle" fill="#A1A1AA" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="2">
          GEORGIA
        </text>
      </svg>
    </div>
  );
}
