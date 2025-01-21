import { useState, useEffect } from "react"
import { Testimonial } from "./Testimonial"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Ethan",
    content: "A delightful choice in the charming town of Marpha. A quiet night’s rest in a clean room with delicious food and a most welcoming and kind family. Also, don’t miss the homemade treats, such as the jams, juices, wines, ciders and brandy (especially the apricot one). Oh and there's an espresso machine!",
  },
  {
    name: "Dinesh Giri",
    content:
      "Best rooms at affordable price & And handsdown the best coffee in marpha only available in  village 🩶 …",
  },
  {
    name: "Morgan Welch",
    content:
      "We stopped at a few different places to check pricing. This place was a very good deal, and to top it off has a very nice man as host. Pretty standard beds, nice hot showers, and good food to wind down. Wound stay again if passing through. Tip: apple brandy is a major export out of Marpha, and it is much cheaper than ordering beer. Give the apricot brandy a try as well.",
  },
]

export function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial()
    }, 15000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-8 md:py-20 bg-none ">
      <div className="container px-4">
        <h2 className="text-3xl font-roboto-flex text-center mb-8">What Our Customers Say</h2>
        <div className="flex items-center justify-center">
          <Button variant="outline" size="icon" onClick={prevTestimonial} className="mr-4 bg-none border-none">
            <ChevronLeft className="h-8 w-8" />
          </Button>
          <div className="w-full">
            <Testimonial {...testimonials[currentIndex]} />
          </div>
          <Button variant="outline" size="icon" onClick={nextTestimonial} className="ml-4 bg-none border-none">
            <ChevronRight className="h-8 w-8"  />
          </Button>
        </div>
      </div>
    </section>
  )
}

