export const Hero = () => {
  return (
    <>
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        {/* Hero Content */}
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to My Website
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            I provide the best solutions for Ostad Organization.
          </p>
        </div>
      </div>
    </>
  );
};
