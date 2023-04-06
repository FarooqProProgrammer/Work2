import React, { Children } from 'react'
import Image from './Image'
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function ListingCards(props) {
    return (
        <div className="listing-card col-12 col-md-6 col-lg-3 margin-ver-1">
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
                                <span>{props.title}</span>
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
                                    target="_blank"
                                    className="prevent-newtab-onmobile"
                                >
                                    <img
                                        className=" lazyloaded"
                                        data-src="https://www.propertyturkey.com/uploads/realestate/6199/thumb/bodrum_property_2-300x200.jpg"
                                        src={props.img}
                                    />
                                </a>
                            </figure>
                            <a
                                target="_blank"
                                title="Bargain apartments for sale in Adabuku Bodrum complex"
                                itemProp="name"
                                className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile"
                            >
                                Bargain apartments for sale in Adabuku Bodrum complex
                            </a>
                            <a
                                rel="nofollow"
                                target="_blank"
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
                                    <span className="quantity">{props.location}</span>
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
        </div>
    )
}
