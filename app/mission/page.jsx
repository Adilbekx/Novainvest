'use client';
import { motion } from "framer-motion";

export default function MissionPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 ">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-[#20aa99] mb-10"
      >
        Миссия, Видение и Ценности
      </motion.h1>

      <div className="space-y-12 text-lg leading-relaxed text-gray-800">
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] shadow-md rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold text-[#20aa99] mb-4">Наша миссия</h2>
          <p>
            Предоставлять качественную, доступную и инновационную медицинскую помощь, 
            способствуя укреплению здоровья и благополучия каждого пациента.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] shadow-md rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold text-[#20aa99] mb-4">Наше видение</h2>
          <p>
            Стать лидером в области здравоохранения, внедряя современные технологии, 
            поддерживая высокий уровень профессионализма и заботы о пациентах.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] shadow-md rounded-2xl p-6"
        >
          <h2 className="text-2xl font-semibold text-[#20aa99] mb-4">Наши ценности</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Забота:</strong> Пациент в центре всего, что мы делаем.</li>
            <li><strong>Профессионализм:</strong> Постоянное развитие и обучение.</li>
            <li><strong>Ответственность:</strong> Честность и открытость в действиях.</li>
            <li><strong>Инновации:</strong> Использование передовых медицинских решений.</li>
            <li><strong>Командность:</strong> Сотрудничество ради общего блага.</li>
          </ul>
        </motion.section>
      </div>
    </div>
  );
}
