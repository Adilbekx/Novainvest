import React from "react";
import { CheckCircle, Wallet, UserCheck, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const OsmsPage = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-800">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-4">
          Обязательное социальное медицинское страхование (ОСМС)
        </h1>
        <p className="text-lg text-gray-600">
          Граждане, регулярно оплачивающие взносы и имеющие статус
          <span className="font-semibold text-green-800"> «ЗАСТРАХОВАН» </span>
          получают широкий перечень медицинских услуг без доплаты.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-green-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
            <CheckCircle size={20} /> Что входит в ОСМС
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li><strong>Амбулаторная помощь:</strong> консультации, обследования, стоматология.</li>
            <li><strong>Стационарная:</strong> плановое, экстренное лечение, уход на дому.</li>
            <li>Реабилитация, патологоанатомическая диагностика, донорская помощь.</li>
            <li><strong>Лекарственное обеспечение</strong> по программам ОСМС.</li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
            <Wallet size={20} /> Кто и сколько платит?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Работодатель — 3 % от зарплаты (до 10 МЗП).</li>
            <li>Работник / ГПХ — 2 % от дохода (до 10 МЗП).</li>
            <li>ИП / частная практика — 5 950 ₸ (5 % от 1,4 МЗП).</li>
            <li>Самостоятельные плательщики — 4 250 ₸ (5 % от МЗП).</li>
            <li>Единый платеж (ЕП) — 23,8 % от ФОТ.</li>
            <li>Государство за льготные категории — ≈7 286 ₸ (2 % от среднемесячной зарплаты 2023‑г.).</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
          <UserCheck size={22} /> Льготные категории
        </h2>
        <p className="mb-4 text-gray-700">За более 15 категорий граждан платит государство:</p>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside space-y-1">
            <li>Дети до 18 лет</li>
            <li>Беременные и мамы детей до 3 лет</li>
            <li>Многодетные родители</li>
            <li>Инвалиды и сопровождающие</li>
            <li>Пенсионеры и ветераны ВОВ</li>
            <li>Очные студенты и др.</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Безработные (ЦЗН)</li>
            <li>Получатели соцпомощи</li>
            <li>Оралманы, заключённые, ИПЗ и др.</li>
          </ul>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
          <Search size={22} /> Как проверить статус?
        </h2>
        <p className="text-gray-700 mb-4">
          Проверить статус застрахованности можно онлайн с ИИН:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
          <li>Сайт Фонда ОСМС – <a href="https://msqory.kz/" className="text-green-700 underline">msqory.kz</a></li>
          <li>Egov – услуга «Информация об участии в ОСМС»</li>
          <li>Telegram‑бот – <code>@SaqtandyryBot</code></li>
          <li>Мобильное приложение – Qoldau 24/7</li>
        </ul>
        <Button variant="outline" className="text-green-700 border-green-600 hover:bg-green-100">
          <a href="https://egov.kz/cms/ru/services/health_care/pass171-2_mz" target="_blank" rel="noopener noreferrer">
            Проверить статус на Egov.kz
          </a>
        </Button>
      </section>
    </main>
  );
};

export default OsmsPage;
