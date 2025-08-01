import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import { toast } from "react-toastify";
import { RootState } from "../../store/store";

interface DataType {
    id?: number;
    title?: string;
    thumb?: string;
    tags: string[];
    price?: string;
    oldPrice?: string | null;
    onSale?: boolean;
}

const SingleProductList = ({ product }: { product: DataType }) => {
    const { id, title, thumb, tags, price, oldPrice, onSale } = product;

    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items); // adjust this if your slice structure is different

    const handleAddToCart = () => {
        const alreadyInCart = cartItems.some((item) => item.id === product.id);

        if (alreadyInCart) {
            toast.warning("Product already in cart");
        } else {
            dispatch(
                addToCart({
                    id: product.id!,
                    title: product.title!,
                    price: parseFloat(product.price!.replace("$", "")),
                    thumb: product.thumb!,
                    quantity: 1,
                })
            );
            toast.success("Product added successfully");
        }
    };

    return (
        <>
            <div className="product">
                <div className="product-contents">
                    <div className="row align-center">
                        <div className="col-lg-5 col-md-5">
                            <div className="product-image">
                                {onSale && <span className="onsale">Sale!</span>}

                                <Link to={`/shop-single/${id}`}>
                                    <img src={`/assets/img/products/${thumb}`} alt="Product" loading="lazy" />
                                </Link>

                                <div className="shop-action">
                                    <ul>
                                        <li className="cart">
                                            <Link to="#" onClick={handleAddToCart}><span>Add to cart</span></Link>
                                        </li>
                                        <li className="wishlist">
                                            <Link to="#" ><span>Add to wishlist</span></Link>
                                        </li>
                                        <li className="quick-view">
                                            <Link to="#" ><span>Quick view</span></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="product-caption">
                                <div className="product-tags">
                                    {tags.map((tag, index) => (
                                        <Link to="#" key={index}>{tag}</Link>
                                    ))}
                                </div>
                                <h4 className="product-title">
                                    <Link to={`/shop-single/${id}`}>{title}</Link>
                                </h4>
                                <div className="price">
                                    {oldPrice && <span className="me-1"><del>{oldPrice}</del></span>}
                                    <span>{price}</span>
                                </div>
                                <Link to="#" className="cart-btn" onClick={handleAddToCart}>
                                    <i className="fas fa-shopping-bag" /> Add to cart
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProductList;