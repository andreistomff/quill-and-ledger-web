
import { Link, useLocation } from "react-router-dom";
import { Home, List } from "lucide-react";

const navItems = [
  { to: "/", label: "Acasă", icon: Home },
  { to: "/services", label: "Servicii", icon: List },
];

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="flex items-center justify-between py-4 px-6 border-b border-gray-200 bg-white">
      <span className="font-playfair text-xl md:text-2xl font-bold tracking-tight text-primary">
        Biroul Notarial Mariana Cîrstocea
      </span>
      <ul className="flex gap-6">
        {navItems.map((item) => {
          const active =
            location.pathname === item.to ||
            (item.to !== "/" && location.pathname.startsWith(item.to));
          return (
            <li key={item.to}>
              <Link
                to={item.to}
                className={`flex items-center gap-2 px-3 py-1 rounded transition
                  ${active ? "bg-gray-100 text-primary font-semibold" : "text-gray-700 hover:bg-gray-50"}
                  font-inter`}
                aria-current={active ? "page" : undefined}
              >
                <item.icon size={20} className="mb-0.5" />
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
