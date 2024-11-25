"use client";
import { cn } from "@/lib/cn";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const menuItems = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Menu",
    href: "/menu",
  },
  {
    label: "Kontak",
    href: "/contact",
  },
  {
    label: "Tentang Kami",
    href: "/about",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='relative bg-white shadow'>
      <div className='container px-6 py-4 mx-auto md:flex md:justify-between md:items-center'>
        <div className='flex items-center justify-between'>
          <Link href='/'>
            <Image
              className='w-auto md:h-12 h-8'
              src='/logo-primary.png'
              width={500}
              height={500}
              alt='Kedai Lombok'
            />
          </Link>
          <div className='flex md:hidden'>
            <button
              type='button'
              className='text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600'
              aria-label='toggle menu'
              onClick={toggleMenu}
            >
              <MenuButton isOpen={isOpen} />
            </button>
          </div>
        </div>
        <div
          className={cn(
            "absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center",
            isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          )}
        >
          <div className='flex flex-col text-center md:flex-row md:mx-6'>
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className='my-2 text-gray-700 transition-colors duration-300 transform hover:text-primary md:mx-4 md:my-0'
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className='flex justify-center mt-4 md:mt-0 md:block'>
            <Link
              className='relative text-gray-700 transition-colors duration-300 transform hover:text-gray-600 flex items-center gap-2'
              href='/keranjang'
            >
              <BsCart2 size={18} />
              <span className='md:hidden'>Keranjang</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

function MenuButton({ isOpen }: { isOpen: boolean }) {
  if (isOpen) {
    return <MdOutlineClose size={24} />;
  }
  return <HiMenuAlt3 size={24} />;
}
