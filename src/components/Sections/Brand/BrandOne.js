'use client'

import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/images/brand/jigacore-partner-microsoft.png", alt: "Microsoft" },
  { src: "/images/brand/jigacore-partner-odoo.png", alt: "Odoo" },
  { src: "/images/brand/jigacore-partner-rocketbot.png", alt: "Rocketbot" },
  { src: "/images/brand/jigacore-partner-kuxan.png", alt: "Kuxan" },
  { src: "/images/brand/jigacore-partner-serviex.png", alt: "Serviex" },
  { src: "/images/brand/jigacore-partner-parapente.png", alt: "Parapente" },
  { src: "/images/brand/jigacore-partner-zalt.png", alt: "Zalt" },
  { src: "/images/brand/jigacore-cliente-acac.png", alt: "Asociación Colombiana para el Avance de la Ciencia" },
  { src: "/images/brand/jigacore-cliente-qvision.png", alt: "Q-Vision" },
  { src: "/images/brand/jigacore-cliente-ins.png", alt: "Instituto Nacional de Salud" },
  { src: "/images/brand/jigacore-cliente-digitalbank.png", alt: "DigitalBank" },
  { src: "/images/brand/jigacore-cliente-inbiotech.png", alt: "InBiotech" },
  { src: "/images/brand/jigacore-clienter-unal.png", alt: "Universidad Nacional" },
  { src: "/images/brand/jigacore-clienter-uandina.png", alt: "Unión Andina" },
]

export default function BrandOne({ classname }) {
  return (
    <section className={`section-brand ${classname}`}>
      <div className="container">
        <h5 className="heading5 text-center">Partners y clientes que confían en nosotros</h5>
        <div className="flex items-center justify-center mt-7">
          <div className="list lg:w-11/12 w-full">
            <Swiper
              spaceBetween={0}
              slidesPerView={2}
              loop={true}
              modules={[Autoplay]}
              className='h-full relative style-border'
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                576: {
                  slidesPerView: 3,
                  spaceBetween: 0,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                992: {
                  slidesPerView: 4,
                  spaceBetween: 0,
                },
                1200: {
                  slidesPerView: 5,
                  spaceBetween: 0,
                },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <Link href={'#!'} scroll={false} className="brand-item flex items-center justify-center">
                    <Image width={4000} height={3000} src={logo.src} alt={logo.alt} className="lg:h-[44px] h-9 w-auto" />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}


