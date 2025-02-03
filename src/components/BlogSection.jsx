"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const BlogSection = ({ blogs }) => {
  const [carouselX, setCarouselX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselX((prev) => prev - 1); // Moves left
    }, 20); // Adjust speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden w-full p-6 relative">
      <motion.div
        className="flex space-x-4"
        animate={{ x: carouselX }}
        transition={{ ease: "linear", duration: 0.1 }}
        onMouseEnter={() => clearInterval()} // Pause on hover
        onMouseLeave={() => setInterval(() => setCarouselX((prev) => prev - 1), 20)}
      >
        {[...blogs, ...blogs].map((item, index) => ( // Duplicate for smooth loop
          <div
            key={index}
            className="flex-shrink-0 w-64 bg-white rounded-lg shadow-md p-6"
          >
            <h3 className="font-bold text-xl mb-2">{item.title}</h3>
            <p className="text-gray-700 text-base">{item.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
