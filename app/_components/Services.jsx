'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AnimatePresence, motion } from 'framer-motion'
import {
  HeartPulse,
  Stethoscope,
  Baby,
  Scan,
  Syringe,
  Thermometer,
  Activity,
  Brain,
  UserPlus,
  UserCheck,
  Heart,
  User,
  UserCog,
} from 'lucide-react'

function Services() {
  const [showAll, setShowAll] = useState(false)

  const services = [
    {
      title: 'Эндокринолог',
      icon: <UserCog />,
      desc: 'Диагностика и лечение заболеваний эндокринной системы.',
    },
    {
      title: 'Невропатолог',
      icon: <Brain />,
      desc: 'Помощь при заболеваниях нервной системы.',
    },
    {
      title: 'УЗИ',
      icon: <Scan />,
      desc: 'Ультразвуковая диагностика внутренних органов.',
    },
    {
      title: 'Реабилитолог',
      icon: <Thermometer />,
      desc: 'Восстановление после травм и заболеваний.',
    },
    {
      title: 'Акушер-гинеколог',
      icon: <UserPlus />,
      desc: 'Женское здоровье, беременность и роды.',
    },
    {
      title: 'Хирург',
      icon: <UserCheck />,
      desc: 'Проведение хирургических операций и консультаций.',
    },
    {
      title: 'Кардиолог',
      icon: <HeartPulse />,
      desc: 'Диагностика и лечение сердечно-сосудистых заболеваний.',
    },
    {
      title: 'Психолог',
      icon: <Heart />,
      desc: 'Психологическая поддержка и консультации.',
    },
    {
      title: 'Детский невропатолог',
      icon: <Baby />,
      desc: 'Диагностика и лечение неврологических заболеваний у детей.',
    },
    {
      title: 'Онколог',
      icon: <Activity />,
      desc: 'Диагностика и лечение онкологических заболеваний.',
    },
    {
      title: 'Педиатр',
      icon: <User />,
      desc: 'Профессиональный уход за здоровьем детей.',
    },
  ]

  // Показываем либо первые 6, либо все
  const displayedServices = showAll ? services : services.slice(0, 6)

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-12 gap-6">
        <div className="text-center md:text-left space-y-2">
          <h2 className="text-lg font-medium text-gray-500">— Наши услуги</h2>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            <span className="text-[#20aa99]">Специализированные</span> услуги, соответствующие вашим медицинским потребностям
          </h1>
        </div>

        <div className="text-center md:text-end">
          <Button
            size="lg"
            variant="secondary"
            onClick={() => setShowAll(prev => !prev)}
            className="text-black bg-white border border-[#20aa99] hover:bg-[#f0f8f7] hover:text-[#20aa99] transition-all duration-300"
          >
            {showAll ? 'Скрыть услуги' : 'Посмотреть все'} &rarr;
          </Button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {displayedServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center border border-gray-100"
            >
              <div className="flex justify-center mb-4">
                {React.cloneElement(service.icon, {
                  className: 'w-10 h-10 text-[#20aa99]',
                })}
              </div>
              <h3 className="text-xl font-semibold text-[#20aa99] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Services
