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
export default function Testimonial() {
    return (
        <section id="testimonials" className="testemonial-carosuel">
            <h2 className="title-lined abhaya">
                Our clients <strong className="grey-label">Testimonials</strong>
            </h2>
            <div className="" style={{ marginLeft: 20 }}>
                <Carousel responsive={responsive} >
                    <div
                        className="owl-item active"
                        style={{ width: "405.688px", marginRight: 30 }}
                    >
                        <div className="item">
                            <img
                                className="testimonal-img lazyloaded"
                                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                                src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                            />
                            <a href="testimonials/proud-to-become-turkish-citizens" className="abhaya">
                                <b>Proud to become Turkish Citizens</b>
                            </a>
                            <p limit={300}>
                                I am very grateful and thankful to Property Turkey and to all staff headed
                                by esteemed Cameron Deggin for the help and support given to us in the
                                purchase of property in Turkey. Today we are very happy and proud to
                                become new citizens of this wonderful country.
                            </p>
                            <div className="testimonial-date">
                                <img
                                    className=" lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                />
                                <h4>
                                    {" "}
                                    /<span>13 Dec 2022</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div
                        className="owl-item active"
                        style={{ width: "405.688px", marginRight: 30 }}
                    >
                        <div className="item">
                            <img
                                className="testimonal-img lazyloaded"
                                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                                src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                            />
                            <a href="testimonials/proud-to-become-turkish-citizens" className="abhaya">
                                <b>Proud to become Turkish Citizens</b>
                            </a>
                            <p limit={300}>
                                I am very grateful and thankful to Property Turkey and to all staff headed
                                by esteemed Cameron Deggin for the help and support given to us in the
                                purchase of property in Turkey. Today we are very happy and proud to
                                become new citizens of this wonderful country.
                            </p>
                            <div className="testimonial-date">
                                <img
                                    className=" lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                />
                                <h4>
                                    {" "}
                                    /<span>13 Dec 2022</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div
                        className="owl-item active"
                        style={{ width: "405.688px", marginRight: 30 }}
                    >
                        <div className="item">
                            <img
                                className="testimonal-img lazyloaded"
                                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                                src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                            />
                            <a href="testimonials/proud-to-become-turkish-citizens" className="abhaya">
                                <b>Proud to become Turkish Citizens</b>
                            </a>
                            <p limit={300}>
                                I am very grateful and thankful to Property Turkey and to all staff headed
                                by esteemed Cameron Deggin for the help and support given to us in the
                                purchase of property in Turkey. Today we are very happy and proud to
                                become new citizens of this wonderful country.
                            </p>
                            <div className="testimonial-date">
                                <img
                                    className=" lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                />
                                <h4>
                                    {" "}
                                    /<span>13 Dec 2022</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div
                        className="owl-item active"
                        style={{ width: "405.688px", marginRight: 30 }}
                    >
                        <div className="item">
                            <img
                                className="testimonal-img lazyloaded"
                                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                                src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                            />
                            <a href="testimonials/proud-to-become-turkish-citizens" className="abhaya">
                                <b>Proud to become Turkish Citizens</b>
                            </a>
                            <p limit={300}>
                                I am very grateful and thankful to Property Turkey and to all staff headed
                                by esteemed Cameron Deggin for the help and support given to us in the
                                purchase of property in Turkey. Today we are very happy and proud to
                                become new citizens of this wonderful country.
                            </p>
                            <div className="testimonial-date">
                                <img
                                    className=" lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                />
                                <h4>
                                    {" "}
                                    /<span>13 Dec 2022</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div
                        className="owl-item active"
                        style={{ width: "405.688px", marginRight: 30 }}
                    >
                        <div className="item">
                            <img
                                className="testimonal-img lazyloaded"
                                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                                src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                            />
                            <a href="testimonials/proud-to-become-turkish-citizens" className="abhaya">
                                <b>Proud to become Turkish Citizens</b>
                            </a>
                            <p limit={300}>
                                I am very grateful and thankful to Property Turkey and to all staff headed
                                by esteemed Cameron Deggin for the help and support given to us in the
                                purchase of property in Turkey. Today we are very happy and proud to
                                become new citizens of this wonderful country.
                            </p>
                            <div className="testimonial-date">
                                <img
                                    className=" lazyloaded"
                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                                />
                                <h4>
                                    {" "}
                                    /<span>13 Dec 2022</span>
                                </h4>
                            </div>
                        </div>
                    </div>

                </Carousel>
            </div>
            <div className="text-center p-3-sm padding-top-1">
                <a
                    href="https://www.propertyturkey.com/testimonials"
                    title="View all <b>Testimonials</b>"
                    className="btn sec-about--btn rednew-border bg-transparent"
                >
                    Read More
                </a>
            </div>
            <div className="d-mobile">
                <div className="container">
                    <div className="card position-relative custom-youtube-video-1">
                        <img
                            data-src="https://www.propertyturkey.com/front/image/images2019/Images/business-ptjpg__large__720.jpg"
                            className="custom-youtube-video--bigimg-1 lazyloaded"
                            alt=""
                            src="https://www.propertyturkey.com/front/image/images2019/Images/business-ptjpg__large__720.jpg"
                        />
                        <img
                            data-src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-brands.svg"
                            className="play_video_youtube-1 lazyloaded"
                            alt=""
                            src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-brands.svg"
                        />
                        <iframe
                            width="100%"
                            height={315}
                            className="w-sm-100 hide lazyload"
                            data-src="https://www.youtube.com/embed/preRes-n9Ew"
                            frameBorder={0}
                        ></iframe>
                        <div className="card-body text-center" id="insertbefore-youtube-1">
                            <h2 className="title-lined abhaya bold clr-pt-darkgrey font-26">
                                Property Turkey Culture
                            </h2>
                            <p className="card-text featuredin-title">
                                Tap into our unique
                                <br /> Style and Culture
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
