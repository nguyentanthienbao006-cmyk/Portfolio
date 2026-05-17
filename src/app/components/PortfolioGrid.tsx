import { motion } from "motion/react";
import { useState } from "react";
import matchaWebsite from "../../imports/Screenshot_2026-05-16_173448.png";
import papercutArt from "../../imports/image-3.png";
import model3D from "../../imports/Screenshot_2026-05-17_150039.png";
import santaBranding from "../../imports/Screenshot_2025-12-16_174824.png";
import dragonModel from "../../imports/Screenshot_2026-04-07_194027.png";
import robinPoster from "../../imports/Minh_h_a_poster_phim.png";

interface PortfolioItem {
  id: number;
  title: string;
  category: "2D Design" | "3D Art" | "Branding";
  description: string;
  color: string;
  image?: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Matcha Strawberry Website",
    category: "2D Design",
    description: "Trang web đầu tiên được tạo ra với Photoshop & Illustrator",
    color: "#00a8ff",
    image: matchaWebsite
  },
  {
    id: 2,
    title: "Papercut Character Scene",
    category: "2D Design",
    description: "Tạo hình nhân vật theo phong cách papercut kết hợp AI",
    color: "#D4AF37",
    image: papercutArt
  },
  {
    id: 3,
    title: "Robin's Heist Poster",
    category: "2D Design",
    description: "Thiết kế poster phim với phong cách retro minimalist",
    color: "#E63926",
    image: robinPoster
  },
  {
    id: 4,
    title: "3D Character Model",
    category: "3D Art",
    description: "Mô hình nhân vật 3D đầu tiên được tạo trong Blender",
    color: "#00a8ff",
    image: model3D
  },
  {
    id: 5,
    title: "Dragon 3D Model",
    category: "3D Art",
    description: "Mô hình rồng 3D chi tiết với kỹ thuật sculpting và texturing",
    color: "#E63926",
    image: dragonModel
  },
  {
    id: 6,
    title: "Santa's Workshop",
    category: "Branding",
    description: "Hệ thống branding với 3D renders và thiết kế sản phẩm",
    color: "#D4AF37",
    image: santaBranding
  }
];

export function PortfolioGrid() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", "2D Design", "3D Art", "Branding"];

  const filteredItems = filter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="portfolio-section" className="min-h-screen py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-4 text-[#F5F2EB]">
            Tác Phẩm Sáng Tạo
          </h2>
          <p className="text-[#D4AF37] tracking-[0.2em] uppercase">Creative Portfolio</p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E63926] via-[#D4AF37] to-[#00a8ff] mx-auto mt-6" />
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 border rounded transition-all duration-300 ${
                filter === category
                  ? 'bg-[#D4AF37] text-[#050B0C] border-[#D4AF37]'
                  : 'bg-transparent text-[#E6DFD3] border-[#D4AF37] hover:border-[#E63926]'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg backdrop-blur-md bg-[rgba(11,29,32,0.15)]
                       border border-[#D4AF37] hover:border-[#E63926] transition-all duration-300
                       hover:shadow-[0_0_30px_rgba(230,57,38,0.3)] cursor-pointer"
              whileHover={{ y: -8 }}
            >
              {/* Card Header with image or accent color */}
              <div
                className="h-48 relative overflow-hidden"
                style={item.image ? {} : { background: `linear-gradient(135deg, ${item.color}20, ${item.color}40)` }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="text-6xl opacity-20"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.category === "2D Design" && "🎨"}
                      {item.category === "3D Art" && "🗿"}
                      {item.category === "Branding" && "✨"}
                    </motion.div>
                  </div>
                )}

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050B0C] via-transparent to-transparent opacity-60" />

                {/* Decorative pattern */}
                <svg className="absolute bottom-0 left-0 w-full opacity-30" viewBox="0 0 100 20">
                  <path d="M0,10 Q25,0 50,10 T100,10 L100,20 L0,20 Z" fill={item.color} />
                </svg>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <div className="text-xs tracking-widest mb-2" style={{ color: item.color }}>
                  {item.category.toUpperCase()}
                </div>
                <h3 className="text-xl mb-3 text-[#F5F2EB] group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-[#E6DFD3] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050B0C] via-transparent to-transparent
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
