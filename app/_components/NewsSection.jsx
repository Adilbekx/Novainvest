"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const newsData = [
  {
    id: 1,
    title: "Новый рентгенопрозрачный стол",
    fullText:
      "В нашей клинике установлено новое оборудование — рентгенопрозрачный стол, предназначенный для проведения флюорографии и рентгенологических исследований. Его поверхность не мешает прохождению рентгеновских лучей, что позволяет получать чёткие и точные снимки. Стол мобильный, устойчивый и легко дезинфицируется, что особенно важно для соблюдения санитарных норм. Это оборудование повышает комфорт для пациентов и эффективность работы медицинского персонала. Мы заботимся о качестве диагностики!",
    shortText:
      "В нашей клинике установлено новое оборудование — рентгенопрозрачный стол, предназначенный для проведения флюорографии",
    image: "/assets/NewsBl.jpeg",
  },
  {
    id: 2,
    title: "Конкурс среди филиалов!",
    fullText:
      "В нашей клинике прошёл яркий и вдохновляющий видеоконкурс среди всех 5 филиалов. Каждая команда сняла оригинальный ролик о своей работе, коллективе и атмосфере в филиале. Мы гордимся тем, насколько творчески подошли сотрудники к задаче — было весело, искренне и очень по-настоящему!",
    shortText: "Конкурс среди филиалов: энергия, креатив и командный дух!",
    image: "/assets/NewsBl2.jpg",
  },
];

export default function NewsSection() {
  const [featured, setFeatured] = useState(newsData[0]);
  const [isExpanded, setIsExpanded] = useState(false);

  const others = newsData.filter((n) => n.id !== featured.id);

  const handleChangeFeatured = (item) => {
    setFeatured(item);
    setIsExpanded(false); // сбрасываем при выборе другой новости
  };

  return (
    <section className="py-16 bg-[#f4fcfa]">
      {" "}
      <div className="max-w-7xl mx-auto px-6">
        {" "}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Клинические новости
        </h2>{" "}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured */}{" "}
          <AnimatePresence mode="wait">
            {" "}
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              {" "}
              <div className="relative h-72 lg:h-96">
                {" "}
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />{" "}
              </div>{" "}
              <div className="p-6 flex-1 flex flex-col">
                {" "}
                <h3 className="text-2xl font-bold text-[#20aa99] mb-4">
                  {featured.title}
                </h3>{" "}
                <p className="text-gray-700 flex-1 leading-relaxed">
                  {" "}
                  {isExpanded ? featured.fullText : featured.shortText}{" "}
                </p>{" "}
                <div className="mt-6 text-right">
                  {" "}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="border-[#20aa99] text-[#20aa99] hover:bg-[#20aa99]/10"
                  >
                    {" "}
                    {isExpanded ? "Скрыть" : "Читать полностью"}{" "}
                  </Button>{" "}
                </div>{" "}
              </div>{" "}
            </motion.div>{" "}
          </AnimatePresence>
          {/* Preview cards */}{" "}
          <div className="flex flex-col gap-4">
            {" "}
            {others.map((item) => (
              <div
                key={item.id}
                onClick={() => handleChangeFeatured(item)}
                className="flex items-center bg-white rounded-2xl shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 hover:shadow-lg"
              >
                {" "}
                <div className="relative w-20 h-20 flex-shrink-0 rounded-l-2xl overflow-hidden">
                  {" "}
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />{" "}
                </div>{" "}
                <div className="p-4 flex-1 flex flex-col justify-center">
                  {" "}
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>{" "}
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.shortText}
                  </p>{" "}
                </div>{" "}
              </div>
            ))}{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
}
