'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react'; // Иконка для эстетики

const items = [
  {
    id: 1,
    title: 'КТО ПОДЛЕЖИТ ФЛЮОРОГРАФИЧЕСКОМУ ОБСЛЕДОВАНИЮ?',
    image: '/assets/prof1.jpg',
  },
  {
    id: 2,
    title: 'ПРОФОСМОТРЫ ДЕТЕЙ ДО 18 ЛЕТ',
    image: '/assets/prof2.jpg',
  },
  {
    id: 3,
    title: 'ПОРЯДОК ПРОВЕДЕНИЯ ПРОФОСМОТРОВ ДЕТЕЙ ДО 18 ЛЕТ',
    image: '/assets/prof3.jpg',
  },
  {
    id: 4,
    title: 'ПРОФОСМОТРЫ ДЕТЕЙ ДО 18 ЛЕТ - КВАЛИФИЦИРОВАННЫЙ ЭТАП',
    image: '/assets/prof4.jpg',
  },
  {
    id: 5,
    title: 'ПРОФОСМОТРЫ ДЕТЕЙ ДО 18 ЛЕТ - СПЕЦИАЛИЗИРОВАННЫЙ ЭТАП',
    image: '/assets/prof5.jpg',
  },
  {
    id: 6,
    title: 'ПРОФОСМОТРЫ ДЕТЕЙ ДО 18 ЛЕТ - ЗАКЛЮЧИТЕЛЬНЫЙ ЭТАП',
    image: '/assets/prof6.jpg',
  },
];

export default function ScreeningPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.h1
        className="text-4xl font-extrabold text-black text-center mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Скрининг / Профосмотр
      </motion.h1>

      <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        Скрининги и профосмотры направлены на раннее выявление заболеваний и профилактику.
      </p>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.id}
            className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            onClick={() => setSelected(item)}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <div className="relative h-60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:blur-sm transition duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <Eye className="text-white w-8 h-8" />
              </div>
            </div>
            <div className="bg-white p-5">
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <Dialog
        open={selected !== null}
        onClose={() => setSelected(null)}
        className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
      >
        {selected && (
          <Dialog.Panel className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-xl">
            <div className="relative w-full h-[500px]">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain"
              />
            </div>
            <div className="p-6">
              <Dialog.Title className="text-xl font-bold text-black mb-2">
                {selected.title}
              </Dialog.Title>
              <button
                onClick={() => setSelected(null)}
                className="text-[#20aa99] font-semibold hover:underline"
              >
                Закрыть
              </button>
            </div>
          </Dialog.Panel>
        )}
      </Dialog>
    </div>
  );
}
