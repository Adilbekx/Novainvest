'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { question: 'Как записаться на приём к врачу?', answer: 'Вы можете записаться через регистратуру, по телефону или через наш сайт в разделе «Запись на приём».' },
  { question: 'Какие документы нужны для профосмотра?', answer: 'Необходимо предоставить удостоверение личности и направление от работодателя (если есть).' },
  { question: 'Можно ли пройти флюорографию без направления?', answer: 'Да, можно. Флюорография проводится на платной основе без направления.' },
  { question: 'Как узнать результаты обследования?', answer: 'Результаты можно получить в личном кабинете на сайте или по телефону регистратуры.' },
  { question: 'Есть ли возможность записи онлайн?', answer: 'Да, на нашем сайте доступна функция онлайн-записи.' },
  { question: 'Сколько стоит консультация специалиста?', answer: 'Стоимость зависит от выбранного специалиста и вида консультации.' },
  { question: 'Можно ли получить справку для работы?', answer: 'Да, справки выдаются после прохождения необходимого обследования.' },
  { question: 'Какие методы оплаты принимаются?', answer: 'Мы принимаем наличные, карты и безналичные переводы.' },
  { question: 'Работает ли клиника в выходные?', answer: 'Клиника работает по графику, уточняйте часы работы на сайте.' },
  { question: 'Есть ли у вас программы для детей?', answer: 'Да, у нас есть специальные программы для детского обследования.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-black tracking-wide">
        Часто задаваемые вопросы
      </h2>
      <div
        className="your-scroll-container max-h-[450px] overflow-y-auto space-y-6 px-3"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#20aa99 transparent',
        }}
      >
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 cursor-pointer select-none transition-shadow duration-300 hover:shadow-xl"
          >
            <button
              onClick={() => toggle(index)}
              className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-900"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
            >
              <span>{item.question}</span>
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-[#20aa99]" />
              ) : (
                <Plus className="w-6 h-6 text-[#20aa99]" />
              )}
            </button>
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              className={`mt-4 text-gray-700 text-base transition-max-height duration-500 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}
              style={{ willChange: 'max-height' }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
