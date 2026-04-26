import Link from "next/link";
import classNames from "classnames";
import menuData from "@/data/header/navigation.json";
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import { convertToSlug } from "@/common/utils"

export default function Navigator({ disableSubmenu, className }) {
  const pathname = usePathname();

  function renderMenu() {
    return menuData.map((item, index) => {
      // Items con mega-menú de servicios
      if (item.title === "Servicios") {
        return (
          <li key={index} className={`${pathname.includes('/services/') ? 'active' : ''}`}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.title}</span>
            </Link>
            <div className="dropdown-menu -wide flex">
              <div className="left w-3/4 pr-[15px]">
                <div className="service-cate heading6">Nuestros Servicios</div>
                <ul className="grid grid-cols-3 gap-5 gap-y-2.5 mt-2">
                  {item.subMenu.map((i, idx) => (
                    <li key={idx} className={`${pathname === i.to ? 'active' : ''}`}>
                      <Link
                        className="flex items-center gap-2"
                        href={process.env.PUBLIC_URL + "/services/[slug]"}
                        as={process.env.PUBLIC_URL + "/services/" + convertToSlug(i.title)}
                      >
                        <span className={`${i.icon} text-blue text-2xl flex-shrink-0`}></span>
                        <span>{i.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="right w-1/4 pl-[15px]">
                <div className="content bg-linear rounded-lg p-6">
                  <div className="heading6">Todos los Servicios</div>
                  <div className="caption1 text-surface1 mt-1">Soluciones de TI a la medida para impulsar tu empresa</div>
                  <Link className="button-main text-button-sm mt-3" href="/pages/contact-us">Contáctenos</Link>
                  <div className="more-infor mt-8">
                    <div className="mail flex items-center">
                      <Icon.Envelope className="text-lg" />
                      <div className="caption1 pl-2">contactenos@jigacore.com</div>
                    </div>
                    <div className="call flex items-center mt-3">
                      <span className="w-6 h-6 bg-blue flex items-center justify-center rounded-full flex-shrink-0">
                        <Icon.Phone weight="fill" className="text-sm text-white" />
                      </span>
                      <div className="text-title pl-2">+57 319 476 5755</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      }
      // Items simples sin submenú
      return (
        <li className={`relative ${pathname === item.to ? 'active' : ''}`} key={index}>
          <Link href={process.env.PUBLIC_URL + item.to}>
            <span>{item.title}</span>
          </Link>
        </li>
      );
    });
  }

  if (disableSubmenu) {
    return (
      <div className={`navigator -off-submenu ${classNames(className)}`}>
        <ul>
          {menuData.map((item, index) => (
            <li key={index}>
              <Link href={process.env.PUBLIC_URL + item.to}>
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className={`navigator ${classNames(className)}`}>
      <ul>{renderMenu()}</ul>
    </div>
  );
}
