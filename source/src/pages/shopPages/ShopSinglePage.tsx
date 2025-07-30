import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import LayoutV1 from "../../components/layouts/LayoutV1";
import ShopSingleContent from "../../components/shop/ShopSingleContent";
import ProductV1Data from "../../assets/jsonData/products/ProductV1Data.json";
import { Helmet } from "react-helmet-async";

const ShopSinglePage = () => {

    const { id } = useParams();
    const data = ProductV1Data.find(product => product.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Agrica - Shop Single</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb title="Grilled Flank Steak" breadCrumb="shop-single-2" />
                {data && <ShopSingleContent productInfo={data} />}
            </LayoutV1>
        </>
    );
};

export default ShopSinglePage;