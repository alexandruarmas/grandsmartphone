import Link from "next/link"
import { Phone, Shield, Wrench, Cpu, Battery, Recycle, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      icon: Phone,
      title: "Reparații Ecran",
      description: "Înlocuire ecran spart sau defect pentru toate modelele populare de smartphone.",
      price: "de la 150 RON",
      link: "/servicii/reparatii/ecran",
    },
    {
      icon: Battery,
      title: "Înlocuire Baterie",
      description: "Baterii noi, originale sau compatibile pentru orice model de telefon.",
      price: "de la 100 RON",
      link: "/servicii/reparatii/baterie",
    },
    {
      icon: Shield,
      title: "Folii Protecție",
      description: "Aplicare profesională de folii de protecție pentru ecran, spate sau cameră.",
      price: "de la 30 RON",
      link: "/servicii/folie-protectie",
    },
    {
      icon: Cpu,
      title: "Probleme Software",
      description: "Rezolvarea problemelor de software, actualizări și recuperare date.",
      price: "de la 80 RON",
      link: "/servicii/reparatii/software",
    },
    {
      icon: Wrench,
      title: "Diagnosticare",
      description: "Identificarea problemelor hardware sau software ale telefonului tău.",
      price: "GRATUIT*",
      link: "/servicii/diagnosticare",
    },
    {
      icon: Recycle,
      title: "Reciclare",
      description: "Reciclare ecologică pentru telefoane vechi și accesorii.",
      price: "GRATUIT",
      link: "/servicii/reciclare",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Servicii Reparații</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Oferim servicii profesionale de reparații pentru toate mărcile populare de smartphone-uri, cu piese de
              calitate și garanție pentru lucrările efectuate.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-6 h-6 text-black" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 min-h-[60px]">{service.description}</CardDescription>
                    <p className="font-semibold text-black mt-4">{service.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full border-black text-black hover:bg-black hover:text-white"
                      asChild
                    >
                      <Link href={service.link}>
                        Detalii <ChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">Cum funcționează</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Contactează-ne</h3>
              <p className="text-gray-600">
                Completează formularul online sau vino direct în magazin pentru o evaluare gratuită.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnosticare</h3>
              <p className="text-gray-600">
                Tehnicianul nostru va examina telefonul și îți va oferi o estimare de preț și timp.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Reparație & Livrare</h3>
              <p className="text-gray-600">
                După aprobare, reparăm telefonul și ți-l returnăm în stare perfectă de funcționare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Ai nevoie de o reparație urgentă?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactează-ne acum pentru o programare sau vino direct în magazin pentru reparații în aceeași zi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3" asChild>
              <Link href="/contact">Contactează-ne</Link>
            </Button>
            <Button
              variant="outline"
              className="border-black text-black hover:bg-black hover:text-white px-6 py-3"
              asChild
            >
              <Link href="/servicii/programare">Programează-te online</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
