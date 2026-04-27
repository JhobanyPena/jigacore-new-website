import * as Icon from "@phosphor-icons/react/dist/ssr";

const featureIcons = [
    Icon.Rocket,
    Icon.Trophy,
    Icon.Target,
    Icon.ShieldCheck,
    Icon.Lightning,
    Icon.Users,
    Icon.Crosshair,
    Icon.ChartLineUp,
    Icon.GearSix
];

const ServiceFeatures = ({ service }) => {
    return (
        <section className="our-value-block bg-linear-gradient-yellow lg:py-20 sm:py-14 py-10">
            <div className="container">
                <div className="heading text-center">
                    <h3 className="heading3 text-center">Nos prefieren por</h3>
                    <div className="text-center mt-3">Descubre lo que nos diferencia y por qué nuestros clientes confían en nosotros.</div>
                </div>
                <div className="list-values grid xl:grid-cols-3 sm:grid-cols-2 gap-[30px] lg:mt-10 mt-6">
                    {service.features.map((feature, index) => {
                        const IconComponent = featureIcons[index % featureIcons.length];
                        return (
                            <div key={index} className="item bg-white p-8 rounded-[20px] h-full">
                                <IconComponent className="text-blue text-6xl" />
                                <div className="heading5 fw-600 mt-6">{feature.title}</div>
                                <div className="text-surface1 mt-3">{feature.desc}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
export default ServiceFeatures
