import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import fallenAngel from "../../imports/image-4.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: "Trang Chủ", id: "hero-section" },
    { label: "Hành Trình", id: "timeline-section" },
    { label: "Tác Phẩm", id: "portfolio-section" },
    { label: "Liên Hệ", id: "footer-section" }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[rgba(5,11,12,0.8)] border-b border-[#D4AF37]/30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo & Avatar */}
          <motion.div
            className="flex items-center gap-4"
            whileHover={{ scale: 1.02 }}
          >
            {/* Avatar */}
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.5)]">
              <img
                src={fallenAngel}
                alt="Thiên Bảo"
                className="w-full h-full object-cover"
                style={{ filter: "brightness(1.1) contrast(1.1)" }}
              />
            </div>

            {/* Name */}
            <div>
              <h1 className="text-xl text-[#F5F2EB] tracking-wide">
                Thiên Bảo
              </h1>
              <p className="text-xs text-[#D4AF37]">Creative Designer</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#E6DFD3] hover:text-[#D4AF37] transition-colors relative group"
                whileHover={{ y: -2 }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#D4AF37] p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 pb-4 border-t border-[#D4AF37]/30 pt-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[#E6DFD3] hover:text-[#D4AF37] transition-colors text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
}
