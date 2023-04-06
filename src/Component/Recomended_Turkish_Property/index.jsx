import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./index.css"
import { RealState } from '../../Data';
import ListingCards from '../../ReUseAbleComponent/ListingCards';

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

                        className="property-box  cf hot-property"
                        style={{ width: 300 }}
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
                                href="#logins1"
                                data-id={4340}
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
                                content="Princess Island sea view apartments in Kartal for sale"
                            />
                            <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-657px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1644

                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: "328.766px", height: '300px' }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"

                                            >
                                                <img
                                                    style={{ width: "100%", height: 300 }}
                                                    className=" ls-is-cached lazyloaded"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item active" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right" />
                                    </button>
                                </div>
                                <div className="owl-dots disabled" />
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                title="Princess Island sea view apartments in Kartal for sale"
                                itemProp="name url"
                                className="property-title abhaya"
                            >
                                Princess Island sea view apartments in Kartal for sale
                            </a>
                            <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                            >
                                <p itemProp="description" limit={600}>
                                    Belview Istanbul available at bargain prices not to miss out on, these
                                    designer apartments can be purchased in sizes ranging from one – three
                                    bedrooms with duplexes and normal floor residences to choose from on the
                                    Anatolian side in Dragos.
                                </p>
                            </a>
                            <div className="features">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid lazyloaded"
                                        data-src="https://www.propertyturkey.com/front/image/location.svg"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Istanbul</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05" itemProp="sku">
                                    78 sq.m
                                </div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between">
                                <div
                                    className="price"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$237,200</span>
                                    <meta itemProp="priceCurrency" content="$237,200" />
                                    <meta itemProp="price" content={4560000.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        itemProp="availability"
                                        id="inline"
                                        href="#data"
                                        data-id={4340}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        />
                    </div>
                    <div

                        className="property-box  cf hot-property"
                        style={{ width: 300 }}
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
                                href="#logins1"
                                data-id={4340}
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
                                content="Princess Island sea view apartments in Kartal for sale"
                            />
                            <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-657px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1644

                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: "328.766px", height: '300px' }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"

                                            >
                                                <img
                                                    style={{ width: "100%", height: 300 }}
                                                    className=" ls-is-cached lazyloaded"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item active" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right" />
                                    </button>
                                </div>
                                <div className="owl-dots disabled" />
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                title="Princess Island sea view apartments in Kartal for sale"
                                itemProp="name url"
                                className="property-title abhaya"
                            >
                                Princess Island sea view apartments in Kartal for sale
                            </a>
                            <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                            >
                                <p itemProp="description" limit={600}>
                                    Belview Istanbul available at bargain prices not to miss out on, these
                                    designer apartments can be purchased in sizes ranging from one – three
                                    bedrooms with duplexes and normal floor residences to choose from on the
                                    Anatolian side in Dragos.
                                </p>
                            </a>
                            <div className="features">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid lazyloaded"
                                        data-src="https://www.propertyturkey.com/front/image/location.svg"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Istanbul</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05" itemProp="sku">
                                    78 sq.m
                                </div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between">
                                <div
                                    className="price"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$237,200</span>
                                    <meta itemProp="priceCurrency" content="$237,200" />
                                    <meta itemProp="price" content={4560000.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        itemProp="availability"
                                        id="inline"
                                        href="#data"
                                        data-id={4340}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        />
                    </div>
                    <div

                        className="property-box  cf hot-property"
                        style={{ width: 300 }}
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
                                href="#logins1"
                                data-id={4340}
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
                                content="Princess Island sea view apartments in Kartal for sale"
                            />
                            <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-657px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1644

                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: "328.766px", height: '300px' }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"

                                            >
                                                <img
                                                    style={{ width: "100%", height: 300 }}
                                                    className=" ls-is-cached lazyloaded"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item active" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right" />
                                    </button>
                                </div>
                                <div className="owl-dots disabled" />
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                title="Princess Island sea view apartments in Kartal for sale"
                                itemProp="name url"
                                className="property-title abhaya"
                            >
                                Princess Island sea view apartments in Kartal for sale
                            </a>
                            <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                            >
                                <p itemProp="description" limit={600}>
                                    Belview Istanbul available at bargain prices not to miss out on, these
                                    designer apartments can be purchased in sizes ranging from one – three
                                    bedrooms with duplexes and normal floor residences to choose from on the
                                    Anatolian side in Dragos.
                                </p>
                            </a>
                            <div className="features">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid lazyloaded"
                                        data-src="https://www.propertyturkey.com/front/image/location.svg"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Istanbul</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05" itemProp="sku">
                                    78 sq.m
                                </div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between">
                                <div
                                    className="price"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$237,200</span>
                                    <meta itemProp="priceCurrency" content="$237,200" />
                                    <meta itemProp="price" content={4560000.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        itemProp="availability"
                                        id="inline"
                                        href="#data"
                                        data-id={4340}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        />
                    </div>
                    <div

                        className="property-box  cf hot-property"
                        style={{ width: 300 }}
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
                                href="#logins1"
                                data-id={4340}
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
                                content="Princess Island sea view apartments in Kartal for sale"
                            />
                            <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-657px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1644

                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: "328.766px", height: '300px' }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"

                                            >
                                                <img
                                                    style={{ width: "100%", height: 300 }}
                                                    className=" ls-is-cached lazyloaded"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item active" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right" />
                                    </button>
                                </div>
                                <div className="owl-dots disabled" />
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                title="Princess Island sea view apartments in Kartal for sale"
                                itemProp="name url"
                                className="property-title abhaya"
                            >
                                Princess Island sea view apartments in Kartal for sale
                            </a>
                            <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                            >
                                <p itemProp="description" limit={600}>
                                    Belview Istanbul available at bargain prices not to miss out on, these
                                    designer apartments can be purchased in sizes ranging from one – three
                                    bedrooms with duplexes and normal floor residences to choose from on the
                                    Anatolian side in Dragos.
                                </p>
                            </a>
                            <div className="features">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid lazyloaded"
                                        data-src="https://www.propertyturkey.com/front/image/location.svg"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Istanbul</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05" itemProp="sku">
                                    78 sq.m
                                </div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between">
                                <div
                                    className="price"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$237,200</span>
                                    <meta itemProp="priceCurrency" content="$237,200" />
                                    <meta itemProp="price" content={4560000.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        itemProp="availability"
                                        id="inline"
                                        href="#data"
                                        data-id={4340}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        />
                    </div>
                    <div

                        className="property-box  cf hot-property"
                        style={{ width: 300 }}
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
                                href="#logins1"
                                data-id={4340}
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
                                content="Princess Island sea view apartments in Kartal for sale"
                            />
                            <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-657px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1644

                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: "328.766px", height: '300px' }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"

                                            >
                                                <img
                                                    style={{ width: "100%", height: 300 }}
                                                    className=" ls-is-cached lazyloaded"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item active" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right" />
                                    </button>
                                </div>
                                <div className="owl-dots disabled" />
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                title="Princess Island sea view apartments in Kartal for sale"
                                itemProp="name url"
                                className="property-title abhaya"
                            >
                                Princess Island sea view apartments in Kartal for sale
                            </a>
                            <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                            >
                                <p itemProp="description" limit={600}>
                                    Belview Istanbul available at bargain prices not to miss out on, these
                                    designer apartments can be purchased in sizes ranging from one – three
                                    bedrooms with duplexes and normal floor residences to choose from on the
                                    Anatolian side in Dragos.
                                </p>
                            </a>
                            <div className="features">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid lazyloaded"
                                        data-src="https://www.propertyturkey.com/front/image/location.svg"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Istanbul</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05" itemProp="sku">
                                    78 sq.m
                                </div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between">
                                <div
                                    className="price"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$237,200</span>
                                    <meta itemProp="priceCurrency" content="$237,200" />
                                    <meta itemProp="price" content={4560000.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        itemProp="availability"
                                        id="inline"
                                        href="#data"
                                        data-id={4340}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        />
                    </div>
                    <div

                        className="property-box  cf hot-property"
                        style={{ width: 300 }}
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
                                href="#logins1"
                                data-id={4340}
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
                                content="Princess Island sea view apartments in Kartal for sale"
                            />
                            <figure className="card-imageSlider owl-carousel card-imageSlider--carousel owl-images-initialized owl-loaded">
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(-657px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 1644

                                        }}
                                    >
                                        <div className="owl-item cloned" style={{ width: "328.766px", height: '300px' }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"

                                            >
                                                <img
                                                    style={{ width: "100%", height: 300 }}
                                                    className=" ls-is-cached lazyloaded"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item active" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                        <div className="owl-item cloned" style={{ width: "328.766px" }}>
                                            <a
                                                rel="nofollow"
                                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                            >
                                                <img
                                                    className=" ls-is-cached lazyloaded"
                                                    data-src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                    alt="Apartments with Princess island views for sale in Kartal"
                                                    src="https://www.propertyturkey.com/uploads/realestate/larg/listing_1_9.jpg"
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav disabled">
                                    <button type="button" role="presentation" className="owl-prev">
                                        <i className="fa fa-angle-left" />
                                    </button>
                                    <button type="button" role="presentation" className="owl-next">
                                        <i className="fa fa-angle-right" />
                                    </button>
                                </div>
                                <div className="owl-dots disabled" />
                            </figure>
                            <a
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                                title="Princess Island sea view apartments in Kartal for sale"
                                itemProp="name url"
                                className="property-title abhaya"
                            >
                                Princess Island sea view apartments in Kartal for sale
                            </a>
                            <a
                                rel="nofollow"
                                href="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                            >
                                <p itemProp="description" limit={600}>
                                    Belview Istanbul available at bargain prices not to miss out on, these
                                    designer apartments can be purchased in sizes ranging from one – three
                                    bedrooms with duplexes and normal floor residences to choose from on the
                                    Anatolian side in Dragos.
                                </p>
                            </a>
                            <div className="features">
                                <div className="location">
                                    <img
                                        className="icon-location img-fluid lazyloaded"
                                        data-src="https://www.propertyturkey.com/front/image/location.svg"
                                        src="https://www.propertyturkey.com/front/image/location.svg"
                                    />
                                    <span className="quantity">Istanbul</span>
                                </div>
                                <div className="bedrooms flex content-space-evenly">
                                    <div>
                                        <img
                                            className="icon-bedroom img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="bathrooms flex content-space-evenly padding-left-05">
                                    <div>
                                        <img
                                            className="icon-bathrooms img-fluid lazyloaded"
                                            data-src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                            src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                        />
                                    </div>
                                    <div>
                                        <span className="quantity">1</span>
                                    </div>
                                </div>
                                <div className="quantity  padding-dir-05" itemProp="sku">
                                    78 sq.m
                                </div>
                            </div>
                            <div className="card-actions flex padding-1 content-space-between">
                                <div
                                    className="price"
                                    itemProp="offers"
                                    itemScope=""
                                    itemType="http://schema.org/Offer"
                                >
                                    <span className="unit-price flex">$237,200</span>
                                    <meta itemProp="priceCurrency" content="$237,200" />
                                    <meta itemProp="price" content={4560000.0} />
                                </div>
                                <div>
                                    <a
                                        className="quich-enquire-btn abhaya"
                                        itemProp="availability"
                                        id="inline"
                                        href="#data"
                                        data-id={4340}
                                        title="Quick Enquire"
                                    >
                                        <span>Quick Enquire</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <meta
                            itemProp="url"
                            content="https://www.propertyturkey.com/real_estate/4340-princess-island-sea-view-apartments-in-kartal-for-sale"
                        />
                    </div>




                </Carousel>
            </section>
        </div>

    )
}
