import { motion } from "motion/react";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { icon: Mail, label: "Email", href: "mailto:thienbaonguyen@example.com" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" }
  ];

  return (
    <footer id="footer-section" className="relative bg-[#050B0C] border-t border-[#D4AF37] py-12 overflow-hidden">
      <div className="absolute inset-0 starry-gif pointer-events-none -z-10" />
      {/* Background wave pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1440 200" preserveAspectRatio="none">
          <path
            d="M0,100 Q360,50 720,100 T1440,100 L1440,200 L0,200 Z"
            fill="#00a8ff"
            opacity="0.2"
          />
          <path
            d="M0,120 Q360,70 720,120 T1440,120 L1440,200 L0,200 Z"
            fill="#D4AF37"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-3 rainbow-text">
              NGUYỄN TẤN THIÊN BẢO
            </h3>
            <p className="text-[#E6DFD3] text-sm leading-relaxed">
              Modern Ukiyo-e Artist & Creative Designer
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#F5F2EB] mb-3">Khám Phá</h4>
            <ul className="space-y-2">
              {["Về Tôi", "Hành Trình", "Tác Phẩm", "Liên Hệ"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#E6DFD3] hover:text-[#D4AF37] transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[#F5F2EB] mb-3">Kết Nối</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 rounded-full border border-[#D4AF37] flex items-center justify-center
                             text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#050B0C] transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#D4AF37]/30 text-center">
          <p className="text-[#E6DFD3] text-sm">
            <span className="rainbow-text">NGUYỄN TẤN THIÊN BẢO</span> © 2024-2027. All rights reserved.
          </p>
          <p className="text-[#D4AF37] text-xs mt-2 italic">
            Designed with Modern Ukiyo-e aesthetics
          </p>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-[#E63926] opacity-20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-[#D4AF37] opacity-20" />
    </footer>
  );
}
