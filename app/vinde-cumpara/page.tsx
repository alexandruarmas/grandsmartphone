import Link from "next/link"
import { ChevronRight, Smartphone, DollarSign, ShieldCheck, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function BuySellPage() {
  const sellFeatures = [
    {
      icon: DollarSign,
      title: "Prețuri Competitive",
      description: "Oferim cele mai bune prețuri pentru telefonul tău, bazate pe starea și modelul acestuia.",
    },
    {
      icon: Smartphone,
      title: "Evaluare Gratuită",
      description: "Evaluăm gratuit telefonul tău, fără nicio obligație din partea ta.",
    },
    {
      icon: Truck,
      title: "Plată Imediată",
      description: "Primești banii pe loc, imediat după ce accepti oferta noastră.",
    },
  ]

  const buyFeatures = [
    {
      icon: ShieldCheck,
      title: "Garanție Inclusă",
      description: "Toate telefoanele noastre vin cu garanție de minim 6 luni.",
    },
    {
      icon: Smartphone,
      title: "Testate Profesional",
      description: "Fiecare telefon este verificat și testat de tehnicienii noștri.",
    },
    {
      icon: DollarSign,
      title: "Prețuri Accesibile",
      description: "Telefoane de calitate la prețuri mult sub cele ale unui model nou.",
    },
  ]

  const featuredPhones = [
    {
      name: "iPhone 13 Pro",
      image: "/placeholder.svg?height=400&width=300",
      price: "2.499 RON",
      condition: "Ca nou",
      memory: "128GB",
      color: "Graphite",
      link: "/vinde-cumpara/cumpara/iphone-13-pro",
    },
    {
      name: "Samsung Galaxy S22",
      image: "/placeholder.svg?height=400&width=300",
      price: "1.899 RON",
      condition: "Foarte bun",
      memory: "256GB",
      color: "Phantom Black",
      link: "/vinde-cumpara/cumpara/samsung-galaxy-s22",
    },
    {
      name: "Google Pixel 7",
      image: "/placeholder.svg?height=400&width=300",
      price: "1.699 RON",
      condition: "Ca nou",
      memory: "128GB",
      color: "Snow",
      link: "/vinde-cumpara/cumpara/google-pixel-7",
    },
    {
      name: "Xiaomi 13",
      image: "/placeholder.svg?height=400&width=300",
      price: "1.599 RON",
      condition: "Foarte bun",
      memory: "256GB",
      color: "Black",
      link: "/vinde-cumpara/cumpara/xiaomi-13",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Vinde sau Cumpără Telefoane</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Fie că vrei să vinzi telefonul tău actual sau să cumperi unul la mâna a doua, suntem aici să te ajutăm cu
              cele mai bune oferte.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Tabs defaultValue="sell" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="sell" className="text-lg py-3">
                Vinde Telefonul
              </TabsTrigger>
              <TabsTrigger value="buy" className="text-lg py-3">
                Cumpără Telefon
              </TabsTrigger>
            </TabsList>

            <TabsContent value="sell" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {sellFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <Card key={index} className="border border-gray-200">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-black" />
                          <CardTitle>{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 md:p-8">
                <h3 className="text-xl font-semibold mb-4">Cum funcționează procesul de vânzare?</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">1</span>
                    </div>
                    <h4 className="font-semibold mb-2">Completează formularul</h4>
                    <p className="text-gray-600">Oferă-ne detalii despre telefonul tău pentru o evaluare inițială.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">2</span>
                    </div>
                    <h4 className="font-semibold mb-2">Primește o ofertă</h4>
                    <p className="text-gray-600">Îți vom face o ofertă bazată pe starea și modelul telefonului.</p>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-4">
                      <span className="font-bold">3</span>
                    </div>
                    <h4 className="font-semibold mb-2">Primește banii</h4>
                    <p className="text-gray-600">
                      Dacă accepți oferta, primești banii pe loc sau prin transfer bancar.
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3" asChild>
                    <Link href="/vinde-cumpara/vinde">
                      Vinde telefonul tău <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="buy" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {buyFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <Card key={index} className="border border-gray-200">
                      <CardHeader className="pb-2">
                        <div className="flex items-center gap-3">
                          <IconComponent className="w-6 h-6 text-black" />
                          <CardTitle>{feature.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{feature.description}</p>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              <h3 className="text-xl font-semibold mb-6">Telefoane Recomandate</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {featuredPhones.map((phone, index) => (
                  <Link href={phone.link} key={index} className="group">
                    <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md h-full">
                      <div className="aspect-[3/4] overflow-hidden bg-white p-4">
                        <img
                          src={phone.image || "/placeholder.svg"}
                          alt={phone.name}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="font-medium text-black mb-1 group-hover:underline">{phone.name}</h3>
                        <p className="font-bold text-black mb-2">{phone.price}</p>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p>Stare: {phone.condition}</p>
                          <p>Memorie: {phone.memory}</p>
                          <p>Culoare: {phone.color}</p>
                        </div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button
                          variant="outline"
                          className="w-full border-black text-black hover:bg-black hover:text-white"
                        >
                          Vezi detalii
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              <div className="text-center">
                <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3" asChild>
                  <Link href="/vinde-cumpara/cumpara">
                    Vezi toate telefoanele <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-black text-center mb-8">Ce spun clienții noștri</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <Card key={item} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Proces foarte simplu și transparent. Am primit o ofertă corectă pentru telefonul meu vechi și banii
                    pe loc. Recomand cu încredere!"
                  </p>
                  <div className="font-medium">Alexandru M.</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
