import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ShopPageContent from "../../components/shop/ShopPageContent";

const ShopPage = () => {
    return (
        <>
            <Helmet>
                <title>Heritage Fields & Acreage - Our Produce</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb title="Our Produce" breadCrumb="Shop" />
                <ShopPageContent />
            </LayoutV1>
        </>
    );
};

export default ShopPage;