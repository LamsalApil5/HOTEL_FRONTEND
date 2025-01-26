interface TestimonialProps {
  name: string
  content: string
  image: string
}

export function Testimonial({ name, content, image}: TestimonialProps) {
  return (
    <div className="flex flex-col items-center p-6 space-y-4 text-center">
      <img
        src={image}
        alt={`${name}'s photo`}
        className="h-16 w-16 object-contain" // Adjust the size and styling of the image
      />
      <blockquote className="text-lg italic text-gray-600">"{content}"</blockquote>
      <div className="font-semibold text-gray-900">{name}</div>
    </div>
  )
}

