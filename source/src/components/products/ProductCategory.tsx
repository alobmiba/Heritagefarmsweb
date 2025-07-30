import ProductCategoryData from "../../assets/jsonData/products/ProductCategoryData.json";
import SingleProductCategory from "./SingleProductCategory";
import shape11 from '/assets/img/shape/11.png';

const ProductCategory = () => {
    return (
        <>
            <div className="product-cat-area default-padding">
                <div className="shape-right-bottom-mini">
                    <img src={shape11} alt="Image Not Found" />
                </div>
                <div className="container">
                    <div className="product-cat-items">
                        <div className="row align-center">
                            <div className="col-lg-5 product-cat-info">
                                <h2 className="mask-text" style={{ backgroundImage: 'url(/assets/img/banner/10.jpg)' }}>Our Specialty Produce</h2>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <div className="product-cat-lists text-light">
                                    <div className="product-list-box">
                                        {ProductCategoryData.map(product =>
                                            <SingleProductCategory product={product} key={product.id} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCategory;