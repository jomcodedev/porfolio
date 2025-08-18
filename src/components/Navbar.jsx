import React, { useState } from "react";
import twMergeClassnames from "../lib/utils";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={twMergeClassnames(
        "fixed w-full z-40 text-2xl transition-all duration-300 bg-background",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex item-center justify-between">
        {/* Name */}
        <a
          className="text-xl font-bold text-primary flex item-center"
          href="#home"
        >
          <span className="relative text-4xl z-10">
            <span className="text-glow text-foreground">Joms</span>
            Code
          </span>
        </a>

        {/* Link */}

        {/* Desktop */}
        <div className="hidden md:flex space-x-8 py-2">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsMenuOpen((prevState) => !prevState)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu />}
        </button>
        <div
          className={twMergeClassnames(
            "fixed inset-0 bgbackground/95 backdroup-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto bg-background"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 py-2 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
