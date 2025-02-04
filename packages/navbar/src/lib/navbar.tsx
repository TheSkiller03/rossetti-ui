import { useState } from "react";

interface NavbarProps {
  logo?: string;
  links?: { name: string; href: string }[];
}

export default function Navbar({
  logo = "MyBrand",
  links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="text-2xl font-bold">{logo}</a>

        {/* MENU DESKTOP */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-400 transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* MENU MOBILE */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
