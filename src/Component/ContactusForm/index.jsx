import React from 'react'

export default function ContactusForm() {
  return (
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
    <section className="col-dis-8 col-tab-8 col-mob-12 fl-dis-right fl-tab-right">
      <form
        method="POST"
        action="https://www.propertyturkey.com/contact"
        acceptCharset="UTF-8"
        className="box white contactus-form"
      >
        <input
          name="_token"
          type="hidden"
          defaultValue="ihhrAO3DxYL58JpSv7hQAlPr3on06wStOZvY7o0d"
        />
        <h1 className="title text-center clr-pt-darkgrey abhaya">
          Connect With Us
        </h1>
        <label className="field">
          <b>Name:</b>
          <input name="full_name" type="text" defaultValue="" validation="" />
        </label>
        <div className="field margin-ver-05">
          <b className="margin-ver-05">Phone:</b>
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
              name="phone"
              type="text"
              className="input-tel"
              autoComplete="off"
              placeholder="+92 301 2345678"
            />
          </div>
        </div>
        <label className="field">
          <b className="padding-top-05">E-mail:</b>
          <input name="email" type="email" defaultValue="" validation="email" />
        </label>
        <label className="field">
          <b>Subject:</b>
          <select name="subject" className="subject hidden-field">
            <option value="Support">Support</option>
            <option value="Sales">Sales</option>
            <option value="Feedback">Feedback</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="field">
          <b>Message:</b>
          <textarea name="msg" rows={4} validation="" defaultValue={""} />
        </label>
        <input
          type="text"
          name="conTactUS"
          defaultValue=""
          style={{ display: "none" }}
        />
        <div className="cf text-center">
          <input
            type="submit"
            defaultValue="Send"
            className="btn contactus-hover bg-pt crl-white"
          />
        </div>
      </form>
    </section>
    <aside className="col-dis-4 col-tab-4 col-mob-12" id="contactus-style">
      {/* Contact Us */}
      <h1 className="page-title">Contact Us</h1>
      <h3 className="title">Office Locations</h3>
      <div className="officelocation">
        <b>
          Property Turkey UK Head Office
          <a
            href="https://goo.gl/maps/uUwHBvqeeAE2"
            target="_blank"
            title="Property Turkey UK Head Office"
          >
            <i className="fa fa-map" />
          </a>
        </b>
        <label>Highstone House,</label>
        <label>165 High Street,</label>
        <label>Barnet London,</label>
        <label>EN5 5SU</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            + 44 20 8371 0059
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:info@propertyturkey.com">info@propertyturkey.com</a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>
          Property Turkey Istanbul Head Office
          <a
            href="https://www.google.co.uk/maps/place/Property+Turkey/@41.0635065,28.980442,17z/data=!3m1!4b1!4m5!3m4!1s0x14cab7164afb8bbf:0x63265ca8c1d207ab!8m2!3d41.0635065!4d28.9826307"
            target="_blank"
            title="Property Turkey Istanbul Head Office"
          >
            <i className="fa fa-map" />
          </a>
        </b>
        <label>Halide Edip Adivar Mahallesi,</label>
        <label>Cifte Cevizler Cad. ,</label>
        <label>No 3 Akin Plaza,</label>
        <label>34382 Sisli, Istanbul</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +90 212 215 0022
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:info@propertyturkey.com">info@propertyturkey.com</a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>
          Property Turkey Bodrum Office
          <a
            href="https://goo.gl/maps/auN2RzxvMCk "
            target="_blank"
            title="Property Turkey Bodrum Office"
          >
            <i className="fa fa-map" />
          </a>
        </b>
        <label>156A Neyzen Tevfik Caddesi,</label>
        <label>Bodrum Marina, Bodrum Mugla</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +90 252 313 1121
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:bodrum@propertyturkey.com">
              bodrum@propertyturkey.com
            </a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>
          Property Turkey Fethiye - Kalkan Office
          <a
            href="https://goo.gl/maps/KYAHTPp2Ycs"
            target="_blank"
            title="Property Turkey Fethiye - Kalkan Office"
          >
            <i className="fa fa-map" />
          </a>
        </b>
        <label>Tuzla Mahallesi Cahit Gündüz Caddesi</label>
        <label>No. 24 Fethiye Mugla</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +90 252 612 38 38
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:fethiye@propertyturkey.com">
              fethiye@propertyturkey.com
            </a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>
          Property Turkey Antalya Office
          <a
            href="https://goo.gl/maps/b2njXp7cKdLfacRy8"
            target="_blank"
            title="Property Turkey Antalya Office"
          >
            <i className="fa fa-map" />
          </a>
        </b>
        <label>
          Yesilbahce Mah. Metin Kasapoglu Cd.
          <br />
          Ayhan Kadam Is Merkezi
          <br />
          A-Blok NO: 48/701 floor 8
        </label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +90 242 313 14 71
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:antalya@propertyturkey.com">
              antalya@propertyturkey.com
            </a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>
          Property Turkey Bursa Office
          <a
            href="https://maps.google.com/?q=40.212547,28.994360"
            target="_blank"
            title="Property Turkey Bursa Office"
          >
            <i className="fa fa-map" />
          </a>
        </b>
        <label>
          Odunluk Mah. Liman Caddesi Kızılay Plaza No :17 Ofis No: 50 Nilüfer /
          BURSA
        </label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +90 533 254 58 00
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:bursa@propertyturkey.com">bursa@propertyturkey.com</a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>Property Turkey Pakistan</b>
        <label>136/1 KH-E-TARIQ, Phase 6, DHA, Karachi</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +92 323 20 30 440
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:pakistan@propertyturkey.com">
              pakistan@propertyturkey.com
            </a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>Property Turkey South Africa</b>
        <label>28 Osborn Road, Houghton, 2192, Johannesburg, South Africa.</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +27 65 653 0885
          </b>
        </label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +27 60 674 0427
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:sa@propertyturkey.com">sa@propertyturkey.com</a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>Property Turkey India</b>
        <label>The Morning Star, No 18/1, 1st Floor Rathan Singh Road</label>
        <label>Frazer Town, Bangalore - 560005, India</label>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +91 98804 72555
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:india@propertyturkey.com">india@propertyturkey.com</a>
          </b>
        </label>
      </div>
      <hr />
      <div className="officelocation">
        <b>Property Turkey Iran</b>
        <label>
          Telephone:{" "}
          <b className="red" dir="ltr">
            +90 552 044 67 16
          </b>
        </label>
        <label>
          E-mail:{" "}
          <b className="red">
            <a href="mailto:Persian@propertyturkey.com">
              Persian@propertyturkey.com
            </a>
          </b>
        </label>
      </div>
      <hr />
    </aside>
  </div>
  
  )
}
