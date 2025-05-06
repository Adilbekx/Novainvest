'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const newsData = [
  {
    id: 1,
    title: 'Открытие нового отделения',
    fullText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem10 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem10 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem10 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',
    shortText: 'Открытие нового отделения в центре города.',
    image: '/assets/news1.png',
  },
  {
    id: 2,
    title: 'Приём новых специалистов',
    fullText:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem25 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',
    shortText: 'Новые специалисты уже готовы вас принять.',
    image: '/assets/news1.png',
  },
  {
    id: 3,
    title: 'Новая система онлайн-записи',
    fullText:
      'Теперь записаться на приём стало ещё проще. Используйте наш обновлённый онлайн-сервис без ожидания.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem30 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',
    shortText: 'Обновлённая система записи работает 24/7.',
    image: '/assets/news1.png',
  },
];

export default function NewsSection() {
  const [mainNews, setMainNews] = useState(newsData[0]);
  const [otherNews, setOtherNews] = useState(newsData.slice(1));

  const handleReadMore = (id) => {
    const clicked = otherNews.find((n) => n.id === id);
    if (!clicked) return;
    const newOthers = [mainNews, ...otherNews.filter((n) => n.id !== id)];
    setMainNews(clicked);
    setOtherNews(newOthers);
  };

  return (
    <section className="min-h-screen py-20  to-teal-50">
      <div className="w-full max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Главная новость */}
        <div className="lg:col-span-2 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={mainNews.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 md:p-10 rounded-3xl shadow-2xl h-full flex flex-col "
            >
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[400px] mb-6 rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src={mainNews.image}
                  alt={mainNews.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  priority
                />
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 text-teal-800">
                {mainNews.title}
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-teal-300 scrollbar-track-teal-100">
                {mainNews.fullText}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Список новостей */}
        <div className="flex flex-col gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {otherNews.map((news) => (
              <motion.div
                key={news.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-5 rounded-2xl shadow-xl border border-teal-100 hover:shadow-2xl transition-all"
              >
                <div className="relative w-full h-32 sm:h-36 md:h-40 mb-3 rounded-xl overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-teal-700">
                  {news.title}
                </h3>
                <p className="text-sm text-gray-600 leading-snug">
                  {news.shortText}
                </p>
                <button
                  onClick={() => handleReadMore(news.id)}
                  className="mt-3 text-teal-600 text-sm font-semibold hover:underline"
                >
                  Читать подробнее →
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
