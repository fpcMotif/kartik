"use client";

import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "@/components/theme-toggle";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavBody,
  Navbar,
  NavbarLogo,
  NavItems,
} from "./ui/resizable-navbar";

export default function ResizablePortfolioNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "proof-of-work", link: "/projects" },
    { name: "blogs", link: "/blogs" },
  ];

  const mobileNavItems = [
    { name: "Home", link: "/" },
    { name: "proof-of-work", link: "/projects" },
    { name: "blogs", link: "/blogs" },
  ];

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} onItemClick={handleItemClick} />
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <div className="flex flex-col gap-5 w-full">
            {mobileNavItems.map((item) => (
              <div
                key={`mobile-nav-${item.name}`}
                className="transform transition-transform duration-400 hover:scale-105 active:scale-95"
              >
                <Link
                  href={item.link}
                  onClick={handleItemClick}
                  className="text-lg font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity duration-200 py-1"
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="pt-4 mt-2 border-t border-neutral-200 dark:border-neutral-700">
              <ModeToggle />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
