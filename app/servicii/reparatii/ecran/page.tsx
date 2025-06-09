import Link from "next/link"
import { ChevronRight, CheckCircle, AlertCircle, Clock, DollarSign, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ScreenRepairPage() {
  const phoneModels = [
    {
      brand: "iPhone",
      models: [
        "iPhone 15 Pro",
        "iPhone 15",
        "iPhone 14 Pro",
        "iPhone 14",
        "iPhone 13 Pro",
        "iPhone 13",
        "iPhone 12",
        "iPhone SE",
      ],
    },
    {
      brand: "Samsung",
      models: ["Galaxy S23 Ultra", "Galaxy S23", "Galaxy S22", "Galaxy S21", "Galaxy A53", "Galaxy A33"],
    },
    { brand: "Huawei", models: ["P40 Pro", "P40", "P30 Pro", "P30", "Mate 40 Pro"] },
    { brand: "Xiaomi", models: ["13 Pro", "13", "12", "Redmi Note 12", "Redmi Note 11"] },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Reparații Ecran Smartphone</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Servicii profesionale de înlocuire ecran pentru toate mărcile populare de smartphone-uri.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Service Details */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-black mb-4">Despre Serviciul de Reparații Ecran</h2>

                <p className="text-gray-600 mb-6">
                  Ecranul spart este una dintre cele mai frecvente probleme întâlnite la smartphone-uri. Oferim servicii
                  profesionale de înlocuire a ecranului pentru toate mărcile populare, folosind piese de calitate și
                  tehnici avansate de reparație.
                </p>

                <div className="aspect-video bg-gray-200 rounded-lg mb-6">
                  <img
                    src="/placeholder.svg?height=400&width=700"
                    alt="Reparație ecran smartphone"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">Ce include serviciul?</h3>

                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Diagnosticare completă a dispozitivului</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Înlocuirea ecranului cu unul nou, de calitate</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Testare completă a funcționalității</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Curățare profesională a dispozitivului</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">Garanție 90 de zile pentru piese și manoperă</span>
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-black mb-3">Tipuri de ecrane disponibile</h3>

                <p className="text-gray-600 mb-4">
                  Oferim mai multe opțiuni pentru înlocuirea ecranului, în funcție de bugetul și preferințele tale:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-black mb-2">Ecran Original</h4>
                      <p className="text-gray-600 text-sm">
                        Piese originale de la producător, calitate maximă și compatibilitate perfectă.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-black mb-2">Ecran Premium Compatibil</h4>
                      <p className="text-gray-600 text-sm">Calitate apropiată de original, la un preț mai accesibil.</p>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-black mb-2">Ecran Standard Compatibil</h4>
                      <p className="text-gray-600 text-sm">Opțiunea economică, potrivită pentru buget redus.</p>
                    </CardContent>
                  </Card>

                  <Card className="border border-gray-200">
                    <CardContent className="p-4">
                      <h4 className="font-semibold text-black mb-2">Reparație Sticlă</h4>
                      <p className="text-gray-600 text-sm">
                        Pentru cazurile în care doar sticla exterioară este deteriorată.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-800 mb-1">Important de știut</h4>
                      <p className="text-yellow-700 text-sm">
                        Recomandăm să faci o copie de siguranță a datelor înainte de a aduce telefonul pentru reparație.
                        Deși procedura de înlocuire a ecranului nu afectează datele în mod normal, este întotdeauna o
                        măsură de precauție bună.
                      </p>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-black mb-3">Modele Suportate</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  {phoneModels.map((brand, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-black mb-2">{brand.brand}</h4>
                      <ul className="text-gray-600 text-sm space-y-1">
                        {brand.models.map((model, i) => (
                          <li key={i}>{model}</li>
                        ))}
                        <li className="text-gray-500 italic">și multe altele...</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-1">
              {/* Price Card */}
              <Card className="border border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Prețuri Orientative</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">iPhone (modele recente)</span>
                      <span className="font-semibold">de la 499 RON</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Samsung Galaxy S</span>
                      <span className="font-semibold">de la 399 RON</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Huawei</span>
                      <span className="font-semibold">de la 349 RON</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Xiaomi</span>
                      <span className="font-semibold">de la 299 RON</span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mb-4">
                    * Prețurile sunt orientative și pot varia în funcție de model, tipul ecranului și complexitatea
                    reparației.
                  </p>

                  <Button className="w-full bg-black text-white hover:bg-gray-800" asChild>
                    <Link href="/contact">Solicită o ofertă exactă</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Benefits */}
              <Card className="border border-gray-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">De ce să alegi serviciul nostru</h3>

                  <div className="space-y-4">
                    <div className="flex">
                      <Clock className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Rapid</h4>
                        <p className="text-sm text-gray-600">Majoritatea reparațiilor sunt finalizate în aceeași zi.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <Shield className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Garanție</h4>
                        <p className="text-sm text-gray-600">90 de zile garanție pentru piese și manoperă.</p>
                      </div>
                    </div>

                    <div className="flex">
                      <DollarSign className="w-5 h-5 text-black mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-black mb-1">Transparent</h4>
                        <p className="text-sm text-gray-600">Prețuri clare, fără costuri ascunse.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border border-gray-200 bg-gray-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Ai nevoie de ajutor?</h3>

                  <p className="text-gray-600 mb-4">
                    Contactează-ne pentru orice întrebare sau pentru a programa o reparație.
                  </p>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full border-black text-black hover:bg-black hover:text-white"
                      asChild
                    >
                      <Link href="/contact">Contactează-ne</Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-black text-black hover:bg-black hover:text-white"
                      asChild
                    >
                      <Link href="/servicii/programare">Programează o reparație</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-black mb-8">Servicii Conexe</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Înlocuire Baterie",
                description: "Bateria telefonului tău nu mai ține? Înlocuiește-o cu una nouă, de calitate.",
                link: "/servicii/reparatii/baterie",
              },
              {
                title: "Folii de Protecție",
                description: "Protejează noul ecran cu o folie de calitate, aplicată profesional.",
                link: "/servicii/folie-protectie",
              },
              {
                title: "Diagnosticare Completă",
                description: "Verifică starea generală a telefonului tău cu un test complet.",
                link: "/servicii/diagnosticare",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md"
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button variant="ghost" className="p-0 text-black hover:text-gray-700 hover:bg-transparent" asChild>
                    <Link href={service.link}>
                      Află mai multe <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
