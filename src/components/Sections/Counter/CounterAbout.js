const CounterAbout = () => {
  return (
    <section className="section-couter">
      <div className="container">
        <div className="main lg:py-20 sm:py-14 py-10 border-t border-outline">
          <div className="flex max-md:flex-col gap-y-6">
            <div className="md:w-1/2 pr-[45px]">
              <h4 className="heading4">Nuestra Misión</h4>
              <div className="body2 mt-3">Transformar empresas y personas mejorando sus procesos y calidad de vida desde el enfoque tecnológico y humano.</div>
              <div className="body2 mt-3">Brindamos soluciones tecnológicas de vanguardia que se adaptan a las necesidades de cada cliente, impulsando su crecimiento y competitividad en el mercado.</div>
            </div>
            <div className="md:w-1/2 md:pl-[45px]">
              <h4 className="heading4">Nuestra Visión</h4>
              <div className="body2 mt-3">Ser reconocida como principal empresa exponente en innovación tecnológica en el país.</div>
              <div className="body2 mt-3">Nos enorgullece destacar las habilidades únicas de nuestro equipo diverso, que combina la experiencia de ingenieros expertos con el entusiasmo y el potencial de nuevos talentos para entregar resultados excepcionales.</div>
            </div>
          </div>
          <div className="counter grid md:grid-cols-4 grid-cols-2 gap-y-6 lg:mt-[60px] sm:mt-12 mt-8">
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">4+</div>
              <div className="body1 mt-1">Años de experiencia</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">10+</div>
              <div className="body1 mt-1">Clientes satisfechos</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">50+</div>
              <div className="body1 mt-1">Proyectos completados</div>
            </div>
            <div className="counter-item px-5 border-l-2 border-blue">
              <div className="count-number heading3">30+</div>
              <div className="body1 mt-1">Profesionales en el equipo</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CounterAbout
