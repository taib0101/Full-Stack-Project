export const ServiceSection = ({ services }) => {
    return (
      <div className="service-section">
        <h2>Our Services</h2>
        {services.map((service, index) => (
          <div key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    );
  };