import { Helmet } from "react-helmet-async";
import AboutV1 from "../../components/about/AboutV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import TeamV1 from "../../components/team/TeamV1";
import TimelineV1 from "../../components/timeline/TimelineV1";

const AboutUsPage = () => {
    return (
        <>
            <Helmet>
                <title>Heritage Fields & Acreage - About Us</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb title="About Us" breadCrumb="About-us" />
                <AboutV1 />
                <TimelineV1 sectionClass="default-padding-bottom" />
                <TeamV1 />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;