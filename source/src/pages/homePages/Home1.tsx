import { Helmet } from "react-helmet-async";
import LayoutV1 from "../../components/layouts/LayoutV1";
import BannerV1 from "../../components/banner/BannerV1";
import AboutV1 from "../../components/about/AboutV1";
import ServiceV1 from "../../components/services/ServiceV1";
import BenefitsV1 from "../../components/benefits/BenefitsV1";
import TestimonialV1 from "../../components/testimonials/TestimonialV1";
import GalleryV1 from "../../components/gallery/GalleryV1";
import WhyChooseV1 from "../../components/whyChoose/WhyChooseV1";
import ContactV1 from "../../components/contact/ContactV1";
import TeamV1 from "../../components/team/TeamV1";

const Home1 = () => {
    return (
        <>
            <Helmet>
                <title>Heritage Fields & Acreage</title>
            </Helmet>

            <LayoutV1>
                <BannerV1 />
                <AboutV1 />
                <ServiceV1 hasTitle={true} />
                <BenefitsV1 />
                <TestimonialV1 />
                <TeamV1 />
                <GalleryV1 />
                <WhyChooseV1 sectionClass="default-padding-bottom" />
                <ContactV1 />
            </LayoutV1>
        </>
    );
};

export default Home1;