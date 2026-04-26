import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const BannerOne = () => {
    return (
        <section className={`banner-block bg-blue py-7`}>
            <Marquee>
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Soluciones de TI Sin Complicaciones</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='jigacore' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Solicita Tu Consultoría Gratis</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='jigacore' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Soluciones de TI Sin Complicaciones</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='jigacore' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Solicita Tu Consultoría Gratis</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='jigacore' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Soluciones de TI Sin Complicaciones</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='jigacore' className='w-[26px]' />
                <h4 className={`heading4 text-white uppercase px-[60px]`}>Solicita Tu Consultoría Gratis</h4>
                <Image src={'/images/fav-white.svg'} width={5000} height={5000} alt='jigacore' className='w-[26px]' />
            </Marquee>
        </section>
    )
}

export default BannerOne
