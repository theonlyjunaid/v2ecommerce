import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SlideContent from './SlideContent';




const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1024 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 1024, min: 768 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 768, min: 640 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 640, min: 0 },
        items: 1,
    },
};

const FeaturedPosts = () => {


    const customLeftArrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
        </div>
    );

    const customRightArrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-pink-600 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6  text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </div>
    );

    return (
        <div className="mb-8  text-center  w-full">
            <Carousel infinite customLeftArrow={customLeftArrow} customRightArrow={customRightArrow} responsive={responsive} itemclassName="px-4">
                {/* <SlideContent /> */}




                <div className="items block_84f37a1b-0c2c-4b09-bffd-d86475d236b8 align_left-align">

                    <div className="innerWrapper">
                        <div className="innerBox">

                            <h1 data-aos="fade-up" data-aos-duration="500">Seeing Doubles?</h1>


                            <div className="dis" data-aos="fade-up" data-aos-duration="500">
                                <p className="subtext">Buy 2 Skins @ ₹799/-  Buy 1 Skin @ ₹499/-</p>
                            </div>


                            <a href="https://www.layers.shop/products/iphone-13-pro-max" className="btn btn-md btn-primary" data-aos="fade-up" data-aos-duration="500">
                                SHOP NOW</a>

                        </div>
                    </div>

                    <div className="bg-img">

                        <a href="https://www.layers.shop/products/iphone-13-pro-max">

                            <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/hirooo01_0e4edd14-2a29-416c-9231-37aa6b785cf9.jpg?v=1664382296" alt="Banner Image" className="lazyload desktop-img hidden md:flex" />
                            <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/hirooo0mob1_504ba29e-d19f-442d-b262-728bc5345108.jpg?v=1664382305" alt="Banner Image" className="lazyload mobile-img md:hidden" />

                        </a>

                    </div>

                </div>



                <div className="items block_37faa9c5-b36b-4811-816f-642c5ba11b83 align_left-align">

                    <div className="innerWrapper">
                        <div className="innerBox">

                            <h1 data-aos="fade-up" data-aos-duration="500">Get The Look</h1>


                            <div className="dis" data-aos="fade-up" data-aos-duration="500">
                                <p className="subtext">Buy 2 Skins @ ₹799/-  Buy 1 Skin @ ₹499/-</p>
                            </div>


                            <a href="https://www.layers.shop/products/iphone-13-pro-max#Colorful-Candy" className="btn btn-md btn-primary" data-aos="fade-up" data-aos-duration="500">
                                SHOP NOW</a>

                        </div>
                    </div>

                    <div className="bg-img">

                        <a href="https://www.layers.shop/products/iphone-13-pro-max#Colorful-Candy">

                            <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/desktop.png?v=1664445209" alt="Banner Image" className="lazyload desktop-img hidden md:flex" />
                            <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/01-mob.png?v=1664445209" alt="Banner Image" className="lazyload mobile-img md:hidden" />

                        </a>

                    </div>

                </div>



                <div className="items block_ef5d6f72-1314-4ed4-be25-f4af052fb2a0 align_left-align">

                    <div className="innerWrapper">
                        <div className="innerBox">

                            <h1 data-aos="fade-up" data-aos-duration="500">NEW LOOK, SAME YOU</h1>


                            <div className="dis" data-aos="fade-up" data-aos-duration="500">
                                <p className="subtext">Buy 2 Skins @ ₹799/-  Buy 1 Skin @ ₹499/-</p>
                            </div>


                            <a href="https://www.layers.shop/products/iphone-13-pro-max#Groovy-Retro" className="btn btn-md btn-primary" data-aos="fade-up" data-aos-duration="500">
                                SHOP NOW</a>

                        </div>
                    </div>

                    <div className="bg-img">

                        <a href="https://www.layers.shop/products/iphone-13-pro-max#Groovy-Retro">

                            <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/hirooo03_0a5f0d6c-c87b-4bf1-ab89-f16cd36a8dfe.jpg?v=1664383214" alt="Banner Image" className="lazyload desktop-img hidden md:flex" />
                            <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/hirooo03mob_5bade8bc-4be6-46fa-b53a-204c10812aba.jpg?v=1664383219" alt="Banner Image" className="lazyload mobile-img md:hidden" />

                        </a>

                    </div>

                </div>



                <div className="items block_c94f2ceb-a9c6-4cbb-b65a-31245d81a33c align_left-align">

                    <div className="innerWrapper">
                        <div className="innerBox">

                            <h1 data-aos="fade-up" data-aos-duration="500">Don’t miss out!</h1>


                            <div className="dis" data-aos="fade-up" data-aos-duration="500">
                                <p className="subtext">Buy 1 Skin for ₹499  Buy 2 Skins @ ₹799/-</p>
                            </div>


                            <a href="https://www.layers.shop/products/rog-phone-5#SciFi-Hud" className="btn btn-md btn-primary" data-aos="fade-up" data-aos-duration="500">
                                SHOP NOW</a>

                        </div>
                    </div>

                    <div className="bg-img">



                        <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/hirooo04.jpg?v=1661998775" alt="Banner Image" className="lazyload desktop-img hidden md:flex" />
                        <img src="//cdn.shopify.com/s/files/1/0602/9334/9613/files/hirooo04_mob.jpg?v=1661998792" alt="Banner Image" className="lazyload mobile-img md:hidden" />

                    </div>





                </div>



            </Carousel>
        </div>
    );
};

export default FeaturedPosts;