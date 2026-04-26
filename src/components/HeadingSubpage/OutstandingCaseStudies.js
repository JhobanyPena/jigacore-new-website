import React from 'react'
import Image from 'next/image'

const OutstandingCaseStudies = ({ data, showDesc }) => {
    return (
        <div className="heading-content">
            <div className="container">
                <div className="content-main style-one block bg-white rounded-3xl overflow-hidden shadow-lg">
                    <div className="flex max-lg:flex-col-reverse items-center justify-between relative">
                        <div className="lg:w-1/2">
                            <div className="text-content lg:p-20 max-lg:px-8 max-lg:py-10">
                                <div className="tag text-label">NUESTRA ESENCIA</div>
                                <div className="name heading3 mt-4">Tu desafío es nuestro punto de partida</div>
                                <div className="desc body2 text-surface1 mt-4">Nacimos para resolver problemas complejos con soluciones simples. Nuestro ADN combina pensamiento estratégico, talento colombiano de primer nivel y una obsesión por entregar resultados que realmente importan.</div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 h-full lg:absolute top-0 right-0">
                            <div className="bg-img h-full">
                                <Image width={5000} height={5000} className="w-full h-full object-cover" priority src={data.thumbImage} alt="JIGACORE - Nuestra esencia" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OutstandingCaseStudies



