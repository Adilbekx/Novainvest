"use client";

import { useState, useEffect, Fragment } from "react";
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverPanel,
  PopoverGroup,
  Transition,
} from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  UserIcon,
  ClipboardDocumentIcon,
  AcademicCapIcon,
  HeartIcon,
  PhoneIcon,
  DocumentTextIcon,
  UserGroupIcon,
  IdentificationIcon,
  ScaleIcon,
  ClipboardDocumentCheckIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  ChatBubbleBottomCenterTextIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  MapIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

// Навигация
const navigation = [
  { name: "Главная", href: "/" },
  {
    name: "Пациентам",
    submenu: [
      { name: "ГОБМП", href: "/gobmp", icon: UserIcon },
      { name: "ОСМС", href: "/osms", icon: ClipboardDocumentIcon },
      {
        name: "Скрининг/Профосмотр",
        href: "/screening",
        icon: AcademicCapIcon,
      },
      { name: "Документы и Обьявления", href: "/docs", icon: HeartIcon },
    ],
  },
  { name: "Врачи", href: "/doctors" },
  { name: "Контакты", href: "/contact" },
    {
    name: "О нас",
    submenu: [
      {
        name: "Общее положение",
        href: "/general",
        icon: DocumentTextIcon,
      },
      {
        name: "Администрация",
        href: "administration",
        icon: UserGroupIcon,
      },
      {
        name: "Корпоративные документы",
        href: "/corporateDoc",
        icon: ClipboardDocumentCheckIcon,
      },
      {
        name: "Миссия, видение и ценности",
        href: "/mission",
        icon: ScaleIcon,
      },
      {
        name: "Лицензии, дипломы, сертификаты и аккредитация",
        href: "/licenses",
        icon: IdentificationIcon,
      },
      {
        name: "Организационная структура",
        href: "/docs/Structure/struktura.pdf",
        target: "_blank",
        icon: BuildingOffice2Icon,
      },
      {
        name: "Корпоративное управление",
        href: "/about/governance",
        icon: ChartBarIcon,
      },
      {
        name: "Общественная приёмная (Open Space)",
        href: "/about/open-space",
        icon: ChatBubbleBottomCenterTextIcon,
      },
      {
        name: "Финансовые и годовые отчёты",
        href: "/about/financial-reports",
        icon: BanknotesIcon,
      },
      {
        name: "Антикоррупционная политика",
        href: "/antikor",
        icon: ShieldCheckIcon,
      },
    ],
  },
];

function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <Dialog
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
      className="lg:hidden"
    >
      <div className="fixed inset-0 z-10 bg-black/20 backdrop-blur-sm" />
      <DialogPanel className="fixed inset-y-0 right-0 z-30 w-full max-w-sm overflow-y-auto bg-white px-6 py-6 shadow-xl ring-1 ring-gray-900/10">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image src="/assets/logo.png" alt="Logo" width={40} height={40} />
            <span className="text-lg font-bold text-gray-800"></span>
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-gray-700 hover:text-[#20aa99]"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-6 space-y-6">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.submenu ? (
                <div>
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === item.name ? null : item.name)
                    }
                    className="flex justify-between items-center w-full text-left font-medium text-gray-900 py-2"
                  >
                    {item.name}
                    <ChevronDownIcon
                      className={`h-5 w-5 transform transition-transform ${
                        openMenu === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openMenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => setMobileMenuOpen(false)} // Автозакрытие меню
                          className="flex items-center gap-2 text-xs text-gray-700 hover:text-[#20aa99] px-2 py-1"
                        >
                          {React.createElement(subItem.icon, {
                            className: "h-4 w-4 text-[#20aa99] shrink-0",
                          })}
                          <span>{subItem.name}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-gray-900 hover:text-[#20aa99]"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Телефон */}
        <div className="mt-6 flex items-center gap-3">
            <PhoneIcon className="h-5 w-5 text-[#20aa99]" /> {" "}
          <div className="flex flex-col">
               {" "}
            <a
              href="tel:+77000000000"
              className="text-sm text-gray-800 leading-none"
            >
                    +7 (708) 030-78-42    {" "}
            </a>
               {" "}
            <span className="text-xs text-[#20aa99] leading-none mt-0.5">
              Служба поддержки пациентов
            </span>
             {" "}
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

function DesktopMenu() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  const closeAll = () => setOpenMenu(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".desktop-menu")) {
        closeAll();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="hidden lg:flex lg:gap-x-6 desktop-menu relative">
      {navigation.map((item) =>
        item.submenu ? (
          <div key={item.name} className="relative">
            <button
              onClick={() => toggleMenu(item.name)}
              className="flex items-center gap-1 text-lg font-medium text-gray-800 hover:text-[#20aa99] transition"
            >
              {item.name}
              <ChevronDownIcon
                className={`h-5 w-5 transform transition-transform ${
                  openMenu === item.name ? "rotate-180" : ""
                }`}
              />
            </button>

            {openMenu === item.name && (
              <div className="absolute z-30 mt-2 w-[280px] bg-white rounded-lg shadow-lg ring-1 ring-black/10 p-2">
                <div className="flex flex-col divide-y divide-gray-100">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                      onClick={closeAll}
                    >
                      {React.createElement(subItem.icon, {
                        className: "h-5 w-5 text-[#20aa99]",
                      })}
                      <span>{subItem.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <a
            key={item.name}
            href={item.href}
            className="text-lg font-medium text-gray-800 hover:text-[#20aa99] transition"
          >
            {item.name}
          </a>
        )
      )}
    </div>
  );
}


export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 bg-white/80 border-b border-gray-200 backdrop-blur-md ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-10">
        <a href="/" className="flex items-center gap-2">
          <Image src="/assets/logo.png" alt="Logo" width={100} height={50} />
        </a>

        <DesktopMenu />

        <div className="hidden lg:flex items-center gap-6">
          <PhoneIcon className="h-6 w-6 text-[#20aa99]" />
          <div className="flex flex-col leading-tight -mt-1">
            <a
              href="tel:+77000000000"
              className="text-gray-800 text-base font-medium "
            >
              +7 (702) 154-81-50
            </a>
            <span className="text-xs text-[#20aa99]">
              Служба поддержки пациентов
            </span>
          </div>
        </div>

        <div className="lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-gray-700 hover:text-[#20aa99]"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </nav>

      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </header>
  );
}
