import Link from "next/link"
import { ChevronRight, GraduationCap, Users, Clock, Award, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CoursesPage() {
  const courses = [
    {
      title: "Reparații Smartphone - Nivel Începător",
      image: "/placeholder.svg?height=300&width=500",
      duration: "4 săptămâni",
      students: "120+ cursanți",
      description: "Învață bazele reparațiilor de smartphone, de la diagnosticare la înlocuirea componentelor simple.",
      features: [
        "Diagnosticare probleme hardware",
        "Înlocuire ecran și baterie",
        "Curățare și întreținere",
        "Unelte și echipamente necesare",
      ],
      price: "799 RON",
      link: "/cursuri/reparatii-incepator",
    },
    {
      title: "Reparații Smartphone - Nivel Avansat",
      image: "/placeholder.svg?height=300&width=500",
      duration: "6 săptămâni",
      students: "80+ cursanți",
      description:
        "Aprofundează cunoștințele de reparații și învață să rezolvi probleme complexe de hardware și software.",
      features: [
        "Reparații la nivel de placă de bază",
        "Recuperare date",
        "Probleme software avansate",
        "Tehnici de micro-sudură",
      ],
      price: "1.299 RON",
      link: "/cursuri/reparatii-avansat",
    },
    {
      title: "Antreprenoriat în Domeniul Reparațiilor",
      image: "/placeholder.svg?height=300&width=500",
      duration: "8 săptămâni",
      students: "50+ cursanți",
      description: "Învață cum să-ți deschizi și să gestionezi propriul service de reparații smartphone.",
      features: [
        "Plan de afaceri și strategie",
        "Marketing și atragere clienți",
        "Gestionare stoc și furnizori",
        "Aspecte legale și financiare",
      ],
      price: "1.999 RON",
      link: "/cursuri/antreprenoriat",
    },
  ]

  const testimonials = [
    {
      name: "Andrei Popescu",
      role: "Absolvent curs Începător",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Cursul a fost exact ce aveam nevoie pentru a începe în domeniul reparațiilor. Acum pot repara singur majoritatea problemelor întâlnite la telefoane.",
    },
    {
      name: "Maria Ionescu",
      role: "Proprietar service",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Datorită cursului de antreprenoriat, am reușit să-mi deschid propriul service de reparații care acum este profitabil. Informațiile au fost practice și la obiect.",
    },
    {
      name: "Cristian Dumitrescu",
      role: "Tehnician reparații",
      image: "/placeholder.svg?height=100&width=100",
      content:
        "Cursul avansat mi-a oferit cunoștințele necesare pentru a face față celor mai complexe reparații. Recomand tuturor care vor să evolueze în acest domeniu.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Cursuri de Reparații și Antreprenoriat</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Învață să repari smartphone-uri și să construiești o afacere profitabilă în domeniul reparațiilor.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-800 px-6 py-3" asChild>
                <Link href="#courses">Vezi cursurile disponibile</Link>
              </Button>
              <Button
                variant="outline"
                className="border-black text-black hover:bg-black hover:text-white px-6 py-3"
                asChild
              >
                <Link href="/contact">Întreabă un consultant</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">
            De ce să alegi cursurile noastre?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertiză Practică</h3>
              <p className="text-gray-600">
                Cursuri predate de profesioniști cu experiență reală în domeniul reparațiilor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunitate Activă</h3>
              <p className="text-gray-600">
                Acces la o comunitate de profesioniști și suport continuu după finalizarea cursului.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexibilitate</h3>
              <p className="text-gray-600">Cursuri disponibile atât online cât și fizic, adaptate programului tău.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Certificare</h3>
              <p className="text-gray-600">Obține un certificat recunoscut în industrie la finalizarea cursului.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="courses" className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">Cursuri Disponibile</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={index} className="border border-gray-200 overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {course.students}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <ul className="space-y-2">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex flex-col items-start border-t border-gray-100 pt-4">
                  <div className="text-2xl font-bold text-black mb-4">{course.price}</div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800" asChild>
                    <Link href={course.link}>
                      Detalii curs <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-12">Ce spun cursanții noștri</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
            Pregătit să-ți începi cariera în reparații smartphone?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Înscrie-te acum și beneficiază de 10% reducere pentru primele 10 locuri disponibile.
          </p>
          <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3" asChild>
            <Link href="/cursuri/inscriere">Înscrie-te acum</Link>
          </Button>
        </div>
      </section>
    </>
  )
}
