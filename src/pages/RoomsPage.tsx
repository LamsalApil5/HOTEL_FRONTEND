import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog } from '@/components/ui/dialog'

// Default fallback image URL
const defaultImage = '/images/default-room.jpg'

const rooms = [
  {
    id: 1,
    name: 'Deluxe Room',
    description: 'Spacious room with a king-size bed and city view.',
    image: '/images/deluxe-room.jpg',
    details: 'Thisuxurious room offersuxurious room offersuxurious room offersuxurious room offersuxurious room offersuxurious room offers luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offeThis luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offers a king-size bed, This luxurious room offers a king-size bed, rs a king-size bed, This luxurious room offers a king-size bed, a large window with a city view, and modern amenities to make your stay comfortable.',
  },
  {
    id: 2,
    name: 'Suite',
    description: 'Luxurious suite with separate living area and panoramic views.',
    image: '/images/suite.jpg',
    details: 'The Suite comes with a separate living area, a king-size bed, and panoramic views of the city skyline, making it ideal for a relaxing getaway.',
  },
  {
    id: 3,
    name: 'Family Room',
    description: 'Perfect for families, featuring two queen-size beds.',
    image: '', // No image provided, will fall back to default
    details: 'This family-friendly room includes two queen-size beds, a spacious layout, and a cozy environment to accommodate your loved ones.',
  },
]

interface Room {
  id: number
  name: string
  description: string
  image: string
  details: string
}

const RoomsPage = () => {
  // Define the selectedRoom state with type 'Room | null'
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null)

  const handleOpenModal = (roomId: number) => {
    setSelectedRoom(rooms.find((r) => r.id === roomId) || null)
  }

  const handleCloseModal = () => {
    setSelectedRoom(null)
  }

  return (
    <div className="h-screen mx-36">
      <h1 className="text-5xl font-bold mb-16 text-center font-greatvibes">Our Rooms</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card
              className="cursor-pointer h-full flex flex-col"
              onClick={() => handleOpenModal(room.id)} // Open the modal when clicked
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={room.image || defaultImage} // Use room image or fallback to default image
                  alt={room.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{room.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>{room.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for Room Details */}
      {selectedRoom && (
        <Dialog open={true} onOpenChange={handleCloseModal}>
          <div className="fixed inset-0 bg-gray-500 bg-opacity-50 z-50 flex justify-center items-center">
            <div className="p-6 bg-white rounded-lg shadow-lg max-w-6xl w-full mx-4">
              <h2 className="text-2xl font-bold mb-4">{selectedRoom.name}</h2>
              <img
                src={selectedRoom.image || defaultImage} // Use room image or fallback to default image
                alt={selectedRoom.name}
                className="w-full h-64 object-cover rounded-md mb-4"
              />
              <p className="text-lg">{selectedRoom.details}</p>
              <button
                onClick={handleCloseModal}
                className="mt-4 py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  )
}

export default RoomsPage
