import React from 'react'

export default function TurkeyAdvisor() {
    return (
        <section className="adviser-form d-mobile">
            <div className="adviser-form-container">
                <h2 className="abhaya">
                    Talk to a local Property
                    <br /> Turkey Adviser
                </h2>
                <form
                    method="POST"
                    action="https://www.propertyturkey.com/enquire_now"
                    acceptCharset="UTF-8"
                    className="body"
                    id="adviser-form"
                >
                    <input
                        name="_token"
                        type="hidden"
                        defaultValue="R2XQX4Jj0bD0ckbJgWKR34RpZBj8O8wuA9PzETaG"
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
                                className="typeahead"
                                placeholder="Enter city, address, zip"
                            />
                        </div>
                        <div className="form-field field">
                            <label>your e-mail *</label>
                            <i className="fa fa-envelope" aria-hidden="true" />
                            <input
                                title="your e-mail *"
                                type="email"
                                validation="email"
                                placeholder="E-mail"
                                name="email"
                            />
                            <span className="validationError">Please enter valid email</span>
                        </div>
                        <div className="text-center">
                            <a className="adviser-form--btn" id="adviser-form-step-1">
                                Next
                            </a>
                        </div>
                    </div>
                    <div className="step2 step hide">
                        <div className="form-field field">
                            <label>your name *</label>
                            <i className="fa fa-search" aria-hidden="true" />
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





    )
}
