
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto py-8 px-4">
        {/* Bottom section */}
        <div className="text-center">
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
