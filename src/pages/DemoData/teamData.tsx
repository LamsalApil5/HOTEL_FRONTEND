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
      name: "John Doe",
      position: "Team Lead",
      photoUrl: "https://picsum.photos/200?random=1",
      bio: "Passionate about leading teams and delivering results.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Frontend Developer",
      photoUrl: "https://picsum.photos/200?random=1",
      bio: "Loves building beautiful and functional user interfaces.",
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Backend Developer",
      photoUrl: "https://picsum.photos/200?random=1",
      bio: "Expert in server-side development and APIs.",
    },
    {
      id: 4,
      name: "Emily Davis",
      position: "UX Designer",
      photoUrl: "https://picsum.photos/200?random=1",
      bio: "Focused on creating user-friendly designs.",
    },
  ];
  