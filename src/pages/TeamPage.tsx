import React, { useEffect, useState } from "react";
import { teamData, TeamMember } from "./DemoData/teamData";
import { motion } from "framer-motion"; // Import motion from framer-motion

const TeamPage: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  // Simulate fetching data
  useEffect(() => {
    const fetchTeamMembers = async () => {
      setTeamMembers(teamData); // Set the fetched data
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="max-w-7xl mx-auto mb-6 md:mb-32">
      <motion.h1
        className="text-5xl md:text-4xl text-center text-gray-800 mb-8 font-roboto-flex py-8"
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.5 }} 
      >
        Meet Our Team
      </motion.h1>
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.5, delay: index * 0.2 }} 
          >
            <TeamMemberCard member={member} reverse={index % 2 !== 0} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const TeamMemberCard: React.FC<{ member: TeamMember; reverse: boolean }> = ({
  member,
  reverse,
}) => {
  return (
    <div
      className={`team-member-card bg-white p-4 transition-all duration-1000 ease-out flex flex-col md:flex-row items-center md:items-start gap-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src={member.photoUrl}
          alt={`${member.name}'s photo`}
          className="w-44 h-44 md:w-60 md:h-60 rounded-full mx-auto transform transition-transform duration-500 hover:scale-125 md:hover:scale-150"
          style={{ transformOrigin: "center" }}
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg md:text-xl font-roboto-flex text-gray-800">
          {member.name}
        </h2>
        <p className="text-sm md:text-base text-gray-500 font-lora">{member.position}</p>
        <p className="text-sm md:text-base text-gray-600 mt-2 font-lora">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamPage;
