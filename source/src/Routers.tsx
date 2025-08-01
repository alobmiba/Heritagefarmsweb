import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

const Home1 = lazy(() => import("./pages/homePages/Home1"));

// Inner Pages
const AboutUsPage = lazy(() => import("./pages/innerPages/AboutUsPage"));
const FarmersPage = lazy(() => import("./pages/innerPages/FarmersPage"));
const ContactPage = lazy(() => import("./pages/innerPages/ContactPage"));
const RegisterPage = lazy(() => import("./pages/innerPages/RegisterPage"));
const LoginPage = lazy(() => import("./pages/innerPages/LoginPage"));
const FarmerDetailsPage = lazy(() => import("./pages/innerPages/FarmerDetailsPage"));

// Shop Pages
const ShopPage = lazy(() => import("./pages/shopPages/ShopPage"));
const ShopSinglePage = lazy(() => import("./pages/shopPages/ShopSinglePage"));
const ShopSingleThumbPage = lazy(() => import("./pages/shopPages/ShopSingleThumbPage"));
const CartPage = lazy(() => import("./pages/shopPages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/shopPages/CheckoutPage"));

const NotFoundPage = lazy(() => import("./pages/innerPages/NotFoundPage"));

const Routers = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
    );
};

export default Routers;