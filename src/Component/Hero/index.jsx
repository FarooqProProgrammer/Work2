import React from 'react'

export default function Hero() {
    return (
        <div
            className="container-pt bg-pt-light-red"
            style={{ backgroundColor: "#e5e4d5" }}
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
                        <img
                            src="https://www.propertyturkey.com/front/image/home/tab-icons/search_arrow.svg"
                            className="contact-arrow col-auto pe-md-0 ps-0"
                            alt="contact arrow"
                            width={91}
                            height={150}
                            loading="lazy"
                            style={{ transform: "unset" }}
                        />
                    </button>
                </div>
            </div>
        </div>


    )
}
