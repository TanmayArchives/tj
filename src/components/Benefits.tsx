export function Benefits() {
  const benefits = [
    {
      title: "Fast Performance",
      description: "Lightning quick load times and smooth interactions.",
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for the best user experience.",
    },
    {
      title: "24/7 Support",
      description: "Round the clock support for all your needs.",
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="text-center p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
