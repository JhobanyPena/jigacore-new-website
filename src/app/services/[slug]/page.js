import LayoutOne from "@/components/Layout/LayoutOne";
import BrandOne from "@/components/Sections/Brand/BrandOne";
import serviceData from "@/data/service/data.json";
import HeadingSubpage from "@/components/HeadingSubpage/HeadingSubpage";
import ServiceHero from "@/components/Sections/Service/ServiceHero";
import ServiceFeatures from "@/components/Sections/Service/ServiceFeatures";
import { getPostByTitle } from "@/common/postSelect";

export default function ServiceDetail({ params: { slug } }) {
    const decodedSlug = decodeURIComponent(slug);
    const cleanedSlug = decodedSlug.replace(/['"]/g, "'");
    const foundPost = getPostByTitle(serviceData, cleanedSlug);

    if (!foundPost || foundPost.length === 0) {
        return (
            <LayoutOne>
                <div className="container py-20 text-center">
                    <h2 className="heading2">Servicio no encontrado</h2>
                </div>
            </LayoutOne>
        );
    }

    const service = foundPost[0];

    return (
        <>
            <LayoutOne className="-style-1">
                <div className="bg-subpage absolute top-0 w-full h-[740px] bg-linear-gradient z-[-1]"></div>
                <HeadingSubpage classname={'lg:pt-20 sm:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8'} title={service.heroTitle} desc={service.desc} />
                <ServiceHero service={service} />
                <ServiceFeatures service={service} />
                <BrandOne classname={'lg:pt-20 md:pt-14 pt-10 lg:pb-[60px] md:pb-12 pb-8 style-subpage'} />
            </LayoutOne>
        </>
    );
}
