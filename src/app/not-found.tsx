import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="bs">
      <body className="bg-[#0D1321] text-white font-sans antialiased">
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
          <div className="text-[120px] font-bold leading-none text-white/5 select-none mb-2">
            404
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white mb-3 -mt-8">
            Stranica nije pronađena
          </h1>
          <p className="text-base font-light text-gray-400 mb-8 max-w-sm">
            Stranica koju tražite ne postoji ili je premještena.
          </p>
          <Link
            href="/bs/"
            className="inline-flex items-center gap-2 bg-[#FACC15] text-[#0D1321] font-medium px-6 py-3 rounded-xl hover:bg-[#EAB308] transition-colors text-sm"
          >
            Povratak na početnu
          </Link>
        </div>
      </body>
    </html>
  );
}
