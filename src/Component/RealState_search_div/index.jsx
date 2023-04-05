import React, { useState } from 'react';

import "./index.css"
import ListingCards from '../../ReUseAbleComponent/ListingCards';
import { RealState } from '../../Data';
const RealState_search_div = () => {
    const [isOpen, setIsOpen] = useState(false);
    const options = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6'];

    const toggleDropdown = () => {
        setIsOpen(true);
    };

    return (
       

        <section id="mainProperties" className="margin-top-2 mt-1-sm cardListing ">
  <div
    className="intro wrap-dis-9  wrap-tab-9 wrap-mob-9 clearfix' }}  introDescription"
    id="introDescription"
  >
    <h1 className="page-title" id="pageSearchTitle">
      All Turkish real estate for sale{" "}
    </h1>
    <div className="introText" style={{ display: "inline" }}>
      <p>
        Turkey is a vast country, over three times the size of the UK and some
        25% larger than France. Straddling between Europe and Asia, with almost
        7,000 kilometres of Mediterranean, Aegean and Black Sea, Turkey is home
        to&nbsp;a unique mosaic of cultures, diverse landscape and dynamic
        social make up. If you are looking for property overseas, wish to buy a
        holiday home in the sun, a place to retire or purely real estate
        investment in an upwardly mobile country, then no search is complete
        without having a good look at Turkish real estate for sale.
      </p>
    </div>
    <div className="details" style={{ display: "none" }}>
      <p>
        Turkey is a vast country, over three times the size of the UK and some
        25% larger than France. Straddling between Europe and Asia, with almost
        7,000 kilometres of Mediterranean, Aegean and Black Sea, Turkey is home
        to&nbsp;a unique mosaic of cultures, diverse landscape and dynamic
        social make up. If you are looking for property overseas, wish to buy a
        holiday home in the sun, a place to retire or purely real estate
        investment in an upwardly mobile country, then no search is complete
        without having a good look at Turkish real estate for sale.
      </p>
      <p>
        <img
          data-fr-image-pasted="true"
          alt="Turkey real estate map"
          data-pyroimage="true"
          height={171}
          src="https://www.propertyturkey.com/files/large/turkey-real-estate-map.jpg"
          title="Turkey real estate map"
          width={230}
          className="fr-fic fr-dii"
        />
      </p>
      <p>
        <strong>Where to buy a holiday home in Turkey?</strong>&nbsp;
      </p>
      <p>
        With so many lovely resorts and towns to choose from, it is a task in
        itself to decide where to buy that special{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/villa">
          villa in Turkey
        </a>{" "}
        or that sea view apartment, which will be your new home in Turkey and
        double up for some rental income. According to statistics published by
        the Turkish real estate agents association, Antalya, Fethiye, Bodrum and
        Side are the most popular holiday home destinations in Turkey.{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/antalya">
          Properties in Antalya
        </a>{" "}
        enjoy the proximity of a bustling seaside city with lovely beaches and
        excellent golf courses of Belek, whereas{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/kalkan">
          Kalkan properties
        </a>{" "}
        provide some of the most dramatic sea views experienced in the entire
        Mediterranean, not to mention Kalkan's elegant setting and fine dining.{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/side">
          Side holiday homes for sale
        </a>{" "}
        are ideal for families with children, where shallow waters gently touch
        sandy shores.{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/bodrum">
          Real estate in Bodrum
        </a>{" "}
        on the other hand is your key to Turkey's most sophisticated resort with
        plenty of sailing and seafront homes in lovely Yalikavak, Turkbuku or
        Gumusluk. Then we have sun-soaked Fethiye with most affordable villas
        and{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/apartment">
          flats for sale in Turkey
        </a>{" "}
        near the most pictured Oludeniz beach. &nbsp;
      </p>
      <p>
        <strong>
          Looking to retire overseas - where should you buy your retirement home
          in Turkey?
        </strong>
      </p>
      <p>
        When considering a permanent move abroad and buying a property&nbsp;for
        year round living, there are some important factors to take into
        account. Proximity of amenities, hospitals, schools and a stable local
        community are&nbsp;some of the elements one would naturally look at. In
        our dealings with over 10,000 people from all over the world looking at
        Turkish real estate with a view to permanent living in Turkey, we
        find&nbsp;that properties in Fethiye, Bodrum and Antalya (including Side
        and Kemer) are natural favourites for year round living. They all have
        excellent climates with over 300 days of sunshine, mild winters and the
        right level of facilities to sustain year round living.
      </p>
      <p>
        <strong>Where to invest in Turkish real estate? &nbsp;</strong>
      </p>
      <p>
        With an average annual GDP growth in excess of 8% for 2010 - 2012
        period, Turkey has posted exceptional economic performance compared to
        the EU zone and indeed to BRICs (Brazil, Russia, India, China). In 2011
        and 2012 Turkey's economic expansion was only second to China. IMF
        estimates&nbsp;that Turkey will yet again outperform most BRICs
        countries and certainly the entire Euro zone in 2013 - 2017 period with
        an average annual expansion of 5%+ projected. Turkish real estate
        industry is currently one of the major growth sectors within Turkey.
        With a youth population of over 60% of entire 76 million and increasing
        wealth in the country, domestic demand for the Turkish real estate
        industry is fast climbing. Turkish real estate agents association
        estimates that by year 2015 there will be a shortage of around 2 million
        quality housing in Turkey just to accommodate domestic demand, this is
        not even counting the booming tourism sector, 6th most visited country
        in the world in 2011, which also puts a heavy demand on coastal hotel,
        villa and apartment projects. In 2011, property&nbsp;market in Turkey
        grew by some 18% compared to year before. Considering that at the same
        period Greece, Spain and Portugal came close to announcing bankruptcy
        underlines the viability of owning property in Turkey.
      </p>
      <p>
        <strong>
          Prime location Istanbul or better to look at prospering Antalya?
        </strong>
      </p>
      <p>
        From a purely investment viewpoint property for sale in Istanbul
        deserves a close look, however, one needs to be very selective. There
        are many offers on the market and not all are viable. We recommend real
        estate in&nbsp;Istanbul prime locations&nbsp;as opposed to heavily
        marketed bargain apartments on the outskirts of the city. Naturally,
        prime locations of Istanbul are expensive, therefore we suggest
        investors should have a good look at Antalya property market&nbsp;as a
        viable and exceptional alternative to prime location real estate of
        Istanbul.&nbsp;
      </p>
      <p>
        <strong>How about rental returns and capital growth?</strong>
      </p>
      <p>
        On the Mediterranean and Aegean coasts of Turkey, your holiday home in
        Antalya, Fethiye, Kalkan and Bodrum could easily deliver in excess of 6%
        rental returns after all expenses paid. Considering that the average
        rental yield in the UK is 4.8%, this is quite a strong return. Coupled
        with steep capital growth in several years, you could build your very
        own nest egg in Turkish real estate. Another interesting profile to
        underline is the beachfront Turkey property segment.
      </p>
      <p>
        <strong>
          Can you suggest a niche segment of Turkish real estate to keep an eye
          on?
        </strong>
      </p>
      <p>
        Keen investors and of course keen sailors alike should keep a solid eye
        on waterfront properties in Turkey. This is an incredibly lucrative
        segment of the Turkish real estate market. Compared to France, Spain and
        Italy, beachfront properties in Turkey come at one third the price tag
        for comparable villas and apartments. Luxury villas for sale at the
        seafront in Bodrum, Kalkan, Kas and Fethiye could be purchased from as
        little as Euro 400,000, whereas a comparable villa in Spain or France
        would cost no less than Euro 1.3m. This is a huge price gap and we
        suggest that it is an artificial one. We do not expect prices of beach
        front properties in France to come down for these are highly desirable
        homes, however, as more and more people discover the stunning coastline
        of Turkey, we expect waterfront homes in Turkey to appreciate quite
        significantly over the next 3-5 years. The number of foreign registered
        boats and yachts entering Turkish waters have tripled since 2005,
        clearly indicating that Turkey is becoming a desirable boating
        destination. Considering the breathtaking beauty of the bays and coves
        in the Aegean and Mediterranean waters of Turkey, this is not surprising
        at all.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
      </p>
    </div>
    <a href="#" className="show_hidev1">
      Continue Reading
    </a>
  </div>
  <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix">
    <div className="meta cf flex items-center listing-sort">
      <label className="fl-dis-left fl-tab-left fl-mob-left margin-right-auto">
        1 - <span className="totelperPage-listing">24</span> of{" "}
        <span className="totalpages-listing">6000</span> properties
      </label>
      <span className="d-mobile toggle-sorte">
        <span className="fw-bold">Sort By &nbsp;/ &nbsp;</span>
        <span className="raleway">Recommended Properties</span>
      </span>
      <a
        href="#"
        className="prev-action btn-prev-listing mt-15 margin-auto hide"
      >
        Previous Page
      </a>
      <div className="buttonlist margin-left-auto">
        <div className="buttonList-container">
          <a
            href="#"
            className="toggle-sorte fa fa-arrow-right showMb-hideDt"
          />
          <span className="d-desk">
            Sort By &nbsp;/ &nbsp;
            <b>Recommended Properties</b>
          </span>
          <div className="d-desk">
            <div className="anchorList">
              <a
                id="testsort-1a"
                href="https://www.propertyturkey.com/real_estate/turkey?r=desc"
                className="col-mob-4 btn small active"
                title="Recommended Properties"
                rel="nofollow"
              >
                Recommended Properties
              </a>
              <a
                id="testsort-2a"
                href="https://www.propertyturkey.com/real_estate/turkey?l=desc"
                className="col-mob-4 btn small "
                title="Latest Property"
                rel="nofollow"
              >
                Latest Property
              </a>
              <a
                id="testsort-3a"
                href="https://www.propertyturkey.com/real_estate/turkey?p=desc"
                className="col-mob-4 btn small "
                title="Highest Price"
                rel="nofollow"
              >
                Highest Price
              </a>
              <a
                id="testsort-4a"
                href="https://www.propertyturkey.com/real_estate/turkey?p=asc"
                className="col-mob-4 btn small "
                title="Lowest Price"
                rel="nofollow"
              >
                Lowest Price
              </a>
              <a
                id="testsort-5a"
                href="https://www.propertyturkey.com/real_estate/turkey?s=desc"
                className="col-mob-4 btn small "
                title="Highest Space"
                rel="nofollow"
              >
                Highest Space
              </a>
            </div>
          </div>
          <div className="anchorList d-mobile anchorList-new">
            <p className="sort">Sort</p>
            <p>
              <input
                type="radio"
                id="testsort-1"
                name="testsort"
                defaultValue="testsort-1a"
                className="radio-email-custom"
                defaultChecked=""
              />
              <label htmlFor="testsort-1"> Recommended Properties</label>
            </p>
            <p>
              <input
                type="radio"
                id="testsort-2"
                name="testsort"
                defaultValue="testsort-2a"
                className="radio-email-custom"
              />
              <label htmlFor="testsort-2"> Newest Listings</label>
            </p>
            <p>
              <input
                type="radio"
                id="testsort-3"
                name="testsort"
                defaultValue="testsort-3a"
                className="radio-email-custom"
              />
              <label htmlFor="testsort-3"> Highest Price</label>
            </p>
            <p>
              <input
                type="radio"
                id="testsort-4"
                name="testsort"
                defaultValue="testsort-4a"
                className="radio-email-custom"
              />
              <label htmlFor="testsort-4"> Lowest Price</label>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix mt-3">
    <div className="row cardRow">
            
            {
                RealState.map((item)=>{
                    return (
                        <ListingCards id={item.id} Area={item.Area} Des={item.Description} title={item.title} img={item.img} location={item.location} BannerText={item.ImagebannerText} />

                    )
                })
            }

      
      <div className="loading-pagination hide">
        <img src="https://www.propertyturkey.com/front/image/AjaxLoader.gif" />
      </div>
      <a href="#" className="btn btn-seemore-listing ">
        Show More Results
      </a>
    </div>
  </div>
  <div className="pagination">
    <ul>
      <li className="previous disabled">
        <span className="icon-chevron-left">
          <b>Previous</b>
        </span>
      </li>{" "}
      <li className="active" style={{ display: "none" }}>
        <span>1</span>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=2">2</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=3">3</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=4">4</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=5">5</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=6">6</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=7">7</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=8">8</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=9">9</a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=10">
          10
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=11">
          11
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=12">
          12
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=13">
          13
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=14">
          14
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=15">
          15
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=16">
          16
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=17">
          17
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=18">
          18
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=19">
          19
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=20">
          20
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=21">
          21
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=22">
          22
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=23">
          23
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=24">
          24
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=25">
          25
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=26">
          26
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=27">
          27
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=28">
          28
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=29">
          29
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=30">
          30
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=31">
          31
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=32">
          32
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=33">
          33
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=34">
          34
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=35">
          35
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=36">
          36
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=37">
          37
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=38">
          38
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=39">
          39
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=40">
          40
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=41">
          41
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=42">
          42
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=43">
          43
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=44">
          44
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=45">
          45
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=46">
          46
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=47">
          47
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=48">
          48
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=49">
          49
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=50">
          50
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=51">
          51
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=52">
          52
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=53">
          53
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=54">
          54
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=55">
          55
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=56">
          56
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=57">
          57
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=58">
          58
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=59">
          59
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=60">
          60
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=61">
          61
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=62">
          62
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=63">
          63
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=64">
          64
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=65">
          65
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=66">
          66
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=67">
          67
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=68">
          68
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=69">
          69
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=70">
          70
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=71">
          71
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=72">
          72
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=73">
          73
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=74">
          74
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=75">
          75
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=76">
          76
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=77">
          77
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=78">
          78
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=79">
          79
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=80">
          80
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=81">
          81
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=82">
          82
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=83">
          83
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=84">
          84
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=85">
          85
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=86">
          86
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=87">
          87
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=88">
          88
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=89">
          89
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=90">
          90
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=91">
          91
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=92">
          92
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=93">
          93
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=94">
          94
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=95">
          95
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=96">
          96
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=97">
          97
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=98">
          98
        </a>
      </li>
      <li style={{ display: "none" }}>
        <a href="https://www.propertyturkey.com/real_estate/turkey?page=99">
          99
        </a>
      </li>{" "}
      <li className="next">
        <a
          className="icon-chevron-right"
          href="https://www.propertyturkey.com/real_estate/turkey?page=2"
        >
          <b>Next</b>
        </a>
      </li>{" "}
    </ul>
    <div className="pagination-dropdown-con">
      <h3>Page</h3>
      <select className=" pagination-dropdown">
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
        <option value={11}>11</option>
        <option value={12}>12</option>
        <option value={13}>13</option>
        <option value={14}>14</option>
        <option value={15}>15</option>
        <option value={16}>16</option>
        <option value={17}>17</option>
        <option value={18}>18</option>
        <option value={19}>19</option>
        <option value={20}>20</option>
        <option value={21}>21</option>
        <option value={22}>22</option>
        <option value={23}>23</option>
        <option value={24}>24</option>
        <option value={25}>25</option>
        <option value={26}>26</option>
        <option value={27}>27</option>
        <option value={28}>28</option>
        <option value={29}>29</option>
        <option value={30}>30</option>
        <option value={31}>31</option>
        <option value={32}>32</option>
        <option value={33}>33</option>
        <option value={34}>34</option>
        <option value={35}>35</option>
        <option value={36}>36</option>
        <option value={37}>37</option>
        <option value={38}>38</option>
        <option value={39}>39</option>
        <option value={40}>40</option>
        <option value={41}>41</option>
        <option value={42}>42</option>
        <option value={43}>43</option>
        <option value={44}>44</option>
        <option value={45}>45</option>
        <option value={46}>46</option>
        <option value={47}>47</option>
        <option value={48}>48</option>
        <option value={49}>49</option>
        <option value={50}>50</option>
        <option value={51}>51</option>
        <option value={52}>52</option>
        <option value={53}>53</option>
        <option value={54}>54</option>
        <option value={55}>55</option>
        <option value={56}>56</option>
        <option value={57}>57</option>
        <option value={58}>58</option>
        <option value={59}>59</option>
        <option value={60}>60</option>
        <option value={61}>61</option>
        <option value={62}>62</option>
        <option value={63}>63</option>
        <option value={64}>64</option>
        <option value={65}>65</option>
        <option value={66}>66</option>
        <option value={67}>67</option>
        <option value={68}>68</option>
        <option value={69}>69</option>
        <option value={70}>70</option>
        <option value={71}>71</option>
        <option value={72}>72</option>
        <option value={73}>73</option>
        <option value={74}>74</option>
        <option value={75}>75</option>
        <option value={76}>76</option>
        <option value={77}>77</option>
        <option value={78}>78</option>
        <option value={79}>79</option>
        <option value={80}>80</option>
        <option value={81}>81</option>
        <option value={82}>82</option>
        <option value={83}>83</option>
        <option value={84}>84</option>
        <option value={85}>85</option>
        <option value={86}>86</option>
        <option value={87}>87</option>
        <option value={88}>88</option>
        <option value={89}>89</option>
        <option value={90}>90</option>
        <option value={91}>91</option>
        <option value={92}>92</option>
        <option value={93}>93</option>
        <option value={94}>94</option>
        <option value={95}>95</option>
        <option value={96}>96</option>
        <option value={97}>97</option>
        <option value={98}>98</option>
        <option value={99}>99</option>
      </select>
      <h3>
        of <span className="pagination-lastPage">99</span>
      </h3>
    </div>
  </div>
  <div style={{ display: "none" }} id="logins2">
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
            defaultValue="R2XQX4Jj0bD0ckbJgWKR34RpZBj8O8wuA9PzETaG"
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
            className="btn btn-block bg-pt crl-white
          margin-ver-1"
            type="submit"
            defaultValue="Register"
          />
        </form>
        <p className="text-left">
          {" "}
          Do you have an account?{" "}
          <a className="clr-pt" href="https://www.propertyturkey.com/login">
            {" "}
            Login
          </a>
        </p>
      </div>
    </div>
  </div>
  <div className="property_footer hide">
    <a href="#" className="search highlight-search">
      {" "}
      START <strong>NEW SEARCH</strong>
    </a>
    <span>OR</span>
    <a
      a=""
      type="button"
      id="inline"
      href="#propertyAlerts"
      title="Get Property <b>ALERTS</b>"
      className="alert"
    >
      Get Property <b>ALERTS</b>
    </a>
  </div>
  <div
    className="intro wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix' }} introDescription pt-footer"
    id="introDescription"
  >
    <div className="details" style={{}}>
      <p>
        <img
          data-fr-image-pasted="true"
          alt="Turkey real estate map"
          data-pyroimage="true"
          height={171}
          src="https://www.propertyturkey.com/files/large/turkey-real-estate-map.jpg"
          title="Turkey real estate map"
          width={230}
          className="fr-fic fr-dii"
        />
      </p>
      <p>
        <strong>Where to buy a holiday home in Turkey?</strong>&nbsp;
      </p>
      <p>
        With so many lovely resorts and towns to choose from, it is a task in
        itself to decide where to buy that special{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/villa">
          villa in Turkey
        </a>{" "}
        or that sea view apartment, which will be your new home in Turkey and
        double up for some rental income. According to statistics published by
        the Turkish real estate agents association, Antalya, Fethiye, Bodrum and
        Side are the most popular holiday home destinations in Turkey.{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/antalya">
          Properties in Antalya
        </a>{" "}
        enjoy the proximity of a bustling seaside city with lovely beaches and
        excellent golf courses of Belek, whereas{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/kalkan">
          Kalkan properties
        </a>{" "}
        provide some of the most dramatic sea views experienced in the entire
        Mediterranean, not to mention Kalkan's elegant setting and fine dining.{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/side">
          Side holiday homes for sale
        </a>{" "}
        are ideal for families with children, where shallow waters gently touch
        sandy shores.{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/bodrum">
          Real estate in Bodrum
        </a>{" "}
        on the other hand is your key to Turkey's most sophisticated resort with
        plenty of sailing and seafront homes in lovely Yalikavak, Turkbuku or
        Gumusluk. Then we have sun-soaked Fethiye with most affordable villas
        and{" "}
        <a href="https://www.propertyturkey.com/real_estate/turkey/apartment">
          flats for sale in Turkey
        </a>{" "}
        near the most pictured Oludeniz beach. &nbsp;
      </p>
      <p>
        <strong>
          Looking to retire overseas - where should you buy your retirement home
          in Turkey?
        </strong>
      </p>
      <p>
        When considering a permanent move abroad and buying a property&nbsp;for
        year round living, there are some important factors to take into
        account. Proximity of amenities, hospitals, schools and a stable local
        community are&nbsp;some of the elements one would naturally look at. In
        our dealings with over 10,000 people from all over the world looking at
        Turkish real estate with a view to permanent living in Turkey, we
        find&nbsp;that properties in Fethiye, Bodrum and Antalya (including Side
        and Kemer) are natural favourites for year round living. They all have
        excellent climates with over 300 days of sunshine, mild winters and the
        right level of facilities to sustain year round living.
      </p>
      <p>
        <strong>Where to invest in Turkish real estate? &nbsp;</strong>
      </p>
      <p>
        With an average annual GDP growth in excess of 8% for 2010 - 2012
        period, Turkey has posted exceptional economic performance compared to
        the EU zone and indeed to BRICs (Brazil, Russia, India, China). In 2011
        and 2012 Turkey's economic expansion was only second to China. IMF
        estimates&nbsp;that Turkey will yet again outperform most BRICs
        countries and certainly the entire Euro zone in 2013 - 2017 period with
        an average annual expansion of 5%+ projected. Turkish real estate
        industry is currently one of the major growth sectors within Turkey.
        With a youth population of over 60% of entire 76 million and increasing
        wealth in the country, domestic demand for the Turkish real estate
        industry is fast climbing. Turkish real estate agents association
        estimates that by year 2015 there will be a shortage of around 2 million
        quality housing in Turkey just to accommodate domestic demand, this is
        not even counting the booming tourism sector, 6th most visited country
        in the world in 2011, which also puts a heavy demand on coastal hotel,
        villa and apartment projects. In 2011, property&nbsp;market in Turkey
        grew by some 18% compared to year before. Considering that at the same
        period Greece, Spain and Portugal came close to announcing bankruptcy
        underlines the viability of owning property in Turkey.
      </p>
      <p>
        <strong>
          Prime location Istanbul or better to look at prospering Antalya?
        </strong>
      </p>
      <p>
        From a purely investment viewpoint property for sale in Istanbul
        deserves a close look, however, one needs to be very selective. There
        are many offers on the market and not all are viable. We recommend real
        estate in&nbsp;Istanbul prime locations&nbsp;as opposed to heavily
        marketed bargain apartments on the outskirts of the city. Naturally,
        prime locations of Istanbul are expensive, therefore we suggest
        investors should have a good look at Antalya property market&nbsp;as a
        viable and exceptional alternative to prime location real estate of
        Istanbul.&nbsp;
      </p>
      <p>
        <strong>How about rental returns and capital growth?</strong>
      </p>
      <p>
        On the Mediterranean and Aegean coasts of Turkey, your holiday home in
        Antalya, Fethiye, Kalkan and Bodrum could easily deliver in excess of 6%
        rental returns after all expenses paid. Considering that the average
        rental yield in the UK is 4.8%, this is quite a strong return. Coupled
        with steep capital growth in several years, you could build your very
        own nest egg in Turkish real estate. Another interesting profile to
        underline is the beachfront Turkey property segment.
      </p>
      <p>
        <strong>
          Can you suggest a niche segment of Turkish real estate to keep an eye
          on?
        </strong>
      </p>
      <p>
        Keen investors and of course keen sailors alike should keep a solid eye
        on waterfront properties in Turkey. This is an incredibly lucrative
        segment of the Turkish real estate market. Compared to France, Spain and
        Italy, beachfront properties in Turkey come at one third the price tag
        for comparable villas and apartments. Luxury villas for sale at the
        seafront in Bodrum, Kalkan, Kas and Fethiye could be purchased from as
        little as Euro 400,000, whereas a comparable villa in Spain or France
        would cost no less than Euro 1.3m. This is a huge price gap and we
        suggest that it is an artificial one. We do not expect prices of beach
        front properties in France to come down for these are highly desirable
        homes, however, as more and more people discover the stunning coastline
        of Turkey, we expect waterfront homes in Turkey to appreciate quite
        significantly over the next 3-5 years. The number of foreign registered
        boats and yachts entering Turkish waters have tripled since 2005,
        clearly indicating that Turkey is becoming a desirable boating
        destination. Considering the breathtaking beauty of the bays and coves
        in the Aegean and Mediterranean waters of Turkey, this is not surprising
        at all.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;
      </p>
    </div>
    <a href="#" className="show_hidev1">
      Continue Reading
    </a>
  </div>{" "}
  <div style={{ display: "none" }}>
    <div className="form_popup" id="data">
      <form
        action="https://www.propertyturkey.com/new-property-enquiry"
        method="post"
        className="box white clearfix"
      >
        <h3 className="title col-dis-12 col-tab-12 col-mob-12">
          Property Enquiry
        </h3>
        <div grid="">
          <div className="col-dis-12 col-tab-12 col-mob-12">
            <label className="field col-dis-12 col-tab-6 col-mob-12">
              <input
                name="first_name"
                type="text"
                placeholder="your name *"
                defaultValue=""
                validation=""
              />
            </label>
            <div className="field col-dis-12 col-tab-6 col-mob-12">
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
                  placeholder="Phone"
                  defaultValue=""
                  validation=""
                  autoComplete="off"
                />
              </div>
            </div>
            <label className="field col-dis-12 col-tab-6 col-mob-12">
              <input
                name="email"
                type="text"
                placeholder="E-mail"
                defaultValue=""
                validation="email"
              />
            </label>
            <label className="field col-dis-12 col-tab-12 col-mob-12">
              <textarea
                name="msg"
                placeholder="Message"
                defaultValue={"I'm interested in this property"}
              />
            </label>
          </div>
        </div>
        <div className="actions  col-dis-12 col-tab-12 col-mob-12 flex content-center padding-bottom-05">
          <input
            name="requestUrl"
            type="hidden"
            defaultValue="https://www.propertyturkey.com/"
          />
          <input
            type="hidden"
            id="propertyID"
            defaultValue=""
            name="propertyID[]"
          />
          <input
            type="text"
            style={{ display: "none" }}
            name="enqID"
            defaultValue=""
          />
          <input
            type="submit"
            defaultValue="Send"
            className="btn btn-sm-change col-mob-6"
            onclick="if (!window.__cfRLUnblockHandlers) return false; ga('create', 'UA-42286063-1', 'auto'); ga('send', 'event', 'QuickEnquiry', 'CLICK', 'SUBMIT');"
          />
        </div>
      </form>{" "}
    </div>
  </div>
</section>

    );
};

export default RealState_search_div;
