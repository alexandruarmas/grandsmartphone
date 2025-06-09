"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Check, Smartphone, Upload, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"

export default function SellPhonePage() {
  const [step, setStep] = useState(1)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [phoneCondition, setPhoneCondition] = useState("perfect")

  const handleNextStep = () => {
    setStep(step + 1)
  }

  const handlePrevStep = () => {
    setStep(step - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const phoneConditions = [
    {
      value: "perfect",
      label: "Ca nou",
      description: "Telefonul arată și funcționează ca nou, fără zgârieturi sau defecte.",
    },
    {
      value: "good",
      label: "Foarte bun",
      description: "Telefonul funcționează perfect, poate avea mici semne de uzură care nu afectează funcționalitatea.",
    },
    {
      value: "fair",
      label: "Bun",
      description: "Telefonul are semne vizibile de uzură, dar toate funcțiile sunt operaționale.",
    },
    {
      value: "poor",
      label: "Acceptabil",
      description: "Telefonul are defecte estetice semnificative, dar funcționează.",
    },
    {
      value: "broken",
      label: "Defect",
      description: "Telefonul are probleme funcționale sau nu pornește, dar poate fi reparat.",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Vinde-ți telefonul</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Completează formularul de mai jos pentru a primi o ofertă pentru telefonul tău. Procesul este simplu,
              rapid și transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 ${
                      i < step
                        ? "bg-green-500 text-white"
                        : i === step
                          ? "bg-black text-white"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {i < step ? <Check className="w-5 h-5" /> : i}
                  </div>
                  <span className={`text-sm ${i === step ? "font-semibold text-black" : "text-gray-500"}`}>
                    {i === 1 ? "Detalii telefon" : i === 2 ? "Stare telefon" : "Informații contact"}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <div className={`h-1 ${step > 1 ? "bg-green-500" : "bg-gray-200"}`}></div>
              <div className={`h-1 ${step > 2 ? "bg-green-500" : "bg-gray-200"}`}></div>
            </div>
          </div>

          {formSubmitted ? (
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-green-800 mb-2">Formular trimis cu succes!</h2>
                <p className="text-green-700 mb-6">
                  Îți mulțumim pentru informațiile furnizate. Vom analiza detaliile și te vom contacta în cel mai scurt
                  timp cu o ofertă pentru telefonul tău.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-black text-white hover:bg-gray-800" asChild>
                    <Link href="/">Înapoi la pagina principală</Link>
                  </Button>
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white" asChild>
                    <Link href="/vinde-cumpara">Vezi telefoane de vânzare</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit}>
                  {/* Step 1: Phone Details */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-black mb-4">Detalii despre telefon</h2>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="brand">Marca</Label>
                            <Select required>
                              <SelectTrigger id="brand">
                                <SelectValue placeholder="Selectează marca" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="samsung">Samsung</SelectItem>
                                <SelectItem value="huawei">Huawei</SelectItem>
                                <SelectItem value="xiaomi">Xiaomi</SelectItem>
                                <SelectItem value="google">Google</SelectItem>
                                <SelectItem value="oneplus">OnePlus</SelectItem>
                                <SelectItem value="other">Altă marcă</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="model">Model</Label>
                            <Input id="model" placeholder="ex: iPhone 15 Pro" required />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="storage">Capacitate stocare</Label>
                            <Select required>
                              <SelectTrigger id="storage">
                                <SelectValue placeholder="Selectează capacitatea" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="64gb">64 GB</SelectItem>
                                <SelectItem value="128gb">128 GB</SelectItem>
                                <SelectItem value="256gb">256 GB</SelectItem>
                                <SelectItem value="512gb">512 GB</SelectItem>
                                <SelectItem value="1tb">1 TB</SelectItem>
                                <SelectItem value="unknown">Nu știu</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="color">Culoare</Label>
                            <Input id="color" placeholder="ex: Space Gray" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="purchase-year">Anul achiziției</Label>
                          <Select required>
                            <SelectTrigger id="purchase-year">
                              <SelectValue placeholder="Selectează anul" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2024">2024</SelectItem>
                              <SelectItem value="2023">2023</SelectItem>
                              <SelectItem value="2022">2022</SelectItem>
                              <SelectItem value="2021">2021</SelectItem>
                              <SelectItem value="2020">2020</SelectItem>
                              <SelectItem value="2019">2019</SelectItem>
                              <SelectItem value="older">Mai vechi de 2019</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label>Accesorii incluse</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="charger" />
                              <Label htmlFor="charger" className="cursor-pointer">
                                Încărcător original
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="cable" />
                              <Label htmlFor="cable" className="cursor-pointer">
                                Cablu original
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="earphones" />
                              <Label htmlFor="earphones" className="cursor-pointer">
                                Căști
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="box" />
                              <Label htmlFor="box" className="cursor-pointer">
                                Cutie originală
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="case" />
                              <Label htmlFor="case" className="cursor-pointer">
                                Husă
                              </Label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button onClick={handleNextStep} className="bg-black text-white hover:bg-gray-800">
                          Următorul pas <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Phone Condition */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-black mb-4">Starea telefonului</h2>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Starea generală</Label>
                          <RadioGroup value={phoneCondition} onValueChange={setPhoneCondition}>
                            {phoneConditions.map((condition) => (
                              <div
                                key={condition.value}
                                className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:border-gray-300"
                              >
                                <RadioGroupItem value={condition.value} id={condition.value} className="mt-1" />
                                <div className="flex-1">
                                  <Label htmlFor={condition.value} className="cursor-pointer font-medium">
                                    {condition.label}
                                  </Label>
                                  <p className="text-sm text-gray-600 mt-1">{condition.description}</p>
                                </div>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label>Probleme specifice (dacă există)</Label>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Checkbox id="screen-crack" />
                              <Label htmlFor="screen-crack" className="cursor-pointer">
                                Ecran spart/crăpat
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="battery-issue" />
                              <Label htmlFor="battery-issue" className="cursor-pointer">
                                Probleme cu bateria
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="camera-issue" />
                              <Label htmlFor="camera-issue" className="cursor-pointer">
                                Probleme cu camera
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="speaker-issue" />
                              <Label htmlFor="speaker-issue" className="cursor-pointer">
                                Probleme cu difuzorul
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="button-issue" />
                              <Label htmlFor="button-issue" className="cursor-pointer">
                                Butoane defecte
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Checkbox id="water-damage" />
                              <Label htmlFor="water-damage" className="cursor-pointer">
                                Deteriorări de la apă
                              </Label>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="additional-info">Informații suplimentare</Label>
                          <Textarea
                            id="additional-info"
                            placeholder="Descrie orice alte probleme sau detalii importante despre telefon..."
                            className="min-h-[100px]"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Fotografii telefon (opțional)</Label>
                          <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <p className="text-gray-600 mb-2">Încarcă fotografii cu telefonul</p>
                            <p className="text-sm text-gray-500">PNG, JPG până la 10MB fiecare</p>
                            <Button variant="outline" className="mt-2">
                              Selectează fișiere
                            </Button>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePrevStep}>
                          Înapoi
                        </Button>
                        <Button onClick={handleNextStep} className="bg-black text-white hover:bg-gray-800">
                          Următorul pas <ChevronRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Information */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <h2 className="text-xl font-semibold text-black mb-4">Informații de contact</h2>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">Prenume</Label>
                            <Input id="first-name" placeholder="Prenumele tău" required />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="last-name">Nume</Label>
                            <Input id="last-name" placeholder="Numele tău" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="email@exemplu.ro" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon</Label>
                          <Input id="phone" placeholder="+40 700 000 000" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="city">Orașul</Label>
                          <Input id="city" placeholder="București" required />
                        </div>

                        <div className="space-y-2">
                          <Label>Metoda preferată de contact</Label>
                          <RadioGroup defaultValue="phone">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="phone" id="contact-phone" />
                              <Label htmlFor="contact-phone" className="cursor-pointer">
                                Telefon
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="email" id="contact-email" />
                              <Label htmlFor="contact-email" className="cursor-pointer">
                                Email
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="whatsapp" id="contact-whatsapp" />
                              <Label htmlFor="contact-whatsapp" className="cursor-pointer">
                                WhatsApp
                              </Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <div className="flex">
                            <AlertCircle className="w-5 h-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-blue-800 mb-1">Următorii pași</h4>
                              <p className="text-blue-700 text-sm">
                                După trimiterea formularului, vei primi o ofertă inițială în maxim 24 de ore. Pentru o
                                evaluare finală, va fi necesară o verificare fizică a telefonului.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" required />
                          <Label htmlFor="terms" className="cursor-pointer text-sm">
                            Sunt de acord cu{" "}
                            <Link href="/termeni-conditii" className="text-black underline hover:no-underline">
                              termenii și condițiile
                            </Link>{" "}
                            și{" "}
                            <Link
                              href="/politica-confidentialitate"
                              className="text-black underline hover:no-underline"
                            >
                              politica de confidențialitate
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="newsletter" />
                          <Label htmlFor="newsletter" className="cursor-pointer text-sm">
                            Doresc să primesc oferte și noutăți prin email
                          </Label>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <Button variant="outline" onClick={handlePrevStep}>
                          Înapoi
                        </Button>
                        <Button type="submit" className="bg-black text-white hover:bg-gray-800">
                          Trimite formularul
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold text-black text-center mb-8">De ce să alegi serviciul nostru?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Evaluare Profesională</h3>
              <p className="text-gray-600">
                Echipa noastră de experți evaluează corect și transparent fiecare telefon.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Plată Rapidă</h3>
              <p className="text-gray-600">Primești banii imediat după acceptarea ofertei, fără întârzieri.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fără Obligații</h3>
              <p className="text-gray-600">Evaluarea este gratuită și nu ai nicio obligație să accepți oferta.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
