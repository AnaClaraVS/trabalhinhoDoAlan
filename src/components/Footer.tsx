interface FooterProps {
  year?: number;
}

export default function Footer({ year = new Date().getFullYear() }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white mt-auto py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-slate-400">
          {/* Direitos autorais */}
          <p>
            © {year} Essencial Wear. Todos os direitos reservados.
          </p>
          
          {/* Contato */}
          <p>
             contato@essencialwear.com |  (44) 9123-45670
          </p>
        </div>
      </div>
    </footer>
  );
}