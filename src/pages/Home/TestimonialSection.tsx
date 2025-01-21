import { useState, useEffect } from "react"
import { Testimonial } from "./Testimonial"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    content: "This product has revolutionized our workflow. It's intuitive, powerful, and a joy to use every day.",
  },
  {
    name: "Michael Chen",
    content:
      "I've tried many similar tools, but this one stands out. The attention to detail and user experience is unmatched.",
  },
  {
    name: "Emily Rodriguez",
    content:
      "As a freelancer, efficiency is key. This tool has saved me countless hours and helped me deliver better results to my clients.",
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
        <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
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

