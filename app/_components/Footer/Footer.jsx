import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Логотип + описание */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-3xl font-bold tracking-tight">EL AMAN</h1>
          </div>
          <p className="text-base text-gray-700">
            Забота. Профессионализм. Современные решения для вашего здоровья.
          </p>
        </div>

        {/* Контакты */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Связаться с нами</h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-xl text-green-500" />
              Алматы, ул. Жаханова 12
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-xl text-green-500" />
              +7 777 777 77 77
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl text-green-500" />
              info@eln.kz
            </li>
          </ul>
        </div>

        {/* Соцсети */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Следите за нами</h2>
          <div className="flex gap-5 mt-4 text-2xl">
            <a
              href="#"
              className="p-3 bg-white text-black hover:bg-gray-100 rounded-full transition"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="p-3 bg-white text-black hover:bg-gray-100 rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://wa.me/77777777777"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 text-white hover:bg-green-600 rounded-full transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Копирайт */}
      <div className="mt-16 text-center text-xs text-gray-400 border-t border-gray-200 pt-6">
        © {new Date().getFullYear()} <span className="text-blue-500 font-semibold">EL AMAN</span>. Все права защищены.
      </div>
    </footer>
  );
};

export default Footer;
