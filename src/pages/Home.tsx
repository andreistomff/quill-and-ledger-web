
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-16 px-4 bg-background">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-primary mb-6">
          Biroul Notarial Mariana Cîrstocea
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-12 font-inter leading-relaxed">
          Biroul notarial Mariana Cîrstocea oferă serviciile care sunt prevăzute de Legea notarilor publici și a activității notariale.
        </p>
        <div className="mb-16">
          <Link
            to="/services"
            className="inline-block bg-primary text-primary-foreground font-semibold px-8 py-4 rounded shadow transition hover:bg-primary/90 font-inter text-lg"
          >
            Vizualizează Serviciile
          </Link>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto">
        <ContactSection />
      </div>
    </div>
  );
}
