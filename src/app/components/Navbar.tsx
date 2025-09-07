"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Bars3Icon,
  MoonIcon,
  SunIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const {theme, toggleTheme}= useTheme();
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
    { href: "/contact", label: "Hire me" },
  ];

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
      <div className="container max-w-7xl mx-auto px-4">
        {/* desktop menu */}
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-primary">
            AdithyaH.&trade;
          </Link>
          {/* desktop menus*/}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
                if (item.label === "Hire me") {
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/80 transition-colors font-semibold duration-300"
                    >
                      {item.label}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`hover:text-primary transition-colors font-medium duration-300 ${
                      isActive ? "text-primary font-medium" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                );
            })}
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white hover:text-primary transition-colors cursor-pointer">
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg dark:hover:bg-gray-800 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* mobile menu  */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 py-4">
              {menuItems.map((item, index) => (
                <div key={index} onClick={toggleMobileMenu}>
                  {item.label === "Hire me" ? (
                    <Link
                      href={item.href}
                      className="block bg-primary text-white px-4 py-2 rounded-lg shadow hover:bg-primary/80 transition-colors font-semibold duration-300"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 hover:text-primary transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div>
                <button onClick={toggleTheme} className="flex items-center p-2 hover:text-primary transition-colors duration-300 cursor-pointer">
                  {theme === "dark" ? (
                    <><SunIcon className="h-5 w-5 mr-2"/>Light Mode</>
                  ) : (
                    <><MoonIcon className="h-5 w-5 mr-2"/>Dark Mode</>
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
