import { motion } from "motion/react";

export function BackgroundPattern() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050B0C] via-[#0B1D20] to-[#050B0C]" />

      {/* Ukiyo-e wave patterns */}
      <svg
        className="absolute inset-0 w-full h-full opacity-30"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {/* Flowing wave lines - inspired by Hokusai */}
        <path
          d="M0,400 Q100,380 150,400 T300,400 Q400,380 450,400 T600,400 Q700,380 750,400 T900,400"
          stroke="#D4AF37"
          strokeWidth="2"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M100,450 Q200,430 250,450 T400,450 Q500,430 550,450 T700,450 Q800,430 850,450 T1000,450"
          stroke="#E6DFD3"
          strokeWidth="1.5"
          fill="none"
          opacity="0.3"
        />
        <path
          d="M-50,500 Q50,480 100,500 T200,500 Q300,480 350,500 T500,500 Q600,480 650,500 T800,500"
          stroke="#00a8ff"
          strokeWidth="2"
          fill="none"
          opacity="0.2"
        />

        {/* Circular wave patterns */}
        {[
          { cx: 200, cy: 150, r: 80 },
          { cx: 1200, cy: 200, r: 100 },
          { cx: 400, cy: 700, r: 90 },
          { cx: 1100, cy: 650, r: 70 }
        ].map((circle, i) => (
          <g key={i} opacity="0.15">
            <circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r}
              stroke="#D4AF37"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r - 15}
              stroke="#E6DFD3"
              strokeWidth="1"
              fill="none"
            />
            <circle
              cx={circle.cx}
              cy={circle.cy}
              r={circle.r - 30}
              stroke="#00a8ff"
              strokeWidth="1"
              fill="none"
            />
          </g>
        ))}
      </svg>

      {/* Decorative flowers - top right */}
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 opacity-20"
        animate={{ rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          {/* Large chrysanthemum */}
          {[...Array(16)].map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="60"
              ry="15"
              fill="#E63926"
              opacity="0.6"
              transform={`rotate(${i * 22.5} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="20" fill="#D4AF37" />
        </svg>
      </motion.div>

      {/* Decorative flowers - bottom left */}
      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 opacity-20"
        animate={{ rotate: [0, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg viewBox="0 0 200 200" fill="none">
          {/* Medium chrysanthemum */}
          {[...Array(12)].map((_, i) => (
            <ellipse
              key={i}
              cx="100"
              cy="100"
              rx="50"
              ry="12"
              fill="#E63926"
              opacity="0.7"
              transform={`rotate(${i * 30} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="18" fill="#D4AF37" />
        </svg>
      </motion.div>

      {/* Cloud patterns */}
      <svg
        className="absolute top-40 left-1/4 w-96 h-64 opacity-10"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M50,100 Q70,80 100,90 Q130,70 160,90 Q190,80 220,100 Q200,120 170,110 Q140,130 110,110 Q80,120 50,100"
          fill="#F5F2EB"
          stroke="#D4AF37"
          strokeWidth="1"
        />
      </svg>

      <svg
        className="absolute bottom-40 right-1/4 w-96 h-64 opacity-10"
        viewBox="0 0 300 200"
        fill="none"
      >
        <path
          d="M80,120 Q100,100 130,110 Q160,90 190,110 Q220,100 240,120 Q220,140 190,130 Q160,150 130,130 Q100,140 80,120"
          fill="#E6DFD3"
          stroke="#D4AF37"
          strokeWidth="1"
        />
      </svg>

      {/* Flowing wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-64 opacity-20">
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <path
            d="M0,160 Q360,100 720,160 T1440,160 L1440,320 L0,320 Z"
            fill="url(#wave-bottom-gradient)"
          />
          <defs>
            <linearGradient id="wave-bottom-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00a8ff" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#E63926" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated flowing lines */}
      <motion.div
        className="absolute top-1/3 left-0 right-0"
        animate={{ x: [0, 100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 1440 100" className="w-full opacity-10">
          <path
            d="M0,50 Q200,30 400,50 T800,50 Q1000,30 1200,50 T1600,50"
            stroke="#D4AF37"
            strokeWidth="3"
            fill="none"
          />
        </svg>
      </motion.div>
    </div>
  );
}
