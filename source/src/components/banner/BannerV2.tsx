import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import BannerV2Data from '../../assets/jsonData/banner/BannerV2Data.json';
import SingleBannerV2 from './SingleBannerV2';

const BannerV2 = () => {
    return (
        <>
            <div className="banner-area banner-style-two text-center navigation-circle zoom-effect overflow-hidden text-light">
                <Swiper
                    className="banner-fade"
                    direction={"horizontal"}
                    loop={true}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    // Navigation arrows
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    modules={[Navigation, Navigation, Autoplay, EffectFade]}
                >
                    {BannerV2Data.map(banner =>
                        <SwiperSlide key={banner.id} >
                            <SingleBannerV2 banner={banner} />
                        </SwiperSlide>
                    )}
                    <div className="swiper-button-prev" />
                    <div className="swiper-button-next" />
                </Swiper>
            </div >
        </>
    );
};

export default BannerV2;