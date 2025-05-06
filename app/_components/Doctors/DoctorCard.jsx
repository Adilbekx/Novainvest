"use client";

import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import Image from "next/image";
import { useState } from "react";

export default function DoctorCard({ doctor }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div
          className="cursor-pointer bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 p-6 w-full max-w-[400px] mx-auto group"
          onClick={() => setOpen(true)}
        >
          <div className="relative w-full h-[350px] mb-6 rounded-2xl overflow-hidden">
            <Image
              src={doctor.photo}
              alt={doctor.name}
              fill
              className="object-contain p-4"
            />
          </div>
          <h3 className="text-xl font-bold text-center mb-2">{doctor.name}</h3>
          <p className="text-gray-500 text-center">{doctor.specialization}</p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] bg-white/90 backdrop-blur-lg rounded-2xl p-8">
        <DialogTitle>
          <span className="sr-only">Доктор {doctor.name}</span>
        </DialogTitle>

        <div className="relative w-full h-80 mb-4 rounded-2xl overflow-hidden">
          <Image
            src={doctor.photo}
            alt={doctor.name}
            fill
            className="object-contain p-6"
          />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-center">{doctor.name}</h2>
        <p className="text-gray-600 mb-2 text-center">{doctor.specialization}</p>
        <p className="text-gray-500 text-center text-sm">{doctor.experience}</p>
      </DialogContent>
    </Dialog>
  );
}
