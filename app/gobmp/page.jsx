export default function GobmpPage() {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800">
        <h1 className="text-4xl font-bold text-[#20aa99] mb-6">ГОБМП</h1>
  
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="md:w-2/3">
            <p className="mb-4">
              Гарантированный объем бесплатной медицинской помощи за счет бюджетных средств предоставляется:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>гражданам Республики Казахстан</li>
              <li>кандасам</li>
              <li>беженцам</li>
              <li>
                иностранцам, <span className="font-semibold">постоянно проживающим</span> на территории Республики Казахстан (и имеющим вид на жительство)
              </li>
              <li>
                лицам без гражданства, <span className="font-semibold">постоянно проживающим</span> на территории Республики Казахстан (и имеющим вид на жительство)
              </li>
              <li>
                временно пребывающим иностранцам, лицам, ищущим убежище — <span className="italic">при заболеваниях, представляющих опасность для окружающих</span>
              </li>
            </ul>
  
            <p className="mt-4">
              ГОБМП оказывается гражданам независимо от статуса застрахованности.
            </p>
  
            <h2 className="text-2xl font-semibold mt-8 mb-4">Что входит в ГОБМП:</h2>
  
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold mb-2">Скорая медицинская помощь</h3>
                <ul className="list-disc list-inside">
                  <li>в том числе с привлечением медицинской авиации</li>
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold mb-2">Первичная медико-санитарная помощь (ПМСП)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>диагностика и лечение распространенных заболеваний</li>
                  <li>профилактические осмотры (дети, взрослые)</li>
                  <li>вакцинация</li>
                  <li>пропаганда здорового образа жизни</li>
                  <li>репродуктивное здоровье</li>
                  <li>наблюдение за беременными</li>
                  <li>санитарно-эпидемиологические мероприятия</li>
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold mb-2">Специализированная помощь (амбулаторно)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>ВИЧ и туберкулез</li>
                  <li>неотложные состояния</li>
                  <li>социально значимые заболевания</li>
                  <li>хронические заболевания</li>
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold mb-2">Стационарозамещающая помощь</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>лечение социально значимых заболеваний</li>
                  <li>стационар на дому</li>
                  <li>хронические заболевания</li>
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold mb-2">Стационарная помощь</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>изоляция контактных и подозреваемых на инфекционные заболевания</li>
                  <li>лечение опасных инфекций</li>
                  <li>экстренная помощь в стационаре</li>
                  <li>плановая помощь</li>
                </ul>
              </section>
  
              <section>
                <h3 className="text-xl font-semibold mb-2">Дополнительно</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>медицинская реабилитация</li>
                  <li>паллиативная помощь</li>
                  <li>обеспечение препаратами крови</li>
                  <li>патологоанатомическая диагностика</li>
                  <li>лечение за рубежом и привлечение специалистов</li>
                  <li>обеспечение лекарствами и изделиями мед. назначения</li>
                </ul>
              </section>
            </div>
          </div>
  
          <div className="md:w-1/3 w-full">
            <iframe
              className="w-full aspect-video rounded-lg shadow-md"
              src="https://www.youtube.com/embed/YourVideoID"
              title="Что входит в ГОБМП"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
  