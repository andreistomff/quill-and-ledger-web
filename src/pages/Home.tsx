import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-[70vh] flex flex-col justify-center items-center">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-tight text-primary mb-5">
        Quill & Ledger Notary Office
      </h1>
      <p className="max-w-lg text-lg text-gray-600 mb-8 font-inter text-center">
        Professional, trusted, and confidential notary services for both individuals and businesses.
        We notarize your important documents with accuracy and discretion.
      </p>
      <Link
        to="/services"
        className="inline-block bg-primary text-primary-foreground font-semibold px-6 py-3 rounded shadow transition hover:bg-primary/90 font-inter"
      >
        View Our Services
      </Link>
      <ContactSection />
    </div>
  );
}
