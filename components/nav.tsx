"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample navItems - replace or update as needed
const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md px-4 py-3 flex items-center justify-between">
      <div className="text-xl font-bold">My Portfolio</div>

      {/* Hamburger Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-6">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-primary",
              pathname === item.href
                ? "text-primary font-medium"
                : "text-muted-foreground"
            )}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-background pt-16 px-4"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </Button>
          <nav className="flex flex-col items-center gap-6 text-lg">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-primary w-full text-center py-3",
                  pathname === item.href
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                )}
                onClick={(e) => {
                  // Only prevent default for hash links
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    const section = document.querySelector(item.href);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                  setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
