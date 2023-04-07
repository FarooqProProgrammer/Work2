import React from 'react'
import { Link } from 'react-router-dom'
export default function About_Turkey__Tag() {
    return (
        <section id="main" className="cf  disable-copy ">
            <div className="breadcrumbs">
                <div className="wrap-dis-9 wrap-tab-9 wrap-mob-9 clearfix flex items-center">
                    <span itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                        <Link to="/">
                            <img src="https://www.propertyturkey.com/front/image/images2019/Icons/home-logo.svg" className="img-fluid" alt=""/>
                        </Link>
                        {/* <meta itemProp="name" content="Home"/>
                        <meta itemProp="item" content="https://www.propertyturkey.com"/>
                        <meta itemProp="position"
                            content={1}/> */}
                    </span>
                    <span>
                        <i className="fa fa-angle-right"/>
                    </span>
                    <span itemProp="itemListElement" itemScope="" itemType="http://schema.org/ListItem">
                        About Turkey
                        {/* <meta itemProp="name" content="About Turkey"/>
                        <meta itemProp="item" content="https://www.propertyturkey.com/about-turkey"/>
                        <meta itemProp="position"
                            content={4}/> */}
                    </span>
                </div>
            </div>
            <div className="buyer-guide"
                style={
                    {backgroundColor: "#f7f5f2"}
            }>
                <div className="row">
                    <div className="col-12 col-md-3 buyer-guide--side-bar-bg">
                        <div className="container-fluid">
                            <p className="buyer-guide--title">
                                About Turkey</p>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Mediterranean region">
                                        Mediterranean region
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link  title="Turkish Mediterranean Region">
                                            Turkish Mediterranean Region
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link  title="About Alanya">
                                            About Alanya
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link  title="About Antalya">
                                            About Antalya
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Belek">
                                            About Belek
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Dalaman">
                                            About Dalaman
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Kalkan">
                                            About Kalkan
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Kas">
                                            About Kas
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Kemer">
                                            About Kemer
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Side">
                                            About Side
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Aegean region">
                                        Aegean region
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link   title="Turkish Aegean region">
                                            Turkish Aegean region
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Altinkum">
                                            About Altinkum
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Ayvalik">
                                            About Ayvalik
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Bodrum">
                                            About Bodrum
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Cesme">
                                            About Cesme
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Dalyan">
                                            About Dalyan
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Fethiye">
                                            About Fethiye
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Gocek">
                                            About Gocek
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Izmir">
                                            About Izmir
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Kusadasi">
                                            About Kusadasi
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Marmaris">
                                            About Marmaris
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Marmara region">
                                        Marmara region
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link   title="About Bursa">
                                            About Bursa
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Istanbul">
                                            About Istanbul
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="About Yalova">
                                            About Yalova
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Lycian coast">
                                        Lycian coast
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link   title="Lycia's incredible legacy, the Lycian Way">
                                            Lycia's incredible legacy, the Lycian Way
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Turquoise coast ">
                                        Turquoise coast{" "} </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link   title="Turkish Turquoise Coast">
                                            Turkish Turquoise Coast
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Black Sea Region">
                                        Black Sea Region
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link   title="Bolu City Guide">
                                            Bolu City Guide
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Trabzon city guide">
                                            Trabzon city guide
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Airports In Turkey">
                                        <Link   title="Airports In Turkey">
                                            Airports In Turkey
                                        </Link>
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"/>
                                </div>
                                <ul className="list-unstyled buyer-guide--ul hide">
                                    <li className="">
                                        <Link   title="Third Airport Istanbul">
                                            Third Airport Istanbul
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Ataturk Airport Istanbul">
                                            Ataturk Airport Istanbul
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Sabiha Gokcen Istanbul">
                                            Sabiha Gokcen Istanbul
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Bodrum Milas Airport">
                                            Bodrum Milas Airport
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Antalya Airport">
                                            Antalya Airport
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Adnan Menderes Izmir">
                                            Adnan Menderes Izmir
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Dalaman International Airport">
                                            Dalaman International Airport
                                        </Link>
                                    </li>
                                    <li className="">
                                        <Link   title="Esenboga International Ankara">
                                            Esenboga International Ankara
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="padding-top-2 side-item">
                                <div className="buyer-guide--supertitle">
                                    <p className="buyer-guide--title-tab" title="Weather In Turkey">
                                        <Link   title="Weather In Turkey">
                                            Weather In Turkey
                                        </Link>
                                    </p>
                                    <i className="fa fa-angle-up tabs-icon" aria-hidden="true"
                                        style={
                                            {display: "none"}
                                        }/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12  col-md-9  buyer-guide--side-bar-bg-details">
                        <div className="container-fluid">
                            <div className="flex content-space-between items-center">
                                <h1 itemProp="name headline" className="page-title abhaya buyer-guide--side-bar-bg-details--main-title">
                                    About Turkey
                                </h1>
                                <Link  href="#" className="buyer-guide--side-bar-bg-details--social-shares social-shares">
                                    <img src="https://www.propertyturkey.com/front/image/icons/Path302.svg" className="no-margin" alt=""/>{" "}
                                    <span>Share</span>
                                </Link>
                            </div>
                            <div className="buyer-guide--side-bar-bg-details--dates">
                                <span>Updated:
                                </span>
                                13 April 2021
                                <span className="margin-left-1">Created:
                                </span>
                                14 May 2013
                            </div>
                            <article className="page-content">
                                <div className="areabody clearfix" itemProp="articleBody">
                                    <p>
                                        With its unique position at the crossroads of Europe and Asia,
                                                        Turkey has played a pivotal part in the world's history. The
                                                        country has acted as a barrier and a bridge between two
                                                        continents, and became a focal part of a trade route which not
                                                        only brought prosperity to the country, but laid the groundwork
                                                        for the rich cultural mix that exists in the country today.
                                    </p>
                                    <p>
                                        <span className="fr-video fr-dvb fr-draggable" contentEditable="false" draggable="true">
                                            <iframe src="https://www.youtube.com/embed/zWawsDMOYLI" title="YouTube video player"
                                                frameBorder={0}
                                                allowFullScreen=""
                                                style={
                                                    {
                                                        width: "100%",
                                                        height: 550
                                                    }
                                                }/>
                                        </span>
                                    </p>
                                    <p>
                                        <br/>
                                    </p>
                                    <h2>
                                        <span style={
                                            {fontSize: 14}
                                        }>
                                            <strong style={
                                                {
                                                    fontSize: 14,
                                                    lineHeight: "1.2em"
                                                }
                                            }>
                                                <span style={
                                                    {lineHeight: "1.2em"}
                                                }>
                                                    At the Crossroads of Europe and Asia
                                                </span>
                                            </strong>
                                            &nbsp;
                                        </span>
                                    </h2>
                                    <p>
                                        Turkey is bordered by eight countries: Armenia, Iran, Azerbaijan
                                                        in the east; by Georgia in the northeast, by Bulgaria and Greece
                                                        in the northwest, and by Iraq, and Syria. Over the centuries,
                                                        there have been various struggles, conquests, and changes of
                                                        power, which have all shaped the nation into its current setting
                                                        as a gateway between the Middle East, Asia, and Europe.
                                    </p>
                                    <p>
                                        <img alt="Ottoman Empire map" className="pyro-image alignment-left fr-fil fr-dii fr-draggable" data-pyroimage="true" dir="ltr" id="The Ottoman Empire Map 17 Century" src="/files/thumb/d5fe81552235204/399"
                                            style={
                                                {
                                                    lineHeight: "1.2em",
                                                    width: 1200
                                                }
                                            }
                                            title="The Ottoman Empire Map 17 Century"/>
                                    </p>
                                    <p>
                                        <br/>
                                    </p>
                                    <h2>
                                        <span style={
                                            {fontSize: 14}
                                        }>
                                            <strong>Turkish culture</strong>
                                        </span>
                                    </h2>
                                    <p>
                                        Turkish culture has undergone a huge shift in the last 100
                                                        years. Before 1923, the Ottoman Empire was a multi-ethnic state.
                                                        However, it was segregated, and ethnic and religious groups did
                                                        not mix with each other, retaining their own separate
                                                        identities. That changed with the birth of the Turkish Republic,
                                                        however, as the country began to look towards an approach that
                                                        integrated its diverse cultures to produce one national
                                                        identity.&nbsp;
                                    </p>
                                    <p>
                                        Today, Turkey is a modern country with a diverse group of
                                                        intertwined cultures including Muslims, Jews, Greeks, Armenians
                                                        and Syrians. There's also a strong divide between rural and
                                                        cosmopolitan living, with Turks in the countryside adopting a
                                                        more conservative way of life, while city-dwelling Turks look to
                                                        a more modern way of life.
                                    </p>
                                    <p>
                                        Turkey is home to some 80 million citizens. Three quarters of
                                                        the population is of Turkish ancestry, primarily progressive
                                                        Muslims. Turkey is also home to a large population of Muslim
                                                        Kurds, comprising roughly 18% of the population of Turkey. In
                                                        the last few years, Turkey has also become home to a high number
                                                        of Syrian refugees, and around 3.5 million are thought to live
                                                        in the country.
                                    </p>
                                    <p>
                                        Turkey's population is overwhelming youthful, and upwardly
                                                        mobile. Young professionals are moving to the cities in greater
                                                        numbers, changing the face of Turkey's urban centres, and
                                                        driving its economy.
                                    </p>
                                    <p>
                                        <br/>
                                    </p>
                                    <h2>
                                        <span style={
                                            {fontSize: 14}
                                        }>
                                            <strong>Turkish history</strong>
                                        </span>
                                    </h2>
                                    <p>
                                        Before Turkey became a republic, the land was ruled by the
                                                        Ottoman Empire. The Ottoman state was formed in 1299 with the
                                                        uniting of a number of Turkish tribes. However, it wasn’t until
                                                        the conquest of Constantinople in 1453 that the Ottoman state
                                                        truly became an empire. From that point, until 1683, the Ottoman
                                                        Empire continued to grow, through a series of conquests and
                                                        invasions of other territories and tribes. During the peak of
                                                        the Ottoman Empire’s control of the region, the empire ruled
                                                        over a population of more than 15,000,000.&nbsp;
                                    </p>
                                    <p>
                                        The mighty empire began to crumble in the 18th century, as a
                                                        series of wars took their toll on the Ottomans, who battled on
                                                        many fronts and with many of its territories.
                                    </p>
                                    <p>
                                        By World War I, the sun had set on the Ottomans, and 1923 saw
                                                        the birth of the Republic of Turkey. One of the founders of this
                                                        new movement was Mustafa Kemal Ataturk. Ataturk was an Ottoman
                                                        and Turkish army officer who led the Turkish National Movement
                                                        during the Turkish War of Independence.&nbsp;
                                    </p>
                                    <p>
                                        After his victory, Ataturk began transitioning the Ottoman
                                                        Empire into a European Nation-State. He oversaw the opening of
                                                        new schools, began government reform programs, and lowered
                                                        taxes. The emergence of this new type of government in Turkey
                                                        was the start of its growth into a modernised European nation.
                                    </p>
                                    <p>
                                        <br/>
                                    </p>
                                    <h2>Politics in Turkey</h2>
                                    <p>
                                        <span style={
                                            {
                                                backgroundColor: "initial",
                                                color: "rgb(0, 0, 0)",
                                                textAlign: "initial",
                                                fontSize: 13
                                            }
                                        }>
                                            In July 2018, Turkey abolished its 95-year-old parliamentary
                                                              system for one that concentrated all the political power in
                                                              the office of the presidency. President Recep Tayyip Erdogan,
                                                              who was inaugurated for a second term at the same date, has
                                                              radically reshaped a host of laws, regulations and
                                                              institutions.&nbsp;
                                        </span>
                                    </p>
                                    <div>
                                        <p>
                                            The President has the power to directly appoint ministers,
                                                              many judges and bureaucrats, and one or more vice presidents -
                                                              taking the place of an elected vice president. Erdogan will
                                                              also set out the national budget.
                                        </p>
                                        <p>
                                            While it sounds as if the president has ultimate power,
                                                              Turkey's Parliament still holds clout. They have the authority
                                                              to overturn presidential decrees, and the president cannot
                                                              overturn by decree legislation that was passed by Parliament.
                                                              Also, cannot issue decrees in areas that the constitution
                                                              specifically reserves for parliamentary legislation. This
                                                              includes criminal penalties, declarations of war, or
                                                              permission for foreign troops to enter Turkish territory
                                            <sup>.</sup>
                                        </p>
                                        <p>
                                            <br/>
                                        </p>
                                        <h2>
                                            <span style={
                                                {fontSize: 14}
                                            }>
                                                <strong>Turkey's geography</strong>
                                            </span>
                                        </h2>
                                        <h6>
                                            <br/>
                                        </h6>
                                        Turkey is more than just beaches. The country is home to a
                                                        diverse and rich collection of landscapes. Surrounded by three
                                                        seas, Turkey has some 8000 kilometres of coastline. The country
                                                        is divided into seven geographical regions: the Aegean, Central
                                                        Anatolia, Eastern Anatolia, Southeastern Anatolia, Black Sea,
                                                        Marmara, and the Mediterranean region. The largest land area of
                                                        Turkey is Anatolia, which connects Turkey to Asia. Most of
                                                        Anatolia is comprised of narrow coastal plains and high
                                                        plateaus. In the east, most of the land is mountainous and
                                                        connected to major river systems.
                                        <br/>
                                        <br/>• &nbsp; &nbsp;Total Area: 783, 562 square km
                                        <br/>•
                                                        &nbsp; &nbsp;Climate: Dry and hot summers and mild winters{" "}
                                        <br/>• &nbsp; &nbsp;Highest Point: Mount Ararat 5,166 m
                                        <br/>•
                                                        &nbsp; &nbsp;Lowest Point: Mediterranean Sea 0 m
                                        <br/>
                                        <br/>
                                        These different regions also have varied climates, a feature
                                                        unique to Turkey. Along the coast of the Mediterranean and
                                                        Aegean Seas, the climate is hot and dry during the summer and
                                                        cool and wet during the winter. The coastal regions that lay
                                                        along the Black Sea tend to be cooler and wetter in the summer
                                                        than other coastal parts of Turkey.
                                    </div>
                                    <p>
                                        In inland, elevated areas, snow falls during winter months,
                                                        which has given rise to Turkey's ski industry, with ski fields
                                                        even accessible from Turkey's Mediterranean coastline.
                                    </p>
                                    <p>
                                        <br/>
                                    </p>
                                    <div>
                                        <h2>
                                            <strong style={
                                                {
                                                    backgroundColor: "initial",
                                                    color: "rgb(0, 0, 0)",
                                                    textAlign: "initial",
                                                    fontSize: 13
                                                }
                                            }>
                                                Further references
                                            </strong>
                                        </h2>
                                        <p>
                                            <strong>-&nbsp;</strong>
                                            <Link  href="">
                                                Find property for sale in Turkey
                                            </Link>
                                            {" "}
                                            <br/>-{" "}
                                            <Link  href="">
                                                Why invest in property in Turkey
                                            </Link>
                                            {" "}
                                            <br/>-{" "}
                                            <Link  href="">
                                                Property buyer guide
                                            </Link>
                                        </p>
                                    </div>
                                    <p>
                                        <br/>
                                        <img alt="Unbelievable facts about Turkey" className="pyro-image alignment-none fr-dii fr-draggable" data-pyroimage="true" src="/files/thumb/19-facts-about-turkey.png/708"
                                            style={
                                                {width: 1200}
                                            }
                                            title="Unbelievable facts about Turkey"/>
                                    </p>
                                </div>
                                {/*  */}
                                <meta itemProp="author" content="Cameron Deggin"/>
                                <span itemProp="image" itemScope="" itemType="http://schema.org/ImageObject">
                                    <meta itemProp="url" content="https://www.propertyturkey.com/files/large/dummy"/>
                                    <meta itemProp="height"
                                        content={800}/>
                                    <meta itemProp="width"
                                        content={800}/>
                                </span>
                                <meta itemProp="mainEntityOfPage" content="https://www.propertyturkey.com/about-turkey"/>
                                <meta itemProp="datePublished" content="2013-05-14 08:26:10"/>
                                <meta itemProp="dateModified" content="2021-04-13 23:51:00"/>
                                <span itemProp="publisher" itemScope="" itemType="http://schema.org/Organization">
                                    <meta itemProp="name" content="Property Turkey"/>
                                    <span itemProp="logo" itemScope="" itemType="http://schema.org/ImageObject">
                                        <meta itemProp="url" content="https://www.propertyturkey.com/front/image/logo.png"/>
                                    </span>
                                    <meta itemProp="url" content="https://www.propertyturkey.com"/>
                                </span>
                                <div className=""></div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
