"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clinics = [
  {
    name: "ЦСЗ Кызыл Кайрат ",
    location: "р.Талгар ул.Кызыл Кайрат",
    phone: "+7 (727) 744-81-92",
    date: "Пн-Пт: 8:00 - 20:00",
    date2: "Сб: 8:00 - 14:00",
    map: "https://yandex.kz/map-widget/v1/?ll=77.179232%2C43.309507&mode=whatshere&whatshere%5Bpoint%5D=77.178736%2C43.309416&whatshere%5Bzoom%5D=17&z=19.62",
  },
  {
    name: "ЦСЗ Кызыл Кайрат Ерай",
    location: "р.Талгар ул.Кызыл Кайрат",
    phone: "+7 (727) 748-192",
    date: "Пн-Пт: 8:00 - 20:00",
    date2: "Сб: 8:00 - 14:00",
    map: "https://yandex.kz/map-widget/v1/?ll=77.184784%2C43.304836&mode=whatshere&whatshere%5Bpoint%5D=77.184721%2C43.304643&whatshere%5Bzoom%5D=17&z=19.62",
  },
  {
    name: "ЦСЗ Байкент",
    location: "Байкент",
    phone: "+7 (727) 527-80-01",
    date: "Пн-Пт: 8:00 - 20:00",
    date2: "Сб: 8:00 - 14:00",
    map: "https://yandex.kz/map-widget/v1/?ll=76.814077%2C43.472219&z=21",
  },
  {
    name: "ЦСЗ Достык",
    location: "Шелек",
    phone: "+7 (727) 747-45-17",
    date: "Пн-Пт: 8:00 - 20:00",
    date2: "Сб: 8:00 - 14:00",
    map: "https://yandex.kz/map-widget/v1/?ll=78.035598%2C43.557082&mode=whatshere&whatshere%5Bpoint%5D=78.036535%2C43.557263&whatshere%5Bzoom%5D=17&z=18.5",
  },
  {
    name: "ЦСЗ К.Ултаракова",
    location: "Шелек",
    phone: "+7 (705) 784-90-83",
    date: "Пн-Пт: 8:00 - 20:00",
    date2: "Сб: 8:00 - 14:00",
    map: "https://yandex.kz/map-widget/v1/?ll=78.256215%2C43.583181&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1MjAzNzk3NDQ4EocB0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0Ysg0L7QsdC70YvRgdGLLCDQldKj0LHQtdC60YjRltKb0LDQt9Cw0psg0LDRg9C00LDQvdGLLCDQqNC10LvQtdC6INCw0YPRi9C70YssINCQ0LHQsNC5INC606nRiNC10YHRliwgMdCRIgoNL4OcQhUuVS5C&z=16.65",
  },
];

const ContactPage = () => {
  const [selectedClinic, setSelectedClinic] = useState(null);

  const handleCardClick = (clinic) => {
    setSelectedClinic(clinic);
  };

  const handleCloseModal = () => {
    setSelectedClinic(null);
  };

  return (
    <div className="min-h-screen bg-[#f9fbfc] py-16 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-[#20aa99]">
        Контакты
      </h1>
      <p className="text-center text-lg text-gray-600 mb-16 max-w-2xl mx-auto">
        Ниже представлены филиалы нашей клиники. Нажмите на интересующий филиал,
        чтобы увидеть подробную информацию.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {clinics.map((clinic) => (
          <motion.div
            key={clinic.name}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-6"
            onClick={() => handleCardClick(clinic)}
          >
            <div className="flex items-start mb-4">
              <Image
                src="/assets/logo.png"
                alt="logo"
                width={40}
                height={40}
                className="mr-3 mt-1"
              />
              <div>
                <h3 className="text-lg font-semibold text-[#20aa99]">
                  {clinic.name}
                </h3>
                <p className="text-xs text-gray-500 ">
                   {clinic.location}
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600">{clinic.phone}</p>
            <p className="text-sm text-gray-600">{clinic.date}</p>
            <p className="text-sm text-gray-600">{clinic.date2}</p>
          </motion.div>
        ))}
      </div>

      {selectedClinic && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4"
        >
          <div className="bg-white rounded-2xl p-6 max-w-2xl w-full relative shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 bg-[#20aa99] text-white w-8 h-8 rounded-full flex items-center justify-center hover:bg-[#178d7f]"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-[#20aa99] mb-4">
              {selectedClinic.name}
            </h2>
            <p className="text-gray-700 mb-2">
              <strong>📍 Адрес:</strong> {selectedClinic.location}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>📞 Телефон:</strong> {selectedClinic.phone}
            </p>
            <p className="text-gray-700 mb-2">
              <strong>🗓️ График работы:</strong> {selectedClinic.date}
            </p>
            <p className="text-gray-700 mb-4">
              <strong>🗓️ График работы:</strong> {selectedClinic.date2}
            </p>
            <div className="overflow-hidden rounded-xl">
              <iframe
                src={selectedClinic.map}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ContactPage;
