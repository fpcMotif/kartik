'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ModeToggle } from '@/components/theme-toggle';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarLogo,
} from './ui/resizable-navbar';

export default function ResizablePortfolioNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'proof-of-work', link: '/projects' },
    { name: 'blogs', link: '/blogs' },
  ];

  const mobileNavItems = [
    { name: 'Home', link: '/' },
    { name: 'proof-of-work', link: '/projects' },
    { name: 'blogs', link: '/blogs' },
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
          <div className="flex flex-col gap-4 w-full">
            {mobileNavItems.map((item, idx) => (
              <motion.div
                key={`mobile-nav-${idx}`}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                <Link 
                  href={item.link}
                  onClick={handleItemClick}
                  className="text-lg font-[family-name:var(--font-instrument-serif)] hover:opacity-80 hover:underline transition-opacity duration-200"
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-700">
              <ModeToggle />
            </div>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
