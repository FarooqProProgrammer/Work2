import React from 'react'

export default function AdvisorDesk() {
    return (
        <section className="adviser-video d-desk">
            <div className="wrap-dis-85 wrap wrap-tab-11 wrap-mob-11">
                <div className="row flex content-center">
                    <div className="col-12 col-md-4">
                        <section className="adviser-form h100">
                            <div className="adviser-form-container h100">
                                <h2 className="abhaya">
                                    Talk to a local Property
                                    <br /> Turkey Adviser
                                </h2>
                                <form
                                    method="POST"
                                    action="https://www.propertyturkey.com/enquire_now"
                                    acceptCharset="UTF-8"
                                    className="body w-88"
                                    id="adviser-form"
                                >
                                    <input
                                        name="_token"
                                        type="hidden"
                                        defaultValue="ihhrAO3DxYL58JpSv7hQAlPr3on06wStOZvY7o0d"
                                    />
                                    <input
                                        name="current"
                                        type="hidden"
                                        defaultValue="https://www.propertyturkey.com"
                                    />
                                    <input name="section" type="hidden" defaultValue="static" />
                                    <input name="type" type="hidden" defaultValue="gEnquire" />
                                    <div className="step1 step">
                                        <div className="form-field">
                                            <label>Where are you searching for homes *</label>
                                            <i className="fa fa-search" aria-hidden="true" />
                                            <input
                                                type="text"
                                                className="typeahead validatehomeform"
                                                placeholder="Enter city, address, zip"
                                            />
                                        </div>
                                        <div className="form-field field margin-top-2">
                                            <label className="padding-top-xl-05">your e-mail *</label>
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            <input
                                                title="your e-mail *"
                                                type="email"
                                                id="valemail"
                                                className="isValidEmail"
                                                validation="email"
                                                placeholder="E-mail"
                                                name="email"
                                            />
                                            <span className="validationError">
                                                Please enter valid email
                                            </span>
                                        </div>
                                        <div className="text-center">
                                            <a className="adviser-form--btn" id="adviser-form-step-1">
                                                Next
                                            </a>
                                        </div>
                                    </div>
                                    <div className="step2 step hide">
                                        <div className="form-field field" id="form-nextstep">
                                            <label>your name *</label>
                                            <i style={{ top: "calc(93% - 1.8rem)" }}>
                                                <img
                                                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/user-gold.svg"
                                                    width={14}
                                                    height={15}
                                                    className="lazyload"
                                                    alt=""
                                                />
                                            </i>
                                            <input
                                                title="your name *"
                                                validation=""
                                                placeholder="Name"
                                                name="name"
                                                type="text"
                                            />
                                        </div>
                                        <div className="form-field field">
                                            <label>Please, write your phone *</label>
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
                                                    title="Please, write your phone *"
                                                    validation=""
                                                    placeholder="Phone"
                                                    className="input-tel"
                                                    name="phone"
                                                    type="text"
                                                    autoComplete="off"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-field field">
                                            <label>Please, write your message *</label>
                                            <textarea
                                                title="Please, write your message *"
                                                rows={3}
                                                validation=""
                                                placeholder="Message"
                                                name="message"
                                                cols={50}
                                                defaultValue={""}
                                            />
                                        </div>
                                        <input
                                            type="text"
                                            style={{ display: "none" }}
                                            name="enqID"
                                            defaultValue=""
                                        />
                                        <div className="text-center">
                                            <input
                                                className="adviser-form-submit"
                                                type="submit"
                                                defaultValue="Send Enquire"
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                    <div className="col-12 col-md-1" />
                    <div className="col-12 col-md-4">
                        <div className="card position-relative custom-youtube-video">
                            <img
                                data-src="https://www.propertyturkey.com/front/image/images2019/Images/business-ptjpg__large__720.jpg"
                                className="custom-youtube-video--bigimg lazyloaded"
                                alt=""
                                src="https://www.propertyturkey.com/front/image/images2019/Images/business-ptjpg__large__720.jpg"
                            />
                            <img
                                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-brands.svg"
                                className="play_video_youtube lazyloaded"
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
                            <div className="card-body text-center" id="insertbefore-youtube">
                                <h2 className="title-lined abhaya bold clr-pt-darkgrey">
                                    Property Turkey Culture
                                </h2>
                                <p className="card-text featuredin-title">
                                    Tap into our unique Style and Culture
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
