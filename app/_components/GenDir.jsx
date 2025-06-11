'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function GenDir() {
  return (
    <section className="relative bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] py-16 px-6 md:px-20 rounded-xl overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">
        
        {/* Фото */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-white w-[220px] md:w-[260px] lg:w-[300px]">
            <Image
              src="/assets/gendir.jpg"
              width={300}
              height={400}
              alt="Генеральный директор"
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Текст */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-sm text-[#0f766e] font-semibold mb-2 uppercase tracking-wide">
            Генеральный директор
          </h2>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Карлыгаш Болатовна
          </h1>
          <div className="w-16 h-1 bg-[#0f766e] mb-4 mx-auto md:mx-0 rounded-full"></div>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Жители села нуждаются качественной медицинской помощи не меньше тех, кто живёт в городах. Сеть медицинских центров EL AMAN (бренд юридического лица ТОО «Нова Инвест») делает такую помощь доступной.
В наших клиниках сельские жители Алматинской области получают полный спектр медицинских услуг первичной медико-санитарной помощи в рамках гарантированного объема бесплатной медицинской помощи и обязательного социального медицинского страхования.
Здесь работают специалисты высокой квалификации, которые оказывают профилактические мероприятия, диагностируют и успешно лечат пациентов с различной патологией, предотвращают возникновение и развитие многих заболеваний. Обратите внимание: всю медицинскую помощь прикрепленному населению специалисты центра EL AMAN оказывают совершенно бесплатно!
          </p>
        </motion.div>
      </div>

      {/* Декоративные фоны */}
      <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#20aa99]/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#20aa99]/10 rounded-full blur-2xl z-0"></div>
    </section>
  );
}
