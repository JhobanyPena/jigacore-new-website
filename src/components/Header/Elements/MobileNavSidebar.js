import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import ClientOnlyPortal from "../../../common/ClientOnlyPortal";
import NavigatorMobile from "./NavigatorMobile";
import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function MobileNavSidebar({ showMobileNav, setShowMobileNav }) {
  return (
    <>
      <ClientOnlyPortal selector="#nav-sidebar">
        <CSSTransition
          in={showMobileNav}
          unmountOnExit
          timeout={200}
          classNames="cart-sidebar"
        >
          <div className="navigation-sidebar">
            <NavigatorMobile />
            <div className="navigation-sidebar__footer">
              <div className="flex items-center gap-2 mt-4">
                <Icon.PhoneCall className="text-lg" />
                <span className="caption1">+57 319 476 5755</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <Icon.Envelope className="text-lg" />
                <span className="caption1">contactenos@jigacore.com</span>
              </div>
            </div>
          </div>
        </CSSTransition>
      </ClientOnlyPortal>
      {showMobileNav && (
        <ClientOnlyPortal selector="#overlay">
          <div
            className="overlay"
            onClick={() => setShowMobileNav(false)}
          ></div>
        </ClientOnlyPortal>
      )}
    </>
  );
}
