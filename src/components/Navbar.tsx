
import { Link, useLocation } from "react-router-dom";
import { Home, List } from "lucide-react";

const navItems = [
  { to: "/", label: "Acasă", icon: Home },
  { to: "/services", label: "Servicii", icon: List },
];

export default function Navbar() {
  const location = useLocation();
  
  return (
    <nav className="flex items-center justify-between py-3 px-4 md:py-4 md:px-6 border-b border-gray-200 bg-white sticky top-0 z-50 will-change-transform">
      <Link 
        to="/" 
        className="flex items-center gap-1 md:gap-2 font-playfair text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-primary hover:text-primary/90 transition-colors will-change-transform"
      >
        <img
          src="/lovable-uploads/648a872e-5e5b-4e3c-b4e1-57dc0488b230.png"
          alt="Biroul Notarial Mariana Cîrstocea Logo"
          className="w-6 h-6 md:w-8 md:h-8 object-contain hidden sm:block brightness-0 saturate-100"
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(31%) sepia(12%) saturate(629%) hue-rotate(338deg) brightness(95%) contrast(91%)',
            aspectRatio: '1/1'
          }}
          width="32"
          height="32"
          loading="eager"
        />
        <span className="hidden sm:inline">Biroul Notarial Mariana Cîrstocea</span>
        <span className="sm:hidden text-sm leading-tight">Biroul Notarial Mariana Cîrstocea</span>
      </Link>
      <ul className="flex gap-3 md:gap-6">
        {navItems.map((item) => {
          const active =
            location.pathname === item.to ||
            (item.to !== "/" && location.pathname.startsWith(item.to));
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 rounded transition-colors duration-200 text-sm md:text-base will-change-transform
                  ${active ? "bg-gray-100 text-primary font-semibold" : "text-gray-700 hover:bg-gray-50"}
                  font-inter`}
                aria-current={active ? "page" : undefined}
              >
                <item.icon size={16} className="md:size-5 mb-0.5" />
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
