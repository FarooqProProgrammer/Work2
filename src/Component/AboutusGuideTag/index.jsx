import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
  },
  desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
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

export default function AboutusGuideTag() {
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
          <a >
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
          About Us
          <meta itemProp="name" content="About Us" />
          <meta
            itemProp="item"
            content="https://www.propertyturkey.com/about-us"
          />
          <meta itemProp="position" content={4} />
        </span>
      </div>
    </div>
    <div
      className="article-container"
      itemScope=""
      itemType="http://schema.org/Article"
    >
      <div className="endpage-main-intro ">
        <div className="endpage-title-actions">
          <div className="endpage-title">
            <meta
              itemProp="url"
              content="https://www.propertyturkey.com/about-us"
            />
            <h3 className="d-mobile">
              <label className="date">Updated : 24 April 2020</label>
              <label className="date ">Created : 16 May 2013</label>
            </h3>
            <div className="endpage-actions d-mobile share-btn-pos">
              <a href="#" className="social-shares">
                <img
                  src="https://www.propertyturkey.com/front/image/icons/share-alt-solid.-gold.svg"
                  width={21}
                  alt=""
                />
              </a>
            </div>
            <h1 itemProp="name headline" className="page-title abhaya">
              About Us
            </h1>
            <h3 className="d-desk">
              <div className="flex">
                <div className="d-desk"></div>
                <label className="date no-margin">
                  <span className="clr-pt">Updated</span> : 24 April 2020
                </label>
                <label className="date no-margin ml-1-important">
                  <span className="clr-pt">Created</span> : 16 May 2013
                </label>
              </div>
            </h3>
            <div className="d-mobile"></div>
          </div>
          <div className="endpage-actions d-desk">
            <a href="#" className="social-shares">
              <img
                src="https://www.propertyturkey.com/front/image/icons/Path302.svg"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
      <div className="page-content-container wrap-dis-9 wrap wrap-tab-11 wrap-mob-11 ">
        <article className="page-content col-dis-9 col-tab-9 col-mob-12 no-padding">
          <div
            className="areabody clearfix f-15-h15"
            itemProp="articleBody"
            id="iframe-width-about"
          >
            <p>
              <span
                className="fr-video fr-dvb fr-draggable"
                contentEditable="false"
                draggable="true"
              >
                <iframe
                  src="https://www.youtube.com/embed/preRes-n9Ew"
                  title="YouTube video player"
                  frameBorder={0}
                  allowFullScreen=""
                  style={{ width: "100%", height: 550 }}
                />
              </span>
              <br />
            </p>
            <h4>
              <strong>Vision Statement</strong>
            </h4>
            <p>
              To be the most trusted reference for lifestyle and investment
              property in Turkey.
            </p>
            <p>
              <br />
            </p>
            <h4>
              <span
                style={{
                  color: "rgb(255, 0, 0)",
                  fontSize: 18,
                  lineHeight: "1.1"
                }}
              >
                <strong>Mission Statement</strong>
              </span>
            </h4>
            <p>
              To open up Turkey's lifestyle and investment opportunities to a
              global audience.&nbsp;
            </p>
            <p>
              To use our passion and knowledge to inspire and empower people to
              invest in their future.
            </p>
            <p>
              <br />
            </p>
            <h2 style={{ textAlign: "left" }}>
              <strong>The Property Turkey Difference</strong>
            </h2>
            <p>
              With 20+ years experience in the Turkish real estate market, team
              Property Turkey are your experienced, friendly, and independent
              overseas real estate consultants. Our head office is located in
              London, UK with regional operational offices in:&nbsp;
            </p>
            <p>
              <a
                
                title=""
              >
                Bodrum
              </a>
              &nbsp;
            </p>
            <p>
              <a
                
                title=""
              >
                Fethiye &amp; Kalkan
              </a>
              &nbsp;
            </p>
            <p>
              <a
                
                title=""
              >
                Antalya
              </a>{" "}
              &nbsp;
            </p>
            <p>
              <a
                
                title=""
              >
                Istanbul
              </a>
              &nbsp;
            </p>
            <p>
              For us buying a property in Turkey is not about buying 'bricks and
              mortar' but about 'lifestyle and investment'.
            </p>
            <p>
              <img
                alt="Property Turkey"
                className="fr-image-dropped fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/turkey_1.png"
                title="Property Turkey"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Industry Leaders</strong>
            </h2>
            <p>
              In the crowded field of Turkish investment and property, Property
              Turkey stands head and shoulders above the rest. Our success in
              Turkish real estate and investment over the past 20+ years has
              cemented our position as industry leaders and experts.
              Client-focused, knowledgeable and thorough, we’re simply the most
              effective investment consultants for property in Turkey.
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Years In The Making</strong>
            </h2>
            <p>
              Over the past 20+ years we’ve developed our business and our brand,
              helping almost 10,000 clients from multiple countries invest in
              thousands of properties in Istanbul and the Turkish Mediterranean.
              Our dedication and passion for property in Turkey is at the heart of
              everything we do, and allows us to exceed our clients’ expectation
              time and again.
            </p>
            <p>
              <img
                alt="A decade in the making"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/longevity_1.png"
                title="A decade in the making"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Bargaining Power</strong>
            </h2>
            <p>
              Longevity promotes reputation. Our status as industry leader means
              we’re not only the leading authority on Turkish real estate, but
              means our bargaining power is second to none. Our network of
              contacts and our longstanding relationships with developers and
              sellers means we’re able to secure favourable prices and terms,
              offering our clients unmatched opportunities.
            </p>
            <p>
              <img
                alt="Bargaining power"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/bargaining-power_1.png"
                title="Bargaining power"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Diverse Portfolio</strong>
            </h2>
            <p>
              We work with everyone from individual private investors and
              homeowners to large developers and institutional investors, and our
              portfolio reflects our diverse client base. With three times as many
              properties as our closest competitor, we are confident we can cater
              to your specific requirements. And if you can’t see the right
              opportunity on our website, we have the resources find it for you.
            </p>
            <p>
              <img
                alt="Diverse portfolio"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/deal-with_1.png"
                title="Diverse portfolio"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Online Strength</strong>
            </h2>
            <p>
              The Internet has revolutionised the way people market, search for
              and invest in real estate. Property Turkey strives to maintain a
              strong online presence by keeping up with and implementing the
              latest technologies. Our online visibility means we have the ideal
              platform from which to market our properties and convey information
              to thousands of clients across the globe.
            </p>
            <p>
              <img
                alt="Online strength"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/strength_1.png"
                title="Online strength"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Our Team</strong>
            </h2>
            <p>
              Though our offices are spread far and wide, our experienced advisors
              share a common goal that goes far beyond dealing with bricks and
              mortar: we’re lifestyle consultants with a passion for sharing our
              knowledge and expertise. Our authority and experience in Turkish
              real estate has led to interviews with international media outlets,
              including the BBC’s World Service, the Daily Mail, the Telegraph and
              the New York Times.
            </p>
            <p>
              <img
                alt="Our team"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/consultancy_b_copy.png"
                title="Our team"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>Our Offices</strong>
            </h2>
            <p>
              Headed by director Cameron Deggin, our consultants work together to
              provide an unrivalled, specialised service in their respective
              fields and regions.
            </p>
            <p>
              Headquartered in London with offices in Istanbul, Bodrum, Fethiye,
              Antalya and Kalkan, each office is staffed by highly trained and
              experienced consultants. Our offices are highly regarded, with a
              reputation for providing clients with the local knowledge necessary
              for investment or lifestyle purchases.
            </p>
            <p>
              <img
                alt="Offices in London and Turkey"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/offices_1.png"
                title="Offices in London and Turkey"
                style={{ width: 1200 }}
              />
            </p>
            <p>
              <br />
            </p>
            <h2>
              <strong>The Property Turkey Experience</strong>
            </h2>
            <p>
              Property Turkey does not use agents or intermediaries. Each regional
              office is staffed by our very own trained consultants. As well as
              keeping prices down for our clients, this strategy means service
              quality stays high, wherever you are: our clients receive the same
              expert client care from London to Istanbul to Fethiye.
            </p>
            <p>
              <img
                alt="The property Turkey experience"
                className="fr-fin fr-dib fr-draggable"
                src="/uploads/pages/larg/middleman_1.png"
                title="The property Turkey experience"
                style={{ width: 1200 }}
              />
            </p>
          </div>
          <div className="cameron-section-aboutus">
            <div className="col-12 col-md-9 no-padding">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-3 position-relative text-center">
                      <div className="position-abs">
                        <img
                          data-src="https://www.propertyturkey.com/front/image/images2019/Images/trianglered.png"
                          className="lazyload"
                          alt=""
                        />
                      </div>
                      <div
                        className="owl-carousel carousel owl-images-initialized owl-loaded owl-drag"
                        items={1}
                        touch={1}
                        dots={1}
                      >
                        <div className="owl-stage-outer">
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(0px, 0px, 0px)",
                              transition: "all 0s ease 0s",
                              width: 779,
                              paddingLeft: 30,
                              paddingRight: 30
                            }}
                          >
                            <div
                              className="owl-item active"
                              style={{ width: "329.156px", marginRight: 30 }}
                            >
                              <img
                                data-src="https://www.propertyturkey.com/front/image/images2019/Images/cameron1.png"
                                className="lazyload"
                                alt=""
                              />
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: "329.156px", marginRight: 30 }}
                            >
                              <img
                                data-src="https://www.propertyturkey.com/front/image/images2019/Images/cameron2.png"
                                className="lazyload"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <button
                            type="button"
                            role="presentation"
                            className="owl-prev"
                          >
                            <i className="fa fa-angle-left" />
                          </button>
                          <button
                            type="button"
                            role="presentation"
                            className="owl-next"
                          >
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
                        </div>
                      </div>
                      <p className="cameron-section-author">Cameron Deggin</p>
                      <p className="cameron-section-pturkey">Property Turkey</p>
                    </div>
                    <div className="col-md-9 cameron-section-quotesbg flex items-center">
                      <p className="cameron-section-blackquote">
                        “Property Turkey is different: our interests lie with you,
                        the buyer. Contrary to industry practices, we don’t
                        receive any payments from sellers, which means we maintain
                        our independence and can focus on securing you the best
                        possible terms. We aim to provide candid, expert advice on
                        everything Turkey, from lifestyle purchases to investment.
                        We know you’re not just buying bricks and mortar - but
                        making an investment into your lifestyle. From first
                        contact to rental management, we’ll be by your side to
                        guide and assist you."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <p className="margin-top-3">
                {" "}
                <span style={{ lineHeight: "1.6em" }}>
                  Contact us via telephone&nbsp;
                </span>
                <em style={{ lineHeight: "1.6em" }}>
                  <strong>+44 (0) 20 8371 0059</strong>
                </em>
                <span style={{ lineHeight: "1.6em" }}>
                  &nbsp;or via email&nbsp;
                </span>
                <a href="mailto:info@propertyturkey.com">
                  <em style={{ lineHeight: "1.6em" }}>
                    <strong>info@propertyturkey.com</strong>
                  </em>
                </a>
                <span style={{ lineHeight: "1.6em" }}>
                  &nbsp;and one of our knowledgeable and friendly team will get
                  back to you with the advice and assistance that you need.
                  <br />
                  <br />
                  PropertyTurkey.com was designed and developed by{" "}
                  <em>
                    <strong>
                      <a >BuxUp.co.uk</a>
                    </strong>
                  </em>
                </span>
                <br />
                <br />
                <br />
                &nbsp;
              </p>
            </div>
          </div>
          {/*  */}
          <meta itemProp="author" content="Cameron Deggin" />
          <span
            itemProp="image"
            itemScope=""
            itemType="http://schema.org/ImageObject"
          >
            <meta
              itemProp="url"
              content="https://www.propertyturkey.com/files/large/dummy"
            />
            <meta itemProp="height" content={800} />
            <meta itemProp="width" content={800} />
          </span>
          <meta
            itemProp="mainEntityOfPage"
            content="https://www.propertyturkey.com/about-us"
          />
          <meta itemProp="datePublished" content="2013-05-16 06:46:10" />
          <meta itemProp="dateModified" content="2020-04-24 18:46:40" />
          <span
            itemProp="publisher"
            itemScope=""
            itemType="http://schema.org/Organization"
          >
            <meta itemProp="name" content="Property Turkey" />
            <span
              itemProp="logo"
              itemScope=""
              itemType="http://schema.org/ImageObject"
            >
              <meta
                itemProp="url"
                content="https://www.propertyturkey.com/front/image/logo.png"
              />
            </span>
            <meta itemProp="url" content="https://www.propertyturkey.com" />
          </span>
        </article>
        {/*  */}
        <section
            id="new-properties"
            className="col-dis-3 col-tab-3 col-mob-12 widget aboutus-straigntalk prev-next-owl-style"
        >
            <h2 className="abhaya title" style={{}}>
                Straight Talk - <br />
                Property Turkey TV
            </h2>
            <Carousel responsive={responsive} >
                <div className="card">
                    <a
                        data-fancybox=""
                        data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                        
                        className="video-item right-padding-only mb-sm-15 p-17"
                    >
                        <div className="figure-container">
                            <figure>
                                <img
                                    src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                                    className="card-img-top"
                                    alt="13 AMAZING Facts About Turkey"
                                />
                                <img
                                    className="homeVideos-item-play"
                                    id="videos-about-turkey"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                                />
                            </figure>
                        </div>
                    </a>
                    <div className="card-body">
                        <h2 itemProp="name headline" className="abhaya">
                            13 AMAZING Facts About Turkey
                        </h2>
                    </div>
                </div>
                <div className="card">
                    <a
                        data-fancybox=""
                        data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                        
                        className="video-item right-padding-only mb-sm-15 p-17"
                    >
                        <div className="figure-container">
                            <figure>
                                <img
                                    src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                                    className="card-img-top"
                                    alt="13 AMAZING Facts About Turkey"
                                />
                                <img
                                    className="homeVideos-item-play"
                                    id="videos-about-turkey"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                                />
                            </figure>
                        </div>
                    </a>
                    <div className="card-body">
                        <h2 itemProp="name headline" className="abhaya">
                            13 AMAZING Facts About Turkey
                        </h2>
                    </div>
                </div>
                <div className="card">
                    <a
                        data-fancybox=""
                        data-caption="Did you know that Turkey is the centre of the world? Did you know that Santa Claus was born in Turkey? Discover how, as well as several other amazing facts about Turkey in this new fun episode."
                        
                        className="video-item right-padding-only mb-sm-15 p-17"
                    >
                        <div className="figure-container">
                            <figure>
                                <img
                                    src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                                    className="card-img-top"
                                    alt="13 AMAZING Facts About Turkey"
                                />
                                <img
                                    className="homeVideos-item-play"
                                    id="videos-about-turkey"
                                    src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                                />
                            </figure>
                        </div>
                    </a>
                    <div className="card-body">
                        <h2 itemProp="name headline" className="abhaya">
                            13 AMAZING Facts About Turkey
                        </h2>
                    </div>
                </div>

            </Carousel>

            <a
                className="view-all-btn btn margin-top-2 rednew-border"
                style={{ padding: ".5rem 2rem !important", backgroundColor: "transparent" }}
                
            >
                <span>View All</span>
            </a>
        </section>
        <aside className="widgets col-dis-3 col-tab-3 col-mob-12 no-padding widget-blogendpage">
          <a
            
            title="download our online borchour"
            target="_blank"
          >
            <img
              data-src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
              alt="download our online borchour"
              className="w-100 margin-top-1 lazyloaded"
              src="https://www.propertyturkey.com/front/image/pt-brochure-download.jpg"
            />
          </a>
          <div className="widget noheader nostyle-widget">
            <div className="header-img-buyerguide">
              <div className="container">
                <h3 className="title no-margin bold">BUYER'S GUIDE</h3>
                <p>The Definitive guide to buying property in Turkey</p>
                <div className="padding-bottom-11">
                  <a
                    
                    title="Definitive Buyer Guide PDF"
                    className="btn right-widget-hover"
                  >
                    Download it now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="widget">
            <h3 className="title">Latest Posts</h3>
            <div className="body">
              <ul className="no-bullet">
                <li>
                  <a
                    
                    title="Big Life by the Little Bosphorus Istanbul"
                  >
                    Big Life by the Little Bosphorus Istanbul
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Turkish Citizenship benefits for Foreign Investors"
                  >
                    Turkish Citizenship benefits for Foreign Investors
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Experience Old Constantinople Through the Old Hippodrome"
                  >
                    Experience Old Constantinople Through the Old Hippodrome
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Famous Bosphorus Bridges of Istanbul"
                  >
                    Famous Bosphorus Bridges of Istanbul
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Soaring High in the Majestic Taurus Mountains of Turkey"
                  >
                    Soaring High in the Majestic Taurus Mountains of Turkey
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Turkey Earthquake Exposes the Need for Massive Urban Regeneration"
                  >
                    Turkey Earthquake Exposes the Need for Massive Urban
                    Regeneration
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Sultanahmet and the Old City of Istanbul from Past to Present"
                  >
                    Sultanahmet and the Old City of Istanbul from Past to Present
                  </a>
                </li>
                <li>
                  <a
                    
                    title="From Constantinople to Istanbul – The Pride of Turkey"
                  >
                    From Constantinople to Istanbul – The Pride of Turkey
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Why You Should Visit Izmir in Aegean Turkey"
                  >
                    Why You Should Visit Izmir in Aegean Turkey
                  </a>
                </li>
                <li>
                  <a
                    
                    title="The Glorious Golden Horn of Istanbul"
                  >
                    The Glorious Golden Horn of Istanbul
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="widget">
            <h3 className="title">Latest News</h3>
            <div className="body">
              <ul className="no-bullet">
                <li>
                  <a
                    
                    title="Turkey to designate 15 more 'nature conservation areas'"
                  >
                    Turkey to designate 15 more 'nature conservation areas'
                  </a>
                </li>
                <li>
                  <a
                    
                    title="January tourism records broken in Turkey’s Antalya"
                  >
                    January tourism records broken in Turkey’s Antalya
                  </a>
                </li>
                <li>
                  <a
                    
                    title="1 million cruise passengers hosted in Turkey in 2022"
                  >
                    1 million cruise passengers hosted in Turkey in 2022
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Record visitors head to Cappadocia in January"
                  >
                    Record visitors head to Cappadocia in January
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Turkey looks to expand free program to 5 million students"
                  >
                    Turkey looks to expand free program to 5 million students
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Top migration hub of Turkey remains Istanbul once again"
                  >
                    Top migration hub of Turkey remains Istanbul once again
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Europe’s busiest airport in 2022: Istanbul Airport"
                  >
                    Europe’s busiest airport in 2022: Istanbul Airport
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Integration of new metro welcomed in Istanbul"
                  >
                    Integration of new metro welcomed in Istanbul
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Foreign arrivals to Turkey continue to increase"
                  >
                    Foreign arrivals to Turkey continue to increase
                  </a>
                </li>
                <li>
                  <a
                    
                    title="Over 30,000 passengers arrive to Antalya by cruise"
                  >
                    Over 30,000 passengers arrive to Antalya by cruise
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </aside>
      </div>
    </div>
    <div style={{ display: "none" }} id="logins1">
      <div className="container text-center">
        <div className="register-form">
          <div>
            {" "}
            <img
              data-src="https://www.propertyturkey.com/front/image/logo.png"
              width={80}
              className="img-fluid lazyload"
              alt="Property Turkey"
            />{" "}
          </div>
          <h3 className="margin-bottom-3 margin-top-1">
            Sign up to Save Properties
          </h3>
          <form
            method="POST"
            action="https://www.propertyturkey.com/register"
            acceptCharset="UTF-8"
            className="padding-top-15 randompassform"
            noValidate="novalidate"
          >
            <input
              name="_token"
              type="hidden"
              defaultValue="ihhrAO3DxYL58JpSv7hQAlPr3on06wStOZvY7o0d"
            />
            <div className="form-field">
              <label>Name</label>
              <input
                placeholder="Name"
                validation=""
                name="firstName"
                type="text"
              />
            </div>
            <div className="form-field">
              <label>E-mail*</label>
              <input
                placeholder="E-mail"
                validation="email"
                name="email"
                type="email"
              />
            </div>
            <div className="form-field">
              <label> Contact Number*</label>
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
                  placeholder="Mobile"
                  className="input-tel"
                  name="mobile"
                  type="text"
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-field hide">
              <label>Password*</label>
              <input
                placeholder="Password"
                validation=""
                name="password"
                type="password"
                defaultValue=""
              />
            </div>
            <div className="form-field hide">
              <label>Confirm Password*</label>
              <input
                placeholder="Confirm Password"
                validation=""
                name="confirm_password"
                type="password"
                defaultValue=""
              />
            </div>
            <input type="hidden" name="RegisterUser" defaultValue="" />
            <input
              className="btn btn-block bg-pt crl-white margin-ver-1"
              type="submit"
              defaultValue="Register"
            />
          </form>
          <p className="text-left">
            {" "}
            Do you have an account?{" "}
            <a className="clr-pt" >
              {" "}
              Login
            </a>
          </p>
        </div>
      </div>
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
              defaultValue="https://www.propertyturkey.com/buyer-guide"
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
              <input type="checkbox" name="to_videos" defaultChecked="" id="" />
            </label>
            <div
              className="g-recaptcha"
              data-sitekey="6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC"
            >
              <div style={{ width: 304, height: 78 }}>
                <div>
                  <iframe
                    title="reCAPTCHA"
                    src="https://www.google.com/recaptcha/api2/anchor?ar=1&k=6LfFDQQTAAAAAO0-2DYN263rC49ciW9xcQNHSCZC&co=aHR0cHM6Ly93d3cucHJvcGVydHl0dXJrZXkuY29tOjQ0Mw..&hl=en&v=NZrMWHVy58-S9gVvad9HVGxk&size=normal&cb=bgr97pxfnovv"
                    width={304}
                    height={78}
                    role="presentation"
                    name="a-eemfdpxxd52e"
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
    </div>
  </section>
  
  )
}
