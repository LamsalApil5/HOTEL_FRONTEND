import owner from "../../image/Team/Owner.jpg"
import gardener from "../../image/Team/gardener.jpg"

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
    bio: "Passionate about creating delicious meals and leading the kitchen.",
  },
  {
    id: 2,
    name: "Riya Bista",
    position: "Operation",
    photoUrl: "https://picsum.photos/200?random=2",
    bio: "Ensuring smooth operations and managing daily activities.",
  },
  {
    id: 3,
    name: "Renu Bista",
    position: "Assistant",
    photoUrl: "https://picsum.photos/200?random=3",
    bio: "Assisting with various tasks and supporting the team in every way.",
  },
  {
    id: 4,
    name: "Sita",
    position: "Housekeeping",
    photoUrl: "https://picsum.photos/200?random=4",
    bio: "Maintaining cleanliness and ensuring a welcoming environment.",
  },
  {
    id: 5,
    name: "Chandra",
    position: "Gardener",
    photoUrl: gardener,
    bio: "Tending to the garden and ensuring a green and beautiful space.",
  },
];
