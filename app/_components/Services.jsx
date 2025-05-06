import React from 'react'
import { Button } from '@/components/ui/button'
import {
  HeartPulse,
  Stethoscope,
  Baby,
  ScanLine,
  Syringe,
  Thermometer,
} from 'lucide-react'

function Services() {
  const services = [
    { title: 'Кардиолог', icon: <HeartPulse className="w-10 h-10 text-[#20aa99]" />, desc: 'Диагностика и лечение сердечно-сосудистых заболеваний.' },
    { title: 'Терапевт', icon: <Stethoscope className="w-10 h-10 text-[#20aa99]" />, desc: 'Профессиональная диагностика и лечение широкого спектра заболеваний.' },
    { title: 'Педиатр', icon: <Baby className="w-10 h-10 text-[#20aa99]" />, desc: 'Профессиональный уход за здоровьем детей всех возрастов.' },
    { title: 'УЗИ', icon: <ScanLine className="w-10 h-10 text-[#20aa99]" />, desc: 'Высокоточное ультразвуковое обследование внутренних органов.' },
    { title: 'Прививки', icon: <Syringe className="w-10 h-10 text-[#20aa99]" />, desc: 'Проведение всех видов профилактических и сезонных прививок.' },
    { title: 'Физиотерапия', icon: <Thermometer className="w-10 h-10 text-[#20aa99]" />, desc: 'Современные восстановительные процедуры и массаж.' },
  ]

  return (
    <div className="container mx-auto py-20 px-4">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 items-center mb-16 gap-6">
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-lg md:text-xl font-medium text-gray-500">
            — Наши услуги
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            <span className="text-[#20aa99]">Специализированные</span> услуги, соответствующие вашим медицинским потребностям
          </h1>
        </div>
        <div className="text-center md:text-end">
          <Button
            size="lg"
            variant="secondary"
            className="text-black bg-white border border-[#20aa99] hover:bg-[#f0f8f7] hover:text-[#20aa99] transition-all duration-300"
          >
            Посмотреть все &rarr;
          </Button>
        </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl p-8 text-center transition-all duration-300 border border-gray-100"
          >
            <div className="flex justify-center mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-[#20aa99] mb-2">{service.title}</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
