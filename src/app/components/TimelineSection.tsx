import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import matchaWebsite from "../../imports/Screenshot_2026-05-16_173448.png";
import papercutArt from "../../imports/image-3.png";
import model3D from "../../imports/Screenshot_2026-05-17_150039.png";

interface TimelineStage {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  flowerStage: "seed" | "sprout" | "bud" | "bloom";
  image?: string;
}

const stages: TimelineStage[] = [
  {
    year: "2024",
    title: "PHOTOSHOP & ILLUSTRATOR",
    subtitle: "Beginning with Design Tools",
    description: "Bắt đầu với Photoshop và Illustrator, tạo ra trang web đầu tiên.",
    flowerStage: "seed",
    image: matchaWebsite
  },
  {
    year: "2025",
    title: "TIẾP CẬN AI & PAPERCUT",
    subtitle: "AI Character Creation",
    description: "Tiếp cận với AI và tạo hình các nhân vật theo phong cách papercut.",
    flowerStage: "sprout",
    image: papercutArt
  },
  {
    year: "2026",
    title: "MÔ HÌNH 3D ĐẦU TIÊN",
    subtitle: "3D Character Modeling",
    description: "Tiếp cận với các mô hình nhân vật 3D và tự tạo cho mình mô hình 3D đầu tiên.",
    flowerStage: "bud",
    image: model3D
  },
  {
    year: "2027",
    title: "CUỘC HÀNH TRÌNH MỚI",
    subtitle: "New Adventures Ahead",
    description: "Khám phá những chân trời mới trong thiết kế và sáng tạo nghệ thuật.",
    flowerStage: "bloom"
  }
];

