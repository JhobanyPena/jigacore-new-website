import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BenefitAboutUs = ({ classname, background }) => {
    return (
        <section className={`section-benefit ${classname}`}>
            <div className="container">
                <div className={`flex gap-y-8 xl:items-center justify-between max-xl:flex-col sm:p-14 p-6 ${background} rounded-3xl`}>
                    <div className="w-full xl:w-1/2 relative">
                        <h4 className="heading4">¿Quiénes Somos?</h4>
                        <div className="body2 mt-4">Hace cuatro años, nuestra empresa surgió como respuesta a la creciente demanda de crear un equipo de vanguardia en el ámbito tecnológico. Fundada por dos ingenieros con visión de futuro, nos propusimos construir soluciones que transformen la forma en que las empresas operan.</div>
                        <div className="body2 mt-4">En los últimos dos años, hemos experimentado un crecimiento asombroso, brindando soluciones tecnológicas de vanguardia a empresas líderes en el mercado colombiano.</div>
                        <div className="body2 mt-4">Nos enorgullece destacar las habilidades únicas de nuestro equipo diverso, que combina la experiencia de ingenieros expertos con el entusiasmo y el potencial de nuevos talentos, logrando resultados excepcionales en cada proyecto que emprendemos.</div>
                    </div>
                    <div className="w-full xl:w-1/2 xl:pl-20">
                        <div className="bg-white sm:p-10 p-6 rounded-[20px]">
                            <h3 className="heading3">¿Por qué elegirnos?</h3>
                            <div className="list-feature mt-7">
                                <div className="flex items-center">
                                    <Icon.Check className='text-blue text-2xl flex-shrink-0' />
                                    <div className="text-title pl-3">Equipo multidisciplinario con experiencia comprobada.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl flex-shrink-0' />
                                    <div className="text-title pl-3">Enfoque ágil adaptado a las necesidades de cada cliente.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl flex-shrink-0' />
                                    <div className="text-title pl-3">Soluciones tecnológicas de vanguardia e innovadoras.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl flex-shrink-0' />
                                    <div className="text-title pl-3">Compromiso con la calidad y la mejora continua.</div>
                                </div>
                                <div className="flex items-center mt-3">
                                    <Icon.Check className='text-blue text-2xl flex-shrink-0' />
                                    <div className="text-title pl-3">Acompañamiento integral desde la consultoría hasta el soporte.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default BenefitAboutUs
