import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-8 md:py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Logo */}
            <Link href="/">
              <div className="w-[100px] h-[25px] bg-black flex items-center justify-center text-white font-bold text-xs">
                LOGO
              </div>
            </Link>

            {/* Quick Menu */}
            <nav className="flex flex-wrap gap-3 text-sm">
              <Link href="/" className="text-gray-600 hover:text-black">
                Acasă
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/servicii" className="text-gray-600 hover:text-black">
                Servicii
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/accesorii" className="text-gray-600 hover:text-black">
                Accesorii
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/contact" className="text-gray-600 hover:text-black">
                Contact
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/termeni" className="text-gray-600 hover:text-black">
                Termeni
              </Link>
            </nav>

            {/* GDPR Links */}
            <div className="flex flex-wrap gap-3 text-xs">
              <Link href="/termeni-conditii" className="text-gray-500 hover:text-black">
                Termeni și condiții
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/politica-confidentialitate" className="text-gray-500 hover:text-black">
                Politica de confidențialitate
              </Link>
              <span className="text-gray-400">|</span>
              <Link href="/politica-cookies" className="text-gray-500 hover:text-black">
                Politica cookies
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 md:text-right">
            {/* Social Links */}
            <div className="flex gap-3 md:justify-end">
              <a
                href="#"
                className="w-5 h-5 bg-gray-600 hover:bg-black rounded-sm flex items-center justify-center transition-colors"
              >
                <span className="text-white text-xs font-bold">T</span>
              </a>
              <a
                href="#"
                className="w-5 h-5 bg-gray-600 hover:bg-black rounded-sm flex items-center justify-center transition-colors"
              >
                <span className="text-white text-xs font-bold">I</span>
              </a>
              <a
                href="#"
                className="w-5 h-5 bg-gray-600 hover:bg-black rounded-sm flex items-center justify-center transition-colors"
              >
                <span className="text-white text-xs font-bold">F</span>
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-gray-500">© 2025 Nume brand. Toate drepturile rezervate.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
