"use client";

import DoctorCard from "@/app/_components/Doctors/DoctorCard";



const doctors = [
  {
    id: 1,
    name: "Фамилия Имя Отчество",
    specialization: "Терапевт",
    experience: "5 лет опыта,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/about-banner3.jpg",
  },
  {
    id: 2,
    name: "Фамилия Имя Отчество",
    specialization: "Хирург",
    experience: "8 лет опыта ,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/about-banner.png",
  },
  {
    id: 3,
    name: "Фамилия Имя Отчество",
    specialization: "Кардиолог",
    experience: "10 лет опыта ,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/about-banner2.jpg",
  },
  {
    id: 4,
    name: "Фамилия Имя Отчество",
    specialization: "Невролог",
    experience: "7 лет опыта ,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/about-banner3.jpg",
  },
  {
    id: 5,
    name: "Фамилия Имя Отчество",
    specialization: "Невролог",
    experience: "7 лет опыта,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/about-banner.png",
  },
  {
    id: 6,
    name: "Фамилия Имя Отчество",
    specialization: "Невролог",
    experience: "7 лет опыта,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    photo: "/assets/about-banner2.jpg",
  },
];

export default function Page() {
  return (
    <div className="container py-16 mx-auto px-4">
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Все <span className="text-[#20aa99]">специалисты</span>
      </h1>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
