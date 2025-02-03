export const ServiceSection = ({ services }) => {
  return (
    <>
      <section className="flex-1 container mx-auto p-6 grid md:grid-cols-3 gap-6 pt-[250px]">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 shadow-lg rounded-xl text-center"
          >
            <h2 className="text-xl font-bold mb-2">{service.name}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </section>
    </>
  );
};
