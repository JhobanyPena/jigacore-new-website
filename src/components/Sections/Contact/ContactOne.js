import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import Link from 'next/link'

const ContactOne = ({ classname }) => {
    return (
        <section className={`section-contact py-[60px] ${classname}`}>
            <div className="container">
                <div className="lg:flex items-center justify-between">
                    <div className="content-main w-full xl:w-7/12 lg:w-1/2 text-white">
                        <span className="text-label tag text-white bg-blue">Contáctenos</span>
                        <h3 className="heading3 mt-3">Consultoría gratuita - descubre soluciones de TI para tu empresa</h3>
                        <p className="desc mt-6">Desbloquea el potencial de tu negocio con nuestra consultoría gratuita. Nuestro equipo evaluará tus necesidades de TI y te recomendará soluciones a la medida.</p>
                        <div className="list-features mt-4 pb-6 border-b border-line">
                            <div className="item flex items-center">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Confirmación de los detalles de la cita</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Investigación y preparación por nuestro equipo</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Consultoría para discutir soluciones tecnológicas</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Evaluación de necesidades para soluciones a medida</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Presentación de soluciones propuestas</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Ejecución del proyecto y soporte continuo</span>
                            </div>
                            <div className="item flex items-center mt-2">
                                <Icon.Check className='text-xl' />
                                <span className="body2 pl-3">Seguimiento para evaluar efectividad y satisfacción</span>
                            </div>
                        </div>
                        <div className="flex items-center mt-6">
                            <Icon.Envelope className="text-xl" />
                            <span className="body2 pl-3">contactenos@jigacore.com</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Icon.PhoneCall className="text-xl" />
                            <span className="body2 pl-3">+57 319 476 5755</span>
                        </div>
                        <div className="flex items-center mt-2">
                            <Icon.MapPin className="text-xl" />
                            <span className="body2 pl-3">Transversal 57 #106-08, Bogotá, Colombia</span>
                        </div>
                        {/* <Link href={'https://api.whatsapp.com/send?phone=573194765755'} target='_blank' className='inline-block underline mt-2'>Escríbenos por WhatsApp</Link> */}
                    </div>
                    <div className="w-full xl:w-1/3 lg:w-[40%] max-lg:mt-10">
                        <div className="form-block rounded-2xl bg-white py-6 px-7 flex flex-col gap-5">
                            <div className="heading5">Agenda una consultoría gratuita</div>
                            <form className="grid max-lg:grid-cols-2 gap-5 gap-y-2">
                                <div className="name w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="name">Nombre</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="name" placeholder="" required />
                                </div>
                                <div className="phone w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="phone">Teléfono</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="phone" placeholder="" required />
                                </div>
                                <div className="email w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="companyEmail">Correo corporativo</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="email" id="companyEmail" placeholder="" required />
                                </div>
                                <div className="organization w-full max-sm:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="company">Empresa / Organización</label>
                                    <input className="w-full bg-white px-4 py-3 rounded border border-outline" type="text" id="company" placeholder="" required />
                                </div>
                                <div className="select w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="cate">¿Cómo podemos ayudarte?</label>
                                    <div className="select-block relative">
                                        <select className="w-full bg-white pl-4 pr-6 py-3 rounded border border-outline" name="form" id="cate">
                                            <option value="Desarrollo de Software">Desarrollo de Software</option>
                                            <option value="Automatización RPA">Automatización RPA</option>
                                            <option value="BPO IT">BPO IT</option>
                                            <option value="Consultoría Estratégica">Consultoría Estratégica</option>
                                            <option value="Apps Móviles">Apps Móviles</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                        <Icon.CaretDown className="absolute top-1/2 right-4 -translate-y-1/2 text-xl" />
                                    </div>
                                </div>
                                <div className="message w-full max-lg:col-span-2">
                                    <label className="inline-block caption1 text-surface1 pb-2" htmlFor="message">Mensaje</label>
                                    <textarea className="w-full bg-white px-4 py-3 rounded border border-outline display-block" name="message" rows="3" id="message" placeholder="" required></textarea>
                                </div>
                                <div className="block-button max-lg:col-span-2 mt-3">
                                    <button className="button-main w-full">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactOne

