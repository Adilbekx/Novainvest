import React from "react";

const SolutionStep = () => {
  const cards = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/8214/8214665.png",
      title: "Выберите врача",
      description:
        "Выберите специалиста, который соответствует вашим потребностям. Наши врачи обладают большим опытом и готовы помочь вам в любом вопросе.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/668/668278.png",
      title: "Выберите дату и время",
      description:
        "Выберите удобное для вас время приема и дату. Мы предлагаем гибкие условия записи, чтобы ваше посещение было максимально комфортным.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/11509/11509610.png",
      title: "Запишитесь на прием",
      description:
        "Простая и быстрая запись. Всего несколько шагов, и ваш прием забронирован. ",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/9084/9084340.png",
      title: "Приходите на прием",
      description:
        "Приходите в назначенное время, и мы позаботимся о вашем удобстве. Наши специалисты помогут вам решить все ваши вопросы.",
    },
  ];

  return (
    <div className="container py-10 md:py-20">
      {/* Заголовок */}
      <div className="flex flex-col items-center text-center mb-15">
        <h2 className="text-lg md:text-2xl font-medium text-gray-600 pb-5">
          - Самое быстрое решение
        </h2>
        <h1 className="text-2xl md:text-4xl font-semibold">
          <span className="text-[#20aa99]">Запишитесь</span> на прием всего за 4 простых шага.
        </h1>
      </div>

      {/* Карточки */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="px-8 py-10 bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-lg hover:bg-[#0b6a5e] hover:scale-105 transition-all duration-300"
          >
            <img src={card.img} className="w-16 mb-3 mx-auto" alt={card.title} />
            <h1 className="font-semibold text-xl md:text-2xl py-2 text-center">{card.title}</h1>
            <p className="py-3 text-center text-sm md:text-base">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionStep;
