import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import CheckoutContent from "../../components/cart/CheckoutContent";
import LayoutV1 from "../../components/layouts/LayoutV1";

const CheckoutPage = () => {
    return (
        <>
            <Helmet>
                <title>Agrica - Checkout</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb title="Checkout Page" breadCrumb="checkout" />
                <CheckoutContent />
            </LayoutV1>
        </>
    );
};

export default CheckoutPage;