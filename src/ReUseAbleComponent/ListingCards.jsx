import React, { Children } from 'react'
import Image from './Image'
import { LazyLoadImage } from 'react-lazy-load-image-component';


export default function ListingCards(props) {
    return (
        <div className="listing-card col-12 col-md-6 col-lg-3 margin-ver-1">
            <div
                className="property-box  cf hot-property"

            >
                <link
                    itemProp="additionalType"
                    href="https://www.productontology.org/id/Condominium"
                />
                <div className="position-relative">
                    <div className="card-type btn --circle position-abs card-label raleway border-none opacity-73">
                        <span>{props.BannerText}</span>
                    </div>
                    <a
                        className="btn --circle position-abs heart-label border-none"
                        id="inline"
                        href="#logins2"
                        data-id={2776}
                    >
                        <span className="flex">
                            <i class="fas fa-heart"></i>

                        </span>
                    </a>
                    <figure className="cardImgInListing skelton-loading">
                        <a
                            rel="nofollow noreferrer"
                            target="_blank"
                            className="prevent-newtab-onmobile"
                            href="https://www.propertyturkey.com/real_estate/2776-bargain-bahcesehir-residences-in-fully-equipped-project"
                        >
                            <LazyLoadImage
                                className="lazyloaded"
                                src="https://www.propertyturkey.com/uploads/realestate/larg/bahcesehir_residences_1.jpg"
                            />
                        </a>
                    </figure>
                    <a
                        href="https://www.propertyturkey.com/real_estate/2776-bargain-bahcesehir-residences-in-fully-equipped-project"
                        target="_blank"
                        title="Bargain Bahcesehir residences in fully equipped project"
                        itemProp="name"
                        className="property-title abhaya skelton-loading
                      prevent-newtab-onmobile" rel="noreferrer"
                    >
                        {props.title}
                    </a>
                    <a
                        rel="nofollow noreferrer"
                        target="_blank"
                        className="prevent-newtab-onmobile"
                        href="https://www.propertyturkey.com/real_estate/2776-bargain-bahcesehir-residences-in-fully-equipped-project"
                    >
                        <p itemProp="description" limit={600} className="skelton-loading">
                            {props.Des}
                        </p>
                    </a>
                    <div className="features skelton-loading">
                        <div className="location">
                            <Image
                                className="icon-location img-fluid"
                                src="https://www.propertyturkey.com/front/image/location.svg"
                            />
                            <span className="quantity">{props.location}</span>
                        </div>
                        <div className="bedrooms flex content-space-evenly">
                            <div>
                                <Image
                                    className="icon-bedroom img-fluid"
                                    src="https://www.propertyturkey.com/front/image/bedrooms.svg"
                                />
                            </div>
                            <div>
                                <span className="quantity">1</span>
                            </div>
                        </div>
                        <div className="bathrooms flex content-space-evenly padding-left-05">
                            <div>
                                <Image
                                    className="icon-bathrooms img-fluid"
                                    src="https://www.propertyturkey.com/front/image/bathrooms.svg"
                                />
                            </div>
                            <div>
                                <span className="quantity">1</span>
                            </div>
                        </div>
                        <div className="quantity  padding-dir-05">74 sq.m</div>
                    </div>
                    <div className="card-actions flex padding-1 content-space-between skelton-loading">
                        <div
                            className="price flex-align-self-center"
                            itemProp="offers"
                            itemScope=""
                            itemType="http://schema.org/Offer"
                        >
                            <span className="unit-price flex">$120,000</span>
                        </div>
                        <div>
                            <a
                                className="quich-enquire-btn abhaya"
                                id="inline"
                                href="#data"
                                data-id={2776}
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
                  /real_estate/2776-bargain-bahcesehir-residences-in-fully-equipped-project"
                />
            </div>
        </div>
    )
}
