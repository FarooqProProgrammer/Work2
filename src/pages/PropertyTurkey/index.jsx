import React from 'react'

export default function PropertyTurkey() {
  return (
    <section id="main" className="cf  disable-copy ">
  <div
    className="breadcrumbs"
    itemScope=""
    itemType="http://schema.org/BreadcrumbList"
  >
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
      <span
        itemProp="itemListElement"
        itemScope=""
        itemType="http://schema.org/ListItem"
      >
        <a href="https://www.propertyturkey.com">
          <img
            src="https://www.propertyturkey.com/front/image/images2019/Icons/home-logo.svg"
            className="img-fluid"
            alt=""
          />
        </a>
        <meta itemProp="name" content="Home" />
        <meta itemProp="item" content="https://www.propertyturkey.com" />
        <meta itemProp="position" content={1} />
      </span>
      <span>
        <i className="fa fa-angle-right" />
      </span>
      <span
        itemProp="itemListElement"
        itemScope=""
        itemType="http://schema.org/ListItem"
      >
        Property Turkey TV
        <meta itemProp="name" content="Property Turkey TV" />
        <meta itemProp="item" content="https://www.propertyturkey.com/tv" />
        <meta itemProp="position" content={4} />
      </span>
    </div>
  </div>
  <div
    className="tv-endpage text-center pt-tv-bg"
    style={{ paddingBottom: "0.5rem !important" }}
  >
    <h1 className="pt-2-sm">
      Property Turkey <span>TV</span>
    </h1>
    <p className="padding-top-1">
      Property Turkey's TV is designed to give you an insight into all things
      Turkish
    </p>
  </div>
  <div className="pt-tv-bg">
    <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
      <div className="filtering-tv">
        <div className="row">
          <div className="col-6 col-lg-3">
            <div className="dropdown-new-tv toggle-sorte">
              <span className="flex align-center">
                <img
                  src="https://www.propertyturkey.com/front/image/images2019/Icons/burger-menu.svg"
                  width={20}
                  alt=""
                />
                <span className="sort-by-span">Sort by</span>
                Latest Added
              </span>
              <div className="dropdown-content-new-tv">
                <p>
                  <a
                    id="testsort-1a"
                    href="https://www.propertyturkey.com/tv?sort=latest"
                  >
                    Latest Added
                  </a>
                </p>
                <p>
                  <a
                    id="testsort-2a"
                    href="https://www.propertyturkey.com/tv?sort=recommended"
                  >
                    Recommended
                  </a>
                </p>
                <p>
                  <a
                    id="testsort-3a"
                    href="https://www.propertyturkey.com/tv?sort=popular"
                  >
                    Most Popular
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-lg-6 search-tv-container">
            <div>
              <form
                action="https://www.propertyturkey.com/tv"
                className="input-group flex position-relative"
              >
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  id="autocomplete-searchTv"
                  defaultValue=""
                  placeholder="Type here to search videos"
                  autoComplete="off"
                />
                <div id="match-list" className="position-abs"></div>
                <button className="no-padding border-none">
                  <div className="input-group-append">
                    <i className="fa fa-search" aria-hidden="true" />
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="col-3 d-desk">
            <a
              className="view-all-btn btn rednew-border"
              data-fancybox=""
              data-src="#subscribe-media-modal"
              href="javascript:;"
            >
              <span>Subscribe to get the latest videos</span>
            </a>
          </div>
        </div>
        <div className="buttonlist buttonlist-tv-listing margin-left-auto dis-none d-mobile-sorting-tv">
          <div className="buttonList-container">
            <div className="anchorList dis-none d-mobile-sorting-tv anchorList-new">
              <div className="flex align-center padding-bottom-2">
                <a
                  className="toggle-sorte showMb-hideDt"
                  style={{ width: "unset !important" }}
                >
                  <i className="fa fa-arrow-right clr-pt" />
                </a>
                <p className="sort text-center">Sort By</p>
              </div>
              <p>
                <input
                  type="radio"
                  id="testsort-1"
                  name="testsort"
                  defaultValue="testsort-1a"
                  className="radio-email-custom"
                  defaultChecked=""
                />
                <label htmlFor="testsort-1"> Latest Added</label>
              </p>
              <p>
                <input
                  type="radio"
                  id="testsort-2"
                  name="testsort"
                  defaultValue="testsort-2a"
                  className="radio-email-custom"
                />
                <label htmlFor="testsort-2"> Recommended</label>
              </p>
              <p>
                <input
                  type="radio"
                  id="testsort-3"
                  name="testsort"
                  defaultValue="testsort-3a"
                  className="radio-email-custom"
                />
                <label htmlFor="testsort-3"> Most Popular</label>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix">
        <section id="videos" className="cardListing">
          <div className="videos-categories margin-ver-1" id="tags">
            <a href="https://www.propertyturkey.com/tv">All</a>
            <a
              id="cat_8"
              href="https://www.propertyturkey.com/tv?category=8&sort=latest"
            >
              Straight Talk
            </a>
            <a
              id="cat_13"
              href="https://www.propertyturkey.com/tv?category=13&sort=latest"
            >
              Aladdin's Turkey
            </a>
            <a
              id="cat_9"
              href="https://www.propertyturkey.com/tv?category=9&sort=latest"
            >
              Antalya
            </a>
            <a
              id="cat_36"
              href="https://www.propertyturkey.com/tv?category=36&sort=latest"
            >
              Area Talk
            </a>
            <a
              id="cat_3"
              href="https://www.propertyturkey.com/tv?category=3&sort=latest"
            >
              Bodrum
            </a>
            <a
              id="cat_5"
              href="https://www.propertyturkey.com/tv?category=5&sort=latest"
            >
              Bursa
            </a>
            <a
              id="cat_24"
              href="https://www.propertyturkey.com/tv?category=24&sort=latest"
            >
              Buying Online
            </a>
            <a
              id="cat_7"
              href="https://www.propertyturkey.com/tv?category=7&sort=latest"
            >
              Citizenship by Investment
            </a>
            <a
              id="cat_28"
              href="https://www.propertyturkey.com/tv?category=28&sort=latest"
            >
              Cost of Living
            </a>
            <a
              id="cat_29"
              href="https://www.propertyturkey.com/tv?category=29&sort=latest"
            >
              Design &amp; Build
            </a>
            <a
              id="cat_35"
              href="https://www.propertyturkey.com/tv?category=35&sort=latest"
            >
              Designer Turkey
            </a>
            <a
              id="cat_26"
              href="https://www.propertyturkey.com/tv?category=26&sort=latest"
            >
              Earthquake
            </a>
            <a
              id="cat_19"
              href="https://www.propertyturkey.com/tv?category=19&sort=latest"
            >
              Economy
            </a>
            <a
              id="cat_4"
              href="https://www.propertyturkey.com/tv?category=4&sort=latest"
            >
              Fethiye
            </a>
            <a
              id="cat_33"
              href="https://www.propertyturkey.com/tv?category=33&sort=latest"
            >
              Finance
            </a>
            <a
              id="cat_31"
              href="https://www.propertyturkey.com/tv?category=31&sort=latest"
            >
              Healthcare
            </a>
            <a
              id="cat_16"
              href="https://www.propertyturkey.com/tv?category=16&sort=latest"
            >
              Investment
            </a>
            <a
              id="cat_1"
              href="https://www.propertyturkey.com/tv?category=1&sort=latest"
            >
              Istanbul
            </a>
            <a
              id="cat_11"
              href="https://www.propertyturkey.com/tv?category=11&sort=latest"
            >
              Kalkan
            </a>
            <a
              id="cat_12"
              href="https://www.propertyturkey.com/tv?category=12&sort=latest"
            >
              Kas
            </a>
            <a
              id="cat_32"
              href="https://www.propertyturkey.com/tv?category=32&sort=latest"
            >
              Land
            </a>
            <a
              id="cat_17"
              href="https://www.propertyturkey.com/tv?category=17&sort=latest"
            >
              Luxury homes
            </a>
            <a
              id="cat_30"
              href="https://www.propertyturkey.com/tv?category=30&sort=latest"
            >
              Minute Talks
            </a>
            <a
              id="cat_21"
              href="https://www.propertyturkey.com/tv?category=21&sort=latest"
            >
              Property prices
            </a>
            <a
              id="cat_2"
              href="https://www.propertyturkey.com/tv?category=2&sort=latest"
            >
              Property Turkey Team
            </a>
            <a
              id="cat_18"
              href="https://www.propertyturkey.com/tv?category=18&sort=latest"
            >
              Rental income
            </a>
            <a
              id="cat_23"
              href="https://www.propertyturkey.com/tv?category=23&sort=latest"
            >
              Residency
            </a>
            <a
              id="cat_15"
              href="https://www.propertyturkey.com/tv?category=15&sort=latest"
            >
              Sea view
            </a>
            <a
              id="cat_14"
              href="https://www.propertyturkey.com/tv?category=14&sort=latest"
            >
              Seafront
            </a>
            <a
              id="cat_25"
              href="https://www.propertyturkey.com/tv?category=25&sort=latest"
            >
              Selling your property
            </a>
            <a
              id="cat_22"
              href="https://www.propertyturkey.com/tv?category=22&sort=latest"
            >
              Taxes
            </a>
            <a
              id="cat_27"
              href="https://www.propertyturkey.com/tv?category=27&sort=latest"
            >
              Testimonials
            </a>
            <a
              id="cat_20"
              href="https://www.propertyturkey.com/tv?category=20&sort=latest"
            >
              Turkish Lira
            </a>
            <a
              id="cat_34"
              href="https://www.propertyturkey.com/tv?category=34&sort=latest"
            >
              Urban Regeneration
            </a>
            <br />{" "}
          </div>
          <div className="videos-cards col-dis-9 col-tab-12 col-mob-12">
            <div className="grid cardRow">
              <div className="col-dis-6 col-tab-12 col-mob-12 listing-card">
                <div className="card tvlist-card">
                  <div className="shadow-card">
                    <div
                      className="position-relative"
                      style={{ padding: "1.5rem" }}
                    >
                      <a
                        data-fancybox=""
                        data-caption="The last chance saloon to invest in the historic city centre of Istanbul – these luxury Big Life near Little Bosphorus homes are for sale in Halic and have panoramic views of the Golden Horn and sea."
                        href="https://www.youtube.com/watch?v=WO3nZgPwytQ"
                      >
                        <img
                          src="https://img.youtube.com/vi/WO3nZgPwytQ/hqdefault.jpg"
                          className="card-img"
                          alt="..."
                        />
                        <img
                          src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                          className="tvlist-card--playbtn"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="card-body card-body-tv">
                        <p className="tvlist-card--first-title">
                          <a
                            href="https://www.propertyturkey.com/tv?category=8"
                            className="tvlist-card--first-title"
                          >
                            Straight Talk
                          </a>
                          ,
                          <a
                            href="https://www.propertyturkey.com/tv?category=1"
                            className="tvlist-card--first-title"
                          >
                            Istanbul
                          </a>
                        </p>
                        <a
                          data-fancybox=""
                          data-caption="The last chance saloon to invest in the historic city centre of Istanbul – these luxury Big Life near Little Bosphorus homes are for sale in Halic and have panoramic views of the Golden Horn and sea."
                          href="https://www.youtube.com/watch?v=WO3nZgPwytQ"
                        >
                          <h5 className="tvlist-card--second-title">
                            3 Reasons WHY Cameron Deggin Invested in THE LITTLE
                            BOSPHORUS
                          </h5>
                        </a>
                        <p className="tvlist-card--third-title">
                          The last chance saloon to invest in the historic city
                          centre of Istanbul – these luxury Big Life near Little
                          Bosphorus homes are for sale in Halic and have
                          panoramic views of the Golden Horn and sea.
                        </p>
                        <hr />
                        <div className="flex content-space-between flex-align-center-responsive margin-top-2 flex-wrapp-enable">
                          <label className="tvlist-card--clock-eye">
                            <div className="padding-bottom-05">
                              <i
                                className="fa fa-clock-o clr-pt-darkred"
                                aria-hidden="true"
                              />
                              &nbsp; 2023/04/02 &nbsp; &nbsp;
                            </div>
                            <i
                              className="fa fa-eye clr-pt-darkred"
                              aria-hidden="true"
                            />{" "}
                            &nbsp; 1361
                          </label>
                          <div className="flex items-center">
                            <a href="#" id="" className="margin-right-2 myBtn">
                              <img
                                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                alt=""
                              />
                            </a>
                            <div id="" className="tv-modal tv-myModal">
                              <div className="tv-modal-content">
                                <div className="tv-share-logo">
                                  <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=WO3nZgPwytQ"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/fb-new.png"
                                      alt="fb"
                                    />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.youtube.com/watch?v=WO3nZgPwytQ"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/linkedin-new.png"
                                      alt="linkedin"
                                    />
                                  </a>
                                  <a
                                    href="https://pinterest.com/pin/create/button/?url=https://www.youtube.com/watch?v=WO3nZgPwytQ&media=&description="
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/pinterest-new.png"
                                      alt="pinterest"
                                    />
                                  </a>
                                  <a
                                    href="https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=WO3nZgPwytQ"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/twitter-new.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="https://web.whatsapp.com/send?text=https://www.youtube.com/watch?v=WO3nZgPwytQ"
                                    data-action="share/whatsapp/share"
                                    target="_blank"
                                    className="hidewhatsapptv"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="whatsapp://send?text=https://www.youtube.com/watch?v=WO3nZgPwytQ"
                                    data-action="share/whatsapp/share"
                                    className="d-mobile"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a className="margin-left-1 tv-close">×</a>
                                </div>
                              </div>
                            </div>
                            <a
                              href="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
                              className="btn tvlist-card--btn d-desk"
                              target="_blank"
                            >
                              View Property
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
                        className="btn tvlist-card--btn d-mobile"
                        target="_blank"
                      >
                        View Property
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-dis-6 col-tab-12 col-mob-12 listing-card">
                <div className="card tvlist-card">
                  <div className="shadow-card">
                    <div
                      className="position-relative"
                      style={{ padding: "1.5rem" }}
                    >
                      <a
                        data-fancybox=""
                        data-caption="With panoramic views heading out across the sea and Golden Horn, these luxury-designed Big Life near Little Bosphorus properties are for sale in Halic area of Istanbul and are ripe for investment."
                        href="https://www.youtube.com/watch?v=pkrNuLGNhbM"
                      >
                        <img
                          src="https://img.youtube.com/vi/pkrNuLGNhbM/hqdefault.jpg"
                          className="card-img"
                          alt="..."
                        />
                        <img
                          src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                          className="tvlist-card--playbtn"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="card-body card-body-tv">
                        <p className="tvlist-card--first-title">
                          <a
                            href="https://www.propertyturkey.com/tv?category=1"
                            className="tvlist-card--first-title"
                          >
                            Istanbul
                          </a>
                        </p>
                        <a
                          data-fancybox=""
                          data-caption="With panoramic views heading out across the sea and Golden Horn, these luxury-designed Big Life near Little Bosphorus properties are for sale in Halic area of Istanbul and are ripe for investment."
                          href="https://www.youtube.com/watch?v=pkrNuLGNhbM"
                        >
                          <h5 className="tvlist-card--second-title">
                            Early Bird Investment Opportunity for Huge Gains
                          </h5>
                        </a>
                        <p className="tvlist-card--third-title">
                          With panoramic views heading out across the sea and
                          Golden Horn, these luxury-designed Big Life near
                          Little Bosphorus properties are for sale in Halic area
                          of Istanbul and are ripe for investment.
                        </p>
                        <hr />
                        <div className="flex content-space-between flex-align-center-responsive margin-top-2 flex-wrapp-enable">
                          <label className="tvlist-card--clock-eye">
                            <div className="padding-bottom-05">
                              <i
                                className="fa fa-clock-o clr-pt-darkred"
                                aria-hidden="true"
                              />
                              &nbsp; 2023/03/26 &nbsp; &nbsp;
                            </div>
                            <i
                              className="fa fa-eye clr-pt-darkred"
                              aria-hidden="true"
                            />{" "}
                            &nbsp; 4023
                          </label>
                          <div className="flex items-center">
                            <a href="#" id="" className="margin-right-2 myBtn">
                              <img
                                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                alt=""
                              />
                            </a>
                            <div id="" className="tv-modal tv-myModal">
                              <div className="tv-modal-content">
                                <div className="tv-share-logo">
                                  <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=pkrNuLGNhbM"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/fb-new.png"
                                      alt="fb"
                                    />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.youtube.com/watch?v=pkrNuLGNhbM"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/linkedin-new.png"
                                      alt="linkedin"
                                    />
                                  </a>
                                  <a
                                    href="https://pinterest.com/pin/create/button/?url=https://www.youtube.com/watch?v=pkrNuLGNhbM&media=&description="
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/pinterest-new.png"
                                      alt="pinterest"
                                    />
                                  </a>
                                  <a
                                    href="https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=pkrNuLGNhbM"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/twitter-new.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="https://web.whatsapp.com/send?text=https://www.youtube.com/watch?v=pkrNuLGNhbM"
                                    data-action="share/whatsapp/share"
                                    target="_blank"
                                    className="hidewhatsapptv"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="whatsapp://send?text=https://www.youtube.com/watch?v=pkrNuLGNhbM"
                                    data-action="share/whatsapp/share"
                                    className="d-mobile"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a className="margin-left-1 tv-close">×</a>
                                </div>
                              </div>
                            </div>
                            <a
                              href="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
                              className="btn tvlist-card--btn d-desk"
                              target="_blank"
                            >
                              View Property
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
                        className="btn tvlist-card--btn d-mobile"
                        target="_blank"
                      >
                        View Property
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-dis-6 col-tab-12 col-mob-12 listing-card">
                <div className="card tvlist-card">
                  <div className="shadow-card">
                    <div
                      className="position-relative"
                      style={{ padding: "1.5rem" }}
                    >
                      <a
                        data-fancybox=""
                        data-caption="Looking out across the Golden Horn with panoramic views from Halic, these luxury-designed Little Bosphorus apartments are perfect for investment and lifestyle buyers in historic Istanbul centre."
                        href="https://www.youtube.com/watch?v=x0M8pDtWd7g"
                      >
                        <img
                          src="https://img.youtube.com/vi/x0M8pDtWd7g/hqdefault.jpg"
                          className="card-img"
                          alt="..."
                        />
                        <img
                          src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                          className="tvlist-card--playbtn"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="card-body card-body-tv">
                        <p className="tvlist-card--first-title">
                          <a
                            href="https://www.propertyturkey.com/tv?category=8"
                            className="tvlist-card--first-title"
                          >
                            Straight Talk
                          </a>
                          ,
                          <a
                            href="https://www.propertyturkey.com/tv?category=1"
                            className="tvlist-card--first-title"
                          >
                            Istanbul
                          </a>
                        </p>
                        <a
                          data-fancybox=""
                          data-caption="Looking out across the Golden Horn with panoramic views from Halic, these luxury-designed Little Bosphorus apartments are perfect for investment and lifestyle buyers in historic Istanbul centre."
                          href="https://www.youtube.com/watch?v=x0M8pDtWd7g"
                        >
                          <h5 className="tvlist-card--second-title">
                            Reserve your spot next to “LITTLE BOSPHORUS”
                          </h5>
                        </a>
                        <p className="tvlist-card--third-title">
                          Looking out across the Golden Horn with panoramic
                          views from Halic, these luxury-designed Little
                          Bosphorus apartments are perfect for investment and
                          lifestyle buyers in historic Istanbul centre.
                        </p>
                        <hr />
                        <div className="flex content-space-between flex-align-center-responsive margin-top-2 flex-wrapp-enable">
                          <label className="tvlist-card--clock-eye">
                            <div className="padding-bottom-05">
                              <i
                                className="fa fa-clock-o clr-pt-darkred"
                                aria-hidden="true"
                              />
                              &nbsp; 2023/03/19 &nbsp; &nbsp;
                            </div>
                            <i
                              className="fa fa-eye clr-pt-darkred"
                              aria-hidden="true"
                            />{" "}
                            &nbsp; 2585
                          </label>
                          <div className="flex items-center">
                            <a href="#" id="" className="margin-right-2 myBtn">
                              <img
                                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                alt=""
                              />
                            </a>
                            <div id="" className="tv-modal tv-myModal">
                              <div className="tv-modal-content">
                                <div className="tv-share-logo">
                                  <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=x0M8pDtWd7g"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/fb-new.png"
                                      alt="fb"
                                    />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.youtube.com/watch?v=x0M8pDtWd7g"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/linkedin-new.png"
                                      alt="linkedin"
                                    />
                                  </a>
                                  <a
                                    href="https://pinterest.com/pin/create/button/?url=https://www.youtube.com/watch?v=x0M8pDtWd7g&media=&description="
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/pinterest-new.png"
                                      alt="pinterest"
                                    />
                                  </a>
                                  <a
                                    href="https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=x0M8pDtWd7g"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/twitter-new.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="https://web.whatsapp.com/send?text=https://www.youtube.com/watch?v=x0M8pDtWd7g"
                                    data-action="share/whatsapp/share"
                                    target="_blank"
                                    className="hidewhatsapptv"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="whatsapp://send?text=https://www.youtube.com/watch?v=x0M8pDtWd7g"
                                    data-action="share/whatsapp/share"
                                    className="d-mobile"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a className="margin-left-1 tv-close">×</a>
                                </div>
                              </div>
                            </div>
                            <a
                              href="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
                              className="btn tvlist-card--btn d-desk"
                              target="_blank"
                            >
                              View Property
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
                        className="btn tvlist-card--btn d-mobile"
                        target="_blank"
                      >
                        View Property
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-dis-6 col-tab-12 col-mob-12 listing-card">
                <div className="card tvlist-card">
                  <div className="shadow-card">
                    <div
                      className="position-relative"
                      style={{ padding: "1.5rem" }}
                    >
                      <a
                        data-fancybox=""
                        data-caption="Buying a hotel can be a complex process, and there are many factors to consider such as location, size, and amenities. We explore some of the key considerations when buying a small hotel in Turkey."
                        href="https://www.youtube.com/watch?v=_R8zpS67424"
                      >
                        <img
                          src="https://img.youtube.com/vi/_R8zpS67424/hqdefault.jpg"
                          className="card-img"
                          alt="..."
                        />
                        <img
                          src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                          className="tvlist-card--playbtn"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="card-body card-body-tv">
                        <p className="tvlist-card--first-title">
                          <a
                            href="https://www.propertyturkey.com/tv?category=8"
                            className="tvlist-card--first-title"
                          >
                            Straight Talk
                          </a>
                        </p>
                        <a
                          data-fancybox=""
                          data-caption="Buying a hotel can be a complex process, and there are many factors to consider such as location, size, and amenities. We explore some of the key considerations when buying a small hotel in Turkey."
                          href="https://www.youtube.com/watch?v=_R8zpS67424"
                        >
                          <h5 className="tvlist-card--second-title">
                            Best Investment Segment in Istanbul | Buildings
                            &amp; Hotels
                          </h5>
                        </a>
                        <p className="tvlist-card--third-title">
                          Buying a hotel can be a complex process, and there are
                          many factors to consider such as location, size, and
                          amenities. We explore some of the key considerations
                          when buying a small hotel in Turkey.
                        </p>
                        <hr />
                        <div className="flex content-space-between flex-align-center-responsive margin-top-2 flex-wrapp-enable">
                          <label className="tvlist-card--clock-eye">
                            <div className="padding-bottom-05">
                              <i
                                className="fa fa-clock-o clr-pt-darkred"
                                aria-hidden="true"
                              />
                              &nbsp; 2023/03/13 &nbsp; &nbsp;
                            </div>
                            <i
                              className="fa fa-eye clr-pt-darkred"
                              aria-hidden="true"
                            />{" "}
                            &nbsp; 2272
                          </label>
                          <div className="flex items-center">
                            <a href="#" id="" className="margin-right-2 myBtn">
                              <img
                                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                alt=""
                              />
                            </a>
                            <div id="" className="tv-modal tv-myModal">
                              <div className="tv-modal-content">
                                <div className="tv-share-logo">
                                  <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=_R8zpS67424"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/fb-new.png"
                                      alt="fb"
                                    />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.youtube.com/watch?v=_R8zpS67424"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/linkedin-new.png"
                                      alt="linkedin"
                                    />
                                  </a>
                                  <a
                                    href="https://pinterest.com/pin/create/button/?url=https://www.youtube.com/watch?v=_R8zpS67424&media=&description="
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/pinterest-new.png"
                                      alt="pinterest"
                                    />
                                  </a>
                                  <a
                                    href="https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=_R8zpS67424"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/twitter-new.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="https://web.whatsapp.com/send?text=https://www.youtube.com/watch?v=_R8zpS67424"
                                    data-action="share/whatsapp/share"
                                    target="_blank"
                                    className="hidewhatsapptv"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="whatsapp://send?text=https://www.youtube.com/watch?v=_R8zpS67424"
                                    data-action="share/whatsapp/share"
                                    className="d-mobile"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a className="margin-left-1 tv-close">×</a>
                                </div>
                              </div>
                            </div>
                            <a
                              href="https://www.propertyturkey.com/real_estate/turkey"
                              className="btn tvlist-card--btn d-desk"
                              target="_blank"
                            >
                              View Properties
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.propertyturkey.com/real_estate/turkey"
                        className="btn tvlist-card--btn d-mobile"
                        target="_blank"
                      >
                        View Properties
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-dis-6 col-tab-12 col-mob-12 listing-card">
                <div className="card tvlist-card">
                  <div className="shadow-card">
                    <div
                      className="position-relative"
                      style={{ padding: "1.5rem" }}
                    >
                      <a
                        data-fancybox=""
                        data-caption="We talk about family life in Turkey and the paradoxes between Western and Eastern society. We also look at why Turkey is a suitable environment when looking to raise your family abroad."
                        href="https://www.youtube.com/watch?v=xtxOwVdH--8"
                      >
                        <img
                          src="https://img.youtube.com/vi/xtxOwVdH--8/hqdefault.jpg"
                          className="card-img"
                          alt="..."
                        />
                        <img
                          src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                          className="tvlist-card--playbtn"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="card-body card-body-tv">
                        <p className="tvlist-card--first-title">
                          <a
                            href="https://www.propertyturkey.com/tv?category=8"
                            className="tvlist-card--first-title"
                          >
                            Straight Talk
                          </a>
                        </p>
                        <a
                          data-fancybox=""
                          data-caption="We talk about family life in Turkey and the paradoxes between Western and Eastern society. We also look at why Turkey is a suitable environment when looking to raise your family abroad."
                          href="https://www.youtube.com/watch?v=xtxOwVdH--8"
                        >
                          <h5 className="tvlist-card--second-title">
                            Turkey is the best of East and West
                          </h5>
                        </a>
                        <p className="tvlist-card--third-title">
                          We talk about family life in Turkey and the paradoxes
                          between Western and Eastern society. We also look at
                          why Turkey is a suitable environment when looking to
                          raise your family abroad.
                        </p>
                        <hr />
                        <div className="flex content-space-between flex-align-center-responsive margin-top-2 flex-wrapp-enable">
                          <label className="tvlist-card--clock-eye">
                            <div className="padding-bottom-05">
                              <i
                                className="fa fa-clock-o clr-pt-darkred"
                                aria-hidden="true"
                              />
                              &nbsp; 2023/03/05 &nbsp; &nbsp;
                            </div>
                            <i
                              className="fa fa-eye clr-pt-darkred"
                              aria-hidden="true"
                            />{" "}
                            &nbsp; 3441
                          </label>
                          <div className="flex items-center">
                            <a href="#" id="" className="margin-right-2 myBtn">
                              <img
                                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                                alt=""
                              />
                            </a>
                            <div id="" className="tv-modal tv-myModal">
                              <div className="tv-modal-content">
                                <div className="tv-share-logo">
                                  <a
                                    href="https://www.facebook.com/sharer/sharer.php?u=https://www.youtube.com/watch?v=xtxOwVdH--8"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/fb-new.png"
                                      alt="fb"
                                    />
                                  </a>
                                  <a
                                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.youtube.com/watch?v=xtxOwVdH--8"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/linkedin-new.png"
                                      alt="linkedin"
                                    />
                                  </a>
                                  <a
                                    href="https://pinterest.com/pin/create/button/?url=https://www.youtube.com/watch?v=xtxOwVdH--8&media=&description="
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/pinterest-new.png"
                                      alt="pinterest"
                                    />
                                  </a>
                                  <a
                                    href="https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=xtxOwVdH--8"
                                    target="_blank"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/twitter-new.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="https://web.whatsapp.com/send?text=https://www.youtube.com/watch?v=xtxOwVdH--8"
                                    data-action="share/whatsapp/share"
                                    target="_blank"
                                    className="hidewhatsapptv"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a
                                    href="whatsapp://send?text=https://www.youtube.com/watch?v=xtxOwVdH--8"
                                    data-action="share/whatsapp/share"
                                    className="d-mobile"
                                  >
                                    <img
                                      src="https://www.propertyturkey.com/front/image/icons/whatsapp-logo-png-31.png"
                                      alt="twitter"
                                    />
                                  </a>
                                  <a className="margin-left-1 tv-close">×</a>
                                </div>
                              </div>
                            </div>
                            <a
                              href="https://www.propertyturkey.com/real_estate/turkey"
                              className="btn tvlist-card--btn d-desk"
                              target="_blank"
                            >
                              View Properties
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        href="https://www.propertyturkey.com/real_estate/turkey"
                        className="btn tvlist-card--btn d-mobile"
                        target="_blank"
                      >
                        View Properties
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="loading-pagination hide">
                <img src="https://www.propertyturkey.com/front/image/AjaxLoader.gif" />
              </div>
              <div className="videos-cards--lastbtn">
                <a
                  href="#"
                  className="videos-seemore btn videos-cards--btn-showmore btn-seemore-listing"
                >
                  Show More Results{" "}
                </a>
              </div>
              <div className="pagination">
                <ul>
                  <li className="previous disabled">
                    <span className="icon-chevron-left">
                      <b>Previous</b>
                    </span>
                  </li>{" "}
                  <li className="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=2">
                      2
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=3">
                      3
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=4">
                      4
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=5">
                      5
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=6">
                      6
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=7">
                      7
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=8">
                      8
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=9">
                      9
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=10">
                      10
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=11">
                      11
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=12">
                      12
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=13">
                      13
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=14">
                      14
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=15">
                      15
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=16">
                      16
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=17">
                      17
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=18">
                      18
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=19">
                      19
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=20">
                      20
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=21">
                      21
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=22">
                      22
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=23">
                      23
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=24">
                      24
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=25">
                      25
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=26">
                      26
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=27">
                      27
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=28">
                      28
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=29">
                      29
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=30">
                      30
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=31">
                      31
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=32">
                      32
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=33">
                      33
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=34">
                      34
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=35">
                      35
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=36">
                      36
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=37">
                      37
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=38">
                      38
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=39">
                      39
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=40">
                      40
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=41">
                      41
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=42">
                      42
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=43">
                      43
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=44">
                      44
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=45">
                      45
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=46">
                      46
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=47">
                      47
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=48">
                      48
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=49">
                      49
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=50">
                      50
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=51">
                      51
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=52">
                      52
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=53">
                      53
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=54">
                      54
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=55">
                      55
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=56">
                      56
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=57">
                      57
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=58">
                      58
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=59">
                      59
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=60">
                      60
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=61">
                      61
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=62">
                      62
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=63">
                      63
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=64">
                      64
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=65">
                      65
                    </a>
                  </li>
                  <li>
                    <a href="https://www.propertyturkey.com/tv?sort=latest&page=66">
                      66
                    </a>
                  </li>{" "}
                  <li className="next">
                    <a
                      className="icon-chevron-right"
                      href="https://www.propertyturkey.com/tv?sort=latest&page=2"
                    >
                      <b>Next</b>
                    </a>
                  </li>{" "}
                </ul>
                <div className="pagination-dropdown-con">
                  <h3>Page</h3>
                  <select className=" pagination-dropdown" />
                  <h3>
                    of <span className="pagination-lastPage" />
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}
        <aside className="widgets col-dis-3 col-tab-12 col-mob-12">
          <a href="#" id="scrolltopsmooth" style={{ display: "none" }}>
            <img src="https://www.propertyturkey.com/front/image/scrollTop.svg" />
          </a>
          <div className="widget" id="tv-topvideo">
            <h3 className="title" style={{}}>
              Top Videos
            </h3>
            <div
              className="videos-cards owl-carousel carousel owl-images-initialized owl-loaded owl-drag"
              items={1}
              touch={1}
            >
              <div className="owl-stage-outer">
                <div
                  className="owl-stage"
                  style={{
                    transform: "translate3d(0px, 0px, 0px)",
                    transition: "all 0s ease 0s",
                    width: 2446,
                    paddingLeft: 30,
                    paddingRight: 30
                  }}
                >
                  <div
                    className="owl-item active"
                    style={{ width: "447.109px", marginRight: 30 }}
                  >
                    <article
                      className="card videos-cards-item"
                      data-video="xHBwafSQsyg"
                    >
                      <figure
                        className="videos-cards-item-fgirue"
                        data-id={369}
                      >
                        <a
                          data-fancybox=""
                          data-caption="In this episode, we talk about the expected impact of the recent Earthquake and how that will likely affect the Turkish Real Estate Market now and going forward. You can also find out how to donate."
                          href="https://www.youtube.com/watch?v=xHBwafSQsyg"
                        >
                          <img
                            src="https://img.youtube.com/vi/xHBwafSQsyg/hqdefault.jpg"
                            alt="Turkish Real Estate Scene Will Change Post Earthquake"
                          />
                        </a>
                      </figure>
                      <div className="container">
                        <div
                          className="videos-cards-item-details"
                          data-video=""
                        >
                          <a
                            data-fancybox=""
                            data-caption="In this episode, we talk about the expected impact of the recent Earthquake and how that will likely affect the Turkish Real Estate Market now and going forward. You can also find out how to donate."
                            href="https://www.youtube.com/watch?v=xHBwafSQsyg"
                          >
                            <h3 className="videos-cards-item-details-title">
                              Turkish Real Estate Scene Will Change Post
                              Earthquake
                            </h3>
                          </a>
                        </div>
                      </div>
                      <div className="flex content-center items-center text-center video-bordertop">
                        <label className="tvlist-card--clock-eye padding-ver-05">
                          <i
                            className="fa fa-clock-o clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 2023/03/05 &nbsp; | &nbsp;{" "}
                          <i
                            className="fa fa-eye clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 6143
                        </label>
                      </div>
                    </article>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "447.109px", marginRight: 30 }}
                  >
                    <article
                      className="card videos-cards-item"
                      data-video="AnzE4MbycWM"
                    >
                      <figure
                        className="videos-cards-item-fgirue"
                        data-id={364}
                      >
                        <a
                          data-fancybox=""
                          data-caption="Designed and built in collaboration with Designer Turkey and the award-winning Saffet Kaya Architects, these affordable-luxury Sense Levent apartments are nestled within a strategic spot of Kagithane."
                          href="https://www.youtube.com/watch?v=AnzE4MbycWM"
                        >
                          <img
                            src="https://img.youtube.com/vi/AnzE4MbycWM/hqdefault.jpg"
                            alt="2023’s Best Project for Investment l Sense Levent"
                          />
                        </a>
                      </figure>
                      <div className="container">
                        <div
                          className="videos-cards-item-details"
                          data-video=""
                        >
                          <a
                            data-fancybox=""
                            data-caption="Designed and built in collaboration with Designer Turkey and the award-winning Saffet Kaya Architects, these affordable-luxury Sense Levent apartments are nestled within a strategic spot of Kagithane."
                            href="https://www.youtube.com/watch?v=AnzE4MbycWM"
                          >
                            <h3 className="videos-cards-item-details-title">
                              2023’s Best Project for Investment l Sense Levent
                            </h3>
                          </a>
                        </div>
                      </div>
                      <div className="flex content-center items-center text-center video-bordertop">
                        <label className="tvlist-card--clock-eye padding-ver-05">
                          <i
                            className="fa fa-clock-o clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 2023/03/05 &nbsp; | &nbsp;{" "}
                          <i
                            className="fa fa-eye clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 5326
                        </label>
                      </div>
                    </article>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "447.109px", marginRight: 30 }}
                  >
                    <article
                      className="card videos-cards-item"
                      data-video="yrsSmDiRv8c"
                    >
                      <figure
                        className="videos-cards-item-fgirue"
                        data-id={361}
                      >
                        <a
                          data-fancybox=""
                          data-caption="We talk about what's happening with the global housing slump and why Turkey's way of dealing with it is an unorthodox policy as it is a safer bet for home buyers and Turkish real estate investors."
                          href="https://www.youtube.com/watch?v=yrsSmDiRv8c"
                        >
                          <img
                            src="https://img.youtube.com/vi/yrsSmDiRv8c/hqdefault.jpg"
                            alt="Turkish real estate a SAFER BET against Expected Global Housing SLUMP"
                          />
                        </a>
                      </figure>
                      <div className="container">
                        <div
                          className="videos-cards-item-details"
                          data-video=""
                        >
                          <a
                            data-fancybox=""
                            data-caption="We talk about what's happening with the global housing slump and why Turkey's way of dealing with it is an unorthodox policy as it is a safer bet for home buyers and Turkish real estate investors."
                            href="https://www.youtube.com/watch?v=yrsSmDiRv8c"
                          >
                            <h3 className="videos-cards-item-details-title">
                              Turkish real estate a SAFER BET against Expected
                              Global Housing SLUMP
                            </h3>
                          </a>
                        </div>
                      </div>
                      <div className="flex content-center items-center text-center video-bordertop">
                        <label className="tvlist-card--clock-eye padding-ver-05">
                          <i
                            className="fa fa-clock-o clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 2023/03/05 &nbsp; | &nbsp;{" "}
                          <i
                            className="fa fa-eye clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 4538
                        </label>
                      </div>
                    </article>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "447.109px", marginRight: 30 }}
                  >
                    <article
                      className="card videos-cards-item"
                      data-video="pkrNuLGNhbM"
                    >
                      <figure
                        className="videos-cards-item-fgirue"
                        data-id={373}
                      >
                        <a
                          data-fancybox=""
                          data-caption="With panoramic views heading out across the sea and Golden Horn, these luxury-designed Big Life near Little Bosphorus properties are for sale in Halic area of Istanbul and are ripe for investment."
                          href="https://www.youtube.com/watch?v=pkrNuLGNhbM"
                        >
                          <img
                            src="https://img.youtube.com/vi/pkrNuLGNhbM/hqdefault.jpg"
                            alt="Early Bird Investment Opportunity for Huge Gains"
                          />
                        </a>
                      </figure>
                      <div className="container">
                        <div
                          className="videos-cards-item-details"
                          data-video=""
                        >
                          <a
                            data-fancybox=""
                            data-caption="With panoramic views heading out across the sea and Golden Horn, these luxury-designed Big Life near Little Bosphorus properties are for sale in Halic area of Istanbul and are ripe for investment."
                            href="https://www.youtube.com/watch?v=pkrNuLGNhbM"
                          >
                            <h3 className="videos-cards-item-details-title">
                              Early Bird Investment Opportunity for Huge Gains
                            </h3>
                          </a>
                        </div>
                      </div>
                      <div className="flex content-center items-center text-center video-bordertop">
                        <label className="tvlist-card--clock-eye padding-ver-05">
                          <i
                            className="fa fa-clock-o clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 2023/03/05 &nbsp; | &nbsp;{" "}
                          <i
                            className="fa fa-eye clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 4023
                        </label>
                      </div>
                    </article>
                  </div>
                  <div
                    className="owl-item"
                    style={{ width: "447.109px", marginRight: 30 }}
                  >
                    <article
                      className="card videos-cards-item"
                      data-video="B2g7571VBe8"
                    >
                      <figure
                        className="videos-cards-item-fgirue"
                        data-id={365}
                      >
                        <a
                          data-fancybox=""
                          data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                          href="https://www.youtube.com/watch?v=B2g7571VBe8"
                        >
                          <img
                            src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                            alt="13 AMAZING Facts About Turkey"
                          />
                        </a>
                      </figure>
                      <div className="container">
                        <div
                          className="videos-cards-item-details"
                          data-video=""
                        >
                          <a
                            data-fancybox=""
                            data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                            href="https://www.youtube.com/watch?v=B2g7571VBe8"
                          >
                            <h3 className="videos-cards-item-details-title">
                              13 AMAZING Facts About Turkey
                            </h3>
                          </a>
                        </div>
                      </div>
                      <div className="flex content-center items-center text-center video-bordertop">
                        <label className="tvlist-card--clock-eye padding-ver-05">
                          <i
                            className="fa fa-clock-o clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 2023/03/05 &nbsp; | &nbsp;{" "}
                          <i
                            className="fa fa-eye clr-pt-darkred"
                            aria-hidden="true"
                          />{" "}
                          &nbsp; 3892
                        </label>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="owl-nav">
                <button type="button" role="presentation" className="owl-prev">
                  <i className="fa fa-angle-left" />
                </button>
                <button type="button" role="presentation" className="owl-next">
                  <i className="fa fa-angle-right" />
                </button>
              </div>
              <div className="owl-dots">
                <button role="button" className="owl-dot active">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
                <button role="button" className="owl-dot">
                  <span />
                </button>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <div id="subscribe-media-modal" style={{ display: "none", padding: 0 }}>
        <div className="container subscribe-media">
          <div className="box white clearfix" style={{ marginTop: "1rem" }}>
            <section id="search">
              <h3 className="title text-center clr-pt-darkgrey abhaya font-2">
                Subscribe To Our Media
              </h3>
            </section>
            <form
              action="https://www.propertyturkey.com/subscribe-to-media"
              method="post"
            >
              <label htmlFor="email">
                Full Name :
                <input type="text" name="full_name" id="email" />
              </label>
              <label htmlFor="email">
                Email :
                <input type="email" name="email" id="email" />
              </label>
              <label htmlFor="email">
                Telephone :
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
                    type="text"
                    className="input-tel"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    placeholder="+92 301 2345678"
                  />
                </div>
              </label>
              <label htmlFor="email">
                Notes :
                <input type="text" name="notes" id="notes" />
              </label>
              <input
                name="requestUrl"
                type="hidden"
                defaultValue="https://www.propertyturkey.com/real_estate/6901-little-bosphorus-investment-opportunity-historic-istanbul-centre"
              />
              <label htmlFor="to_news">
                Subscribe To our News
                <input type="checkbox" name="to_news" defaultChecked="" id="" />
              </label>
              <label htmlFor="to_news">
                Subscribe To our Blog
                <input type="checkbox" name="to_blog" defaultChecked="" id="" />
              </label>
              <label htmlFor="to_news">
                Subscribe To our videos
                <input
                  type="checkbox"
                  name="to_videos"
                  defaultChecked=""
                  id=""
                />
              </label>
              <div
                className="g-recaptcha"
                data-sitekey="6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC"
              >
                <div style={{ width: 304, height: 78 }}>
                  <div>
                    <iframe
                      title="reCAPTCHA"
                      src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC&co=aHR0cHM6Ly93d3cucHJvcGVydHl0dXJrZXkuY29tOjQ0Mw..&hl=en&v=NZrMWHVy58-S9gVvad9HVGxk&size=normal&cb=9jf63c4g75v7"
                      width={304}
                      height={78}
                      role="presentation"
                      name="a-mbyc88u2mvl6"
                      frameBorder={0}
                      scrolling="no"
                      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"
                    />
                  </div>
                  <textarea
                    id="g-recaptcha-response"
                    name="g-recaptcha-response"
                    className="g-recaptcha-response"
                    style={{
                      width: 250,
                      height: 40,
                      border: "1px solid rgb(193, 193, 193)",
                      margin: "10px 25px",
                      padding: 0,
                      resize: "none",
                      display: "none"
                    }}
                    defaultValue={""}
                  />
                </div>
                <iframe style={{ display: "none" }} />
              </div>
              <input
                type="text"
                style={{ display: "none" }}
                name="enqID"
                defaultValue=""
              />
              <input
                type="submit"
                defaultValue="Join Us"
                className="btn contactus-hover bg-pt crl-white"
              />
            </form>
          </div>
        </div>
      </div>{" "}
      <div className="fixed-bottom-onscroll-sub-btn d-mobile">
        <a
          className="view-all-btn btn rednew-border"
          data-fancybox=""
          data-src="#subscribe-media-modal"
          href="javascript:;"
        >
          <span>Subscribe to get the latest videos</span>
        </a>
      </div>
    </div>
  </div>
</section>

  )
}
