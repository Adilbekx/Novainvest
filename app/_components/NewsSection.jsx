'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

const newsData = [

  {

    id: 1,

    title: 'Открытие нового отделения',

    fullText:

      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem10 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem10 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem10 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',

    shortText: 'Открытие нового отделения в центре города.',

    image: '/assets/news1.jpeg',

  },

  {

    id: 2,

    title: 'Приём новых специалистов', 

    fullText:

      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem25 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',

    shortText: 'Новые специалисты уже готовы вас принять.',

    image: '/assets/news2.png',

  },

  {

    id: 3,

    title: 'Новая система онлайн-записи',

    fullText:

      'Теперь записаться на приём стало ещё проще. Используйте наш обновлённый онлайн-сервис без ожидания.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem30 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',

    shortText: 'Обновлённая система записи работает 24/7.',

    image: '/assets/news3.jpeg',

  },
  {

    id: 4,

    title: 'Новая система онлайн-записи',

    fullText:

      'Теперь записаться на приём стало ещё проще. Используйте наш обновлённый онлайн-сервис без ожидания.Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem30 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',

    shortText: 'Обновлённая система записи работает 24/7.',

    image: '/assets/news4.jpeg',

  },
  {

    id: 5,

    title: 'Приём новых специалистов',

    fullText:

      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.Lorem25 ipsum dolor sit amet consectetur adipisicing elit. Voluptate et quos minus nostrum dolorem mollitia.',

    shortText: 'Новые специалисты уже готовы вас принять.',

    image: '/assets/news2.png',

  },

];

export default function NewsSection() {
  const [featured, setFeatured] = useState(newsData[0])
  const others = newsData.filter((n) => n.id !== featured.id)

  return (
    <section className="py-16 bg-[#f4fcfa]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Клинические новости
        </h2>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured */}
          <AnimatePresence mode="wait">
            <motion.div
              key={featured.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-72 lg:h-96">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-[#20aa99] mb-4">
                  {featured.title}
                </h3>
                <p className="text-gray-700 flex-1 leading-relaxed line-clamp-4">
                  {featured.fullText}
                </p>
                <div className="mt-6 text-right">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-[#20aa99] text-[#20aa99] hover:bg-[#20aa99]/10"
                  >
                    Читать полностью
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Preview cards без анимаций */}
          <div className="flex flex-col gap-4">
            {others.map((item) => (
              <div
                key={item.id}
                onClick={() => setFeatured(item)}
                className="flex items-center bg-white rounded-2xl shadow-md transition-shadow duration-200 cursor-pointer border border-gray-200 hover:shadow-lg"
              >
                <div className="relative w-20 h-20 flex-shrink-0 rounded-l-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {item.shortText}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
