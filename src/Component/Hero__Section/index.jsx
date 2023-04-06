import React from 'react'
import "./Index.css"
import { Box } from '@mui/material'

export default function HeroSection() {

    const openCheckBox = () => {
        const id = document.getElementbyId("OpenCheck")
        id.style.display = "block"
        id.style.width = "500px"
        id.style.height = "500px"
        id.style.zIndex = "999"


    }
    
    return (
        <section className="bg-pt-off-white">
            <input type="hidden" id="currentCurrency" defaultValue="$" />
            <div
                className="tab-content d-block position-relative abhaya"
                id="myTabContent"
            >
                {/* Tab 1 */}
                <div className="tab-pane home-tab fade show active" id="tab-1">
                    <div className="d-block d-lg-flex flex-column align-items-center">
                        <div className="card container-pt bg-transparent border-0">
                            <img
                                className="of-cover tab-background d-md-none d-block"
                                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-mobile-1.jpg"
                            />
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0 active"
                                        data-target="#tab-1"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                                            browse
                                        </span>
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-none d-inline">
                                            ALL
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-2"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            Istanbul
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-3"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bodrum
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-4"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            antalya
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-5"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bursa
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-6"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            fethiye
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div
                                className="w-100 bg-pt-off-white p-4 showRefId"
                                id="search-filter"
                            >
                                <a
                                    href="https://www.propertyturkey.com/en/real_estate/turkey"
                                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                                >
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={32}
                                            height={32}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                    </div>
                                    <div className="col text-center">
                                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                                            browse all properties
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow_red.svg"
                                            width={10}
                                            height="32.5"
                                            loading="lazy"
                                            alt="browse arrow"
                                            style={{ transform: "unset" }}
                                        />
                                    </div>
                                </a>
                                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                                    <a
                                        href="https://www.propertyturkey.com/en/real_estate/turkey"
                                        className="text-pt-dark-red fs-6"
                                    >
                                        <em className="text-uppercase">
                                            CLICK TO BROWSE ALL PROPERTY TURKEY LISTINGS
                                        </em>
                                        <em className="fa fa-arrow-right ms-2" />
                                    </a>
                                </p>
                                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                                    <span className="text-pt-dark-red fs-6">
                                        <em className="text-uppercase">
                                            or filter all properties below
                                        </em>
                                        <em className="fa fa-arrow-down ms-2" />
                                    </span>
                                </p>
                                <div className="row pb-3 responsive-links">
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Recommended Properties in Istanbul</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Recommended Properties in Bodrum</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/antalya"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Recommended Properties in Antalya</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bursa"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Recommended Properties in Bursa</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Recommended Properties in Fethiye</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/property-turkey-citizenship-by-investment-programme"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Turkish Citizenship by Property Investment</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="row" id="search">
                                    {/*----------------- L O C A T I O N ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input search-location-input originValue"
                                            linktype="location"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown" onClick={openCheckBox}>
                                                    <h4>Location</h4>
                                                    <div className="filter-type-dropdown">
                                                        <h4>Location</h4>
                                                        <ul>
                                                            <label className="checkbox-container bold">
                                                                {" "}
                                                                Istanbul
                                                                <input
                                                                    defaultValue="istanbul"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container bold">
                                                                {" "}
                                                                Fethiye
                                                                <input
                                                                    defaultValue="fethiye"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container bold">
                                                                {" "}
                                                                Bodrum
                                                                <input
                                                                    defaultValue="bodrum"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container bold">
                                                                {" "}
                                                                Antalya
                                                                <input
                                                                    defaultValue="antalya"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container bold">
                                                                {" "}
                                                                Kalkan
                                                                <input
                                                                    defaultValue="kalkan"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Alanya
                                                                <input
                                                                    defaultValue="alanya"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container bold">
                                                                {" "}
                                                                Bursa
                                                                <input
                                                                    defaultValue="bursa"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Kas
                                                                <input
                                                                    defaultValue="kas"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Izmir
                                                                <input
                                                                    defaultValue="izmir"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Dalyan
                                                                <input
                                                                    defaultValue="dalyan"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Gocek
                                                                <input
                                                                    defaultValue="gocek"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Kemer
                                                                <input
                                                                    defaultValue="kemer"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Belek
                                                                <input
                                                                    defaultValue="belek"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Side
                                                                <input
                                                                    defaultValue="side"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Yalova
                                                                <input
                                                                    defaultValue="yalova"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Ankara
                                                                <input
                                                                    defaultValue="ankara"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Dalaman
                                                                <input
                                                                    defaultValue="dalaman"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Cesme
                                                                <input
                                                                    defaultValue="cesme"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Marmaris
                                                                <input
                                                                    defaultValue="marmaris"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Alacati
                                                                <input
                                                                    defaultValue="alacati"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Sakarya
                                                                <input
                                                                    defaultValue="sakarya"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Didim
                                                                <input
                                                                    defaultValue="didim"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Bolu
                                                                <input
                                                                    defaultValue="bolu"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Koycegiz
                                                                <input
                                                                    defaultValue="koycegiz"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Mersin
                                                                <input
                                                                    defaultValue="mersin"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                            <label className="checkbox-container ">
                                                                {" "}
                                                                Datca
                                                                <input
                                                                    defaultValue="datca"
                                                                    type="radio"
                                                                    name="city"
                                                                    className="checkbox-filter"
                                                                />
                                                                <span className="checkmark" />
                                                            </label>
                                                        </ul>
                                                        <input type="hidden" name="city_slug" id="#city_slug" />
                                                    </div>


                                                    <input type="hidden" name="city_slug" id="#city_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Location <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value="istanbul"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Istanbul
                                                </label>
                                                <label
                                                    value="fethiye"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Fethiye
                                                </label>
                                                <label
                                                    value="bodrum"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Bodrum
                                                </label>
                                                <label
                                                    value="antalya"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Antalya
                                                </label>
                                                <label
                                                    value="kalkan"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Kalkan
                                                </label>
                                                <label
                                                    value="alanya"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Alanya
                                                </label>
                                                <label
                                                    value="bursa"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Bursa
                                                </label>
                                                <label
                                                    value="kas"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Kas
                                                </label>
                                                <label
                                                    value="izmir"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Izmir
                                                </label>
                                                <label
                                                    value="dalyan"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Dalyan
                                                </label>
                                                <label
                                                    value="gocek"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Gocek
                                                </label>
                                                <label
                                                    value="kemer"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Kemer
                                                </label>
                                                <label
                                                    value="belek"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Belek
                                                </label>
                                                <label
                                                    value="side"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Side
                                                </label>
                                                <label
                                                    value="yalova"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Yalova
                                                </label>
                                                <label
                                                    value="ankara"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Ankara
                                                </label>
                                                <label
                                                    value="dalaman"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Dalaman
                                                </label>
                                                <label
                                                    value="cesme"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Cesme
                                                </label>
                                                <label
                                                    value="marmaris"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Marmaris
                                                </label>
                                                <label
                                                    value="alacati"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Alacati
                                                </label>
                                                <label
                                                    value="sakarya"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Sakarya
                                                </label>
                                                <label
                                                    value="didim"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Didim
                                                </label>
                                                <label
                                                    value="bolu"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Bolu
                                                </label>
                                                <label
                                                    value="koycegiz"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Koycegiz
                                                </label>
                                                <label
                                                    value="mersin"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Mersin
                                                </label>
                                                <label
                                                    value="datca"
                                                    type="city_slug"
                                                    className="search-filter-input-dropdown-link searchDO city-mob-search"
                                                >
                                                    {" "}
                                                    Datca
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- T Y P E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input originValue"
                                            linktype="type"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4>Type</h4>
                                                    <ul>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Apartment
                                                            <input
                                                                defaultValue="apartment"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Bungalow
                                                            <input
                                                                defaultValue="bungalow"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Commercial
                                                            <input
                                                                defaultValue="commercial"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Hotel for sale
                                                            <input
                                                                defaultValue="hotel-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Land for sale
                                                            <input
                                                                defaultValue="land-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Penthouse
                                                            <input
                                                                defaultValue="penthouse"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Villa
                                                            <input
                                                                defaultValue="villa"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="type_slug" id="#type_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Type <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown  label">
                                                <label
                                                    value="apartment"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Apartment
                                                </label>
                                                <label
                                                    value="bungalow"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Bungalow
                                                </label>
                                                <label
                                                    value="commercial"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Commercial
                                                </label>
                                                <label
                                                    value="hotel-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Hotel for sale
                                                </label>
                                                <label
                                                    value="land-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Land for sale
                                                </label>
                                                <label
                                                    value="penthouse"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Penthouse
                                                </label>
                                                <label
                                                    value="villa"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Villa
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- P R I C E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                                            id="price-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Price
                                                <div className="priceValues">
                                                    <i className="search-filter-input-value minPriceValue" />{" "}
                                                    -{" "}
                                                    <i className="search-filter-input-value maxPriceValue" />
                                                </div>
                                                <input type="hidden" name="priceRange" id="priceRange" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div
                                                className="filter-type-dropdown-wrap price"
                                                style={{ display: "block !important" }}
                                            >
                                                <div className="filter-type-dropdown">
                                                    <h4> Price range</h4>
                                                    <div>
                                                        <div className="minPrice">
                                                            <input
                                                                className="minPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Min Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    0
                                                                    <input
                                                                        defaultValue={0.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                        <small> - </small>
                                                        <div className="maxPrice">
                                                            <input
                                                                className="maxPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Max Price"
                                                                defaultValue=""
                                                            />
                                                            <ul className="maxPriceValues">
                                                                <label className="checkbox-container">
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k+
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-1-max-prices"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide minPrice"
                                            linktype="min_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="minPrice"
                                            >
                                                Min Price <i className="search-filter-input-value"></i>
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown ">
                                                <label
                                                    value={0.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={50000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $10,000k
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide maxPrice"
                                            linktype="max_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="maxPrice"
                                            >
                                                Max Price <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown">
                                                <label
                                                    value={50000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------------- B E D R O O M S ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input bedrooms"
                                            linktype="bedrooms"
                                            id="bedroom-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                {" "}
                                                Beds
                                                <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4> Bedrooms </h4>
                                                    <ul>
                                                        <label className="checkbox-container" value={0}>
                                                            {" "}
                                                            0
                                                            <input
                                                                defaultValue={0}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={1}>
                                                            {" "}
                                                            1
                                                            <input
                                                                defaultValue={1}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={2}>
                                                            {" "}
                                                            2
                                                            <input
                                                                defaultValue={2}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={3}>
                                                            {" "}
                                                            3
                                                            <input
                                                                defaultValue={3}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={4}>
                                                            {" "}
                                                            4
                                                            <input
                                                                defaultValue={4}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={5}>
                                                            {" "}
                                                            5
                                                            <input
                                                                defaultValue={5}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={6}>
                                                            {" "}
                                                            5+
                                                            <input
                                                                defaultValue={6}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="bedrooms" id="#bedrooms" />
                                                </div>
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value={0}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={1}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    1
                                                </label>
                                                <label
                                                    value={2}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    2
                                                </label>
                                                <label
                                                    value={3}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    3
                                                </label>
                                                <label
                                                    value={4}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    4
                                                </label>
                                                <label
                                                    value={5}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5
                                                </label>
                                                <label
                                                    value={6}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5+{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------- T A G S ----------------------*/}
                                    {/*--------------------- R E F E R E C E ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                                            <input
                                                className="px-0 fs-5 fw-bold"
                                                type="text"
                                                name="ref"
                                                placeholder="#ID"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <button
                                            id="createSearchData"
                                            className="bg-pt-dark-red createSearchData"
                                            type="button"
                                            style={{ padding: "12px 0" }}
                                        >
                                            <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                                SEARCH
                                            </span>
                                            <img
                                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                                alt="search arrow"
                                                className="contact-arrow col-auto pe-md-0 ps-0"
                                                width={91}
                                                height={150}
                                                loading="lazy"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 2 */}
                <div className="tab-pane home-tab fade" id="tab-2">
                    <div className="d-block d-lg-flex flex-column align-items-center">
                        <div className="card container-pt bg-transparent border-0">
                            <img
                                className="of-cover tab-background d-md-none d-block"
                                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-2.jpg"
                            />
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-1"
                                        type="button"
                                        aria-controls="tab-1"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                                            browse
                                        </span>
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-none d-inline">
                                            ALL
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0 active"
                                        data-target="#tab-2"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            Istanbul
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-3"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bodrum
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-4"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            antalya
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-5"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bursa
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-6"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            fethiye
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div
                                className="w-100 bg-pt-off-white p-4 showRefId"
                                id="search-filter"
                            >
                                <a
                                    href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul"
                                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                                >
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                    </div>
                                    <div className="col text-center">
                                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                                            search all istanbul
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow_red.svg"
                                            width={10}
                                            height="32.5"
                                            loading="lazy"
                                            alt="browse arrow"
                                            style={{ transform: "unset" }}
                                        />
                                    </div>
                                </a>
                                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                                    <a
                                        href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul"
                                        className="text-pt-dark-red fs-6"
                                    >
                                        <em className="text-uppercase">
                                            Click to browse all listings within istanbul
                                        </em>
                                        <em className="fa fa-arrow-right ms-2" />
                                    </a>
                                </p>
                                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                                    <span className="text-pt-dark-red fs-6">
                                        <em className="text-uppercase">
                                            or filter istanbul properties below
                                        </em>
                                        <em className="fa fa-arrow-down ms-2" />
                                    </span>
                                </p>
                                <div className="row pb-3 responsive-links">
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/6901-unmissable-investment-opportunity-historic-istanbul-centre"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Little Bosphorus by Rams Golden Horn Apartments</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul/apartment?bedroom=2"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>2 Bedroom Apartments for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul/apartment?priceRange=0.00:200000.00"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Apartments in Istanbul Under $200,000</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul/apartment?bedroom=3"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>3 Bedroom Apartments for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/istanbul/villa?priceRange=0.00:750000.00"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Villas in Istanbul Under $750,000</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/search?keyword=Sea+view+properties+in+Istanbul"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Sea View Properties in Istanbul</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="row" id="search">
                                    {/*----------------- L O C A T I O N ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input search-location-input originValue"
                                            linktype="location"
                                        >
                                            {/* Desktop Dropdown */}
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown area-dropdown">
                                                    <h4>Area</h4>
                                                    <ul>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Atasehir"
                                                        >
                                                            {" "}
                                                            Atasehir
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Atasehir"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Avcilar"
                                                        >
                                                            {" "}
                                                            Avcilar
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Avcilar"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bagcilar"
                                                        >
                                                            {" "}
                                                            Bagcilar
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bagcilar"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bakirkoy"
                                                        >
                                                            {" "}
                                                            Bakirkoy
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bakirkoy"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Basaksehir"
                                                        >
                                                            {" "}
                                                            Basaksehir
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Basaksehir"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bahcesehir"
                                                        >
                                                            {" "}
                                                            Bahcesehir
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bahcesehir"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Besiktas"
                                                        >
                                                            {" "}
                                                            Besiktas
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Besiktas"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Beykoz"
                                                        >
                                                            {" "}
                                                            Beykoz
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Beykoz"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Beylikduzu"
                                                        >
                                                            {" "}
                                                            Beylikduzu
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Beylikduzu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Beyoglu"
                                                        >
                                                            {" "}
                                                            Beyoglu
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Beyoglu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Buyukcekmece"
                                                        >
                                                            {" "}
                                                            Buyukcekmece
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Buyukcekmece"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Catalca"
                                                        >
                                                            {" "}
                                                            Catalca
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Catalca"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Cekmekoy"
                                                        >
                                                            {" "}
                                                            Cekmekoy
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Cekmekoy"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Eminonu"
                                                        >
                                                            {" "}
                                                            Eminonu
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Eminonu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Esenler"
                                                        >
                                                            {" "}
                                                            Esenler
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Esenler"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Esenyurt"
                                                        >
                                                            {" "}
                                                            Esenyurt
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Esenyurt"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container bold" value="Eyup">
                                                            {" "}
                                                            Eyup
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Eyup"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Fatih"
                                                        >
                                                            {" "}
                                                            Fatih
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Fatih"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Gaziosmanpasa"
                                                        >
                                                            {" "}
                                                            Gaziosmanpasa
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Gaziosmanpasa"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Gungoren"
                                                        >
                                                            {" "}
                                                            Gungoren
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Gungoren"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kadikoy"
                                                        >
                                                            {" "}
                                                            Kadikoy
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kadikoy"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kagithane"
                                                        >
                                                            {" "}
                                                            Kagithane
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kagithane"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kartal"
                                                        >
                                                            {" "}
                                                            Kartal
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kartal"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kucukcekmece"
                                                        >
                                                            {" "}
                                                            Kucukcekmece
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kucukcekmece"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Maltepe"
                                                        >
                                                            {" "}
                                                            Maltepe
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Maltepe"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Pendik"
                                                        >
                                                            {" "}
                                                            Pendik
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Pendik"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Sariyer"
                                                        >
                                                            {" "}
                                                            Sariyer
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sariyer"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Sancaktepe"
                                                        >
                                                            {" "}
                                                            Sancaktepe
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sancaktepe"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Silivri"
                                                        >
                                                            {" "}
                                                            Silivri
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Silivri"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Sultanbeyli"
                                                        >
                                                            {" "}
                                                            Sultanbeyli
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sultanbeyli"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Sultangazi"
                                                        >
                                                            {" "}
                                                            Sultangazi
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sultangazi"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container bold" value="Sile">
                                                            {" "}
                                                            Sile
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sile"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Sisli"
                                                        >
                                                            {" "}
                                                            Sisli
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sisli"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Tuzla Istanbul"
                                                        >
                                                            {" "}
                                                            Tuzla Istanbul
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Tuzla Istanbul"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Umraniye"
                                                        >
                                                            {" "}
                                                            Umraniye
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Umraniye"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Uskudar"
                                                        >
                                                            {" "}
                                                            Uskudar
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Uskudar"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Zeytinburnu"
                                                        >
                                                            {" "}
                                                            Zeytinburnu
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Zeytinburnu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Arnavutkoy"
                                                        >
                                                            {" "}
                                                            Arnavutkoy
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Arnavutkoy"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bayrampasa"
                                                        >
                                                            {" "}
                                                            Bayrampasa
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bayrampasa"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bahcelievler"
                                                        >
                                                            {" "}
                                                            Bahcelievler
                                                            <input
                                                                defaultValue="istanbul"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bahcelievler"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input
                                                        type="hidden"
                                                        name="selected_area_slug"
                                                        className="checkbox-filter"
                                                        id="selected_area_slug"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="city_slug"
                                                        defaultValue="istanbul"
                                                    />
                                                </div>
                                            </div>
                                            {/* Mobile Span */}
                                            <span
                                                className="search-filter-input-title search-tab-input-title browse-text fs-5 fw-bold lh-0 px-0"
                                                id="istanbul_default_area_wrapper"
                                            >
                                                Area
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            <span
                                                className="search-filter-input-title search-tab-input-title text-center fs-5 fw-bold lh-0 px-0 d-none"
                                                id="istanbul_selected_area_wrapper"
                                            >
                                                <span className="small">Area</span>
                                                <br />
                                                <span id="istanbul_selected_area">Gamal</span>
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            {/* Mobile Dropdown */}
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Atasehir
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Atasehir"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Avcilar
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Avcilar"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bagcilar
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bagcilar"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bakirkoy
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bakirkoy"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Basaksehir
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Basaksehir"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bahcesehir
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bahcesehir"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Besiktas
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Besiktas"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Beykoz
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Beykoz"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Beylikduzu
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Beylikduzu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Beyoglu
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Beyoglu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Buyukcekmece
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Buyukcekmece"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Catalca
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Catalca"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Cekmekoy
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Cekmekoy"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Eminonu
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Eminonu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Esenler
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Esenler"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Esenyurt
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Esenyurt"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Eyup
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Eyup"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Fatih
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Fatih"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Gaziosmanpasa
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Gaziosmanpasa"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Gungoren
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Gungoren"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kadikoy
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kadikoy"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kagithane
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kagithane"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kartal
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kartal"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kucukcekmece
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kucukcekmece"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Maltepe
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Maltepe"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Pendik
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Pendik"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sariyer
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sariyer"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sancaktepe
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sancaktepe"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Silivri
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Silivri"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sultanbeyli
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sultanbeyli"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sultangazi
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sultangazi"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sile
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sile"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sisli
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sisli"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Tuzla Istanbul
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Tuzla Istanbul"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Umraniye
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Umraniye"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Uskudar
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Uskudar"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Zeytinburnu
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Zeytinburnu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Arnavutkoy
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Arnavutkoy"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bayrampasa
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bayrampasa"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bahcelievler
                                                    <input
                                                        defaultValue="istanbul"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bahcelievler"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <input
                                                    type="hidden"
                                                    name="selected_area_slug"
                                                    className="checkbox-filter"
                                                    id="selected_area_slug"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="city_slug"
                                                    defaultValue="istanbul"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- T Y P E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input originValue"
                                            linktype="type"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4>Type</h4>
                                                    <ul>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Apartment
                                                            <input
                                                                defaultValue="apartment"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Bungalow
                                                            <input
                                                                defaultValue="bungalow"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Commercial
                                                            <input
                                                                defaultValue="commercial"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Hotel for sale
                                                            <input
                                                                defaultValue="hotel-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Land for sale
                                                            <input
                                                                defaultValue="land-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Penthouse
                                                            <input
                                                                defaultValue="penthouse"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Villa
                                                            <input
                                                                defaultValue="villa"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="type_slug" id="#type_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Type <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown  label">
                                                <label
                                                    value="apartment"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Apartment
                                                </label>
                                                <label
                                                    value="bungalow"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Bungalow
                                                </label>
                                                <label
                                                    value="commercial"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Commercial
                                                </label>
                                                <label
                                                    value="hotel-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Hotel for sale
                                                </label>
                                                <label
                                                    value="land-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Land for sale
                                                </label>
                                                <label
                                                    value="penthouse"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Penthouse
                                                </label>
                                                <label
                                                    value="villa"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Villa
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- P R I C E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                                            id="price-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Price
                                                <div className="priceValues">
                                                    <i className="search-filter-input-value minPriceValue" />{" "}
                                                    -{" "}
                                                    <i className="search-filter-input-value maxPriceValue" />
                                                </div>
                                                <input type="hidden" name="priceRange" id="priceRange" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div
                                                className="filter-type-dropdown-wrap price"
                                                style={{ display: "block !important" }}
                                            >
                                                <div className="filter-type-dropdown">
                                                    <h4> Price range</h4>
                                                    <div>
                                                        <div className="minPrice">
                                                            <input
                                                                className="minPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Min Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    0
                                                                    <input
                                                                        defaultValue={0.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                        <small> - </small>
                                                        <div className="maxPrice">
                                                            <input
                                                                className="maxPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Max Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k+
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-2-max-prices"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide minPrice"
                                            linktype="min_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="minPrice"
                                            >
                                                Min Price <i className="search-filter-input-value"></i>
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown ">
                                                <label
                                                    value={0.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={50000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $10,000k
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide maxPrice"
                                            linktype="max_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="maxPrice"
                                            >
                                                Max Price <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown">
                                                <label
                                                    value={50000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------------- B E D R O O M S ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input bedrooms"
                                            linktype="bedrooms"
                                            id="bedroom-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                {" "}
                                                Beds
                                                <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4> Bedrooms </h4>
                                                    <ul>
                                                        <label className="checkbox-container" value={0}>
                                                            {" "}
                                                            0
                                                            <input
                                                                defaultValue={0}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={1}>
                                                            {" "}
                                                            1
                                                            <input
                                                                defaultValue={1}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={2}>
                                                            {" "}
                                                            2
                                                            <input
                                                                defaultValue={2}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={3}>
                                                            {" "}
                                                            3
                                                            <input
                                                                defaultValue={3}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={4}>
                                                            {" "}
                                                            4
                                                            <input
                                                                defaultValue={4}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={5}>
                                                            {" "}
                                                            5
                                                            <input
                                                                defaultValue={5}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={6}>
                                                            {" "}
                                                            5+
                                                            <input
                                                                defaultValue={6}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="bedrooms" id="#bedrooms" />
                                                </div>
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value={0}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={1}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    1
                                                </label>
                                                <label
                                                    value={2}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    2
                                                </label>
                                                <label
                                                    value={3}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    3
                                                </label>
                                                <label
                                                    value={4}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    4
                                                </label>
                                                <label
                                                    value={5}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5
                                                </label>
                                                <label
                                                    value={6}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5+{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------- T A G S ----------------------*/}
                                    {/*--------------------- R E F E R E C E ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                                            <input
                                                className="px-0 fs-5 fw-bold"
                                                type="text"
                                                name="ref"
                                                placeholder="#ID"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <button
                                            id="createSearchData"
                                            className="bg-pt-dark-red createSearchData"
                                            type="button"
                                            style={{ padding: "12px 0" }}
                                        >
                                            <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                                SEARCH
                                            </span>
                                            <img
                                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                                alt="search arrow"
                                                className="contact-arrow col-auto pe-md-0 ps-0"
                                                width={91}
                                                height={150}
                                                loading="lazy"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 3 */}
                <div className="tab-pane home-tab fade" id="tab-3">
                    <div className="d-block d-lg-flex flex-column align-items-center">
                        <div className="card container-pt bg-transparent border-0">
                            <img
                                className="of-cover tab-background d-md-none d-block"
                                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-3.jpg"
                            />
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-1"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                                            browse
                                        </span>
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-none d-inline">
                                            ALL
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-2"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            Istanbul
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0 active"
                                        data-target="#tab-3"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bodrum
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-4"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            antalya
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-5"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bursa
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-6"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            fethiye
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div
                                className="w-100 bg-pt-off-white p-4 showRefId"
                                id="search-filter"
                            >
                                <a
                                    href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum"
                                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                                >
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={32}
                                            height={32}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                    </div>
                                    <div className="col text-center">
                                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                                            search all bodrum
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow_red.svg"
                                            width={10}
                                            height="32.5"
                                            loading="lazy"
                                            alt="browse arrow"
                                            style={{ transform: "unset" }}
                                        />
                                    </div>
                                </a>
                                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                                    <a
                                        href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum"
                                        className="text-pt-dark-red fs-6"
                                    >
                                        <em className="text-uppercase">
                                            Click to browse all listings within bodrum
                                        </em>
                                        <em className="fa fa-arrow-right ms-2" />
                                    </a>
                                </p>
                                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                                    <span className="text-pt-dark-red fs-6">
                                        <em className="text-uppercase">
                                            or filter bodrum properties below
                                        </em>
                                        <em className="fa fa-arrow-down ms-2" />
                                    </span>
                                </p>
                                <div className="row pb-3 responsive-links">
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum/villa?priceRange=0.00:750000.00"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Villas in Bodrum Under $750,000</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/beachfront/turkey/bodrum"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Beachfront Homes in Bodrum</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/luxury/turkey/bodrum/villa"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Luxury Villas for Sale in Bodrum</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum/yalikavak/villa"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Villas in Yalikavak for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum/villa?bedroom=4"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>4 Bedroom Villas in Bodrum</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bodrum/gumusluk/villa"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Villas in Gumusluk for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="row" id="search">
                                    {/*----------------- L O C A T I O N ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input search-location-input originValue"
                                            linktype="location"
                                        >
                                            {/* Desktop Dropdown */}
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown area-dropdown">
                                                    <h4>Area</h4>
                                                    <ul>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Yalikavak"
                                                        >
                                                            {" "}
                                                            Yalikavak
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Yalikavak"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Gumusluk"
                                                        >
                                                            {" "}
                                                            Gumusluk
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Gumusluk"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Turkbuku"
                                                        >
                                                            {" "}
                                                            Turkbuku
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Turkbuku"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Torba"
                                                        >
                                                            {" "}
                                                            Torba
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Torba"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bitez"
                                                        >
                                                            {" "}
                                                            Bitez
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bitez"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Gundogan"
                                                        >
                                                            {" "}
                                                            Gundogan
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Gundogan"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Ortakent"
                                                        >
                                                            {" "}
                                                            Ortakent
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Ortakent"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bodrum Town"
                                                        >
                                                            {" "}
                                                            Bodrum Town
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bodrum Town"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Konacik"
                                                        >
                                                            {" "}
                                                            Konacik
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Konacik"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Turgutreis"
                                                        >
                                                            {" "}
                                                            Turgutreis
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Turgutreis"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Gumbet"
                                                        >
                                                            {" "}
                                                            Gumbet
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Gumbet"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kadikalesi"
                                                        >
                                                            {" "}
                                                            Kadikalesi
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kadikalesi"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Gulluk"
                                                        >
                                                            {" "}
                                                            Gulluk
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Gulluk"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Yaliciftlik"
                                                        >
                                                            {" "}
                                                            Yaliciftlik
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Yaliciftlik"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Tuzla"
                                                        >
                                                            {" "}
                                                            Tuzla
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Tuzla"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Guvercinlik"
                                                        >
                                                            {" "}
                                                            Guvercinlik
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Guvercinlik"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Adabuku"
                                                        >
                                                            {" "}
                                                            Adabuku
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Adabuku"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Bozbuk"
                                                        >
                                                            {" "}
                                                            Bozbuk
                                                            <input
                                                                defaultValue="bodrum"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Bozbuk"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input
                                                        type="hidden"
                                                        name="selected_area_slug"
                                                        className="checkbox-filter"
                                                        id="selected_area_slug"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="city_slug"
                                                        defaultValue="bodrum"
                                                    />
                                                </div>
                                            </div>
                                            {/* Mobile Span */}
                                            <span
                                                className="search-filter-input-title search-tab-input-title browse-text fs-5 fw-bold lh-0 px-0"
                                                id="bodrum_default_area_wrapper"
                                            >
                                                Area <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            <span
                                                className="search-filter-input-title search-tab-input-title text-center fs-5 fw-bold lh-0 px-0 d-none"
                                                id="bodrum_selected_area_wrapper"
                                            >
                                                <span className="small">Area</span>
                                                <br />
                                                <span id="bodrum_selected_area" />
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            {/* Mobile Dropdown */}
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Yalikavak
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Yalikavak"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Gumusluk
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Gumusluk"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Turkbuku
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Turkbuku"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Torba
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Torba"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bitez
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bitez"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Gundogan
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Gundogan"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Ortakent
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Ortakent"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bodrum Town
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bodrum Town"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Konacik
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Konacik"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Turgutreis
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Turgutreis"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Gumbet
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Gumbet"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kadikalesi
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kadikalesi"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Gulluk
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Gulluk"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Yaliciftlik
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Yaliciftlik"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Tuzla
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Tuzla"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Guvercinlik
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Guvercinlik"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Adabuku
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Adabuku"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Bozbuk
                                                    <input
                                                        defaultValue="bodrum"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Bozbuk"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <input
                                                    type="hidden"
                                                    name="selected_area_slug"
                                                    className="checkbox-filter"
                                                    id="selected_area_slug"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="city_slug"
                                                    defaultValue="bodrum"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- T Y P E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input originValue"
                                            linktype="type"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4>Type</h4>
                                                    <ul>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Apartment
                                                            <input
                                                                defaultValue="apartment"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Bungalow
                                                            <input
                                                                defaultValue="bungalow"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Commercial
                                                            <input
                                                                defaultValue="commercial"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Hotel for sale
                                                            <input
                                                                defaultValue="hotel-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Land for sale
                                                            <input
                                                                defaultValue="land-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Penthouse
                                                            <input
                                                                defaultValue="penthouse"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Villa
                                                            <input
                                                                defaultValue="villa"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="type_slug" id="#type_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Type <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown  label">
                                                <label
                                                    value="apartment"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Apartment
                                                </label>
                                                <label
                                                    value="bungalow"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Bungalow
                                                </label>
                                                <label
                                                    value="commercial"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Commercial
                                                </label>
                                                <label
                                                    value="hotel-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Hotel for sale
                                                </label>
                                                <label
                                                    value="land-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Land for sale
                                                </label>
                                                <label
                                                    value="penthouse"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Penthouse
                                                </label>
                                                <label
                                                    value="villa"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Villa
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- P R I C E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                                            id="price-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Price
                                                <div className="priceValues">
                                                    <i className="search-filter-input-value minPriceValue" />{" "}
                                                    -{" "}
                                                    <i className="search-filter-input-value maxPriceValue" />
                                                </div>
                                                <input type="hidden" name="priceRange" id="priceRange" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div
                                                className="filter-type-dropdown-wrap price"
                                                style={{ display: "block !important" }}
                                            >
                                                <div className="filter-type-dropdown">
                                                    <h4> Price range</h4>
                                                    <div>
                                                        <div className="minPrice">
                                                            <input
                                                                className="minPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Min Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    0
                                                                    <input
                                                                        defaultValue={0.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                        <small> - </small>
                                                        <div className="maxPrice">
                                                            <input
                                                                className="maxPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Max Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k+
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-3-max-prices"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide minPrice"
                                            linktype="min_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="minPrice"
                                            >
                                                Min Price <i className="search-filter-input-value"></i>
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown ">
                                                <label
                                                    value={0.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={50000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $10,000k
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide maxPrice"
                                            linktype="max_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="maxPrice"
                                            >
                                                Max Price <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown">
                                                <label
                                                    value={50000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------------- B E D R O O M S ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input bedrooms"
                                            linktype="bedrooms"
                                            id="bedroom-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                {" "}
                                                Beds
                                                <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4> Bedrooms </h4>
                                                    <ul>
                                                        <label className="checkbox-container" value={0}>
                                                            {" "}
                                                            0
                                                            <input
                                                                defaultValue={0}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={1}>
                                                            {" "}
                                                            1
                                                            <input
                                                                defaultValue={1}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={2}>
                                                            {" "}
                                                            2
                                                            <input
                                                                defaultValue={2}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={3}>
                                                            {" "}
                                                            3
                                                            <input
                                                                defaultValue={3}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={4}>
                                                            {" "}
                                                            4
                                                            <input
                                                                defaultValue={4}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={5}>
                                                            {" "}
                                                            5
                                                            <input
                                                                defaultValue={5}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={6}>
                                                            {" "}
                                                            5+
                                                            <input
                                                                defaultValue={6}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="bedrooms" id="#bedrooms" />
                                                </div>
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value={0}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={1}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    1
                                                </label>
                                                <label
                                                    value={2}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    2
                                                </label>
                                                <label
                                                    value={3}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    3
                                                </label>
                                                <label
                                                    value={4}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    4
                                                </label>
                                                <label
                                                    value={5}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5
                                                </label>
                                                <label
                                                    value={6}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5+{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------- T A G S ----------------------*/}
                                    {/*--------------------- R E F E R E C E ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                                            <input
                                                className="px-0 fs-5 fw-bold"
                                                type="text"
                                                name="ref"
                                                placeholder="#ID"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <button
                                            id="createSearchData"
                                            className="bg-pt-dark-red createSearchData"
                                            type="button"
                                            style={{ padding: "12px 0" }}
                                        >
                                            <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                                SEARCH
                                            </span>
                                            <img
                                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                                alt="search arrow"
                                                className="contact-arrow col-auto pe-md-0 ps-0"
                                                width={91}
                                                height={150}
                                                loading="lazy"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 4 */}
                <div className="tab-pane home-tab fade" id="tab-4">
                    <div className="d-block d-lg-flex flex-column align-items-center">
                        <div className="card container-pt bg-transparent border-0">
                            <img
                                className="of-cover tab-background d-md-none d-block"
                                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-4.jpg"
                            />
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-1"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                                            browse
                                        </span>
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-none d-inline">
                                            ALL
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-2"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            Istanbul
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-3"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bodrum
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0 active"
                                        data-target="#tab-4"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            antalya
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-5"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bursa
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-6"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            fethiye
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div
                                className="w-100 bg-pt-off-white p-4 showRefId"
                                id="search-filter"
                            >
                                <a
                                    href="https://www.propertyturkey.com/en/real_estate/turkey/antalya"
                                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                                >
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={32}
                                            height={32}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                    </div>
                                    <div className="col text-center">
                                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                                            search all antalya
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow_red.svg"
                                            width={10}
                                            height="32.5"
                                            loading="lazy"
                                            alt="browse arrow"
                                            style={{ transform: "unset" }}
                                        />
                                    </div>
                                </a>
                                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                                    <a
                                        href="https://www.propertyturkey.com/en/real_estate/turkey/antalya"
                                        className="text-pt-dark-red fs-6"
                                    >
                                        <em className="text-uppercase">
                                            Click to browse all listings within antalya
                                        </em>
                                        <em className="fa fa-arrow-right ms-2" />
                                    </a>
                                </p>
                                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                                    <span className="text-pt-dark-red fs-6">
                                        <em className="text-uppercase">
                                            or filter antalya properties below
                                        </em>
                                        <em className="fa fa-arrow-down ms-2" />
                                    </span>
                                </p>
                                <div className="row pb-3 responsive-links">
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/antalya/apartment?bedroom=2"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>2 Bedroom Apartments for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/antalya/apartment?priceRange=0.00:150000.00"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Apartments in Antalya Under $150,000</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/antalya/villa?bedroom=4"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>4 Bedroom Villas for Sale in Antalya</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/beachfront/turkey/antalya"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Beachfront Homes in Antalya</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/antalya/konyaalti"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Property in Konyaalti for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/antalya/lara"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Property in Lara for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="row" id="search">
                                    {/*----------------- L O C A T I O N ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input search-location-input originValue"
                                            linktype="location"
                                        >
                                            {/* Desktop Dropdown */}
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown area-dropdown">
                                                    <h4>Area</h4>
                                                    <ul>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Konyaalti"
                                                        >
                                                            {" "}
                                                            Konyaalti
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Konyaalti"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container bold" value="Lara">
                                                            {" "}
                                                            Lara
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Lara"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kundu"
                                                        >
                                                            {" "}
                                                            Kundu
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kundu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kaleici"
                                                        >
                                                            {" "}
                                                            Kaleici
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kaleici"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Antalya Centre"
                                                        >
                                                            {" "}
                                                            Antalya Centre
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Antalya Centre"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kepez"
                                                        >
                                                            {" "}
                                                            Kepez
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kepez"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Dosemealti"
                                                        >
                                                            {" "}
                                                            Dosemealti
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Dosemealti"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container bold" value="Aksu">
                                                            {" "}
                                                            Aksu
                                                            <input
                                                                defaultValue="antalya"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Aksu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input
                                                        type="hidden"
                                                        name="selected_area_slug"
                                                        className="checkbox-filter"
                                                        id="selected_area_slug"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="city_slug"
                                                        defaultValue="antalya"
                                                    />
                                                </div>
                                            </div>
                                            {/* Mobile Span */}
                                            <span
                                                className="search-filter-input-title search-tab-input-title browse-text fs-5 fw-bold lh-0 px-0"
                                                id="antalya_default_area_wrapper"
                                            >
                                                Area <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            <span
                                                className="search-filter-input-title search-tab-input-title text-center fs-5 fw-bold lh-0 px-0 d-none"
                                                id="antalya_selected_area_wrapper"
                                            >
                                                <span className="small">Area</span>
                                                <br />
                                                <span id="antalya_selected_area" />
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            {/* Mobile Dropdown */}
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Konyaalti
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Konyaalti"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Lara
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Lara"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kundu
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kundu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kaleici
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kaleici"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Antalya Centre
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Antalya Centre"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kepez
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kepez"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Dosemealti
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Dosemealti"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Aksu
                                                    <input
                                                        defaultValue="antalya"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Aksu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <input
                                                    type="hidden"
                                                    name="selected_area_slug"
                                                    className="checkbox-filter"
                                                    id="selected_area_slug"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="city_slug"
                                                    defaultValue="antalya"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- T Y P E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input originValue"
                                            linktype="type"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4>Type</h4>
                                                    <ul>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Apartment
                                                            <input
                                                                defaultValue="apartment"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Bungalow
                                                            <input
                                                                defaultValue="bungalow"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Commercial
                                                            <input
                                                                defaultValue="commercial"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Hotel for sale
                                                            <input
                                                                defaultValue="hotel-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Land for sale
                                                            <input
                                                                defaultValue="land-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Penthouse
                                                            <input
                                                                defaultValue="penthouse"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Villa
                                                            <input
                                                                defaultValue="villa"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="type_slug" id="#type_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Type <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown  label">
                                                <label
                                                    value="apartment"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Apartment
                                                </label>
                                                <label
                                                    value="bungalow"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Bungalow
                                                </label>
                                                <label
                                                    value="commercial"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Commercial
                                                </label>
                                                <label
                                                    value="hotel-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Hotel for sale
                                                </label>
                                                <label
                                                    value="land-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Land for sale
                                                </label>
                                                <label
                                                    value="penthouse"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Penthouse
                                                </label>
                                                <label
                                                    value="villa"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Villa
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- P R I C E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                                            id="price-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Price
                                                <div className="priceValues">
                                                    <i className="search-filter-input-value minPriceValue" />{" "}
                                                    -{" "}
                                                    <i className="search-filter-input-value maxPriceValue" />
                                                </div>
                                                <input type="hidden" name="priceRange" id="priceRange" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div
                                                className="filter-type-dropdown-wrap price"
                                                style={{ display: "block !important" }}
                                            >
                                                <div className="filter-type-dropdown">
                                                    <h4> Price range</h4>
                                                    <div>
                                                        <div className="minPrice">
                                                            <input
                                                                className="minPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Min Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    0
                                                                    <input
                                                                        defaultValue={0.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                        <small> - </small>
                                                        <div className="maxPrice">
                                                            <input
                                                                className="maxPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Max Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k+
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-4-max-prices"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide minPrice"
                                            linktype="min_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="minPrice"
                                            >
                                                Min Price <i className="search-filter-input-value"></i>
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown ">
                                                <label
                                                    value={0.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={50000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $10,000k
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide maxPrice"
                                            linktype="max_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="maxPrice"
                                            >
                                                Max Price <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown">
                                                <label
                                                    value={50000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------------- B E D R O O M S ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input bedrooms"
                                            linktype="bedrooms"
                                            id="bedroom-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                {" "}
                                                Beds
                                                <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4> Bedrooms </h4>
                                                    <ul>
                                                        <label className="checkbox-container" value={0}>
                                                            {" "}
                                                            0
                                                            <input
                                                                defaultValue={0}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={1}>
                                                            {" "}
                                                            1
                                                            <input
                                                                defaultValue={1}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={2}>
                                                            {" "}
                                                            2
                                                            <input
                                                                defaultValue={2}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={3}>
                                                            {" "}
                                                            3
                                                            <input
                                                                defaultValue={3}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={4}>
                                                            {" "}
                                                            4
                                                            <input
                                                                defaultValue={4}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={5}>
                                                            {" "}
                                                            5
                                                            <input
                                                                defaultValue={5}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={6}>
                                                            {" "}
                                                            5+
                                                            <input
                                                                defaultValue={6}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="bedrooms" id="#bedrooms" />
                                                </div>
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value={0}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={1}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    1
                                                </label>
                                                <label
                                                    value={2}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    2
                                                </label>
                                                <label
                                                    value={3}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    3
                                                </label>
                                                <label
                                                    value={4}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    4
                                                </label>
                                                <label
                                                    value={5}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5
                                                </label>
                                                <label
                                                    value={6}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5+{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------- T A G S ----------------------*/}
                                    {/*--------------------- R E F E R E C E ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                                            <input
                                                className="px-0 fs-5 fw-bold"
                                                type="text"
                                                name="ref"
                                                placeholder="#ID"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <button
                                            id="createSearchData"
                                            className="bg-pt-dark-red createSearchData"
                                            type="button"
                                            style={{ padding: "12px 0" }}
                                        >
                                            <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                                SEARCH
                                            </span>
                                            <img
                                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                                alt="search arrow"
                                                className="contact-arrow col-auto pe-md-0 ps-0"
                                                width={91}
                                                height={150}
                                                loading="lazy"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 5 */}
                <div className="tab-pane home-tab fade" id="tab-5">
                    <div className="d-block d-lg-flex flex-column align-items-center">
                        <div className="card container-pt bg-transparent border-0">
                            <img
                                className="of-cover tab-background d-md-none d-block"
                                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-5.jpg"
                            />
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-1"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                                            browse
                                        </span>
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-none d-inline">
                                            ALL
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-2"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            Istanbul
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-3"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bodrum
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-4"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            antalya
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0 active"
                                        data-target="#tab-5"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bursa
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-6"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            fethiye
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div
                                className="w-100 bg-pt-off-white p-4 showRefId"
                                id="search-filter"
                            >
                                <a
                                    href="https://www.propertyturkey.com/en/real_estate/turkey/bursa"
                                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                                >
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={32}
                                            height={32}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                    </div>
                                    <div className="col text-center">
                                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                                            search all bursa
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow_red.svg"
                                            width={10}
                                            height="32.5"
                                            loading="lazy"
                                            alt="browse arrow"
                                            style={{ transform: "unset" }}
                                        />
                                    </div>
                                </a>
                                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                                    <a
                                        href="https://www.propertyturkey.com/en/real_estate/turkey/bursa"
                                        className="text-pt-dark-red fs-6"
                                    >
                                        <em className="text-uppercase">
                                            Click to browse all listings within bursa
                                        </em>
                                        <em className="fa fa-arrow-right ms-2" />
                                    </a>
                                </p>
                                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                                    <span className="text-pt-dark-red fs-6">
                                        <em className="text-uppercase">
                                            or filter bursa properties below
                                        </em>
                                        <em className="fa fa-arrow-down ms-2" />
                                    </span>
                                </p>
                                <div className="row pb-3 responsive-links">
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bursa?bedroom=3"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>3 Bedroom Properties for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bursa?bedroom=2"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>2 Bedroom Apartments for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bursa/villa?bedroom=3"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>3 Bedroom Villas in Bursa for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/bursa?bedroom=4"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>4 Bedroom Properties in Bursa</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="row" id="search">
                                    {/*----------------- L O C A T I O N ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input search-location-input originValue"
                                            linktype="location"
                                        >
                                            {/* Desktop Dropdown */}
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown area-dropdown">
                                                    <h4>Area</h4>
                                                    <ul></ul>
                                                    <input
                                                        type="hidden"
                                                        name="selected_area_slug"
                                                        className="checkbox-filter"
                                                        id="selected_area_slug"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="city_slug"
                                                        defaultValue="bursa"
                                                    />
                                                </div>
                                            </div>
                                            {/* Mobile Span */}
                                            <span
                                                className="search-filter-input-title search-tab-input-title browse-text fs-5 fw-bold lh-0 px-0"
                                                id="bursa_default_area_wrapper"
                                            >
                                                Area <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            <span
                                                className="search-filter-input-title search-tab-input-title text-center fs-5 fw-bold lh-0 px-0 d-none"
                                                id="bursa_selected_area_wrapper"
                                            >
                                                <span className="small">Area</span>
                                                <br />
                                                <span id="bursa_selected_area" />
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            {/* Mobile Dropdown */}
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <input
                                                    type="hidden"
                                                    name="selected_area_slug"
                                                    className="checkbox-filter"
                                                    id="selected_area_slug"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="city_slug"
                                                    defaultValue="bursa"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- T Y P E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input originValue"
                                            linktype="type"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4>Type</h4>
                                                    <ul>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Apartment
                                                            <input
                                                                defaultValue="apartment"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Bungalow
                                                            <input
                                                                defaultValue="bungalow"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Commercial
                                                            <input
                                                                defaultValue="commercial"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Hotel for sale
                                                            <input
                                                                defaultValue="hotel-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Land for sale
                                                            <input
                                                                defaultValue="land-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Penthouse
                                                            <input
                                                                defaultValue="penthouse"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Villa
                                                            <input
                                                                defaultValue="villa"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="type_slug" id="#type_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Type <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown  label">
                                                <label
                                                    value="apartment"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Apartment
                                                </label>
                                                <label
                                                    value="bungalow"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Bungalow
                                                </label>
                                                <label
                                                    value="commercial"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Commercial
                                                </label>
                                                <label
                                                    value="hotel-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Hotel for sale
                                                </label>
                                                <label
                                                    value="land-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Land for sale
                                                </label>
                                                <label
                                                    value="penthouse"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Penthouse
                                                </label>
                                                <label
                                                    value="villa"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Villa
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- P R I C E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                                            id="price-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Price
                                                <div className="priceValues">
                                                    <i className="search-filter-input-value minPriceValue" />{" "}
                                                    -{" "}
                                                    <i className="search-filter-input-value maxPriceValue" />
                                                </div>
                                                <input type="hidden" name="priceRange" id="priceRange" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div
                                                className="filter-type-dropdown-wrap price"
                                                style={{ display: "block !important" }}
                                            >
                                                <div className="filter-type-dropdown">
                                                    <h4> Price range</h4>
                                                    <div>
                                                        <div className="minPrice">
                                                            <input
                                                                className="minPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Min Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    0
                                                                    <input
                                                                        defaultValue={0.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                        <small> - </small>
                                                        <div className="maxPrice">
                                                            <input
                                                                className="maxPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Max Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k+
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-5-max-prices"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide minPrice"
                                            linktype="min_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="minPrice"
                                            >
                                                Min Price <i className="search-filter-input-value"></i>
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown ">
                                                <label
                                                    value={0.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={50000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $10,000k
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide maxPrice"
                                            linktype="max_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="maxPrice"
                                            >
                                                Max Price <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown">
                                                <label
                                                    value={50000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------------- B E D R O O M S ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input bedrooms"
                                            linktype="bedrooms"
                                            id="bedroom-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                {" "}
                                                Beds
                                                <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4> Bedrooms </h4>
                                                    <ul>
                                                        <label className="checkbox-container" value={0}>
                                                            {" "}
                                                            0
                                                            <input
                                                                defaultValue={0}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={1}>
                                                            {" "}
                                                            1
                                                            <input
                                                                defaultValue={1}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={2}>
                                                            {" "}
                                                            2
                                                            <input
                                                                defaultValue={2}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={3}>
                                                            {" "}
                                                            3
                                                            <input
                                                                defaultValue={3}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={4}>
                                                            {" "}
                                                            4
                                                            <input
                                                                defaultValue={4}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={5}>
                                                            {" "}
                                                            5
                                                            <input
                                                                defaultValue={5}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={6}>
                                                            {" "}
                                                            5+
                                                            <input
                                                                defaultValue={6}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="bedrooms" id="#bedrooms" />
                                                </div>
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value={0}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={1}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    1
                                                </label>
                                                <label
                                                    value={2}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    2
                                                </label>
                                                <label
                                                    value={3}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    3
                                                </label>
                                                <label
                                                    value={4}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    4
                                                </label>
                                                <label
                                                    value={5}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5
                                                </label>
                                                <label
                                                    value={6}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5+{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------- T A G S ----------------------*/}
                                    {/*--------------------- R E F E R E C E ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                                            <input
                                                className="px-0 fs-5 fw-bold"
                                                type="text"
                                                name="ref"
                                                placeholder="#ID"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    {/*--------------------- Search Button ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <button
                                            id="createSearchData"
                                            className="bg-pt-dark-red createSearchData"
                                            type="button"
                                            style={{ padding: "12px 0" }}
                                        >
                                            <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                                SEARCH
                                            </span>
                                            <img
                                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                                className="contact-arrow col-auto pe-md-0 ps-0"
                                                alt="search arrow"
                                                width={91}
                                                height={150}
                                                loading="lazy"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Tab 6 */}
                <div className="tab-pane home-tab fade" id="tab-6">
                    <div className="d-block d-lg-flex flex-column align-items-center">
                        <div className="card container-pt bg-transparent border-0">
                            <img
                                className="of-cover tab-background d-md-none d-block"
                                src="https://www.propertyturkey.com/front/image/home/tab-backgrounds/bg-tab-6.jpg"
                            />
                            <ul className="nav nav-tabs justify-content-center">
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-1"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/browse_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="browse icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-inline d-none">
                                            browse
                                        </span>
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase d-md-none d-inline">
                                            ALL
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-2"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/istanbul_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="istanbul icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            Istanbul
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-3"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bodrum_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bodrum icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bodrum
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-4"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/antalya_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="antalya icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            antalya
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0"
                                        data-target="#tab-5"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/bursa_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="bursa icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            bursa
                                        </span>
                                    </button>
                                </li>
                                <li className="nav-item me-0">
                                    <button
                                        className="nav-link px-lg-4 px-2 rounded-0 active"
                                        data-target="#tab-6"
                                        type="button"
                                    >
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                        <span className="ps-md-3 ps-0 fs-5 fw-bold text-uppercase">
                                            fethiye
                                        </span>
                                    </button>
                                </li>
                            </ul>
                            <div
                                className="w-100 bg-pt-off-white p-4 showRefId"
                                id="search-filter"
                            >
                                <a
                                    href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye"
                                    className="d-md-none d-flex align-items-center mt-3 py-2 bg-pt-gray-2"
                                >
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/fethiye_icon.svg"
                                            width={32}
                                            height={32}
                                            loading="lazy"
                                            alt="fethiye icon"
                                        />
                                    </div>
                                    <div className="col text-center">
                                        <span className="fs-3 fw-bold text-uppercase text-pt-dark-red">
                                            search all fethiye
                                        </span>
                                    </div>
                                    <div className="col-auto">
                                        <img
                                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow_red.svg"
                                            width={10}
                                            height="32.5"
                                            loading="lazy"
                                            alt="browse arrow"
                                            style={{ transform: "unset" }}
                                        />
                                    </div>
                                </a>
                                <p className="text-pt-dark-red fs-6 fw-bold mt-md-0 mt-3 d-md-block d-none">
                                    <a
                                        href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye"
                                        className="text-pt-dark-red fs-6"
                                    >
                                        <em className="text-uppercase">
                                            Click to browse all listings within fethiye
                                        </em>
                                        <em className="fa fa-arrow-right ms-2" />
                                    </a>
                                </p>
                                <p className="text-pt-dark-red text-center fs-6 fw-bold mt-md-0 mt-3 d-md-none d-block">
                                    <span className="text-pt-dark-red fs-6">
                                        <em className="text-uppercase">
                                            or filter fethiye properties below
                                        </em>
                                        <em className="fa fa-arrow-down ms-2" />
                                    </span>
                                </p>
                                <div className="row pb-3 responsive-links">
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye?priceRange=0.00:300000.00"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Properties in Fethiye Under $300,000</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye/villa?bedroom=3"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>3 Bedroom Villas for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye/villa?bedroom=4"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>4 Bedroom Villas for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye/calis"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Properties in Calis for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye/ovacik"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Properties in Ovacik for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                    <div className="col-md-4 mb-1">
                                        <a
                                            href="https://www.propertyturkey.com/en/real_estate/turkey/fethiye/uzumlu"
                                            className="text-pt-dark-red fs-6"
                                        >
                                            <span>Properties in Uzumlu for Sale</span>
                                            <em className="fa fa-arrow-right ms-2" />
                                        </a>
                                    </div>
                                </div>
                                <div className="row" id="search">
                                    {/*----------------- L O C A T I O N ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input search-location-input originValue"
                                            linktype="location"
                                        >
                                            {/* Desktop Dropdown */}
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown area-dropdown">
                                                    <h4>Area</h4>
                                                    <ul>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Calis"
                                                        >
                                                            {" "}
                                                            Calis
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Calis"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Oludeniz"
                                                        >
                                                            {" "}
                                                            Oludeniz
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Oludeniz"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Ovacik"
                                                        >
                                                            {" "}
                                                            Ovacik
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Ovacik"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Hisaronu"
                                                        >
                                                            {" "}
                                                            Hisaronu
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Hisaronu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Uzumlu"
                                                        >
                                                            {" "}
                                                            Uzumlu
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Uzumlu"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Karagozler"
                                                        >
                                                            {" "}
                                                            Karagozler
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Karagozler"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Fethiye Town"
                                                        >
                                                            {" "}
                                                            Fethiye Town
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Fethiye Town"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Faralya"
                                                        >
                                                            {" "}
                                                            Faralya
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Faralya"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Kayakoy"
                                                        >
                                                            {" "}
                                                            Kayakoy
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Kayakoy"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Sovalye Island"
                                                        >
                                                            {" "}
                                                            Sovalye Island
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Sovalye Island"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label
                                                            className="checkbox-container bold"
                                                            value="Seydikemer"
                                                        >
                                                            {" "}
                                                            Seydikemer
                                                            <input
                                                                defaultValue="fethiye"
                                                                type="radio"
                                                                name="city_slug"
                                                                className="checkbox-filter"
                                                            />
                                                            <input
                                                                defaultValue="Seydikemer"
                                                                type="radio"
                                                                name="area_slug"
                                                                className="checkbox-filter"
                                                                id="area_slug"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input
                                                        type="hidden"
                                                        name="selected_area_slug"
                                                        className="checkbox-filter"
                                                        id="selected_area_slug"
                                                    />
                                                    <input
                                                        type="hidden"
                                                        name="city_slug"
                                                        defaultValue="fethiye"
                                                    />
                                                </div>
                                            </div>
                                            {/* Mobile Span */}
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold lh-0 px-0"
                                                id="fethiye_default_area_wrapper"
                                            >
                                                Area
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            <span
                                                className="search-filter-input-title search-tab-input-title text-center fs-5 fw-bold lh-0 px-0 d-none"
                                                id="fethiye_selected_area_wrapper"
                                            >
                                                <span className="small">Area</span>
                                                <br />
                                                <span id="fethiye_selected_area" />
                                                <br />
                                                <span className="search-filter-input-area-value" />
                                            </span>
                                            {/* Mobile Dropdown */}
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Calis
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Calis"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Oludeniz
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Oludeniz"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Ovacik
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Ovacik"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Hisaronu
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Hisaronu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Uzumlu
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Uzumlu"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Karagozler
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Karagozler"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Fethiye Town
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Fethiye Town"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Faralya
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Faralya"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Kayakoy
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Kayakoy"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Sovalye Island
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Sovalye Island"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <label className="search-filter-input-dropdown-link checkbox-container hola bold">
                                                    Seydikemer
                                                    <input
                                                        defaultValue="fethiye"
                                                        type="radio"
                                                        name="city_slug"
                                                        className="checkbox-filter"
                                                    />
                                                    <input
                                                        defaultValue="Seydikemer"
                                                        type="radio"
                                                        name="area_slug"
                                                        className="checkbox-filter"
                                                        id="area_slug"
                                                    />
                                                </label>
                                                <input
                                                    type="hidden"
                                                    name="selected_area_slug"
                                                    className="checkbox-filter"
                                                    id="selected_area_slug"
                                                />
                                                <input
                                                    type="hidden"
                                                    name="city_slug"
                                                    defaultValue="fethiye"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- T Y P E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input originValue"
                                            linktype="type"
                                        >
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4>Type</h4>
                                                    <ul>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Apartment
                                                            <input
                                                                defaultValue="apartment"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Bungalow
                                                            <input
                                                                defaultValue="bungalow"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Commercial
                                                            <input
                                                                defaultValue="commercial"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Hotel for sale
                                                            <input
                                                                defaultValue="hotel-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Land for sale
                                                            <input
                                                                defaultValue="land-for-sale"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Penthouse
                                                            <input
                                                                defaultValue="penthouse"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container">
                                                            {" "}
                                                            Villa
                                                            <input
                                                                defaultValue="villa"
                                                                type="radio"
                                                                name="type"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="type_slug" id="#type_slug" />
                                                </div>
                                            </div>
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Type <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown  label">
                                                <label
                                                    value="apartment"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Apartment
                                                </label>
                                                <label
                                                    value="bungalow"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Bungalow
                                                </label>
                                                <label
                                                    value="commercial"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Commercial
                                                </label>
                                                <label
                                                    value="hotel-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Hotel for sale
                                                </label>
                                                <label
                                                    value="land-for-sale"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Land for sale
                                                </label>
                                                <label
                                                    value="penthouse"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Penthouse
                                                </label>
                                                <label
                                                    value="villa"
                                                    type="type_slug"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    Villa
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*------------------- P R I C E S ---------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input d-lg-flex price-toggle"
                                            id="price-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                Price
                                                <div className="priceValues">
                                                    <i className="search-filter-input-value minPriceValue" />{" "}
                                                    -{" "}
                                                    <i className="search-filter-input-value maxPriceValue" />
                                                </div>
                                                <input type="hidden" name="priceRange" id="priceRange" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div
                                                className="filter-type-dropdown-wrap price"
                                                style={{ display: "block !important" }}
                                            >
                                                <div className="filter-type-dropdown">
                                                    <h4> Price range</h4>
                                                    <div>
                                                        <div className="minPrice">
                                                            <input
                                                                className="minPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Min Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    0
                                                                    <input
                                                                        defaultValue={0.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    {" "}
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="minPrice"
                                                                        className="checkbox-filter-minPrice hide"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                        <small> - </small>
                                                        <div className="maxPrice">
                                                            <input
                                                                className="maxPrice-input filter-input-text width-unset"
                                                                readOnly=""
                                                                type="text"
                                                                placeholder="Max Price"
                                                                defaultValue=""
                                                            />
                                                            <ul>
                                                                <label className="checkbox-container">
                                                                    $50k
                                                                    <input
                                                                        defaultValue={50000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $100k
                                                                    <input
                                                                        defaultValue={100000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $150k
                                                                    <input
                                                                        defaultValue={150000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $200k
                                                                    <input
                                                                        defaultValue={200000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $250k
                                                                    <input
                                                                        defaultValue={250000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $300k
                                                                    <input
                                                                        defaultValue={300000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $400k
                                                                    <input
                                                                        defaultValue={400000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $500k
                                                                    <input
                                                                        defaultValue={500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $750k
                                                                    <input
                                                                        defaultValue={750000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,000k
                                                                    <input
                                                                        defaultValue={1000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $1,500k
                                                                    <input
                                                                        defaultValue={1500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,000k
                                                                    <input
                                                                        defaultValue={2000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $2,500k
                                                                    <input
                                                                        defaultValue={2500000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $5,000k
                                                                    <input
                                                                        defaultValue={5000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                                <label className="checkbox-container">
                                                                    $10,000k+
                                                                    <input
                                                                        defaultValue={10000000.0}
                                                                        type="radio"
                                                                        name="maxPrice"
                                                                        className="checkbox-filter-maxPrice hide tab-6-max-prices"
                                                                    />
                                                                </label>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide minPrice"
                                            linktype="min_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="minPrice"
                                            >
                                                Min Price <i className="search-filter-input-value"></i>
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown ">
                                                <label
                                                    value={0.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={50000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="minPrice"
                                                    className="search-filter-input-dropdown-link searchDO minPricehidden"
                                                >
                                                    {" "}
                                                    $10,000k
                                                </label>
                                            </div>
                                        </div>
                                        <div
                                            className="search-filter-input search-tab-input hide maxPrice"
                                            linktype="max_price"
                                        >
                                            <span
                                                className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0"
                                                value=""
                                                type="maxPrice"
                                            >
                                                Max Price <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="search-filter-input-dropdown">
                                                <label
                                                    value={50000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $50k
                                                </label>
                                                <label
                                                    value={100000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $100k
                                                </label>
                                                <label
                                                    value={150000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $150k
                                                </label>
                                                <label
                                                    value={200000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $200k
                                                </label>
                                                <label
                                                    value={250000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $250k
                                                </label>
                                                <label
                                                    value={300000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $300k
                                                </label>
                                                <label
                                                    value={400000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $400k
                                                </label>
                                                <label
                                                    value={500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $500k
                                                </label>
                                                <label
                                                    value={750000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $750k
                                                </label>
                                                <label
                                                    value={1000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,000k
                                                </label>
                                                <label
                                                    value={1500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $1,500k
                                                </label>
                                                <label
                                                    value={2000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,000k
                                                </label>
                                                <label
                                                    value={2500000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $2,500k
                                                </label>
                                                <label
                                                    value={5000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $5,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k
                                                </label>
                                                <label
                                                    value={10000000.0}
                                                    type="maxPrice"
                                                    className="search-filter-input-dropdown-link searchDO maxPricehidden"
                                                >
                                                    $10,000k+
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*----------------- B E D R O O M S ------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div
                                            className="search-filter-input search-tab-input bedrooms"
                                            linktype="bedrooms"
                                            id="bedroom-toggle"
                                        >
                                            <span className="search-filter-input-title search-tab-input-title fs-5 fw-bold px-0">
                                                {" "}
                                                Beds
                                                <i className="search-filter-input-value" />
                                            </span>
                                            <div
                                                className="search-filter-input-title"
                                                style={{ width: "fit-content !important" }}
                                            >
                                                <img
                                                    src="https://www.propertyturkey.com/front/image/home/tab-icons/dropdown_arrow.svg"
                                                    width={20}
                                                    height={20}
                                                    className="dropdown-arrow"
                                                    alt="dropdown arrow"
                                                    loading="lazy"
                                                />
                                            </div>
                                            <div className="filter-type-dropdown-wrap">
                                                <div className="filter-type-dropdown">
                                                    <h4> Bedrooms </h4>
                                                    <ul>
                                                        <label className="checkbox-container" value={0}>
                                                            {" "}
                                                            0
                                                            <input
                                                                defaultValue={0}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={1}>
                                                            {" "}
                                                            1
                                                            <input
                                                                defaultValue={1}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={2}>
                                                            {" "}
                                                            2
                                                            <input
                                                                defaultValue={2}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={3}>
                                                            {" "}
                                                            3
                                                            <input
                                                                defaultValue={3}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={4}>
                                                            {" "}
                                                            4
                                                            <input
                                                                defaultValue={4}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={5}>
                                                            {" "}
                                                            5
                                                            <input
                                                                defaultValue={5}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                        <label className="checkbox-container" value={6}>
                                                            {" "}
                                                            5+
                                                            <input
                                                                defaultValue={6}
                                                                type="radio"
                                                                name="city"
                                                                className="checkbox-filter"
                                                            />
                                                            <span className="checkmark" />
                                                        </label>
                                                    </ul>
                                                    <input type="hidden" name="bedrooms" id="#bedrooms" />
                                                </div>
                                            </div>
                                            <div className="search-filter-input-dropdown label">
                                                <label
                                                    value={0}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    0
                                                </label>
                                                <label
                                                    value={1}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    1
                                                </label>
                                                <label
                                                    value={2}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    2
                                                </label>
                                                <label
                                                    value={3}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    3
                                                </label>
                                                <label
                                                    value={4}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    4
                                                </label>
                                                <label
                                                    value={5}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5
                                                </label>
                                                <label
                                                    value={6}
                                                    type="bedrooms"
                                                    className="search-filter-input-dropdown-link searchDO"
                                                >
                                                    {" "}
                                                    5+{" "}
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    {/*--------------------- T A G S ----------------------*/}
                                    {/*--------------------- R E F E R E C E ----------------------*/}
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <div className="search-filter-input search-tab-input norrow refId flex items-center">
                                            <input
                                                className="px-0 fs-5 fw-bold"
                                                type="text"
                                                name="ref"
                                                placeholder="#ID"
                                                defaultValue=""
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-12 mb-4">
                                        <button
                                            id="createSearchData"
                                            className="w-[125px] h-[50px] bg-red-800"
                                            type="button"
                                            
                                        >
                                            <span className=" text-white ">
                                                SEARCH
                                            </span>
                                            {/* <img
                                                src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                                                alt="search arrow"
                                                className="contact-arrow col-auto pe-md-0 ps-0"
                                                width={91}
                                                height={150}
                                                loading="lazy"
                                            /> */}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* CONNECT WITH PT */}
            <form action="https://www.propertyturkey.com/contact-with-pt" method="POST">
                <div
                    className="container-pt bg-pt-light-red "
                    style={{ backgroundColor: "#e5e4d5", marginTop: 100 }}
                >
                    <div
                        className="row align-itens-center justify-content-center mt-6 pt-4 align-items-center"
                        id="connectWithPT"
                    >
                        <div className="col-lg col-12 mb-4">
                            <div className="d-flex align-items-center justify-lg-content-end justify-content-center">
                                <div className="col-auto px-0 text-right">
                                    <img
                                        src="https://www.propertyturkey.com/front/image/home/tab-icons/contact-form-icon.svg"
                                        className="contact-phone"
                                        alt="contact phone"
                                        width={40}
                                        height={40}
                                        loading="lazy"
                                    />
                                </div>
                                <div
                                    className="col-auto fw-bold text-pt-dark-red text-last-end"
                                    style={{ fontSize: "17px !important" }}
                                >
                                    CONNECT WITH PT
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-12 mb-4">
                            <div className="search-filter-input search-tab-input w-100 flex items-center">
                                <input
                                    className="fs-5 fw-bold"
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="col-lg col-12 mb-4">
                            <div className="search-filter-input search-tab-input w-100 flex items-center">
                                <div className="intl-tel-input allow-dropdown">
                                    <div className="flag-container">
                                        <div
                                            className="selected-flag"
                                            role="combobox"
                                            aria-owns="country-listbox"
                                            tabIndex={0}
                                            title="Pakistan (‫پاکستان‬‎): +92"
                                        >
                                            <div className="iti-flag pk" />
                                            <div className="iti-arrow" />
                                        </div>
                                    </div>
                                    <input
                                        className="fs-5 fw-bold"
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        defaultValue=""
                                        autoComplete="off"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg col-12 mb-4">
                            <div className="search-filter-input search-tab-input w-100 flex items-center">
                                <input
                                    className="fs-5 fw-bold"
                                    type="email"
                                    name="email"
                                    placeholder="E-mail"
                                    defaultValue=""
                                />
                            </div>
                        </div>
                        <div className="col-lg col-12 mb-4">
                            <button
                                className="bg-pt-dark-red border-0 w-100 h-100 d-flex align-items-center justify-content-center"
                                style={{ padding: "12px 0" }}
                                type="submit"
                            >
                                <span className="me-md-3 ms-md-0 mx-auto text-white fs-md-6 fs-3">
                                    CONTACT
                                </span>
                                
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </section>


    )
}
