'use client'

import React, { useState } from "react";
import classNames from "classnames";
import MobileNavSidebar from "./MobileNavSidebar";
import Link from "next/link";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MenuFunctionIcons(props) {
  const hide = props.hide || "";
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <>
      <div
        className={`menu__wrapper__functions ${classNames(props.className)}`}
      >
        <div className="list__button flex items-center gap-4 pr-10">
          {!hide.includes("phone") && (
            <Link
              href="https://api.whatsapp.com/send?phone=573194765755"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-grey px-2.5 py-[5px] rounded-full max-xl:hidden duration-300 hover:bg-blue group"
            >
              <span className="icon bg-white text-blue w-8 h-8 flex items-center justify-center rounded-full">
                <Icon.PhoneCall className="text-2xl flex-shrink-0" />
              </span>
              <span className="text-button text-blue whitespace-nowrap flex-shrink-0 group-hover:text-white">+57 319 476 5755</span>
            </Link>
          )}
          <Link href={'/pages/contact-us'} className="button-main text-button-sm max-sm:hidden">Contáctenos</Link>
        </div>
        <div className="list__icons flex items-center">
          <button
            className="menu-icon -navbar flex-shrink-0"
            onClick={(e) => {
              e.preventDefault();
              setShowMobileNav(!showMobileNav);
            }}
          >
            <Icon.List className="text-3xl" />
          </button>
        </div>
      </div>
      {/* Mobile navigation sidebar */}
      <MobileNavSidebar
        showMobileNav={showMobileNav}
        setShowMobileNav={setShowMobileNav}
      />
    </>
  );
}
