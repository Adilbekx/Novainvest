"use client";

import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { KeenSliderPlugin } from "keen-slider";
import { motion } from "framer-motion";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { X } from "lucide-react";
import "keen-slider/keen-slider.min.css";

// === Автоплей плагин ===
const Autoplay = (options = {}) => {
  return (slider) => {
    let timeout;
    let mouseOver = false;
    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, options.delay || 3000);
    }
    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
};

// === Данные карточек ===
const infoCards = [
  {
    title: "Государственные лицензии",
    description: "Медицинская деятельность лицензирована госорганами.",
    icon: "📜",
    pdf: "/licences/GosLi.pdf",
  },
  {
    title: "Сертификаты соответствия",
    description: "Сотрудники регулярно проходят сертификацию.",
    icon: "✅",
    pdf: "/pdfs/certificates.pdf",
  },
  {
    title: "Дипломы специалистов",
    description: "Все врачи имеют дипломы и профильное образование.",
    icon: "🎓",
    pdf: "/pdfs/diplomas.pdf",
  },
];

// === Сертификаты ===
const certificates = [
  { src: "/assets/licen1.png", alt: "Сертификат 1" },
  { src: "/assets/licen2.png", alt: "Сертификат 2" },
  { src: "/assets/licen1.png", alt: "Сертификат 3" },
  { src: "/assets/licen2.png", alt: "Сертификат 4" },
];

export default function LicensesPage() {
  const [selected, setSelected] = useState(null);
  const [sliderRef] = useKeenSlider(
    {
      loop: true,
      slides: { perView: 2, spacing: 16 },
      breakpoints: {
        "(min-width: 768px)": { perView: 3 },
        "(min-width: 1024px)": { perView: 4 },
      },
    },
    [Autoplay({ delay: 3000 })]
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center text-[#20aa99] mb-10"
      >
        Лицензии и дипломы
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-gray-700 max-w-3xl mx-auto text-lg mb-12"
      >
        Подтверждаем нашу компетентность официальными документами и наградами.
      </motion.p>

      {/* Карточки */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {infoCards.map((item, i) => (
          <a
            key={i}
            href={item.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold text-[#20aa99] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          </a>
        ))}
      </div>

      {/* Галерея */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-2xl font-semibold text-[#20aa99] text-center mb-6"
      >
        Автогалерея сертификатов
      </motion.h2>

      <div ref={sliderRef} className="keen-slider mb-10">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="keen-slider__slide bg-white rounded-xl overflow-hidden shadow-md cursor-pointer"
            onClick={() => setSelected(cert)}
          >
            <div className="w-full h-64 relative">
              <Image
                src={cert.src}
                alt={cert.alt}
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Модальное окно */}
      <Dialog
        open={!!selected}
        onClose={() => setSelected(null)}
        className="relative z-50"
      >
        <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="relative w-full max-w-5xl bg-white rounded-xl shadow-xl p-6">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>
            {selected && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-contain rounded-xl"
                />
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
