"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ChevronRight,
  ShoppingCart,
  Heart,
  Share2,
  Truck,
  RotateCcw,
  Shield,
  Star,
  Check,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function ProductPage() {
  const [selectedColor, setSelectedColor] = useState("black")
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const colors = [
    { id: "black", name: "Negru", hex: "#000000" },
    { id: "blue", name: "Albastru", hex: "#1E40AF" },
    { id: "red", name: "Roșu", hex: "#DC2626" },
    { id: "green", name: "Verde", hex: "#047857" },
  ]

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 3000)
  }

  return (
    <>
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm text-gray-500">
            <Link href="/" className="hover:text-black">
              Acasă
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link href="/accesorii" className="hover:text-black">
              Accesorii
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link href="/accesorii/huse" className="hover:text-black">
              Huse
            </Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-black">Husă Premium iPhone 15 Pro</span>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Product Images */}
            <div>
              <div className="aspect-square bg-gray-100 rounded-lg mb-4">
                <img
                  src="/placeholder.svg?height=600&width=600"
                  alt="Husă Premium iPhone 15 Pro"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="aspect-square bg-gray-100 rounded-lg cursor-pointer hover:ring-2 hover:ring-black"
                  >
                    <img
                      src="/placeholder.svg?height=150&width=150"
                      alt={`Husă Premium iPhone 15 Pro - Imagine ${item}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-black mb-2">Husă Premium iPhone 15 Pro</h1>

              <div className="flex items-center mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">42 recenzii</span>
              </div>

              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-black mr-3">89 RON</span>
                <span className="text-lg text-gray-500 line-through">119 RON</span>
                <span className="ml-3 bg-red-100 text-red-700 text-sm font-semibold px-2 py-1 rounded">-25%</span>
              </div>

              <p className="text-gray-600 mb-6">
                Husă premium pentru iPhone 15 Pro, fabricată din materiale de înaltă calitate, oferind protecție maximă
                împotriva zgârieturilor și șocurilor. Design elegant și subțire care păstrează aspectul original al
                telefonului.
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">
                  Culoare: {colors.find((c) => c.id === selectedColor)?.name}
                </h3>
                <RadioGroup value={selectedColor} onValueChange={setSelectedColor} className="flex space-x-3">
                  {colors.map((color) => (
                    <div key={color.id} className="flex flex-col items-center">
                      <RadioGroupItem value={color.id} id={`color-${color.id}`} className="sr-only" />
                      <Label
                        htmlFor={`color-${color.id}`}
                        className={`w-8 h-8 rounded-full cursor-pointer flex items-center justify-center ${selectedColor === color.id ? "ring-2 ring-black ring-offset-2" : ""}`}
                        style={{ backgroundColor: color.hex }}
                      >
                        {selectedColor === color.id && <Check className="w-4 h-4 text-white" />}
                      </Label>
                      <span className="text-xs mt-1">{color.name}</span>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-black mb-3">Cantitate</h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="border-gray-300"
                  >
                    -
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                    className="border-gray-300"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button className="flex-1 bg-black text-white hover:bg-gray-800" onClick={handleAddToCart}>
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  {addedToCart ? "Adăugat în coș!" : "Adaugă în coș"}
                </Button>
                <Button variant="outline" className="flex-1 border-black text-black hover:bg-black hover:text-white">
                  <Heart className="w-5 h-5 mr-2" />
                  Adaugă la favorite
                </Button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex flex-col items-center text-center">
                  <Truck className="w-6 h-6 text-black mb-2" />
                  <span className="text-sm font-medium">Livrare gratuită</span>
                  <span className="text-xs text-gray-500">pentru comenzi peste 150 RON</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <RotateCcw className="w-6 h-6 text-black mb-2" />
                  <span className="text-sm font-medium">Retur gratuit</span>
                  <span className="text-xs text-gray-500">în 30 de zile</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Shield className="w-6 h-6 text-black mb-2" />
                  <span className="text-sm font-medium">Garanție 12 luni</span>
                  <span className="text-xs text-gray-500">pentru toate produsele</span>
                </div>
              </div>

              {/* Share */}
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-3">Distribuie:</span>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                    <span className="sr-only">Facebook</span>
                    <span className="text-xs font-bold">F</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                    <span className="sr-only">Instagram</span>
                    <span className="text-xs font-bold">I</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                    <span className="sr-only">WhatsApp</span>
                    <span className="text-xs font-bold">W</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 p-0">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="description">Descriere</TabsTrigger>
              <TabsTrigger value="specifications">Specificații</TabsTrigger>
              <TabsTrigger value="reviews">Recenzii (42)</TabsTrigger>
            </TabsList>

            <TabsContent value="description" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="prose max-w-none">
                    <h3 className="text-xl font-semibold text-black mb-4">Descriere Produs</h3>

                    <p className="mb-4">
                      Husa Premium pentru iPhone 15 Pro este concepută pentru a oferi protecție maximă telefonului tău,
                      păstrând în același timp designul elegant și subțire al acestuia. Fabricată din materiale de
                      înaltă calitate, această husă oferă protecție împotriva zgârieturilor, șocurilor și căzăturilor
                      accidentale.
                    </p>

                    <h4 className="text-lg font-semibold text-black mb-2">Caracteristici principale:</h4>

                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Material premium rezistent la uzură și îngălbenire</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Design ultra-subțire care nu adaugă volum telefonului</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Protecție ridicată la impact cu tehnologie de absorbție a șocurilor</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Margini ridicate pentru protecția ecranului și a camerei</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Compatibilitate perfectă cu încărcarea wireless</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Decupaje precise pentru butoane, porturi și camera foto</span>
                      </li>
                    </ul>

                    <p>
                      Disponibilă în mai multe culori elegante, această husă nu doar protejează telefonul, dar îi oferă
                      și un aspect premium. Este alegerea perfectă pentru cei care doresc să-și păstreze telefonul în
                      condiții excelente fără a compromite aspectul estetic.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="specifications" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-4">Specificații Tehnice</h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-black mb-2">Informații Generale</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Compatibilitate</span>
                          <span className="font-medium">iPhone 15 Pro</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Material</span>
                          <span className="font-medium">TPU Premium + Policarbonat</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Stil</span>
                          <span className="font-medium">Slim Fit</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Culori disponibile</span>
                          <span className="font-medium">4</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">Dimensiuni și Greutate</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Dimensiuni</span>
                          <span className="font-medium">147 x 72 x 9 mm</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Greutate</span>
                          <span className="font-medium">28g</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Grosime</span>
                          <span className="font-medium">1.2 mm</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">Caracteristici</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Rezistență la șocuri</span>
                          <span className="font-medium">Da (Military Grade)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Margini ridicate</span>
                          <span className="font-medium">Da (0.3 mm)</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Compatibil încărcare wireless</span>
                          <span className="font-medium">Da</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Rezistent la îngălbenire</span>
                          <span className="font-medium">Da</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-2">Pachetul Include</h4>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span className="text-gray-600">Husă Premium</span>
                          <span className="font-medium">1 bucată</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Manual de utilizare</span>
                          <span className="font-medium">1 bucată</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="text-gray-600">Certificat de garanție</span>
                          <span className="font-medium">1 bucată</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold text-black">Recenzii (42)</h3>
                    <Button className="bg-black text-white hover:bg-gray-800">Adaugă o recenzie</Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="text-4xl font-bold text-black mr-4">4.8</div>
                        <div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`w-5 h-5 ${star <= 4.8 ? "text-yellow-500 fill-current" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="text-sm text-gray-500">Bazat pe 42 de recenzii</p>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {[
                          { stars: 5, percentage: 85 },
                          { stars: 4, percentage: 10 },
                          { stars: 3, percentage: 3 },
                          { stars: 2, percentage: 1 },
                          { stars: 1, percentage: 1 },
                        ].map((rating) => (
                          <div key={rating.stars} className="flex items-center">
                            <div className="flex items-center w-20">
                              <span className="text-sm text-gray-600 mr-1">{rating.stars}</span>
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            </div>
                            <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className="h-full bg-yellow-500 rounded-full"
                                style={{ width: `${rating.percentage}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 ml-2 w-10">{rating.percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-black mb-3">Ce spun clienții</h4>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2 w-32">Calitate</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "90%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600 ml-2">Excelent</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2 w-32">Valoare</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600 ml-2">Foarte bun</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2 w-32">Durabilitate</span>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-green-500 rounded-full" style={{ width: "95%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600 ml-2">Excelent</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="font-semibold text-black mb-4">Recenzii recente</h4>

                    <div className="space-y-6">
                      {[1, 2, 3].map((review) => (
                        <div key={review} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                          <div className="flex justify-between mb-2">
                            <h5 className="font-semibold">Mihai D.</h5>
                            <span className="text-sm text-gray-500">12 mai 2025</span>
                          </div>
                          <div className="flex mb-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <p className="text-gray-600 mb-2">
                            Husă de calitate superioară, se potrivește perfect pe telefonul meu iPhone 15 Pro.
                            Materialul este plăcut la atingere și oferă o protecție excelentă. Recomand cu încredere!
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 text-center">
                      <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white">
                        Vezi toate recenziile
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-black mb-8">Produse similare</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((product) => (
              <Link href="#" key={product} className="group">
                <Card className="overflow-hidden border border-gray-200 hover:border-gray-300 transition-all duration-200 hover:shadow-md h-full">
                  <div className="aspect-square overflow-hidden bg-white p-4">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt={`Produs similar ${product}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-medium text-black mb-1 group-hover:underline">Husă iPhone 15 Pro Max</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-bold text-black">79 RON</span>
                      <span className="text-gray-500 text-sm line-through">99 RON</span>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-4 h-4 text-yellow-500 fill-current" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
