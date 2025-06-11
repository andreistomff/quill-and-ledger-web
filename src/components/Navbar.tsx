
import { Link, useLocation } from "react-router-dom";
import { Home, List, Scale } from "lucide-react";

const navItems = [
  { to: "/", label: "Acasă", icon: Home },
  { to: "/services", label: "Servicii", icon: List },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between py-3 px-4 md:py-4 md:px-6 border-b border-gray-200 bg-white">
      <Link 
        to="/" 
        className="flex items-center gap-1 md:gap-2 font-playfair text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-primary hover:text-primary/90 transition-colors"
      >
        <Scale
          size={24}
          strokeWidth={2.3}
          className="text-primary md:size-8 mb-0.5"
          aria-label="Birou Notarial"
        />
        <span className="hidden sm:inline">Biroul Notarial Mariana Cîrstocea</span>
        <span className="sm:hidden">Birou Notarial</span>
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
                className={`flex items-center gap-1 md:gap-2 px-2 py-1 md:px-3 rounded transition text-sm md:text-base
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
