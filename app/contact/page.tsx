"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setFormSubmitted(true)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresă",
      details: ["Strada Exemplu nr. 123", "București, Sector 1", "România"],
    },
    {
      icon: Phone,
      title: "Telefon",
      details: ["+40 700 000 000", "+40 700 000 001"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@exemplu.ro", "support@exemplu.ro"],
    },
    {
      icon: Clock,
      title: "Program",
      details: ["Luni - Vineri: 9:00 - 18:00", "Sâmbătă: 10:00 - 14:00", "Duminică: Închis"],
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Contactează-ne</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Suntem aici pentru a te ajuta. Contactează-ne pentru orice întrebare sau programare.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-black mb-6">Informații de Contact</h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon
                  return (
                    <div key={index} className="flex">
                      <div className="flex-shrink-0 mt-1">
                        <IconComponent className="w-5 h-5 text-black" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-black">{item.title}</h3>
                        <div className="mt-1 space-y-1">
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-gray-600">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Hartă Google Maps</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-black mb-6">Trimite-ne un mesaj</h2>

                  {formSubmitted ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Send className="w-6 h-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-green-800 mb-2">Mesaj trimis cu succes!</h3>
                      <p className="text-green-700 mb-4">
                        Îți mulțumim pentru mesaj. Te vom contacta în cel mai scurt timp posibil.
                      </p>
                      <Button
                        variant="outline"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                        onClick={() => setFormSubmitted(false)}
                      >
                        Trimite alt mesaj
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nume complet</Label>
                          <Input id="name" placeholder="Numele tău" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="email@exemplu.ro" required />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon</Label>
                        <Input id="phone" placeholder="+40 700 000 000" />
                      </div>

                      <div className="space-y-2">
                        <Label>Subiect</Label>
                        <RadioGroup defaultValue="general" className="flex flex-wrap gap-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="general" id="general" />
                            <Label htmlFor="general" className="cursor-pointer">
                              Informații generale
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="repair" id="repair" />
                            <Label htmlFor="repair" className="cursor-pointer">
                              Reparații
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="courses" id="courses" />
                            <Label htmlFor="courses" className="cursor-pointer">
                              Cursuri
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="buysell" id="buysell" />
                            <Label htmlFor="buysell" className="cursor-pointer">
                              Vânzare/Cumpărare
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Mesaj</Label>
                        <Textarea
                          id="message"
                          placeholder="Detaliile mesajului tău..."
                          className="min-h-[150px]"
                          required
                        />
                      </div>

                      <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                        Trimite mesaj
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-8">Întrebări Frecvente</h2>

          <div className="space-y-4">
            {[
              {
                question: "Cât durează o reparație standard?",
                answer:
                  "Majoritatea reparațiilor standard (înlocuire ecran, baterie, etc.) sunt finalizate în aceeași zi, de obicei în 1-3 ore, în funcție de complexitate și disponibilitatea pieselor.",
              },
              {
                question: "Oferiți garanție pentru reparații?",
                answer:
                  "Da, toate reparațiile noastre vin cu o garanție de 90 de zile pentru piese și manoperă. Anumite reparații pot avea perioade de garanție extinse.",
              },
              {
                question: "Trebuie să fac o programare în avans?",
                answer:
                  "Deși acceptăm și clienți fără programare, recomandăm să faci o programare în avans pentru a evita timpii de așteptare și pentru a te asigura că avem piesele necesare disponibile.",
              },
              {
                question: "Cum pot plăti pentru servicii?",
                answer:
                  "Acceptăm plăți în numerar, card bancar (credit/debit), și transfer bancar pentru companii. Pentru anumite servicii, oferim și opțiunea de plată în rate.",
              },
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Nu ai găsit răspunsul la întrebarea ta?</p>
            <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
              <Link href="/intrebari-frecvente">Vezi toate întrebările frecvente</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
