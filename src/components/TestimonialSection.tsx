
const TestimonialSection = () => {
  return (
    <section className="w-full py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
            Contactamos a SmartLatin con una idea para nuestra aplicación móvil y su trabajo ha sido
            excepcional. Nos encanta trabajar con su equipo y siempre nos impresiona la calidad de su trabajo.
            Siempre entregan a tiempo y superan nuestras expectativas con su atención al detalle y profesionalismo.
            ¡Gracias por hacer de cada proyecto una experiencia tan fluida y agradable!
          </p>

          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">PC</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-black">Flower Lewin C..</p>
              <p className="text-gray-600 text-sm">Director de Tecnología</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
