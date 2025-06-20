'use client';

import { useState } from 'react';
import DoctorCard from '@/app/_components/Doctors/DoctorCard';
import { motion } from 'framer-motion';

const branches = [
  {
    id: 'kyzyl',
    name: 'ЦСЗ Кызыл Кайрат',
    doctors: [
      { id: 1, name: 'Акжигитова Гулим Мухамед-Алиевна', specialization: 'Врач общей практики', experience: '8 лет опыта', photo: '/assets/doc1-1.png' },
      { id: 2, name: 'Кожекенова Лаура Машраповна', specialization: 'Врач дневного стационара', experience: '5 лет опыта', photo: '/assets/doc1-2.png' },
      { id: 3, name: 'Ахметова Эльвира Мухамеджановна', specialization: 'Врач общей практики', experience: '10 лет опыта', photo: '/assets/doc1-3.png' },
      { id: 4, name: 'Айтбаева Айгуль Кенесовна', specialization: 'УЗИ', experience: '3 года', photo: '/assets/doc1-4.png' },
    ],
  },
  {
    id: 'erai',
    name: 'ЦСЗ Ерай',
    doctors: [
      { id: 5, name: 'Оразымбетова Нагима Бахтиназаровна', specialization: 'Гастроэнтеролог, дерматолог', experience: '8 лет опыта', photo: '/assets/doc2-1.png' },
      { id: 6, name: 'Жексенбиева Ляззат Токтарбековна', specialization: 'Врач общей практики', experience: '5 лет опыта', photo: '/assets/doc2-2.png' },
      { id: 7, name: 'Рахимов Бериккали Баймухаметович', specialization: 'Стоматолог', experience: '10 лет опыта', photo: '/assets/doc2-3.png' },
    ],
  },
  {
    id: 'chapaevo',
    name: 'ЦСЗ Байкент',
    doctors: [
      { id: 8, name: 'Абижанова Рауза Тынысбековна', specialization: 'Старшая медсестра', experience: '8 лет опыта', photo: '/assets/doc3-1.png' },
      { id: 9, name: 'Жунисханова Асель Сенгалиевна', specialization: 'Врач общей практики', experience: '5 лет опыта', photo: '/assets/doc3-2.png' },
      { id: 10, name: 'Рахметова Гульнар Жолдасбаевна', specialization: 'Врач отоларинголог', experience: '10 лет опыта', photo: '/assets/doc3-3.png' },
      { id: 11, name: 'Доп. врач', specialization: 'Терапевт', experience: '3 года', photo: '/assets/doc2.png' },
    ],
  },
  {
    id: 'dostyk',
    name: 'ЦСЗ Достык',
    doctors: [
      { id: 12, name: 'Дуйсенбиева Елена Аскаровна', specialization: 'Врач общей практики', experience: '8 лет опыта', photo: '/assets/doc4-1.png' },
      { id: 13, name: 'Баткалова Айгерим Ержановна', specialization: 'Старшая медсестра', experience: '5 лет опыта', photo: '/assets/doc4-2.png' },
      { id: 14, name: 'Асанова Лаура Ауезхановна', specialization: 'Офтальмолог', experience: '10 лет опыта', photo: '/assets/doc3-3.png' },
    ],
  },
  {
    id: 'ultarakova',
    name: 'ЦСЗ им. К. Ултаракова',
    doctors: [
     { id: 15, name: 'Демиева Кулбаршын Абдибаевна', specialization: 'Старшая медсестра', experience: '8 лет опыта', photo: '/assets/doc5-1.png' },
      { id: 16, name: 'Кабулов Амангелды Сабирович', specialization: 'Врач дневного стационара', experience: '5 лет опыта', photo: '/assets/doc5-2.png' },
      { id: 17, name: 'Коптилеуова Клара Оракбаевна', specialization: 'Гинеколог ', experience: '10 лет опыта', photo: '/assets/doc5-3.png' },
      { id: 18, name: 'Демиева Кулбаршын Абдибаевна', specialization: 'Старшая медсестра', experience: '8 лет опыта', photo: '/assets/doc5-1.png' },
      { id: 19, name: 'Кабулов Амангелды Сабирович', specialization: 'Врач дневного стационара', experience: '5 лет опыта', photo: '/assets/doc5-2.png' },
      { id: 20, name: 'Коптилеуова Клара Оракбаевна', specialization: 'Гинеколог', experience: '10 лет опыта', photo: '/assets/doc5-3.png' },
    ],
  },
];

function BranchDoctors({ branch }) {
  const [showAll, setShowAll] = useState(false);
  const visibleDoctors = showAll ? branch.doctors : branch.doctors.slice(0, 3);

  return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-20"
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-black tracking-tight mb-2">
          {branch.name}
        </h2>
        <div className="mx-auto w-24 h-1 bg-black rounded-full"></div>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {visibleDoctors.map((doc) => (
          <DoctorCard key={doc.id} doctor={doc} />
        ))}
      </div>

      {branch.doctors.length > 3 && (
        <div className="mt-6 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-black font-semibold hover:text-[#20aa99] transition-all duration-200"
          >
            {showAll ? 'Скрыть' : 'Показать всех'}
          </button>
        </div>
      )}
    </motion.div>

  );
}

export default function Page() {
  const [selectedBranch, setSelectedBranch] = useState('all');

  const filteredBranches =
    selectedBranch === 'all'
      ? branches
      : branches.filter((b) => b.id === selectedBranch);

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-extrabold text-center mb-10">
        Наши <span className="text-[#20aa99]">специалисты</span> по филиалам
      </h1>

      <div className="flex justify-center mb-12">
        <select
          value={selectedBranch}
          onChange={(e) => setSelectedBranch(e.target.value)}
          className="border border-[#20aa99] text-[#20aa99] font-medium rounded-lg px-4 py-2 bg-white shadow-sm focus:outline-none"
        >
          <option value="all">Все филиалы</option>
          {branches.map((branch) => (
            <option key={branch.id} value={branch.id}>
              {branch.name}
            </option>
          ))}
        </select>
      </div>

      {filteredBranches.map((branch) => (
        <BranchDoctors key={branch.id} branch={branch} />
      ))}
    </div>
  );
}
