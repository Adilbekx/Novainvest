"use client";

import Image from "next/image";
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function DoctorCard({ doctor }) {
  const [followed, setFollowed] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-[380px] text-center mx-auto hover:shadow-2xl transition-all duration-300">
      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-[#e0f7f4]">
        <Image
          src={doctor.photo}
          alt={doctor.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex items-center justify-center gap-2 mb-2">
        <h3 className="text-xl font-bold leading-tight">{doctor.name}</h3>
        <CheckCircle2 className="text-green-500 w-5 h-5" />
      </div>
      <p className="text-gray-600 text-base">{doctor.specialization}</p>
    </div>
  );
}
