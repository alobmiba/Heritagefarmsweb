import PartnerData from '../../assets/jsonData/partner/PartnerData.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules';

const Partner = () => {
    return (
        <>
            <div className="brand-style-two-area text-center bg-gray default-padding">
                <div className="container">
                    <div className="brand-style-two">
                        <div className="row">
                            <div className="col-lg-12">
                                <Swiper
                                    className="brand5col"
                                    modules={[Navigation, Pagination, Autoplay, Keyboard]}
                                    loop={true}
                                    slidesPerView={2}
                                    spaceBetween={30}
                                    autoplay={{
                                        delay: 5000,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 40,
                                        },
                                        992: {
                                            slidesPerView: 4,
                                            spaceBetween: 60,
                                        },
                                        1199: {
                                            slidesPerView: 5,
                                            spaceBetween: 60,
                                        }
                                    }}
                                >
                                    {PartnerData.map(partner =>
                                        <SwiperSlide key={partner.id}>
                                            <img src={`/assets/img/brand/${partner.thumb}`} alt="Thumb" />
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default Partner;