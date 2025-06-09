import Link from "next/link"
import { Phone, Recycle, Smartphone, Shield, Lightbulb, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function HomePage() {
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
    <>
      {/* Quick Access Modules */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quickAccessModules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <Link href={module.link} key={index}>
                  <Card className="group cursor-pointer border border-gray-300 hover:border-gray-500 transition-all duration-200 hover:-translate-y-1 hover:shadow-md h-full">
                    <CardContent className="p-4">
                      <div className="flex flex-col space-y-3">
                        <IconComponent className="w-8 h-8 text-black" />
                        <div>
                          <h3 className="font-semibold text-lg text-black mb-1">{module.title}</h3>
                          <p className="text-sm text-gray-600">{module.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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
                <h3 className="font-semibold text-lg text-black mb-1">Vinde-ți telefonul</h3>
                <p className="text-sm text-gray-600">Completează formularul / Vezi opțiuni de buyback</p>
              </div>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
                <Link href="/vinde-cumpara/vinde">
                  Vezi opțiuni <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>

            {/* Buy Phone Banner */}
            <div className="bg-gray-50 border border-gray-300 rounded p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg text-black mb-1">Cauți un telefon?</h3>
                <p className="text-sm text-gray-600">Intră în stocul nostru actualizat</p>
              </div>
              <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
                <Link href="/vinde-cumpara/cumpara">
                  Vezi detalii <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="font-semibold text-xl text-center text-black mb-8">Urmărește-ne pe rețele</h2>

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
          <h2 className="font-bold text-2xl md:text-3xl text-black mb-4">
            Cursuri. Învață un business. Intră în comunitate.
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Descoperă cum să înveți meseria și să construiești o afacere în domeniul telefoanelor.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3" asChild>
            <Link href="/cursuri">
              Vezi detalii <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
