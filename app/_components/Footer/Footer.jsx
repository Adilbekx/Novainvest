import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const navigation = [
  { name: "Главная", href: "/" },
  {
    name: "Пациентам",
    submenu: [
      { name: "ГОБМП", href: "/gobmp" },
      { name: "ОСМС", href: "/osms" },
      { name: "Скрининг/Профосмотр", href: "/screening" },
      { name: "Документы и Обьявления", href: "/docs" },
    ],
  },
  { name: "Врачи", href: "/doctors" },
  { name: "Контакты", href: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e6f4f3] to-[#fdfdfd] pt-16 pb-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">

        {/* Логотип + описание */}
        <div className="space-y-4 md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
            <h1 className="text-3xl font-bold tracking-tight">EL AMAN</h1>
          </div>
          <p className="text-base text-gray-700">
            Забота. Профессионализм. Современные решения для вашего здоровья.
          </p>
        </div>

        {/* Навигация */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Навигация</h2>
          <ul className="space-y-2 text-base text-gray-700">
            {navigation.map((item) =>
              item.submenu ? (
                item.submenu.map((sub) => (
                  <li key={sub.name}>
                    <a
                      href={sub.href}
                      className="hover:text-[#20aa99] transition"
                    >
                      {sub.name}
                    </a>
                  </li>
                ))
              ) : (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="hover:text-[#20aa99] transition"
                  >
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Контакты */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Связаться с нами</h2>
          <ul className="space-y-2 text-base text-gray-700">
            <li className="flex items-center gap-2">
              <MdLocationOn className="text-xl text-green-500" />
              Алматы, ул. Жаханова 56
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="text-xl text-green-500" />
              +7 (702) 154-81-50
            </li>
            <li className="flex items-center gap-2">
              <MdEmail className="text-xl text-green-500" />
              support@eln.kz
            </li>
          </ul>
        </div>

        {/* Соцсети */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Следите за нами</h2>
          <div className="flex gap-5 mt-4 text-2xl">
            <a
              href="https://www.instagram.com/elaman_centr_nova_invest/?locale=us&hl=am-et"
              className="p-3 bg-white text-black hover:bg-gray-100 rounded-full transition"
              aria-label="Instagram"
            >
              <FaInstagram />
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
