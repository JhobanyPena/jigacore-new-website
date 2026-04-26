import { Plus_Jakarta_Sans } from "next/font/google";
import '@/styles/styles.scss';
import GlobalProvider from "./GlobalProvider";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "JIGACORE - Servicios de TI | Desarrollo de Software, RPA, Consultoría",
  description: "JIGACORE - Firma colombiana de servicios de TI. Desarrollo de software, Automatización RPA, BPO IT, Consultoría estratégica, Apps móviles y más.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={plusJakarta.className}>
        <GlobalProvider>
          {children}
          <div id="nav-full" />
          <div id="nav-sidebar" />
          <div id="overlay" />
          <div id="modal" />
        </GlobalProvider>
      </body>
    </html>
  );
}
