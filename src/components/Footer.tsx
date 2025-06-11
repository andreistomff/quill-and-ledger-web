
import { Link } from "react-router-dom";
import { Home, List } from "lucide-react";

const footerLinks = [
  { to: "/", label: "Acasă", icon: Home },
  { to: "/services", label: "Servicii", icon: List },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
              Linkuri Rapide
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors font-inter"
                  >
                    <link.icon size={16} />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-lg font-semibold text-primary mb-4">
              Contact
            </h3>
            <p className="text-gray-600 font-inter text-sm">
              Biroul Notarial Mariana Cîrstocea
            </p>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-100 mt-8 pt-6 text-center">
          <p className="text-gray-500 text-sm font-inter">
            Website powered by{" "}
            <a
              href="https://www.codemelt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors font-semibold"
            >
              Codemelt
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
