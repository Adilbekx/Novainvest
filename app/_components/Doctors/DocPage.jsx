"use client";

import DoctorCard from "@/app/_components/Doctors/DoctorCard";
import Link from "next/link";

const doctors = [
  {
    id: 1,
    name: "Акжигитова Гулим Мухамед-Алиевна​",
    specialization: "Врач общей практики",
    experience: "8 лет опыта",
    photo: "/assets/doc2.png",
  },
  {
    id: 2,
    name: "Кожекенова Лаура Машраповна​",
    specialization: "Врач дневного стационара",
    experience: "5 лет опыта",
    photo: "/assets/doc3.png",
  },
  {
    id: 3,
    name: "Жексенбиева Ляззат Токтарбековна​",
    specialization: "Врач общей практики",
    experience: "10 лет опыта",
    photo: "/assets/doc1.png",
  },
  
];

export default function DoctorsPage() {
  return (
    <div className="container py-10 md:py-20">
      <h1 className="text-4xl font-extrabold text-center mb-12 ">
        Наши <span className="text-[#20aa99]">специалисты</span>
      </h1>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {doctors.slice(0, 3).map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>

      <div className="text-center mt-12">
      <Link href="/doctors">
          <button className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] font-semibold py-3 px-8 rounded-full transition duration-300 shadow-lg hover:scale-105">
            Смотреть список всех специалистов
          </button>
        </Link>
      </div>
    </div>
  );
}
