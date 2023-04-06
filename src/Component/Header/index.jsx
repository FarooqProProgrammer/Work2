import "./Header.css"
import { FaEuroSign } from "react-icons/fa"
import { AiFillPoundCircle, AiOutlineMenu, AiFillDollarCircle, AiOutlineSearch } from "react-icons/ai"
import { BiLira } from "react-icons/bi"
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React, { useEffect, useState } from 'react'
import $ from 'jquery'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Header() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isWideScreen, setIsWideScreen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  useEffect(() => {
    const resizeHandler = () => {
      setIsWideScreen(window.matchMedia('(min-width: 1024px)').matches);
      setIsNarrowScreen(window.matchMedia('(max-width: 1024px)').matches);
    };
    resizeHandler();
    $(window).on('resize', resizeHandler);
    return () => $(window).off('resize', resizeHandler);
  }, []);

  const handleSearchFilterToggle = (e) => {
    $(e.currentTarget).toggleClass('active');
    $(e.currentTarget)
      .find('[class*="fa-angle"]')
      .toggleClass('fa-angle-up fa-angle-down');
    $('#search-filter').slideToggle(300);
  };

  const handleLevel3MouseEnter = (e) => {
    if (
      isWideScreen &&
      window.innerWidth / 2 - 32 < $(e.currentTarget).offset().left
    ) {
      $(e.currentTarget).find('.level-4').addClass('left');
    }
  };

  const handleLevel2Click = (e) => {
    const $nav = $('nav');
    const $icon = $(e.currentTarget).find('.fa');
    const $submenu = $(e.currentTarget).parent().next();
    if (isWideScreen || window.innerWidth > 1024) {
      if ($icon.hasClass('fa-angle-up')) {
        $nav.addClass('close');
        $submenu.removeClass('open');
        $('.fa-angle-up')
          .not($icon)
          .removeClass('fa-angle-up')
          .addClass('fa-angle-down');
      } else if ($icon.hasClass('fa-angle-down')) {
        $nav.removeClass('closeNav');
        $nav.css({ 'margin-bottom': $submenu.height() + 70 });
        $submenu.addClass('open');
        $icon.removeClass('fa-angle-down').addClass('fa-angle-up');
      } else if ($icon.hasClass('navClose')) {
        $nav.addClass('close');
        $('.level-2').removeClass('open');
      }
    } else {
      $submenu.slideToggle(300);
    }
    return false;
  };

  const handleNavButtonClick = (e) => {
    e.preventDefault();
    $('nav').addClass('open');
  };
  const handleNavRemoveButtonClick = (e) => {
    e.preventDefault();
    $('nav').removeClass('open');
  };

  return (
    <>
      <header>
        {/* Not Active yet */}
        <div className="header-top ">
          <div className="wrap-dis-85 flex  content-end items-center hideMb-showDt">
            <div className="header-phone-items order-3">
              <Link className="active" title="English">EN</Link>
              <Link title="Russian" className>RU</Link>
              <Link title="Arabic">AR</Link>
              <Link title="German">DE</Link>
              <Link title="Chinese">中文</Link>
              <Link title="Farsi">FA</Link>
            </div>
            <Link to="https://www.propertyturkey.com/become-partner" className="flex"><img src="fonts/partner-button-01.svg" width={95} className="img-fluid" alt /></Link>
            <div className="currencyy order-2">
              <Link rel="nofollow" to="https://www.propertyturkey.com/change-currency/3" className title="Sterling Pound  "><i className="fa fa-gbp" /></Link>
              <Link rel="nofollow" to="https://www.propertyturkey.com/change-currency/2" className title="Euro "><i className="fa fa-eur" /></Link>
              <Link rel="nofollow" to="javascript:void(0)" className="active" title="Dollar "><i className="fa fa-usd" /></Link>
              <Link rel="nofollow" to="https://www.propertyturkey.com/change-currency/4" className title="Turkish Lira "><i className="fa fa-try" /></Link>
            </div>
            <div className="elastic-search d-desk">
              <i className="fa fa-search" aria-hidden="true" />
            </div>
          </div>
          <div className="main-header">
            <div className="flex  items-center content-start position-relative mt-15 content-space-between">
              <div className="logo">
                <Link to="https://www.propertyturkey.com" title="Property Turkey" className="logoImg flex items-center content-center flex-direction-column pos-logo-lg" id="desktopLogo"><img src="fonts/pt_new_logo.svg" alt="Property Turkey" />
                </Link>
                <Link to="https://www.propertyturkey.com" title="Property Turkey" className="flex items-center content-center flex-direction-column pos-logo-lg" id="mobileLogo">
                </Link>
                {/* <div class="info-slogan">
              <img src="https://www.propertyturkey.com/front/image/1.png" alt="for life and investment" />
          </div> */}
                <Link onClick={handleNavButtonClick} className="navbutton  tab-inline-block mob-inline-block mobile burgermenu position-abs" to="#"><img src="fonts/burger-menu.svg" /></Link>
                <div className="elastic-search d-mobile" id="headerSearchIcon">
                  <img src="fonts/search.svg" title="search properties" />
                </div>
              </div>
              <nav className="flex">
                <div className="mobile closeNavBtn">
                  <Link to="#" onClick={handleNavRemoveButtonClick} className="closeNav"><i className="fa fa-arrow-left padding-right-05 font-13" />
                    Back</Link>
                </div>
                <li className="bold">
                  <Link to="/">Home</Link>
                </li>
                <li><Link className="clr-pt" to="/realState" title="Buy Real Estate"><b>Buy Real Estate</b></Link></li><li><Link to="/turkishCitizen" title="Turkish Citizenship"><b>Turkish Citizenship</b></Link></li><li className="has-child"><Link to="/about" title="About Turkey"><b>About Turkey</b><i className="fa fa-angle-down" /></Link><div className="level-2"><ul className="no-bullets"><li className="has-child"><Link to="" title="Mediterranean region">Mediterranean region<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/turkish-mediterranean-region" title="Turkish Mediterranean Region">Turkish Mediterranean Region</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-alanya" title="About Alanya">About Alanya</Link></li><li className="has-child"><Link to="https://www.propertyturkey.com/about-turkey/about-antalya" title="About Antalya">About Antalya<i className="fa fa-angle-right" /></Link><div className="level-4"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/about-antalya/konyaalti-best-of-both-worlds" title="Konyaalti beach best of both worlds">Konyaalti beach best of both worlds</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-antalya/antalya-old-city-or-kaleici-of-antalya" title="Antalya old city or Kaleici of Antalya">Antalya old city or Kaleici of Antalya</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-antalya/the-vibrant-lara-beach-district" title="The vibrant Lara beach district">The vibrant Lara beach district</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-belek" title="About Belek">About Belek</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-dalaman" title="About Dalaman">About Dalaman</Link></li><li className="has-child"><Link to="https://www.propertyturkey.com/about-turkey/about-kalkan" title="About Kalkan">About Kalkan<i className="fa fa-angle-right" /></Link><div className="level-4"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/about-kalkan/kalkan-for-holiday-home-and-investment" title="Kalkan for holiday home and investment">Kalkan for holiday home and investment</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-kas" title="About Kas">About Kas</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-kemer" title="About Kemer">About Kemer</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-side" title="About Side">About Side</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Aegean region">Aegean region<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/turkish-aegean-region" title="Turkish Aegean region">Turkish Aegean region</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-altinkum" title="About Altinkum">About Altinkum</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-ayvalik-and-cunda-island" title="About Ayvalik">About Ayvalik</Link></li><li className="has-child"><Link to="https://www.propertyturkey.com/about-turkey/about-bodrum" title="About Bodrum">About Bodrum<i className="fa fa-angle-right" /></Link><div className="level-4"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/about-bodrum/bodrum-or-halicarnassus-in-the-old-days" title="Bodrum or Halicarnassus in the old days">Bodrum or Halicarnassus in the old days</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-bodrum/yalikavak" title="Yalikavak the trendy marina town">Yalikavak the trendy marina town</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-bodrum/hidden-treasures-of-gumusluk" title="Hidden treasures of Gumusluk">Hidden treasures of Gumusluk</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-bodrum/living-la-vida-loca-in-turkbuku" title="Living la Vida Loca in Turkbuku">Living la Vida Loca in Turkbuku</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-cesme" title="About Cesme">About Cesme</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-dalyan" title="About Dalyan">About Dalyan</Link></li><li className="has-child"><Link to="https://www.propertyturkey.com/about-turkey/about-fethiye" title="About Fethiye">About Fethiye<i className="fa fa-angle-right" /></Link><div className="level-4"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/about-fethiye/ovacik" title="Ovacik">Ovacik</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-fethiye/hisaronu" title="Hisaronu">Hisaronu</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-fethiye/calis" title="Calis">Calis</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-fethiye/uzumlu" title="Uzumlu">Uzumlu</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-gocek" title="About Gocek">About Gocek</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/ut-izmir" title="About Izmir">About Izmir</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-kusadasi" title="About Kusadasi">About Kusadasi</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-marmaris" title="About Marmaris">About Marmaris</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Marmara region">Marmara region<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/bursa-first-capital-of-the-ottoman-empire" title="About Bursa">About Bursa</Link></li><li className="has-child"><Link to="https://www.propertyturkey.com/about-turkey/about-istanbul" title="About Istanbul">About Istanbul<i className="fa fa-angle-right" /></Link><div className="level-4"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/about-istanbul/districts-of-istanbul" title="Districts of Istanbul">Districts of Istanbul</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-istanbul/why-invest-in-beyoglu-istanbul-real-estate" title="Why invest in Beyoglu Istanbul real estate">Why invest in Beyoglu Istanbul real estate</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-istanbul/bahcesehir-known-as-the-garden-city" title="Bahcesehir known as the garden city">Bahcesehir known as the garden city</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/about-istanbul/istanbul-real-estate-market-analysis-pdf" title="Istanbul Real Estate Market Analysis PDF">Istanbul Real Estate Market Analysis PDF</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/about-turkey/yalova-city-in-marmara" title="About Yalova">About Yalova</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Lycian coast">Lycian coast<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/lycian-coast" title="Lycia's incredible legacy, the Lycian Way">Lycia's incredible legacy, the Lycian Way</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Turquoise coast ">Turquoise coast <i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/turkish-turquoise-coast" title="Turkish Turquoise Coast">Turkish Turquoise Coast</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Black Sea Region">Black Sea Region<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/bolu-city-guide" title="Bolu City Guide">Bolu City Guide</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/trabzon-city-guide" title="Trabzon city guide">Trabzon city guide</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey" title="Airports In Turkey">Airports In Turkey<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/istanbul-airport" title="Third Airport Istanbul">Third Airport Istanbul</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/ataturk-airport-istanbul" title="Ataturk Airport Istanbul">Ataturk Airport Istanbul</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/sabiha-gokcen-istanbul" title="Sabiha Gokcen Istanbul">Sabiha Gokcen Istanbul</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/bodrum-milas-airport" title="Bodrum Milas Airport">Bodrum Milas Airport</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/antalya-airport" title="Antalya Airport">Antalya Airport</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/adnan-menderes-izmir" title="Adnan Menderes Izmir">Adnan Menderes Izmir</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/dalaman-international-airport" title="Dalaman International Airport">Dalaman International Airport</Link></li><li><Link to="https://www.propertyturkey.com/about-turkey/airports-in-turkey/esenboga-international-ankara" title="Esenboga International Ankara">Esenboga International Ankara</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/about-turkey/weather-in-turkey" title="Weather In Turkey">Weather In Turkey</Link></li></ul></div></li><li className="has-child"><Link to="/buyer" title="Buyer Guide"><b>Buyer Guide</b><i className="fa fa-angle-down" /></Link><div className="level-2"><ul className="no-bullets"><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Investing in Turkey">Investing in Turkey<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/buyer-guide/why-invest-in-property-in-turkey" title="Why invest in property in Turkey">Why invest in property in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/how-to-set-up-a-business-in-turkey" title="How to set up a business in Turkey">How to set up a business in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/tax-and-turkish-real-estate" title="Tax and Turkish real estate">Tax and Turkish real estate</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/eu-negotiations-and-turkish-property-prices" title="EU negotiations and Turkish property prices">EU negotiations and Turkish property prices</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/turkey-macroeconomic-and-investment-analysis" title="Download macro-economic & investment analysis">Download macro-economic &amp; investment analysis</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Purchase process">Purchase process<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/buyer-guide/who-can-buy-property-in-turkey" title="Who Can Buy Property in Turkey">Who Can Buy Property in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/How_to_buy_property_in_Turkey" title="How to buy property in Turkey">How to buy property in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/How_to_buy_property_in_Turkey/how-to-design-and-build-your-own" title="How to design and build your own">How to design and build your own</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/inspection-trip" title="Property Turkey Inspection Trips">Property Turkey Inspection Trips</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/virtual-tour-with-property-turkey" title="Virtual Tour with Property Turkey">Virtual Tour with Property Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/costs-of-purchasing-a-property-in-turkey" title="Costs of Purchasing a Property in Turkey">Costs of Purchasing a Property in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/finance-for-property-in-turkey" title="Finance for property in Turkey">Finance for property in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/property-maintenance-in-turkey-fees-and-costs" title="Property maintenance and management">Property maintenance and management</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/how-to-get-a-turkish-title-deed-tapu" title="How to get a Turkish Title Deed">How to get a Turkish Title Deed</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/should-i-use-a-solicitor-to-buy-property-in-turkey" title="Should I use a solicitor to buy property in Turkey">Should I use a solicitor to buy property in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/power-of-attorney-in-turkey" title="Power of Attorney in Turkey">Power of Attorney in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/buying-property-in-turkey-through-a-company" title="Buying property in Turkey through a company">Buying property in Turkey through a company</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Residency permits and visas">Residency permits and visas<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/buyer-guide/residency-permits-in-turkey" title="Residency permits in Turkey">Residency permits in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/work-permits-in-turkey" title="Work permits in Turkey">Work permits in Turkey</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Your pets and cars">Your pets and cars<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/buyer-guide/bringing-your-pets-into-turkey" title="Bringing your pets into Turkey">Bringing your pets into Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/bringing-your-car-into-turkey" title="Bringing your car into Turkey">Bringing your car into Turkey</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Property taxes">Property taxes<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/buyer-guide/income-tax-on-turkish-property" title="Income Tax On Turkish Property">Income Tax On Turkish Property</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/capital-gains-tax-on-sale-of-turkish-property" title="Capital Gains Tax On Sale Of Turkish Property">Capital Gains Tax On Sale Of Turkish Property</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/vat-exemption-when-buying-turkish-real-estate" title="VAT exemption when buying Turkish real estate">VAT exemption when buying Turkish real estate</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/real-estate-inheritance-tax-in-turkey" title="Real estate inheritance tax in Turkey">Real estate inheritance tax in Turkey</Link></li></ul></div></li><li className="has-child"><Link to="https://www.propertyturkey.com/#" title="Living in Turkey">Living in Turkey<i className="fa fa-angle-down" /></Link><div className="level-3"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/buyer-guide/retire-to-low-cost-of-living-in-turkey" title="Retire to low cost of living in Turkey">Retire to low cost of living in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/healthcare-and-medical-in-Turkey" title="Healthcare in Turkey">Healthcare in Turkey</Link></li><li><Link to="https://www.propertyturkey.com/buyer-guide/where-in-turkey-should-you-consider-buying-a-property" title="Where to buy property in Turkey?">Where to buy property in Turkey?</Link></li></ul></div></li><li><Link to="https://www.propertyturkey.com/buyer-guide/definitive-buyer-guide-pdf" title="Download Complete Buyer Guide">Download Complete Buyer Guide</Link></li></ul></div></li><li className="has-child"><Link to="/aboutusguide" title="About Us"><b>About Us</b><i className="fa fa-angle-down" /></Link><div className="level-2"><ul className="no-bullets"><li><Link to="https://www.propertyturkey.com/about-us/our-services-and-fees" title="Our Services and Fees">Our Services and Fees</Link></li><li><Link to="https://www.propertyturkey.com/about-us/london-team" title="London">London</Link></li><li><Link to="https://www.propertyturkey.com/about-us/istanbul-team" title="Istanbul">Istanbul</Link></li><li><Link to="https://www.propertyturkey.com/about-us/bodrum-team" title="Bodrum">Bodrum</Link></li><li><Link to="https://www.propertyturkey.com/about-us/fethiye-team" title="Fethiye">Fethiye</Link></li><li><Link to="https://www.propertyturkey.com/about-us/antalya-team" title="Antalya">Antalya</Link></li></ul></div></li><li><Link to="/" title="Contact Us"><b>Contact Us</b></Link></li>
                <li className="bold">
                  <Link to="propertyTurkey"><strong>Property Turkey TV</strong></Link>
                </li>
                <div className="showMb-hideDt auth header-right order-1 flex">
                  <Link className="login fl-dis-right  fl-tab-right fl-mob-right" title="Login" rel="nofollow" data-fancybox data-src="#logins" to="javascript:;">Login</Link>
                  <Link className="login fl-dis-right  fl-tab-right fl-mob-right " title="Register" rel="nofollow" data-fancybox data-src="#registers" to="javascript:;">Register</Link>
                </div>
                <div className="header-phone-items order-3 showMb-hideDt ">
                  <Link to="" className="active" title="English">EN</Link>
                  <Link to="" title="Russian" className>RU</Link>
                  <Link to="" title="Arabic">AR</Link>
                  <Link to="" title="German">DE</Link>
                  <Link to="" title="Chinese">中文</Link>
                  <Link to="" title="Farsi">FA</Link>
                </div>
                <div className="currencyy currency-widget showMb-hideDt  order-2">
                  <Link rel="nofollow" to="https://www.propertyturkey.com/change-currency/3" className title="Sterling Pound  " data-cur="GBP"><i className="fa fa-gbp" /></Link>
                  <Link rel="nofollow" to="https://www.propertyturkey.com/change-currency/2" className title="Euro " data-cur="EUR"><i className="fa fa-eur" /></Link>
                  <Link rel="nofollow" to="javascript:void(0)" className="active" title="Dollar " data-cur="USD"><i className="fa fa-usd" /></Link>
                  <Link rel="nofollow" to="https://www.propertyturkey.com/change-currency/4" className title="Turkish Lira " data-cur="TRY"><i className="fa fa-try" /></Link>
                </div></nav>
              <div className="auth header-right order-1 login-register-desktop-xl d-desk">
                <Link className="login fl-dis-right  fl-tab-right fl-mob-right" title="Login" rel="nofollow" data-fancybox data-src="#logins" to="javascript:;">Login</Link>
                <Link className="login fl-dis-right  fl-tab-right fl-mob-right " title="Register" rel="nofollow" data-fancybox data-src="#registers" to="javascript:;">Register</Link>
              </div>
              {/* <Link  class="btn --gray --shadow">Sign in</Link>
          <Link  class="btn --red">Join Now</Link> */}
            </div>
          </div>
        </div>
        <div className="elastic-search-form searchWrapper">
          <form action="https://www.propertyturkey.com/real_estate/search">
            <input type="text" name="keyword" autoComplete="off" defaultValue className="form-control" placeholder="Example: Apartment Istanbul Sea view" />
            <button type="submit" className="d-desk"><img src="fonts/search-white.svg" />
              Search</button>
            <button type="submit" className="d-mobile"><img src="fonts/search-white.svg" /></button>
            <span className="close"><img src="fonts/baseline-close-6.svg" /> </span>
            <div className="search-results-wrapper">
              <div className="loadingSpan hide"><img src="images/AjaxLoader.gif" /> </div>
              <div className="search-results-list" />
            </div>
          </form>
        </div>
      </header>


      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='Model__Header'
      >
        <Box sx={style}>
          <Box clas
          >

          </Box>
        </Box>
      </Modal>
    </>
  )
}
