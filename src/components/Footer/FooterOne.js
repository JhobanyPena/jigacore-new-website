import Image from "next/image";
import Link from "next/link";
import * as Icon from '@phosphor-icons/react/dist/ssr'
import serviceData from "@/data/service/data.json"
import { convertToSlug } from "@/common/utils";

export default function FooterOne({ classname }) {
  return (
    <footer id="footer">
      <div className={`footer-block ${classname}`}>
        <div className="container py-[60px]">
          <div className="flex justify-between gap-y-8 max-xl:flex-wrap">
            <div className="xl:w-1/4 md:w-1/2">
              <div className="footer-company-infor flex flex-col gap-5">
                <Link href="/" className="logo">
                  {classname ? (
                    <Image src={'/images/logo-white.svg'} width={5000} height={5000} alt="JIGACORE" className="w-[148px]" />
                  ) : (
                    <Image src={'/images/logo.svg'} width={5000} height={5000} alt="JIGACORE" className="w-[148px]" />
                  )}
                </Link>
                <div className="caption1">Bienvenido a JIGACORE. Firma colombiana de servicios de TI con soluciones a la medida para tu empresa.</div>
                <div className="caption1">Lun - Vie: 8:00am - 6:00pm <br />Fines de semana cerrado</div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="footer-navigate flex md:justify-evenly max-md:gap-20 max-sm:gap-y-6 max-sm:flex-wrap">
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Empresa</div>
                  <ul className="list-nav mt-3">
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/company/about-us">Sobre nosotros</Link>
                    </li>
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/company/our-teams">Nuestro equipo</Link>
                    </li>
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/blog/blog-grid">Blog</Link>
                    </li>
                    <li className="mt-2">
                      <Link className={`caption1 hover-underline ${classname && 'underline-white'}`} href="/pages/contact-us">Contacto</Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-nav-item">
                  <div className="item-heading text-button">Soluciones</div>
                  <ul className="list-nav mt-3">
                    {serviceData.slice(0, 6).map(item => (
                      <li className="mt-2" key={item.id}>
                        <Link className={`caption1 hover-underline ${classname && 'underline-white'}`}
                          href={process.env.PUBLIC_URL + "/services/[slug]"}
                          as={
                            process.env.PUBLIC_URL + "/services/" + convertToSlug(item.title) + "?id=" + item.id
                          }
                        >
                          {item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 w-full">
              <div className="company-contact max-xl:w-1/2 max-sm:w-full">
                <div className="heading text-button">Contáctenos</div>
                <div className="flex items-center gap-2 mt-4">
                  <Icon.Envelope className="text-lg" />
                  <span className="caption1">contactenos@jigacore.com</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Icon.PhoneCall className="text-lg" />
                  <span className="caption1">+57 319 476 5755</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <Icon.MapPin className="text-lg" />
                  <span className="caption1">Transversal 57 #106-08, Bogotá</span>
                </div>
                <div className="list-social flex items-center flex-wrap gap-2.5 mt-7">
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:bg-black hover:text-white'}`} href="https://www.facebook.com/JIGACORE" target="_blank">
                    <i className="icon-facebook text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:bg-black hover:text-white'}`} href="https://www.linkedin.com/company/jigacore" target="_blank">
                    <i className="icon-linkedin text-base"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:bg-black hover:text-white'}`} href="https://www.instagram.com/jigacores.a.s" target="_blank">
                    <i className="icon-instagram text-sm"></i>
                  </Link>
                  <Link className={`item rounded-full w-10 h-10 flex items-center justify-center duration-300 border ${classname ? 'border-surface2 hover:text-black hover:bg-white' : 'border-black hover:bg-black hover:text-white'}`} href="https://api.whatsapp.com/send?phone=573194765755" target="_blank">
                    <Icon.WhatsappLogo className="text-base" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="flex items-center sm:justify-between max-sm:flex-col gap-y-2 justify-center py-2 border-t border-outline">
              <div className="left-block flex items-center">
                <div className="copy-right text-surface1 caption1">©2025 JIGACORE S.A.S. Todos los derechos reservados.</div>
              </div>
              <div className="nav-link flex items-center gap-2.5">
                <Link className="text-surface1 caption1 hover-underline" href="#!">Términos de Servicio</Link>
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="#!">Política de Privacidad</Link>
                <span className="text-surface1 caption1">|</span>
                <Link className="text-surface1 caption1 hover-underline" href="#!">Política de Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
