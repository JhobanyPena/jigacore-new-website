import Image from "next/image"

const ServiceHero = ({ service }) => {
    return (
        <section className="about-us-block lg:pb-20 sm:pb-14 pb-10">
            <div className="container">
                <div className="flex max-lg:flex-col items-center justify-between gap-y-10">
                    <div className="lg:w-1/2 lg:pr-10">
                        <div className="bg-img w-full">
                            <img className="w-full rounded-3xl" src={service.heroImage} alt={service.heroTitle} />
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:pl-10">
                        <div className="text-content">
                            <h3 className="heading4">{service.heroHighlight}</h3>
                            <p className="body2 text-surface1 mt-6">{service.heroDesc}</p>
                            {service.heroSubline && (
                                <p className="heading6 mt-6">{service.heroSubline}</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ServiceHero



