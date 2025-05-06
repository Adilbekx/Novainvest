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
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

// Навигация
const navigation = [
  { name: "Главная", href: "/" },
  {
    name: "Услуги",
    submenu: [
      { name: "Консультация врача", href: "#", icon: UserIcon },
      { name: "Медицинские анализы", href: "#", icon: ClipboardDocumentIcon },
      { name: "Хирургические операции", href: "#", icon: AcademicCapIcon },
      { name: "Диагностика", href: "#", icon: HeartIcon },
    ],
  },
  { name: "Врачи", href: "/doctors" },
  { name: "Контакты", href: "#" },
];

function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  return (
    <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
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
                  <div className="font-medium text-gray-900">{item.name}</div>
                  <div className="ml-4 mt-2 space-y-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#20aa99]"
                      >
                        {React.createElement(subItem.icon, {
                          className: "h-5 w-5 text-[#20aa99]",
                        })}
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-900 hover:text-[#20aa99]"
                >
                  {item.name}
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/87064007107?text=Здравствуйте,%20хочу%20записаться!"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-full bg-[#20aa99] px-4 py-2 text-white font-semibold hover:bg-[#1e9989] transition"
          >
            Записаться
          </a>
        </div>
      </DialogPanel>
    </Dialog>
  );
}

function DesktopMenu() {
  return (
    <PopoverGroup className="hidden lg:flex lg:gap-x-10">
      {navigation.map((item) =>
        item.submenu ? (
          <Popover key={item.name} className="relative">
            <PopoverButton className="flex items-center gap-1 text-lg font-medium text-gray-800 hover:text-[#20aa99] transition">
              {item.name}
              <ChevronDownIcon className="h-5 w-5" />
            </PopoverButton>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute z-30 mt-3 w-64 origin-top rounded-xl bg-white p-4 shadow-xl ring-1 ring-gray-900/10">
                <div className="flex flex-col gap-4">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.name}
                      href={subItem.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      {React.createElement(subItem.icon, {
                        className: "h-6 w-6 text-[#20aa99]",
                      })}
                      <span className="text-gray-700">{subItem.name}</span>
                    </a>
                  ))}
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>
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
    </PopoverGroup>
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

    <div className="hidden lg:flex">
      <a
        href="https://wa.me/87064007107?text=Здравствуйте,%20хочу%20записаться!"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-[#20aa99] px-5 py-2 text-sm font-semibold text-[#20aa99] hover:bg-[#20aa99] hover:text-white transition"
      >
        Записаться
      </a>
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

  <MobileMenu mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
</header>

  );
}
