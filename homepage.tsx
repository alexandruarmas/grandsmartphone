"use client"

import { useState } from "react"
import { Menu, X, Phone, Recycle, Smartphone, Shield, Lightbulb, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedCard } from "@/components/AnimatedCard"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const quickAccessModules = [
    {
      icon: Phone,
      title: "Repară-ți telefonul",
      description: "Solicită o ofertă rapidă pentru reparație.",
      link: "/servicii/reparatii",
    },
    {
      icon: Recycle,
      title: "Hai să reciclăm",
      description: "Reciclează corect telefoanele sau accesoriile vechi.",
      link: "/servicii/reciclare",
    },
    {
      icon: Smartphone,
      title: "Cauți o husă?",
      description: "Intră în magazinul nostru de accesorii.",
      link: "/accesorii/huse",
    },
    {
      icon: Shield,
      title: "Folia ta e spartă?",
      description: "Schimbăm pe loc folii de protecție.",
      link: "/servicii/folie-protectie",
    },
    {
      icon: Lightbulb,
      title: "Știai că...",
      description: "Curiozități utile despre telefoane și întreținere.",
      link: "/blog",
    },
  ]

  const socialMediaPosts = [
    { id: 1, image: "/placeholder.svg?height=200&width=200", alt: "Instagram post 1" },
    { id: 2, image: "/placeholder.svg?height=200&width=200", alt: "Instagram post 2" },
    { id: 3, image: "/placeholder.svg?height=200&width=200", alt: "Instagram post 3" },
    { id: 4, image: "/placeholder.svg?height=200&width=200", alt: "Instagram post 4" },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-16 md:h-[70px]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="w-[120px] h-[30px] bg-black flex items-center justify-center text-white font-bold text-sm">
              LOGO
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="font-sans font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              Acasă
            </a>
            <a
              href="/servicii"
              className="font-sans font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              Servicii
            </a>
            <a
              href="/accesorii"
              className="font-sans font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              Accesorii
            </a>
            <a
              href="/vinde-cumpara"
              className="font-sans font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              Vinde / Cumpără
            </a>
            <a
              href="/cursuri"
              className="font-sans font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              Cursuri
            </a>
            <a
              href="/contact"
              className="font-sans font-medium text-black hover:text-gray-600 transition-colors tracking-wide"
            >
              Contact
            </a>
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
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <nav className="px-4 py-4 space-y-4">
              <a href="/" className="block font-sans font-medium text-black">
                Acasă
              </a>
              <a href="/servicii" className="block font-sans font-medium text-black">
                Servicii
              </a>
              <a href="/accesorii" className="block font-sans font-medium text-black">
                Accesorii
              </a>
              <a href="/vinde-cumpara" className="block font-sans font-medium text-black">
                Vinde / Cumpără
              </a>
              <a href="/cursuri" className="block font-sans font-medium text-black">
                Cursuri
              </a>
              <a href="/contact" className="block font-sans font-medium text-black">
                Contact
              </a>
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

      {/* Main Content */}
      <main className="pt-16 md:pt-[70px]">
        {/* Quick Access Modules */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {quickAccessModules.map((module, index) => {
                const IconComponent = module.icon
                return (
                  <AnimatedCard
                    key={index}
                    title={module.title}
                    description={module.description}
                    delay={index * 0.2}
                  >
                    <div className="flex flex-col space-y-3">
                      <IconComponent className="w-8 h-8 text-black" />
                      <div>
                        <h3 className="font-sans font-semibold text-lg text-black mb-1">{module.title}</h3>
                        <p className="font-sans text-sm text-gray-600">{module.description}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                )
              })}
              {/* Empty space with decorative element */}
              <div className="hidden md:block">
                <div className="h-full flex items-center justify-center opacity-10">
                  <Smartphone className="w-16 h-16 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Two Quick Options Banners */}
        <section className="py-8">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Sell Phone Banner */}
              <div className="bg-gray-50 border border-gray-300 rounded p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-black mb-1">Vinde-ți telefonul</h3>
                  <p className="font-sans text-sm text-gray-600">Completează formularul / Vezi opțiuni de buyback</p>
                </div>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Vezi opțiuni <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>

              {/* Buy Phone Banner */}
              <div className="bg-gray-50 border border-gray-300 rounded p-6 flex items-center justify-between">
                <div>
                  <h3 className="font-sans font-semibold text-lg text-black mb-1">Cauți un telefon?</h3>
                  <p className="font-sans text-sm text-gray-600">Intră în stocul nostru actualizat</p>
                </div>
                <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                  Vezi detalii <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="font-sans font-semibold text-xl text-center text-black mb-8">Urmărește-ne pe rețele</h2>

            {/* Social Media Carousel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {socialMediaPosts.map((post) => (
                <div key={post.id} className="aspect-square bg-gray-100 border border-gray-200 rounded overflow-hidden">
                  <img src={post.image || "/placeholder.svg"} alt={post.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>

            {/* Follow Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Urmărește-ne pe Instagram
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Follow pe TikTok
              </Button>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                Like pe Facebook
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Promotional Banner */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
            <h2 className="font-sans font-bold text-2xl md:text-3xl text-black mb-4">
              Cursuri. Învață un business. Intră în comunitate.
            </h2>
            <p className="font-sans text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Descoperă cum să înveți meseria și să construiești o afacere în domeniul telefoanelor.
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3">
              Vezi detalii <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Logo */}
              <div className="w-[100px] h-[25px] bg-black flex items-center justify-center text-white font-bold text-xs">
                LOGO
              </div>

              {/* Quick Menu */}
              <nav className="flex flex-wrap gap-3 text-sm">
                <a href="/" className="font-sans text-gray-600 hover:text-black">
                  Acasă
                </a>
                <span className="text-gray-400">|</span>
                <a href="/servicii" className="font-sans text-gray-600 hover:text-black">
                  Servicii
                </a>
                <span className="text-gray-400">|</span>
                <a href="/accesorii" className="font-sans text-gray-600 hover:text-black">
                  Accesorii
                </a>
                <span className="text-gray-400">|</span>
                <a href="/contact" className="font-sans text-gray-600 hover:text-black">
                  Contact
                </a>
                <span className="text-gray-400">|</span>
                <a href="/termeni" className="font-sans text-gray-600 hover:text-black">
                  Termeni
                </a>
              </nav>

              {/* GDPR Links */}
              <div className="flex flex-wrap gap-3 text-xs">
                <a href="/termeni-conditii" className="font-sans text-gray-500 hover:text-black">
                  Termeni și condiții
                </a>
                <span className="text-gray-400">|</span>
                <a href="/politica-confidentialitate" className="font-sans text-gray-500 hover:text-black">
                  Politica de confidențialitate
                </a>
                <span className="text-gray-400">|</span>
                <a href="/politica-cookies" className="font-sans text-gray-500 hover:text-black">
                  Politica cookies
                </a>
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
              <p className="font-sans text-xs text-gray-500">© 2025 Nume brand. Toate drepturile rezervate.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
