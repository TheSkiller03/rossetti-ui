import { useState } from "react";

interface HeaderProps {
  logo?: string;
  links?: { name: string; href: string }[];
}

export default function Header({ 
  logo = "MyLogo", 
  links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ]
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="text-2xl font-bold">{logo}</a>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="hover:text-gray-400 transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* MENU MOBILE */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block py-2 px-4 text-white hover:bg-gray-700"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
