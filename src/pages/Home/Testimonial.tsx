interface TestimonialProps {
  name: string
  content: string
}

export function Testimonial({ name, content}: TestimonialProps) {
  return (
    <div className="flex flex-col items-center p-6 space-y-4 text-center">
      <blockquote className="text-lg italic text-gray-600">"{content}"</blockquote>
      <div className="font-semibold text-gray-900">{name}</div>
    </div>
  )
}