function TimelineCard({ stage, index }: { stage: TimelineStage; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const isLeft = index % 2 === 0;

  const getBorderColor = () => {
    switch (stage.flowerStage) {
      case "seed":
        return "#00a8ff";
      case "sprout":
        return "#D4AF37";
      case "bud":
        return "#D4AF37";
      case "bloom":
        return "#E63926";
      default:
        return "#00a8ff";
    }
  };

  return (
    <motion.div
      ref={ref}
      className={`flex items-center gap-8 mb-24 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Content Card */}
      <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
        <motion.div
          className="rounded-lg backdrop-blur-md bg-[rgba(11,29,32,0.15)] border border-[#D4AF37]
                     hover:border-[#E63926] transition-all duration-300 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]
                     overflow-hidden"
          whileHover={{ scale: 1.02 }}
        >
          {/* Image Section */}
          {stage.image ? (
            <div className="relative h-48 overflow-hidden">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D20] via-transparent to-transparent" />
            </div>
          ) : stage.year === "2027" ? (
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#E63926] via-[#D4AF37] to-[#00a8ff]">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  {/* Decorative pattern for new journey */}
                  <circle cx="60" cy="60" r="40" stroke="#F5F2EB" strokeWidth="2" opacity="0.3" />
                  <circle cx="60" cy="60" r="30" stroke="#F5F2EB" strokeWidth="2" opacity="0.5" />
                  <circle cx="60" cy="60" r="20" stroke="#F5F2EB" strokeWidth="2" opacity="0.7" />
                  <path d="M60 20 L65 55 L60 60 L55 55 Z" fill="#F5F2EB" opacity="0.8" />
                  <text x="60" y="70" textAnchor="middle" fill="#F5F2EB" fontSize="24" fontWeight="bold">?</text>
                </svg>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D20] via-transparent to-transparent opacity-60" />
            </div>
          ) : null}

          {/* Text Content */}
          <div className="p-8">
            <div className="text-[#00a8ff] tracking-[0.2em] mb-2">{stage.year}</div>
            <h3 className="text-2xl mb-1 text-[#F5F2EB]">{stage.title}</h3>
            <p className="text-sm text-[#D4AF37] mb-4 italic">{stage.subtitle}</p>
            <p className="text-[#E6DFD3] leading-relaxed">{stage.description}</p>
          </div>
        </motion.div>
      </div>

      {/* Timeline Node */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="w-32 h-32 rounded-full flex items-center justify-center relative"
          style={{
            border: `3px solid ${getBorderColor()}`,
            boxShadow: `0 0 30px ${getBorderColor()}80`,
            backgroundColor: "#0B1D20"
          }}
          animate={isInView ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
        >
          <FlowerIcon stage={stage.flowerStage} color={getBorderColor()} />
        </motion.div>
      </div>

      {/* Spacer */}
      <div className="flex-1" />
    </motion.div>
  );
}

// SVG Icons based on uploaded images
function FlowerIcon({ stage, color }: { stage: string; color: string }) {
  switch (stage) {
    case "seed":
      // Simple seed with sprouting hint
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="50" r="10" fill={color} opacity="0.3" />
          <circle cx="40" cy="50" r="6" fill={color} opacity="0.6" />
          <circle cx="40" cy="50" r="3" fill={color} />
          <path d="M35 48 Q40 30 45 48" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
        </svg>
      );

    case "sprout":
      // Two leaves sprouting (image-2.png style)
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 60 L40 35" stroke={color} strokeWidth="2.5" />
          {/* Left leaf */}
          <path
            d="M40 45 Q30 40 25 35 Q28 42 40 45"
            fill={color}
            opacity="0.7"
            stroke={color}
            strokeWidth="1"
          />
          {/* Right leaf */}
          <path
            d="M40 45 Q50 40 55 35 Q52 42 40 45"
            fill={color}
            opacity="0.7"
            stroke={color}
            strokeWidth="1"
          />
          <circle cx="40" cy="60" r="3" fill={color} />
        </svg>
      );

    case "bud":
      // Growing leaves (image-1.png style - tall elegant leaves)
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 65 L40 20" stroke={color} strokeWidth="2" />
          {/* Center tall leaf */}
          <ellipse cx="40" cy="30" rx="8" ry="20" fill={color} opacity="0.5" stroke={color} strokeWidth="1" />
          {/* Left leaf */}
          <ellipse cx="32" cy="40" rx="6" ry="16" fill={color} opacity="0.4" stroke={color} strokeWidth="1" transform="rotate(-15 32 40)" />
          {/* Right leaf */}
          <ellipse cx="48" cy="40" rx="6" ry="16" fill={color} opacity="0.4" stroke={color} strokeWidth="1" transform="rotate(15 48 40)" />
        </svg>
      );

    case "bloom":
      // Lotus flower (image.png style)
      return (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          {/* Outer petals */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <ellipse
              key={`outer-${i}`}
              cx="40"
              cy="40"
              rx="15"
              ry="8"
              fill={color}
              opacity="0.6"
              transform={`rotate(${angle} 40 40)`}
            />
          ))}
          {/* Inner petals */}
          {[30, 90, 150, 210, 270, 330].map((angle, i) => (
            <ellipse
              key={`inner-${i}`}
              cx="40"
              cy="40"
              rx="12"
              ry="6"
              fill={color}
              opacity="0.8"
              transform={`rotate(${angle} 40 40)`}
            />
          ))}
          {/* Center */}
          <circle cx="40" cy="40" r="6" fill={color} />
          <circle cx="40" cy="40" r="3" fill="#F5F2EB" opacity="0.5" />
        </svg>
      );

    default:
      return null;
  }
}


export function TimelineSection() {
  return (
    <section id="timeline-section" className="min-h-screen py-20 px-4 relative overflow-hidden">

      <div className="max-w-5xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#F5F2EB]">
            Giai Đoạn Học Tập & Trải Nghiệm
          </h2>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase">Learning & Experience Journey</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00a8ff] via-[#D4AF37] to-[#E63926] mx-auto mt-6" />
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-1/2 top-48 bottom-0 w-0.5 bg-gradient-to-b from-[#00a8ff] via-[#D4AF37] to-[#E63926]
                      shadow-[0_0_10px_rgba(0,168,255,0.5)]" />

        {/* Timeline Stages */}
        <div className="relative">
          {stages.map((stage, index) => (
            <TimelineCard key={stage.year} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
