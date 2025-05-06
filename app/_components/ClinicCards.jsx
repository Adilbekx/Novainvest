"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const clinics = [
  {
    name: "ЦСЗ Жаханова",
    address: "Алматы обл, Кызыл Кайрат, ул Жаханова",
    phone: "+7 727 744 8192",
    date: "Пн-Сб: 8:00 - 18:00",
    map: "https://yandex.kz/map-widget/v1/?ll=77.179232%2C43.309507&mode=whatshere&whatshere%5Bpoint%5D=77.178736%2C43.309416&whatshere%5Bzoom%5D=17&z=19.62",
  },
  {
    name: "ЦСЗ Ерай",
    address: "Алматы обл, Кызыл Кайрат, Ерай",
    phone: "+7 777 777 77 77",
    date: "Пн-Сб: 8:00 - 18:00",
    map: "https://yandex.kz/map-widget/v1/?ll=77.184784%2C43.304836&mode=whatshere&whatshere%5Bpoint%5D=77.184721%2C43.304643&whatshere%5Bzoom%5D=17&z=19.62",
  },
  {
    name: "ЦСЗ Байкент",
    address: "Алматы обл, Байкент",
    phone: "+7 777 777 77 77",
    date: "Пн-Сб: 8:00 - 18:00",
    map: "https://yandex.kz/map-widget/v1/?ll=76.814002%2C43.472199&mode=poi&poi%5Bpoint%5D=76.814075%2C43.472172&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D122586675370&z=20.8",
  },
  {
    name: "ЦСЗ ДОСТЫК",
    address: "Достык",
    phone: "+7 777 777 77 77",
    date: "Пн-Сб: 8:00 - 18:00",
    map: "https://yandex.kz/map-widget/v1/?ll=78.035598%2C43.557082&mode=whatshere&whatshere%5Bpoint%5D=78.036535%2C43.557263&whatshere%5Bzoom%5D=17&z=18.5",
  },
  {
    name: "ЦСЗ УЛТАРАКОВА",
    address: "Достык 2",
    phone: "+7 777 777 77 77",
    date: "Пн-Сб: 8:00 - 18:00",
    map: "https://yandex.kz/map-widget/v1/?ll=78.256215%2C43.583181&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgo1MjAzNzk3NDQ4EocB0prQsNC30LDSm9GB0YLQsNC9LCDQkNC70LzQsNGC0Ysg0L7QsdC70YvRgdGLLCDQldKj0LHQtdC60YjRltKb0LDQt9Cw0psg0LDRg9C00LDQvdGLLCDQqNC10LvQtdC6INCw0YPRi9C70YssINCQ0LHQsNC5INC606nRiNC10YHRliwgMdCRIgoNL4OcQhUuVS5C&z=16.65",
  },
];

const ClinicInfo = ({ clinic, onClose }) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 50 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="relative bg-white rounded-xl shadow-xl p-6 mt-10 max-w-3xl mx-auto">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-red-500 hover:bg-red-600 text-white flex items-center justify-center shadow-md transition duration-300"
        aria-label="Закрыть"
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4 text-[#20aa99]">{clinic.name}</h2>
      <p className="mb-2 text-gray-700">
        <strong className="text-[#20aa99]">📍 Адрес:</strong> {clinic.address}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-[#20aa99]">📞 Телефон:</strong> {clinic.phone}
      </p>
      <p className="mb-4 text-gray-700">
        <strong className="text-[#20aa99]">🗓️ График работы:</strong> {clinic.date}
      </p>
      <div className="map-container overflow-hidden rounded-xl border">
        <iframe
          src={clinic.map}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

const ClinicCards = () => {
  const [selectedClinic, setSelectedClinic] = useState(null);

  const handleCardClick = (clinic) => {
    setSelectedClinic(clinic);
  };

  const handleCloseModal = () => {
    setSelectedClinic(null);
  };

  return (
    <div className="container mx-auto py-10 md:py-20 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-12">
        Наши <span className="text-[#20aa99]">филиалы</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {clinics.map((clinic) => (
          <div
            key={clinic.name}
            className="card p-4 rounded-xl bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] text-gray-800 shadow-lg border hover:shadow-2xl hover:border-[#20aa99] transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick(clinic)}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full text-white flex items-center justify-center text-lg font-bold shadow">
                <Image src="/assets/logo.png" width={30} height={30} alt="clinic" />
              </div>
              <h3 className="text-lg font-semibold">{clinic.name}</h3>
            </div>
          </div>
        ))}
      </div>

      {selectedClinic && (
        <ClinicInfo clinic={selectedClinic} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ClinicCards;
