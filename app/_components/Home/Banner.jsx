"use client";
import React, { useMemo } from "react";
import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Массив баннеров
const bannerSlides = [
  {
    title: "Заботьтесь о своем здоровье",
    subtitle: "- Лучшие решения для здоровья",
    description:
      "Мы предоставляем лучшие медицинские услуги для вас и вашей семьи.",
    image: "/assets/about-banner.png",
  },
  {
    title: "Мы рядом, когда вы нуждаетесь",
    subtitle: "- Ваше здоровье — наш приоритет",
    description: "Доверьтесь нашим опытным врачам и современным технологиям.",
    image: "/assets/about-banner2.png",
  },
  {
    title: "Быстрая помощь и забота",
    subtitle: "- Качество и забота",
    description: "Мы стремимся обеспечить лучший уход для каждого пациента.",
    image: "/assets/about-banner3.png",
  },
];

// Массив логотипов
const logos = [
  { src: "/assets/Hospital1.png", name: "ЦСЗ Жаханова" },
  { src: "/assets/Hospital2.png", name: "ЦСЗ Ерай" },
  { src: "/assets/Hospital3.png", name: "ЦСЗ Байкент" },
  { src: "/assets/Hospital4.png", name: "ЦСЗ Достык" },
  { src: "/assets/Hospital5.png", name: "ЦСЗ УЛТАРАКОВА" },
];

const Banner = () => {
  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    []
  );

  return (
    <div className="w-full">
      {/* Карусель баннера */}
      <Carousel className="w-full overflow-hidden" plugins={[autoplayPlugin]}>
        <CarouselContent>
          {bannerSlides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                <div className="px-4 md:px-8">
                  <h5 className="font-medium py-4">{slide.subtitle}</h5>
                  <h1 className="text-4xl md:text-6xl font-semibold leading-tight md:py-4">
                    {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span>{slide.title.split(" ").slice(-1)}</span>
                  </h1>
                  <p className="text-lg py-4 md:pe-20">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-5 mt-5 mb-5 justify-center md:justify-start">
                    <Button
                      asChild
                      size="lg"
                      className="bg-[#20aa99] hover:bg-[#0b6a5e] hover:scale-97 transition-all duration-300"
                    >
                      <a
                        href="https://wa.me/87064007107?text=Здравствуйте,%20хочу%20записаться!"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Записаться на прием
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="text-[#20aa99] hover:scale-97 transition-all duration-300"
                    >
                      Расписание работы
                      <MoveUpRight />
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={slide.image}
                    alt="banner"
                    width={600}
                    height={200}
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      {/* Бегущая лента логотипов */}

      <div className="container overflow-hidden py-10">
        <div className="flex animate-scroll space-x-10">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[150px]"
            >
              <Image src={logo.src} width={100} height={50} alt="logo" />
              <span className="mt-2">{logo.name}</span>
            </div>
          ))}
          {/* Повторяем лого, чтобы заполнили экран */}
          {logos.map((logo, index) => (
            <div
              key={index + 5}
              className="flex flex-col items-center min-w-[150px]"
            >
              <Image src={logo.src} width={100} height={50} alt="logo" />
              <span className="mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
