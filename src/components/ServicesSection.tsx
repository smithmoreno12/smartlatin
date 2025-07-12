
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Desarrollo de sitios web",
      description: "Nuestros desarrolladores expertos crean sitios web atractivos y responsivos, diseñados para satisfacer las necesidades de su negocio. Ya sea una simple landing page o un sitio corporativo completo, nos aseguramos de que funcione a la perfección en todos los dispositivos con las herramientas más modernas."
    },
    {
      title: "Desarrollo de aplicaciones móviles",
      description: "Conéctese con sus clientes en cualquier momento con nuestros servicios de desarrollo de aplicaciones móviles. Creamos aplicaciones iOS y Android fáciles de usar y repletas de funciones para atraer a su audiencia y mejorar la presencia móvil de su marca."
    },
    {
      title: "Diseño UI/UX",
      description: "Un buen diseño empieza con el usuario. Nuestros expertos en UI/UX se centran en crear diseños atractivos y fáciles de usar, logrando el equilibrio perfecto entre estilo y funcionalidad para obtener resultados óptimos."
    },
    {
      title: "Desarrollo de aplicaciones web",
      description: "Optimice su negocio con aplicaciones web personalizadas. Utilizamos marcos de trabajo modernos y métodos ágiles para crear soluciones seguras, eficientes y dinámicas que mejoran la productividad y simplifican los flujos de trabajo."
    }
  ];

  return (
    <section id="servicios" className="w-full py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Nuestros servicios expertos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Soluciones personalizadas diseñadas para su éxito digital
          </p>
        </div>

      {/* Services Grid */}
<div className="grid md:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <Card
      key={index}
      className="
        bg-white
        rounded-2xl
        border border-gray-200
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1
        hover:-rotate-1
        transition-all
        duration-300
      "
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold text-black">
          {service.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 leading-relaxed text-base">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  ))}
</div>
      </div>
    </section>
  );
};

export default ServicesSection;
