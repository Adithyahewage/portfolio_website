"use client";

import React, { use, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";

const Navbar = () => {
  const theme = "dark"; // todo: get theme from context
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blogs", label: "Blogs" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed w-full bg-dark/80 backdrop-blur-sm z-50">
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            Devfolio&trade;
          </Link>
          {/* desktop menus*/}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                key={item.href}
                href={item.href}
                className={` hover:text-primary transition-colors font-medium duration-300 ${isActive ? "text-primary font-medium" : ""}`}
              >
                {item.label}
              </Link>
              )
            })}
            <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-primary transition-colors cursor-pointer">
              {
                theme === "dark" ? (
                  <SunIcon className="h-5 w-5"/>
                ) : (
                  <MoonIcon className="h-5 w-5"/>
                )
              }
            </button>
          </div>
        </div>

        {/* mobile menu  */}
      </div>
    </nav>
  );
};

export default Navbar;
