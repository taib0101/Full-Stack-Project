import { useContext, useEffect, useState } from "react";
import { MenuContext } from "../App";

export const AboutSection = ({ teamMembers }) => {
  return (
    <div className="container mx-auto p-6">
      {/* About Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We are a passionate team of professionals dedicated to delivering
          innovative solutions. Our mission is to create impactful products that
          improve lives and drive businesses forward. With a commitment to
          excellence, we embrace challenges and turn ideas into reality.
          Collaboration and creativity fuel our work, ensuring top-notch
          results. We prioritize customer satisfaction and strive for continuous
          improvement. Our expertise spans various industries, allowing us to
          craft tailored solutions. Integrity, transparency, and dedication
          define our approach to work. We believe in fostering a culture of
          learning and growth. Our team values diversity and inclusivity,
          promoting a positive work environment. Join us on this journey to make
          a meaningful impact together.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-12">
        <h2 className="text-4xl font-bold text-center ">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg text-center"
            >
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
