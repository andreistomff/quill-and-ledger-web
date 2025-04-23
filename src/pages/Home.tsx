
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import { FilePen } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
      <div className="relative w-full max-w-4xl px-4 mb-6">
        <div 
          className="w-full h-64 md:h-80 bg-cover bg-center rounded-lg shadow-lg mb-6"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1498050108023-c5249f4df085')`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
            <div className="text-white text-center px-4">
              <FilePen size={64} strokeWidth={1.5} className="mx-auto mb-4 text-white" />
              <h2 className="text-2xl md:text-3xl font-bold font-playfair">
                Servicii Notariale Profesionale
              </h2>
            </div>
          </div>
        </div>
      </div>
      
      <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-primary mb-5">
        Biroul Notarial Mariana Cîrstocea
      </h1>
      <p className="max-w-lg text-lg text-gray-600 mb-8 font-inter text-center">
        Servicii notariale profesionale, de încredere și confidențiale pentru persoane fizice și juridice. 
        Autentificăm documentele dumneavoastră importante cu precizie și discreție.
      </p>
      <Link
        to="/services"
        className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded shadow transition hover:bg-primary/90 font-inter"
      >
        Vizualizează Serviciile
      </Link>
      <ContactSection />
    </div>
  );
}

