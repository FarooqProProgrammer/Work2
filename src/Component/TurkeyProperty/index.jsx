import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};






export default function TurkeyProperty() {
    return (
        <div className="sec-about flex flex-direction-column">
            <p className="aboutpt-header text-center abhaya">
                <strong style={{ lineHeight: "5.5rem" }}>Property Turkey</strong>
                <br /> <i className="font-24">for lifestyle &amp; investment</i>{" "}
            </p>
            <div className="col-md-10 mx-auto margin-bottom-3 mb-3 text-center">
                <p className="hot-properties-subtitle">
                    Since 2001, <strong>Property Turkey</strong> has helped clients from all
                    over the world buy <strong>Turkish properties</strong> in all regions of
                    Turkey. From lifestyle buyers wishing to{" "}
                    <strong>buy a property in Turkey for sale</strong>, to discerning
                    investors seeking to buy property in Turkey, our range of luxury villas,
                    sea view penthouse apartments, Turkey houses, and unique hotels for sale
                    ensure a range of lifestyle and investment opportunities to suit any
                    requirement. Trusted for over 20 years, our portfolio of{" "}
                    <strong>houses for sale in Turkey</strong> is the widest available with
                    offices throughout the country constantly sourcing new and exciting
                    opportunities.
                </p>
            </div>
            <div className="row text-center">
                <div
                    className="card-md-deck wrap wrap-dis-85 wrap-tab-11 wrap-mob-11 margin-bottom-3 mb-sm-0 owl-carousel carousel owl-images-initialized owl-loaded"
                    items={3}
                    margin={10}
                >

                    <Carousel responsive={responsive} >
                        <div className="card card-border about-card-color ">
                            <div className="card-header card-header-bg">
                                <img
                                    className="testmonial-img lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title abhaya extra-bold">Since 2001</h5>
                                <p className="card-text">
                                    With 20+ years experience in Turkish real estate, we are the market
                                    leaders in sourcing property for sale in Turkey for lifestyle and
                                    investment buyers.
                                </p>
                            </div>
                        </div>

                        <div className="card card-border about-card-color ">
                            <div className="card-header card-header-bg">
                                <img
                                    className="testmonial-img lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title abhaya extra-bold">Since 2001</h5>
                                <p className="card-text">
                                    With 20+ years experience in Turkish real estate, we are the market
                                    leaders in sourcing property for sale in Turkey for lifestyle and
                                    investment buyers.
                                </p>
                            </div>
                        </div>
                        <div className="card card-border about-card-color ">
                            <div className="card-header card-header-bg">
                                <img
                                    className="testmonial-img lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title abhaya extra-bold">Since 2001</h5>
                                <p className="card-text">
                                    With 20+ years experience in Turkish real estate, we are the market
                                    leaders in sourcing property for sale in Turkey for lifestyle and
                                    investment buyers.
                                </p>
                            </div>
                        </div>
                        <div className="card card-border about-card-color ">
                            <div className="card-header card-header-bg">
                                <img
                                    className="testmonial-img lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/features3.png"
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title abhaya extra-bold">Since 2001</h5>
                                <p className="card-text">
                                    With 20+ years experience in Turkish real estate, we are the market
                                    leaders in sourcing property for sale in Turkey for lifestyle and
                                    investment buyers.
                                </p>
                            </div>
                        </div>




                    </Carousel>;



                </div>
                <div className="col-12">
                    <div className="text-center mt-4">
                        <a
                            href="https://www.propertyturkey.com/buyer-guide/why-invest-in-property-in-turkey"
                            className="btn sec-about--btn rednew-border bg-transparent"
                        >
                            Read More
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
