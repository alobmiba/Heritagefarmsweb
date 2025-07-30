import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import CartPageContent from "../../components/cart/CartPageContent";
import LayoutV1 from "../../components/layouts/LayoutV1";

const CartPage = () => {
    return (
        <>
            <Helmet>
                <title>Agrica - Cart</title>
            </Helmet>

            <LayoutV1>
                <BreadCrumb title="Cart Page" breadCrumb="cart" />
                <CartPageContent />
            </LayoutV1>
        </>
    );
};

export default CartPage;