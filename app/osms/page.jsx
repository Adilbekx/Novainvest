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
          Граждане, регулярно оплачивающие взносы на ОСМС и имеющие статус
          <span className="font-semibold text-green-800"> «ЗАСТРАХОВАН» </span>
          могут получать широкий перечень медицинских услуг без дополнительной оплаты.
        </p>
      </header>

      <section className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-green-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
            <CheckCircle className="text-green-600" size={20} /> Что входит в ОСМС
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>
              <strong>Амбулаторная помощь:</strong> консультации, диагностика, осмотры, стоматология.
            </li>
            <li>
              <strong>Стационарная помощь:</strong> плановая, экстренная и на дому.
            </li>
            <li>Медицинская реабилитация.</li>
            <li>Патологоанатомическая диагностика.</li>
            <li>Подготовка посмертного донора.</li>
            <li>
              <strong>Лекарственное обеспечение</strong> в рамках системы ОСМС.
            </li>
          </ul>
        </div>

        <div className="bg-green-50 p-6 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
            <Wallet className="text-green-600" size={20} /> Кто и сколько платит за ОСМС?
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>Работодатель — 3% от зарплаты (до 18 000 тг).</li>
            <li>Работник/ГПХ — 2% от дохода (до 12 000 тг).</li>
            <li>ИП/частная практика — 5% от 1.4 МЗП (≈4200 тг).</li>
            <li>Самозанятые — от 1531 до 3063 тг (ЕСП).</li>
            <li>Самостоятельные плательщики — 5% от МЗП (≈3000 тг).</li>
            <li>Государство — 3614 тг за льготные категории.</li>
          </ul>
        </div>
      </section>

      <section className="bg-white p-6 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
          <UserCheck className="text-green-600" size={22} /> Льготные категории
        </h2>
        <p className="mb-4 text-gray-700">
          Государство оплачивает ОСМС за более чем 11 млн граждан. К ним относятся:
        </p>
        <div className="grid md:grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside space-y-1">
            <li>Дети до 18 лет</li>
            <li>Беременные, ухаживающие за детьми до 3 лет</li>
            <li>Многодетные матери</li>
            <li>Инвалиды и лица, ухаживающие за ними</li>
            <li>Пенсионеры и ветераны ВОВ</li>
            <li>Очные студенты</li>
          </ul>
          <ul className="list-disc list-inside space-y-1">
            <li>Безработные, зарегистрированные в ЦЗН</li>
            <li>Получатели адресной соцпомощи</li>
            <li>Оралманы</li>
            <li>Осужденные (кроме учреждений минимальной безопасности)</li>
            <li>Лица в следственных изоляторах</li>
          </ul>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-2xl shadow mb-16">
        <h2 className="text-2xl font-semibold text-green-600 mb-4 flex items-center gap-2">
          <Search className="text-green-600" size={22} /> Как проверить статус?
        </h2>
        <p className="text-gray-700 mb-4">
          Проверить статус можно через Egov, FMS, Qoldau 24/7 или Telegram-бот @SaqtandyryBot. Необходимо ввести ИИН.
        </p>
        <Button variant="outline" className="text-green-700 border-green-600 hover:bg-green-100">
          <a
            href="https://egov.kz/cms/ru/services/health_care/pass171-2_mz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Перейти к проверке статуса на Egov.kz
          </a>
        </Button>
      </section>
    </main>
  );
};

export default OsmsPage;
