import { motion } from "framer-motion";

export const BlogSection = ({ blogs }) => {
  const blogList = [...blogs, ...blogs];

  return (
    <div className="overflow-hidden w-full p-6 relative">
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
      >
        {blogList.map((item, index) => (
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
