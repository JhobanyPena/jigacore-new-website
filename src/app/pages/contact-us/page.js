import LayoutOne from "@/components/Layout/LayoutOne";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function ContactUs() {
    return (
        <LayoutOne>
            <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
            <section className="form-contact-us pt-20">
                <div className="container">
                    <div className="flex max-lg:flex-col lg:items-center justify-between gap-y-8">
                        <div className="w-full lg:w-1/2 lg:pr-3">
                            <div className="infor">
                                <div className="heading">
                                    <div className="tag caption1 font-bold uppercase">Contáctenos</div>
                                    <h2 className="heading2 mt-4">¿Cómo podemos ayudarte?</h2>
                                    <p className="body2 mt-4">Cuéntanos sobre tu proyecto o necesidad. Nuestro equipo se pondrá en contacto contigo para brindarte la mejor solución.</p>
                                </div>
                                <div className="list-social flex items-center gap-5 mt-7">
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.facebook.com/JIGACORE" target="_blank">
                                        <i className="icon-facebook"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.linkedin.com/company/jigacore" target="_blank">
                                        <i className="icon-linkedin"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://www.instagram.com/jigacores.a.s" target="_blank">
                                        <i className="icon-instagram text-sm"></i>
                                    </Link>
                                    <Link className="item rounded-full w-12 h-12 flex items-center justify-center bg-white border-outline hover:bg-blue hover:text-white duration-300" href="https://api.whatsapp.com/send?phone=573194765755" target="_blank">
                                        <Icon.WhatsappLogo weight="fill" className="text-xl" />
                                    </Link>
                                </div>
                                <div className="list-more-infor lg:mt-10 mt-7">
                                    <div className="item flex items-center gap-6">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.Phone weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">+57 319 476 5755</span>
                                        </div>
                                    </div>
                                    <div className="item flex items-center gap-6 mt-5">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.EnvelopeSimple weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">contactenos@jigacore.com</span>
                                        </div>
                                    </div>
                                    <div className="item flex items-center gap-6 mt-5">
                                        <div className="icon flex items-center justify-center w-12 h-12 bg-blue text-white rounded-full">
                                            <Icon.MapPin weight="bold" className="text-xl" />
                                        </div>
                                        <div className="text h-full flex-1 pl-6 border-l border-outline">
                                            <span className="body2">Transversal 57 #106-08, Bogotá, Colombia</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-12">
                            <form className="form-block bg-white rounded-2xl p-10 shadow-xl">
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" placeholder="Nombre" required />
                                    </div>
                                    <div className="max-xl:col-span-2 max-lg:col-span-1 max-sm:col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" placeholder="Empresa" required />
                                    </div>
                                    <div className="col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="email" placeholder="Correo electrónico" required />
                                    </div>
                                    <div className="col-span-2">
                                        <input className="w-full bg-surface caption1 px-4 py-3 rounded-lg" type="text" placeholder="Teléfono" />
                                    </div>
                                    <div className="col-span-2">
                                        <select className="w-full bg-surface caption1 px-4 py-3 rounded-lg">
                                            <option value="">¿Cómo podemos ayudarte?</option>
                                            <option value="Desarrollo de Software">Desarrollo de Software</option>
                                            <option value="Automatización RPA">Automatización RPA</option>
                                            <option value="BPO IT">BPO IT</option>
                                            <option value="Consultoría Estratégica">Consultoría Estratégica</option>
                                            <option value="Apps Móviles">Apps Móviles</option>
                                            <option value="Otro">Otro</option>
                                        </select>
                                    </div>
                                    <div className="col-span-2">
                                        <textarea className="w-full bg-surface caption1 px-4 py-3 rounded-lg" name="message" rows="4" placeholder="Cuéntanos sobre tu proyecto..." required></textarea>
                                    </div>
                                </div>
                                <button className="button-main lg:mt-10 mt-7">Enviar Mensaje</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <section className="our-location lg:py-20 sm:py-14 py-10 border-b border-outline">
                <div className="container">
                    <h3 className="heading3 text-center">Nuestra Ubicación</h3>
                    <p className="body2 text-surface1 text-center mt-4">Estamos en Bogotá, Colombia, listos para atenderte</p>
                    <div className="grid sm:grid-cols-2 gap-8 lg:mt-10 mt-7 max-w-3xl mx-auto">
                        <div className="content-infor flex flex-col bg-linear p-8 rounded-3xl h-full">
                            <h5 className="heading5">Bogotá</h5>
                            <span className="body2 text-surface1 mt-5">Dirección:</span>
                            <strong className="text-title mt-1">Transversal 57 #106-08, Bogotá, Colombia</strong>
                            <span className="body2 text-surface1 mt-5">Teléfono:</span>
                            <strong className="text-title mt-1">+57 319 476 5755</strong>

                        </div>
                        <div className="content-infor flex flex-col bg-linear p-8 rounded-3xl h-full">
                            <h5 className="heading5">Cajicá</h5>
                            <span className="body2 text-surface1 mt-5">Dirección:</span>
                            <strong className="text-title mt-1">Diagonal 3 Sur # 14-78, Cajicá, Cundinamarca</strong>
                            <span className="body2 text-surface1 mt-5">Teléfono:</span>
                            <strong className="text-title mt-1">+57 319 476 5755</strong>

                        </div>
                    </div>
                </div>
            </section>
        </LayoutOne>
    );
}


