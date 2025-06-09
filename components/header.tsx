"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Acasă", href: "/" },
    { name: "Servicii", href: "/servicii" },
    { name: "Accesorii", href: "/accesorii" },
    { name: "Vinde / Cumpără", href: "/vinde-cumpara" },
    { name: "Cursuri", href: "/cursuri" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-16 md:h-[70px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="w-[120px] h-[30px] bg-black flex items-center justify-center text-white font-bold text-sm">
            LOGO
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Social Icons & Mobile Menu */}
        <div className="flex items-center space-x-3">
          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </a>
            <a href="#" className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">I</span>
            </a>
            <a href="#" className="w-6 h-6 bg-black rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block font-medium text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
              <a href="#" className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">T</span>
              </a>
              <a href="#" className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">I</span>
              </a>
              <a href="#" className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
