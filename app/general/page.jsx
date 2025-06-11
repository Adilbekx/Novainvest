'use client';
import { motion } from "framer-motion";
import { Building, Phone, Mail, Hospital, Activity } from "lucide-react";

export default function MissionPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-12">
      {/* Заголовок */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-[#20aa99] mb-4"
      >
        Общее положение о КГП на ПХВ «El Aman»
      </motion.h1>

      {/* Блок 1: Информация об учреждении */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-gradient-to-br from-[#e6f4f3] to-[#ffffff] p-8 rounded-2xl shadow-md"
      >
        <div className="flex items-center gap-3 mb-4 text-[#20aa99]">
          <Building className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Органы управления</h2>
        </div>
        <p className="text-gray-800 leading-relaxed">
          Учредителем является Акимат города Алматы. Права на имущество осуществляет Управление госактивов, а управление — Управление общественного здравоохранения г. Алматы.
        </p>

        <div className="mt-6">
          <div className="mb-2 font-semibold text-[#20aa99]">Юридический адрес:</div>
          <p>050060, Алматы, ул. Басенова, 2</p>

          <div className="mt-4 mb-2 font-semibold text-[#20aa99]">Электронная почта:</div>
          <p className="flex items-center gap-2"><Mail className="w-5 h-5" /> mail@gp17.kz</p>

          <div className="mt-4 mb-2 font-semibold text-[#20aa99]">Контакты:</div>
          <p className="flex items-center gap-2"><Phone className="w-5 h-5" /> Приемная: 337-83-38</p>
          <p className="flex items-center gap-2"><Phone className="w-5 h-5" /> Call-центр: 391-02-91</p>
        </div>
      </motion.section>

      {/* Блок 2: Общественная приёмная */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white p-8 rounded-2xl shadow-md"
      >
        <div className="flex items-center gap-3 mb-4 text-[#20aa99]">
          <Hospital className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Общественная приёмная</h2>
        </div>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-1">
          <li>Каб. 121 — Служба поддержки пациента и внутреннего аудита, тел.: 3378371</li>
          <li>Каб. 124 — Отделение профилактики, тел.: 3378366</li>
          <li>Каб. 203 — ВОП-2, тел.: 3378369</li>
          <li>Каб. 220 — Педиатрия, тел.: 3378372</li>
          <li>Каб. 306 — Специализированная помощь, тел.: 3378342</li>
          <li>Каб. 317 — ВОП-1, тел.: 3378348</li>
          <li>Каб. 405 — Администрация, тел.: 3378353</li>
          <li>Каб. 406 — Администрация, тел.: 3378339</li>
          <li>Каб. 419 — Женская консультация, тел.: 2465397</li>
        </ul>
      </motion.section>

      {/* Блок 3: Полное наименование */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-gradient-to-br from-[#f5fdfd] to-white p-8 rounded-2xl shadow-md"
      >
        <div className="flex items-center gap-3 mb-4 text-[#20aa99]">
          <Activity className="w-6 h-6" />
          <h2 className="text-2xl font-semibold">Наименование и деятельность</h2>
        </div>
        <p className="mb-4">
          <strong>На казахском языке:</strong> Алматы қаласы Қоғамдық денсаулық сақтау басқармасының шаруашылық жүргізу құқығындағы «№17 Қалалық емханасы» КМК.
        </p>
        <p className="mb-4">
          <strong>На русском языке:</strong> КГП на ПХВ «Городская поликлиника №17» Управления общественного здравоохранения города Алматы.
        </p>

        <p className="mb-4">
          <strong>Предмет деятельности:</strong> Оказание медицинских услуг, реализация государственных программ по охране здоровья.
        </p>
      </motion.section>

      {/* Блок 4: Виды деятельности */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-8 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-semibold text-[#20aa99] mb-4">Основные виды деятельности</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          <li>Скорая медицинская помощь</li>
          <li>Амбулаторно-поликлиническая помощь (взрослая и детская)</li>
          <li>Консультативно-диагностическая и стационарозамещающая помощь</li>
          <li>Диагностика: рентген, УЗИ, функциональная, эндоскопическая</li>
          <li>Лабораторные исследования: биохимия, иммунология, цитология и др.</li>
          <li>Специализированные услуги: акушерство, гинекология, терапия, хирургия, психиатрия, стоматология и др.</li>
          <li>Медицинская реабилитация, физиотерапия, спортмедицина</li>
          <li>Экспертиза временной нетрудоспособности и профпригодности</li>
          <li>Фармацевтическая деятельность в рамках ГОБМП</li>
          <li>Работа с наркотическими веществами, ионизирующим излучением</li>
        </ul>
      </motion.section>
    </div>
  );
}
