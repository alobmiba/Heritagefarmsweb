import ProductV1Data from '../../assets/jsonData/products/ProductV1Data.json'
import SingleProductCategoryV2 from '../products/SingleProductCategoryV2';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import Pagination from 'react-paginate';

const ShopPageContent = () => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams<{ page?: string }>();

    // Get page from URL query
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(8);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProductData = ProductV1Data.slice(startIndex, endIndex);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically
        navigate(`/shop?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(ProductV1Data.length / itemsPerPage);

    return (
        <>
            <div className="validtheme-shop-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tab-content tab-content-info text-center" id="shop-tabContent">
                                <div className="tab-pane fade show active" id="grid-tab" role="tabpanel" aria-labelledby="grid-tab-control">
                                    <ul className="vt-products columns-4">
                                        {currentProductData.map(product =>
                                            <SingleProductCategoryV2 product={product} key={product.id} />
                                        )}
                                    </ul>
                                </div>
                            </div>

                            {/* Pagination */}
                            <nav className="woocommerce-pagination">
                                <Pagination
                                    previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-left'></i>}
                                    nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-right'></i>}
                                    breakLabel={'...'}
                                    pageCount={totalPages}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={' page-numbers text-center'}
                                    activeClassName={'current'}
                                    pageClassName={''}
                                    pageLinkClassName={'page-numbers'}
                                    previousLinkClassName={'page-numbers'}
                                    nextLinkClassName={'page-numbers'}
                                />
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopPageContent;