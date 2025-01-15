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
    <div className="max-w-7xl mx-auto p-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8"
        initial={{ opacity: 0 }} // Start invisible
        whileInView={{ opacity: 1 }} // Fade in when in view
        transition={{ duration: 0.5 }} // Duration of the fade-in effect
      >
        Meet Our Team
      </motion.h1>
      <div className="space-y-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0 }} // Start invisible
            whileInView={{ opacity: 1 }} // Fade in when in view
            transition={{ duration: 0.5, delay: index * 0.2 }} // Delay each member's fade-in
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
      className={`team-member-card hover:shadow-lg bg-white p-4 transition-all duration-1000 ease-out flex flex-col md:flex-row items-center md:items-start gap-6 ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex-1 flex justify-center md:justify-start">
        <img
          src={member.photoUrl}
          alt={`${member.name}'s photo`}
          className="w-30 h-30 md:w-45 md:h-45 rounded-md"
        />
      </div>
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          {member.name}
        </h2>
        <p className="text-sm md:text-base text-gray-500">{member.position}</p>
        <p className="text-sm md:text-base text-gray-600 mt-2">{member.bio}</p>
      </div>
    </div>
  );
};

export default TeamPage;
