import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToTimeline = () => {
    document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero-section" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20">

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p className="text-[#D4AF37] tracking-[0.3em] mb-6 uppercase opacity-80">
            Creative Portfolio
          </p>

          <h1 className="text-6xl md:text-8xl mb-4 tracking-wide">
            <span className="text-[#F5F2EB]">NGUYỄN TẤN</span>
            <br />
            <span className="text-[#E63926]">THIÊN BẢO</span>
          </h1>

          <p className="text-[#E6DFD3] text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Sinh viên ngành Sáng tạo | Modern Ukiyo-e Artist
          </p>

          <motion.button
            onClick={scrollToTimeline}
            className="group px-8 py-4 border-2 border-[#D4AF37] rounded bg-transparent text-[#D4AF37]
                     hover:bg-[#D4AF37] hover:text-[#050B0C] transition-all duration-300
                     backdrop-blur-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2">
              Khám Phá Hành Trình
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

    </section>
  );
}
