import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";

// Inner Pages
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import FarmersPage from "./pages/innerPages/FarmersPage";
import ContactPage from "./pages/innerPages/ContactPage";
import RegisterPage from "./pages/innerPages/RegisterPage";
import LoginPage from "./pages/innerPages/LoginPage";
import FarmerDetailsPage from "./pages/innerPages/FarmerDetailsPage";

// Shop Pages
import ShopPage from "./pages/shopPages/ShopPage";
import ShopSinglePage from "./pages/shopPages/ShopSinglePage";
import ShopSingleThumbPage from "./pages/shopPages/ShopSingleThumbPage";
import CartPage from "./pages/shopPages/CartPage";
import CheckoutPage from "./pages/shopPages/CheckoutPage";

import NotFoundPage from "./pages/innerPages/NotFoundPage";

const Routers = () => {
    return (
        <>
            <Routes>

                <Route path='/' element={<Home1 />}></Route>

                {/* Inner Pages */}
                <Route path='/about-us' element={<AboutUsPage />}></Route>
                <Route path='/farmers' element={<FarmersPage />}></Route>
                <Route path='/farmer-details/:id' element={<FarmerDetailsPage />}></Route>
                <Route path='/contact' element={<ContactPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/login' element={<LoginPage />}></Route>

                {/* Shop Page */}
                <Route path='/shop' element={<ShopPage />}></Route>
                <Route path='/shop?:page?' element={<ShopPage />}></Route>
                <Route path='/shop-single/:id' element={<ShopSinglePage />}></Route>
                <Route path='/shop-single-thumb/:id' element={<ShopSingleThumbPage />}></Route>
                <Route path='/cart' element={<CartPage />}></Route>
                <Route path='/checkout' element={<CheckoutPage />}></Route>

                <Route path='*' element={<NotFoundPage />}></Route>

            </Routes>
        </>
    );
};

export default Routers;