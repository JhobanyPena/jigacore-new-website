import Link from "next/link";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import * as Icon from "@phosphor-icons/react/dist/ssr";

import menuData from "../../../data/header/navigation.json";

export default function Navigator() {
  const [dropdownItem, setDropdownItem] = useState();
  function renderMenu() {
    return menuData.map((item, index) => {
      // Items sin submenú - link directo
      if (!item.subMenu) {
        return (
          <li className="relative" key={index}>
            <Link href={process.env.PUBLIC_URL + item.to}>
              <span>{item.title}</span>
            </Link>
          </li>
        );
      }
      // Items con submenú - dropdown
      return (
        <li className="relative" key={index}>
          <Link href="#">
            <span
              onClick={() => {
                if (dropdownItem === item) {
                  setDropdownItem("");
                  return;
                }
                setDropdownItem(item);
              }}
            >
              {item.title}
              <span className="dropable-icon">
                {dropdownItem === item ? <Icon.CaretUp /> : <Icon.CaretDown />}
              </span>
            </span>
          </Link>
          <CSSTransition
            in={dropdownItem === item}
            unmountOnExit
            timeout={200}
            classNames="dropdown-menu-mobile"
          >
            <ul className="dropdown-menu">
              {item.subMenu.map((i, idx) => (
                <li key={idx}>
                  <Link href={`${process.env.PUBLIC_URL}${i.to}`}>
                    <span>{i.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </CSSTransition>
        </li>
      );
    });
  }
  return (
    <div className="navigator-mobile">
      <ul>{renderMenu()}</ul>
    </div>
  );
}
