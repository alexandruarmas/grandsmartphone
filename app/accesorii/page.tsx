import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function AccessoriesPage() {
  const categories = [
    {
      title: "Huse și Carcase",
      image: "/placeholder.svg?height=300&width=300",
      description: "Protecție stilată pentru telefonul tău",
      link: "/accesorii/huse",
    },
    {
      title: "Folii de Protecție",
      image: "/placeholder.svg?height=300&width=300",
      description: "Protejează ecranul de zgârieturi și lovituri",
      link: "/accesorii/folii",
    },
    {
      title: "Încărcătoare & Cabluri",
      image: "/placeholder.svg?height=300&width=300",
      description: "Soluții de încărcare rapidă și eficientă",
      link: "/accesorii/incarcatoare",
    },
    {
      title: "Căști & Audio",
      image: "/placeholder.svg?height=300&width=300",
      description: "Experiență audio premium pentru telefonul tău",
      link: "/accesorii/casti",
    },
    {
      title: "Suporturi & Stative",
      image: "/placeholder.svg?height=300&width=300",
      description: "Ține-ți telefonul în poziția perfectă",
      link: "/accesorii/suporturi",
    },
    {
      title: "Baterii Externe",
      image: "/placeholder.svg?height=300&width=300",
      description: "Energie suplimentară oriunde te-ai afla",
      link: "/accesorii/baterii-externe",
    },
  ]

  const featuredProducts = [
    {
      name: "Husă Premium iPhone 15 Pro",
      image: "/placeholder.svg?height=400&width=300",
      price: "89 RON",
      originalPrice: "119 RON",
      discount: "-25%",
      link: "/accesorii/huse/iphone-15-pro-premium",
    },
    {
      name: "Folie Sticlă Samsung Galaxy S23",
      image: "/placeholder.svg?height=400&width=300",
      price: "49 RON",
      originalPrice: "69 RON",
      discount: "-29%",
      link: "/accesorii/folii/samsung-galaxy-s23",
    },
    {
      name: "Încărcător Rapid 65W",
      image: "/placeholder.svg?height=400&width=300",
      price: "129 RON",
      originalPrice: "149 RON",
      discount: "-13%",
      link: "/accesorii/incarcatoare/rapid-65w",
    },
    {
      name: "Căști Wireless Pro",
      image: "/placeholder.svg?height=400&width=300",
      price: "199 RON",
      originalPrice: "249 RON",
      discount: "-20%",
      link: "/accesorii/casti/wireless-pro",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Accesorii Smartphone</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Descoperă gama noastră completă de accesorii premium pentru toate mărcile populare de smartphone-uri.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-black mb-8">Categorii Populare</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Link href={category.link} key={index} className="group">
                <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md h-full">
                  <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold text-black mb-2">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Button variant="ghost" className="p-0 text-black hover:text-gray-700 hover:bg-transparent">
                      Vezi produse <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-black">Oferte Speciale</h2>
            <Button variant="link" className="text-black hover:text-gray-700" asChild>
              <Link href="/accesorii/oferte">
                Vezi toate ofertele <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <Link href={product.link} key={index} className="group">
                <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md h-full">
                  <div className="relative">
                    <div className="aspect-[3/4] overflow-hidden bg-white">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded">
                        {product.discount}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-black mb-2 group-hover:underline">{product.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-black">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-gray-500 text-sm line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-black text-center mb-8">Compatibil cu toate mărcile populare</h2>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {["Apple", "Samsung", "Huawei", "Xiaomi", "OnePlus", "Google"].map((brand, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-gray-500">{brand.charAt(0)}</span>
                </div>
                <p className="font-medium">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">Nu găsești ce cauți?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactează-ne și te ajutăm să găsești accesoriul perfect pentru telefonul tău.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3" asChild>
            <Link href="/contact">Contactează-ne</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
