import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css"
import { RealState } from '../../Data';
import ListingCards from '../../ReUseAbleComponent/ListingCards';
import Image from '../../ReUseAbleComponent/Image';

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


export default function Recomended_Turkish_Property() {
    return (
        <div className="hot-properties-bg">
            <section
                id="hot-properties"
                className="wrap-dis-85 wrap-tab-11 wrap-mob-11 hot-properties-carousel"
                touch={1}
            >
                <h1 className="title-lined abhaya">
                    <div className="font-small-29">
                        <b>Today</b>'s Recommended Turkish Properties
                    </div>
                </h1>
                <div className="section--filter-wrapper">
                    <ul className="popular-cities section--filter" style={{}}>
                        <li>
                            <a
                                className="btn section--filter-link ripple button button-default active"
                                rel=""
                            >
                                All
                            </a>
                        </li>
                        <li>
                            <a className="btn section--filter-link" rel="Istanbul">
                                Istanbul
                            </a>
                        </li>
                        <li>
                            <a className="btn section--filter-link" rel="Bodrum">
                                Bodrum
                            </a>
                        </li>
                        <li>
                            <a className="btn section--filter-link" rel="Antalya">
                                Antalya
                            </a>
                        </li>
                    </ul>
                </div>
                <Carousel responsive={responsive} >


                    <div
                        style={{width:300}}
                        className="property-box  cf hot-property"
                       
                    >
                        <link
                            itemProp="additionalType"
                            href="https://www.productontology.org/id/Condominium"
                        />
                        <div className="position-relative">
                            <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                                <span>Apartment</span>
                            </div>
                            <a
                                className="btn --circle position-abs heart-label border-none"
                                id="inline"
                                href="#logins2"
                                data-id={6199}
                            >
                                <span className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.189"
                                        height="18.465"
                                        viewBox="0 0 20.189 18.465"
                                    >
                                        <path
                                            id="Heart"
                                            d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                                            transform="translate(0.975 0.975)"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <meta
                                itemProp="name"
                                content="Bargain apartments for sale in Adabuku Bodrum complex"
                            />
                            <figure className="cardImgInListing skelton-loading">
                                <a
                                    rel="nofollow"
                                   
                                    className="prevent-newtab-onmobile"
                                    href="https://www.propertyturkey.com/real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                                >
                                    <img
                                        className=" lazyloaded"
                                        data-src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                        src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                    />
                                </a>
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                               
                                title="Bargain apartments for sale in Adabuku Bodrum complex"
                                itemProp="name"
                                className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                            >
                                Bargain apartments for sale in Adabuku Bodrum complex
                            </a>
                            <a
                                rel="nofollow"
                               
                                className="prevent-newtab-onmobile"
                                href="https://www.propertyturkey.com/real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                            >
                                <p itemProp="description" limit={600} className="skelton-loading">
                                    Nestled within a residential area of Adabuku, these high quality
                                    apartments are for sale today at bargain prices and are recommended for
                                    viewing at the earliest – units here will not be on the market for much
                                    longer.
                                </p>
                            </a>
                            <div className="features skelton-loading">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Bodrum</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">2</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05">75 sq.m</div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between skelton-loading">
                                <div
                                    className="price flex-align-self-center"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$154,300</span>
                                    <meta itemProp="priceCurrency" content="$154,300" />
                                    <meta itemProp="price" content={140800.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        id="inline"
                                        href="#data"
                                        data-id={6199}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/
                  /real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                        />
                    </div>
                    <div
                        style={{width:300}}
                        className="property-box  cf hot-property"
                       
                    >
                        <link
                            itemProp="additionalType"
                            href="https://www.productontology.org/id/Condominium"
                        />
                        <div className="position-relative">
                            <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                                <span>Apartment</span>
                            </div>
                            <a
                                className="btn --circle position-abs heart-label border-none"
                                id="inline"
                                href="#logins2"
                                data-id={6199}
                            >
                                <span className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.189"
                                        height="18.465"
                                        viewBox="0 0 20.189 18.465"
                                    >
                                        <path
                                            id="Heart"
                                            d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                                            transform="translate(0.975 0.975)"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <meta
                                itemProp="name"
                                content="Bargain apartments for sale in Adabuku Bodrum complex"
                            />
                            <figure className="cardImgInListing skelton-loading">
                                <a
                                    rel="nofollow"
                                   
                                    className="prevent-newtab-onmobile"
                                    href="https://www.propertyturkey.com/real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                                >
                                    <img
                                        className=" lazyloaded"
                                        data-src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                        src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                    />
                                </a>
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                               
                                title="Bargain apartments for sale in Adabuku Bodrum complex"
                                itemProp="name"
                                className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                            >
                                Bargain apartments for sale in Adabuku Bodrum complex
                            </a>
                            <a
                                rel="nofollow"
                               
                                className="prevent-newtab-onmobile"
                                href="https://www.propertyturkey.com/real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                            >
                                <p itemProp="description" limit={600} className="skelton-loading">
                                    Nestled within a residential area of Adabuku, these high quality
                                    apartments are for sale today at bargain prices and are recommended for
                                    viewing at the earliest – units here will not be on the market for much
                                    longer.
                                </p>
                            </a>
                            <div className="features skelton-loading">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Bodrum</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">2</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05">75 sq.m</div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between skelton-loading">
                                <div
                                    className="price flex-align-self-center"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$154,300</span>
                                    <meta itemProp="priceCurrency" content="$154,300" />
                                    <meta itemProp="price" content={140800.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        id="inline"
                                        href="#data"
                                        data-id={6199}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/
                  /real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                        />
                    </div>
                    <div
                        style={{width:300}}
                        className="property-box  cf hot-property"
                       
                    >
                        <link
                            itemProp="additionalType"
                        />
                        <div className="position-relative">
                            <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                                <span>Apartment</span>
                            </div>
                            <a
                                className="btn --circle position-abs heart-label border-none"
                                id="inline"
                                href="#logins2"
                                data-id={6199}
                            >
                                <span className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.189"
                                        height="18.465"
                                        viewBox="0 0 20.189 18.465"
                                    >
                                        <path
                                            id="Heart"
                                            d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                                            transform="translate(0.975 0.975)"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <meta
                                itemProp="name"
                                content="Bargain apartments for sale in Adabuku Bodrum complex"
                            />
                            <figure className="cardImgInListing skelton-loading">
                                <a
                                    rel="nofollow"
                                   
                                    className="prevent-newtab-onmobile"
                                >
                                    <img
                                        className=" lazyloaded"
                                        data-src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                        src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                    />
                                </a>
                            </figure>
                            <a
                               
                                title="Bargain apartments for sale in Adabuku Bodrum complex"
                                itemProp="name"
                                className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                            >
                                Bargain apartments for sale in Adabuku Bodrum complex
                            </a>
                            <a
                                rel="nofollow"
                               
                                className="prevent-newtab-onmobile"
                            >
                                <p itemProp="description" limit={600} className="skelton-loading">
                                    Nestled within a residential area of Adabuku, these high quality
                                    apartments are for sale today at bargain prices and are recommended for
                                    viewing at the earliest – units here will not be on the market for much
                                    longer.
                                </p>
                            </a>
                            <div className="features skelton-loading">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Bodrum</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">2</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05">75 sq.m</div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between skelton-loading">
                                <div
                                    className="price flex-align-self-center"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$154,300</span>
                                    <meta itemProp="priceCurrency" content="$154,300" />
                                    <meta itemProp="price" content={140800.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        id="inline"
                                        href="#data"
                                        data-id={6199}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/
                  /real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                        />
                    </div>
                    <div
                        style={{width:300}}
                        className="property-box  cf hot-property"
                       
                    >
                        <link
                            itemProp="additionalType"
                        />
                        <div className="position-relative">
                            <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                                <span>Apartment</span>
                            </div>
                            <a
                                className="btn --circle position-abs heart-label border-none"
                                id="inline"
                                href="#logins2"
                                data-id={6199}
                            >
                                <span className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.189"
                                        height="18.465"
                                        viewBox="0 0 20.189 18.465"
                                    >
                                        <path
                                            id="Heart"
                                            d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                                            transform="translate(0.975 0.975)"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <meta
                                itemProp="name"
                                content="Bargain apartments for sale in Adabuku Bodrum complex"
                            />
                            <figure className="cardImgInListing skelton-loading">
                                <a
                                    rel="nofollow"
                                   
                                    className="prevent-newtab-onmobile"
                                >
                                    <img
                                        className=" lazyloaded"
                                        data-src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                        src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                    />
                                </a>
                            </figure>
                            <a
                               
                                title="Bargain apartments for sale in Adabuku Bodrum complex"
                                itemProp="name"
                                className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                            >
                                Bargain apartments for sale in Adabuku Bodrum complex
                            </a>
                            <a
                                rel="nofollow"
                               
                                className="prevent-newtab-onmobile"
                            >
                                <p itemProp="description" limit={600} className="skelton-loading">
                                    Nestled within a residential area of Adabuku, these high quality
                                    apartments are for sale today at bargain prices and are recommended for
                                    viewing at the earliest – units here will not be on the market for much
                                    longer.
                                </p>
                            </a>
                            <div className="features skelton-loading">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Bodrum</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">2</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05">75 sq.m</div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between skelton-loading">
                                <div
                                    className="price flex-align-self-center"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$154,300</span>
                                    <meta itemProp="priceCurrency" content="$154,300" />
                                    <meta itemProp="price" content={140800.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        id="inline"
                                        href="#data"
                                        data-id={6199}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/
                  /real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                        />
                    </div>
                    <div
                        style={{width:300}}
                        className="property-box  cf hot-property"
                       
                    >
                        <link
                            itemProp="additionalType"
                        />
                        <div className="position-relative">
                            <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                                <span>Apartment</span>
                            </div>
                            <a
                                className="btn --circle position-abs heart-label border-none"
                                id="inline"
                                href="#logins2"
                                data-id={6199}
                            >
                                <span className="flex">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20.189"
                                        height="18.465"
                                        viewBox="0 0 20.189 18.465"
                                    >
                                        <path
                                            id="Heart"
                                            d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956"
                                            transform="translate(0.975 0.975)"
                                            fill="none"
                                            stroke="#fff"
                                            strokeWidth={2}
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </a>
                            <meta
                                itemProp="name"
                                content="Bargain apartments for sale in Adabuku Bodrum complex"
                            />
                            <figure className="cardImgInListing skelton-loading">
                                <a
                                    rel="nofollow"
                                   
                                    className="prevent-newtab-onmobile"
                                >
                                    <img
                                        className=" lazyloaded"
                                        data-src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                        src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                    />
                                </a>
                            </figure>
                            <a
                               
                                title="Bargain apartments for sale in Adabuku Bodrum complex"
                                itemProp="name"
                                className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                            >
                                Bargain apartments for sale in Adabuku Bodrum complex
                            </a>
                            <a
                                rel="nofollow"
                               
                                className="prevent-newtab-onmobile"
                            >
                                <p itemProp="description" limit={600} className="skelton-loading">
                                    Nestled within a residential area of Adabuku, these high quality
                                    apartments are for sale today at bargain prices and are recommended for
                                    viewing at the earliest – units here will not be on the market for much
                                    longer.
                                </p>
                            </a>
                            <div className="features skelton-loading">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Bodrum</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">2</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05">75 sq.m</div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between skelton-loading">
                                <div
                                    className="price flex-align-self-center"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$154,300</span>
                                    <meta itemProp="priceCurrency" content="$154,300" />
                                    <meta itemProp="price" content={140800.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        id="inline"
                                        href="#data"
                                        data-id={6199}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/
                  /real_estate/6199-bargain-apartments-for-sale-in-adabuku-bodrum-complex"
                        />
                    </div>





                </Carousel>
            </section>
        </div>

    )
}
