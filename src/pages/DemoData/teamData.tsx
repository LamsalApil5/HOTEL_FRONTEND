import owner from "../../image/Team/Owner.jpg";
import gardener from "../../image/Team/gardener.jpg";

export interface TeamMember {
  id: number;
  name: string;
  position: string;
  photoUrl: string;
  bio: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Roshni Bista",
    position: "Proud Owner and Head Chef",
    photoUrl: owner,
    bio: "The proud owner and head chef With the passion for authentic cuisine and commitment to delivering an exceptional guest experience,she ensures every dish is a true reflection of our heritage and quality .",
  },
  {
    id: 2,
    name: "Riya Bista",
    position: "Operation",
    photoUrl: "https://picsum.photos/200?random=2",
    bio: "Oversees operation with dedication,ensuring excellent customer service while managing online presence and bookings seamlessly.",
  },
  {
    id: 3,
    name: "Renu Bista",
    position: "Assistant",
    photoUrl: "https://picsum.photos/200?random=3",
    bio: "Heart of our team,looks after every detail with care and dedication that feels like home.",
  },
  {
    id: 4,
    name: "Ronit Bista",
    position: "Barista",
    photoUrl: "https://picsum.photos/200?random=4",
    bio: "Our passionate barista,crafts each cup with skill and love , bringing warmth and flavor of himalayas to every sip.",
  },
  {
    id: 5,
    name: "Sita",
    position: "Housekeeping",
    photoUrl: "https://picsum.photos/200?random=4",
    bio: "With dedication and attention to detail,she ensures a clean,comfortable and welcoming environment for everyone.",
  },
  {
    id: 5,
    name: "Chandra",
    position: "Gardener",
    photoUrl: gardener,
    bio: "With over 3 decades of experience,he has been the backbone of our farm, cultivating fresh vegetables and ensuring every harvest reflects his hard work and passion.",
  },
];
