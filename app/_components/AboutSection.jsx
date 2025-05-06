'use client';

export default function AboutSection() {
  return (
    <section className="relative w-full py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Центры семейного здоровья <span className="text-[#00a8cc]">EL AMAN</span>
        </h2>

        <div className="grid lg:grid-cols-5 gap-6 text-base leading-relaxed text-gray-700">
          <div className="lg:col-span-2 lg:row-span-2 bg-white border border-gray-200 p-6 rounded-2xl hover:scale-105 transition-all duration-300">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">О нас</h3>
            <p>
              Наши центры семейного здоровья открыты в сёлах Чапаево, Кызыл Кайрат, Достык и в селе им. К. Уттаркова. Мы позаботились о том, чтобы получение медицинской помощи нашими пациентами проходило в максимально комфортных условиях.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-all duration-300">
            Центры работают в собственных новых зданиях с качественным ремонтом и оснащением.
          </div>

          <div className="lg:col-span-2 bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-all duration-300">
            Профессионально организована работа реабилитационных центров. Пациенты проходят ЛФК, массаж и физиопроцедуры.
          </div>

          <div className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-all duration-300">
            В штат входят врачи общей практики и узкие специалисты: эндокринологи, кардиологи, хирурги и др.
          </div>

          <div className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-all duration-300">
            Центры оснащены современным оборудованием, соответствующим высоким стандартам диагностики.
          </div>

          <div className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-2xl p-6 border border-gray-200 hover:scale-105 transition-all duration-300">
            Мы делаем качественную медицину доступной для сельского населения.
          </div>
        </div>
      </div>
    </section>
  );
}