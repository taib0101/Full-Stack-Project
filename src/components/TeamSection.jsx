import React from 'react';

export const TeamSection = ({ teamMembers }) => {
  return (
    <div className="team-section">
      <h2>Our Team</h2>
      {teamMembers.map((member, index) => (
        <div key={index}>
          <h3>{member.name}</h3>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};
