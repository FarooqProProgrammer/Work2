import "./Header.css"
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import $ from 'jquery'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modals from '@mui/material/Modal';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "../../Config"
import { doc, setDoc } from "firebase/firestore"
import { Modal } from "antd"
import { AuthAction } from "../../Redux/Action/AuthAction";
import { useDispatch } from "react-redux";


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

  const [openModals, setopenModals] = React.useState(false);
  const handleOpenModals = () => setOpen(true);
  const handleCloseModals = () => setOpen(false);
  const dispatch = useDispatch()


  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setconfirmpasswordPassword] = useState('');


  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };




  const RegisterUser = (e) => {
    e.preventDefault()

    if (password !== confirmpassword) {
      alert("Password is not Matched");
    }

    createUserWithEmailAndPassword(auth, Email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;

        await setDoc(doc(db, "Users", user.uid), {
          name: Name,
          Email,
          Mobile
        });
        alert("Register Successfully")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  const AuthRegister = () => {
    signInWithEmailAndPassword(auth, Email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        dispatch(AuthAction(user))
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }


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
      <header >
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
            <Link to="" className="flex"><img src="fonts/partner-button-01.svg" width={95} className="img-fluid" alt /></Link>
            <div className="currencyy order-2">
              <Link rel="nofollow" to="" className title="Sterling Pound  "><i className="fa fa-gbp" /></Link>
              <Link rel="nofollow" to="" className title="Euro "><i className="fa fa-eur" /></Link>
              <Link rel="nofollow" to="javascript:void(0)" className="active" title="Dollar "><i className="fa fa-usd" /></Link>
              <Link rel="nofollow" className title="Turkish Lira "><i className="fa fa-try" /></Link>
            </div>
            <div className="elastic-search d-desk">
              <i className="fa fa-search" aria-hidden="true" />
            </div>
          </div>
          <div className="main-header">
            <div className="flex  items-center content-start position-relative mt-15 content-space-between">
              <div className="logo">
                <Link title="Property Turkey" className="logoImg flex items-center content-center flex-direction-column pos-logo-lg" id="desktopLogo"><img src="fonts/pt_new_logo.svg" alt="Property Turkey" />
                </Link>
                <Link title="Property Turkey" className="flex items-center content-center flex-direction-column pos-logo-lg" id="mobileLogo">
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
                <li>
                  <Link className="clr-pt" to="/realState" title="Buy Real Estate">
                    <b>Buy Real Estate</b></Link>
                </li>
                <li>
                  <Link to="/turkishCitizen" title="Turkish Citizenship">
                    <b>Turkish Citizenship</b></Link>
                </li>
                <li className="has-child">
                  <Link to="/about" title="About Turkey">
                    <b>About Turkey</b><i className="fa fa-angle-down" /></Link>
                  <div className="level-2">
                    <ul className="no-bullets">
                      <li className="has-child">
                        <Link to="" title="Mediterranean region">
                          Mediterranean region<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link to="" title="Turkish Mediterranean Region">
                                Turkish Mediterranean Region</Link>
                            </li>
                            <li>
                              <Link to="" title="About Alanya">
                                About Alanya</Link>
                            </li>
                            <li className="has-child">
                              <Link to="" title="About Antalya">
                                About Antalya<i className="fa fa-angle-right" /></Link>
                              <div className="level-4">
                                <ul className="no-bullets">
                                  <li>
                                    <Link to="" title="Konyaalti beach best of both worlds">
                                      Konyaalti beach best of both worlds</Link>
                                  </li>
                                  <li>
                                    <Link to="" title="Antalya old city or Kaleici of Antalya">
                                      Antalya old city or Kaleici of Antalya</Link>
                                  </li>
                                  <li>
                                    <Link to="" title="The vibrant Lara beach district">
                                      The vibrant Lara beach district</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link to="" title="About Belek">
                                About Belek</Link>
                            </li>
                            <li>
                              <Link to="" title="About Dalaman">
                                About Dalaman</Link>
                            </li>
                            <li className="has-child">
                              <Link to="" title="About Kalkan">
                                About Kalkan<i className="fa fa-angle-right" /></Link>
                              <div className="level-4">
                                <ul className="no-bullets">
                                  <li>
                                    <Link to="" title="Kalkan for holiday home and investment">
                                      Kalkan for holiday home and investment</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link to="" title="About Kas">
                                About Kas</Link>
                            </li>
                            <li>
                              <Link to="" title="About Kemer">
                                About Kemer</Link>
                            </li>
                            <li>
                              <Link to="" title="About Side">
                                About Side</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link to="#" title="Aegean region">
                          Aegean region<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link to="" title="Turkish Aegean region">
                                Turkish Aegean region</Link>
                            </li>
                            <li>
                              <Link title="About Altinkum">
                                About Altinkum</Link>
                            </li>
                            <li>
                              <Link title="About Ayvalik">
                                About Ayvalik</Link>
                            </li>
                            <li className="has-child">
                              <Link title="About Bodrum">
                                About Bodrum<i className="fa fa-angle-right" /></Link>
                              <div className="level-4">
                                <ul className="no-bullets">
                                  <li>
                                    <Link title="Bodrum or Halicarnassus in the old days">
                                      Bodrum or Halicarnassus in the old days</Link>
                                  </li>
                                  <li>
                                    <Link title="Yalikavak the trendy marina town">
                                      Yalikavak the trendy marina town</Link>
                                  </li>
                                  <li>
                                    <Link title="Hidden treasures of Gumusluk">
                                      Hidden treasures of Gumusluk</Link>
                                  </li>
                                  <li>
                                    <Link title="Living la Vida Loca in Turkbuku">
                                      Living la Vida Loca in Turkbuku</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link title="About Cesme">
                                About Cesme</Link>
                            </li>
                            <li>
                              <Link title="About Dalyan">
                                About Dalyan</Link>
                            </li>
                            <li className="has-child">
                              <Link title="About Fethiye">
                                About Fethiye<i className="fa fa-angle-right" /></Link>
                              <div className="level-4">
                                <ul className="no-bullets">
                                  <li>
                                    <Link title="Ovacik">
                                      Ovacik</Link>
                                  </li>
                                  <li>
                                    <Link title="Hisaronu">
                                      Hisaronu</Link>
                                  </li>
                                  <li>
                                    <Link title="Calis">
                                      Calis</Link>
                                  </li>
                                  <li>
                                    <Link title="Uzumlu">
                                      Uzumlu</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link title="About Gocek">
                                About Gocek</Link>
                            </li>
                            <li>
                              <Link title="About Izmir">
                                About Izmir</Link>
                            </li>
                            <li>
                              <Link title="About Kusadasi">
                                About Kusadasi</Link>
                            </li>
                            <li>
                              <Link title="About Marmaris">
                                About Marmaris</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Marmara region">
                          Marmara region<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="About Bursa">
                                About Bursa</Link>
                            </li>
                            <li className="has-child">
                              <Link title="About Istanbul">
                                About Istanbul<i className="fa fa-angle-right" /></Link>
                              <div className="level-4">
                                <ul className="no-bullets">
                                  <li>
                                    <Link title="Districts of Istanbul">
                                      Districts of Istanbul</Link>
                                  </li>
                                  <li>
                                    <Link title="Why invest in Beyoglu Istanbul real estate">
                                      Why invest in Beyoglu Istanbul real estate</Link>
                                  </li>
                                  <li>
                                    <Link title="Bahcesehir known as the garden city">
                                      Bahcesehir known as the garden city</Link>
                                  </li>
                                  <li>
                                    <Link title="Istanbul Real Estate Market Analysis PDF">
                                      Istanbul Real Estate Market Analysis PDF</Link>
                                  </li>
                                </ul>
                              </div>
                            </li>
                            <li>
                              <Link title="About Yalova">
                                About Yalova</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Lycian coast">
                          Lycian coast<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Lycia's incredible legacy, the Lycian Way">
                                Lycia's incredible legacy, the Lycian Way</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Turquoise coast ">
                          Turquoise coast <i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Turkish Turquoise Coast">
                                Turkish Turquoise Coast</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Black Sea Region">
                          Black Sea Region<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Bolu City Guide">
                                Bolu City Guide</Link>
                            </li>
                            <li>
                              <Link title="Trabzon city guide">
                                Trabzon city guide</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Airports In Turkey">
                          Airports In Turkey<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Third Airport Istanbul">
                                Third Airport Istanbul</Link>
                            </li>
                            <li>
                              <Link title="Ataturk Airport Istanbul">
                                Ataturk Airport Istanbul</Link>
                            </li>
                            <li>
                              <Link title="Sabiha Gokcen Istanbul">
                                Sabiha Gokcen Istanbul</Link>
                            </li>
                            <li>
                              <Link title="Bodrum Milas Airport">
                                Bodrum Milas Airport</Link>
                            </li>
                            <li>
                              <Link title="Antalya Airport">
                                Antalya Airport</Link>
                            </li>
                            <li>
                              <Link title="Adnan Menderes Izmir">
                                Adnan Menderes Izmir</Link>
                            </li>
                            <li>
                              <Link title="Dalaman International Airport">
                                Dalaman International Airport</Link>
                            </li>
                            <li>
                              <Link title="Esenboga International Ankara">
                                Esenboga International Ankara</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link title="Weather In Turkey">
                          Weather In Turkey</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-child">
                  <Link to="/buyer" title="Buyer Guide">
                    <b>Buyer Guide</b><i className="fa fa-angle-down" /></Link>
                  <div className="level-2">
                    <ul className="no-bullets">
                      <li className="has-child">
                        <Link title="Investing in Turkey">
                          Investing in Turkey<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Why invest in property in Turkey">
                                Why invest in property in Turkey</Link>
                            </li>
                            <li>
                              <Link title="How to set up a business in Turkey">
                                How to set up a business in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Tax and Turkish real estate">
                                Tax and Turkish real estate</Link>
                            </li>
                            <li>
                              <Link title="EU negotiations and Turkish property prices">
                                EU negotiations and Turkish property prices</Link>
                            </li>
                            <li>
                              <Link title="Download macro-economic & investment analysis">
                                Download macro-economic &amp; investment analysis</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Purchase process">
                          Purchase process<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Who Can Buy Property in Turkey">
                                Who Can Buy Property in Turkey</Link>
                            </li>
                            <li>
                              <Link title="How to buy property in Turkey">
                                How to buy property in Turkey</Link>
                            </li>
                            <li>
                              <Link title="How to design and build your own">
                                How to design and build your own</Link>
                            </li>
                            <li>
                              <Link title="Property Turkey Inspection Trips">
                                Property Turkey Inspection Trips</Link>
                            </li>
                            <li>
                              <Link title="Virtual Tour with Property Turkey">
                                Virtual Tour with Property Turkey</Link>
                            </li>
                            <li>
                              <Link title="Costs of Purchasing a Property in Turkey">
                                Costs of Purchasing a Property in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Finance for property in Turkey">
                                Finance for property in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Property maintenance and management">
                                Property maintenance and management</Link>
                            </li>
                            <li>
                              <Link title="How to get a Turkish Title Deed">
                                How to get a Turkish Title Deed</Link>
                            </li>
                            <li>
                              <Link title="Should I use a solicitor to buy property in Turkey">
                                Should I use a solicitor to buy property in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Power of Attorney in Turkey">
                                Power of Attorney in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Buying property in Turkey through a company">
                                Buying property in Turkey through a company</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Residency permits and visas">
                          Residency permits and visas<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Residency permits in Turkey">
                                Residency permits in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Work permits in Turkey">
                                Work permits in Turkey</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Your pets and cars">
                          Your pets and cars<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Bringing your pets into Turkey">
                                Bringing your pets into Turkey</Link>
                            </li>
                            <li>
                              <Link title="Bringing your car into Turkey">
                                Bringing your car into Turkey</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Property taxes">
                          Property taxes<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Income Tax On Turkish Property">
                                Income Tax On Turkish Property</Link>
                            </li>
                            <li>
                              <Link title="Capital Gains Tax On Sale Of Turkish Property">
                                Capital Gains Tax On Sale Of Turkish Property</Link>
                            </li>
                            <li>
                              <Link title="VAT exemption when buying Turkish real estate">
                                VAT exemption when buying Turkish real estate</Link>
                            </li>
                            <li>
                              <Link title="Real estate inheritance tax in Turkey">
                                Real estate inheritance tax in Turkey</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="has-child">
                        <Link title="Living in Turkey">
                          Living in Turkey<i className="fa fa-angle-down" /></Link>
                        <div className="level-3">
                          <ul className="no-bullets">
                            <li>
                              <Link title="Retire to low cost of living in Turkey">
                                Retire to low cost of living in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Healthcare in Turkey">
                                Healthcare in Turkey</Link>
                            </li>
                            <li>
                              <Link title="Where to buy property in Turkey?">
                                Where to buy property in Turkey?</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link title="Download Complete Buyer Guide">
                          Download Complete Buyer Guide</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="has-child">
                  <Link to="/aboutusguide" title="About Us">
                    <b>About Us</b><i className="fa fa-angle-down" /></Link>
                  <div className="level-2">
                    <ul className="no-bullets">
                      <li>
                        <Link title="Our Services and Fees">
                          Our Services and Fees</Link>
                      </li>
                      <li>
                        <Link title="London">
                          London</Link>
                      </li>
                      <li>
                        <Link title="Istanbul">
                          Istanbul</Link>
                      </li>
                      <li>
                        <Link title="Bodrum">
                          Bodrum</Link>
                      </li>
                      <li>
                        <Link title="Fethiye">
                          Fethiye</Link>
                      </li>
                      <li>
                        <Link title="Antalya">
                          Antalya</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/contact" title="Contact Us">
                    <b>Contact Us</b></Link>
                </li>
                <li className="bold">
                  <Link to="propertyTurkey"><strong>Property Turkey TV</strong></Link>
                </li>
                <div className="showMb-hideDt auth header-right order-1 flex">
                  <button className="login fl-dis-right  fl-tab-right fl-mob-right">Login</button>
                  <Link className="login fl-dis-right  fl-tab-right fl-mob-right ">Register</Link>
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
                  <Link rel="nofollow" className title="Sterling Pound  " data-cur="GBP"><i className="fa fa-gbp" /></Link>
                  <Link rel="nofollow" className title="Euro " data-cur="EUR"><i className="fa fa-eur" /></Link>
                  <Link rel="nofollow" to="" className="active" title="Dollar " data-cur="USD"><i className="fa fa-usd" /></Link>
                  <Link rel="nofollow" className title="Turkish Lira " data-cur="TRY"><i className="fa fa-try" /></Link>
                </div></nav>
              <div className="auth header-right order-1 login-register-desktop-xl d-desk">
                <Link onClick={showModal} className="login fl-dis-right  fl-tab-right fl-mob-right"  >Login</Link>
                <Link onClick={handleOpen} className="login fl-dis-right  fl-tab-right fl-mob-right "  >Register</Link>
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




      <Modals
        open={open}
        onClose={handleClose}
        aria-labelledby="Modals-Modals-title"
        aria-describedby="Modals-Modals-description"
      >
        <Box sx={style}>

          <div className="w-full h-[600px]  overflow-y-auto flex flex-col justify-center items-center">
            <div className="w-[70px] h-[70px] ">
              <img src="https://www.propertyturkey.com/front/image/logo.png" alt="" />
            </div>
            <h3 className="margin-bottom-1 margin-top-1 text blink">Sign up to Save Properties</h3>

            <div className="w-[90%] h-auto  flex flex-col ">
              <label>Name</label>
              <input onChange={(e) => setName(e.target.value)} type="text" className="w-full h-[40px] bg-[#eee]" />
            </div>

            <div className="w-[90%] h-auto  flex flex-col ">
              <label>E-Mail</label>
              <input type="email" onChange={(e) => setEmail(e.target.value)} className="w-full h-[40px] bg-[#eee]" />
            </div>

            <div className="w-[90%] h-auto  flex flex-col ">
              <label>Mobile</label>
              <input type="text" onChange={(e) => setMobile(e.target.value)} className="w-full h-[40px] bg-[#eee]" />
            </div>

            <div className="w-[90%] h-auto  flex flex-col ">
              <label>password</label>
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full h-[40px] bg-[#eee]" />
            </div>
            <div className="w-[90%] h-auto  flex flex-col ">
              <label>confirm password</label>
              <input type="password" onChange={(e) => setconfirmpasswordPassword(e.target.value)} className="w-full h-[40px] bg-[#eee]" />
            </div>
            <button onClick={RegisterUser} className="w-[90%] p-3 bg-red-700 text-white mt-3">Register</button>
            <Typography>By creating your Creating You must agree with our Privcy policy</Typography>

          </div>

        </Box>
      </Modals>


      <Modal style={{ position: "relative", top: 10 }} title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div
          style={{ display: "inline-block" }}
          id="logins"
          className="fancybox-content"
        >
          <div className="container text-center">
            <div className="register-form">
              <div>
                {" "}
                <img
                  src="https://www.propertyturkey.com/front/image/logo.png"
                  width={80}
                  className="img-fluid"
                  alt="Property Turkey"
                />{" "}
              </div>
              <h3 className="margin-bottom-3 margin-top-1">
                Sign in to Save Properties
              </h3>
              <a
                href="https://www.propertyturkey.com/Oauth/gplus"
                className="ion-social-google w-75 margin-ver-1"
              >
                <span>
                  <img
                    src="https://www.propertyturkey.com/front/image/google-icon.png"
                    width={17}
                    className="img-fluid ver-img-middle"
                    alt="googleicon"
                  />{" "}
                  Continue with Google
                </span>
              </a>
              <a
                href="https://www.propertyturkey.com/Oauth/fb"
                className="ion-social-facebook w-75"
              >
                <span>
                  <i className="fa fa-facebook" aria-hidden="true" /> Continue with
                  Facebook
                </span>
              </a>
              <p className="pos-relarive">
                <span className="or-btn">OR</span>
              </p>
              <div

                className="body"
              >
                <input
                  name="_token"
                  type="hidden"
                  defaultValue="R2XQX4Jj0bD0ckbJgWKR34RpZBj8O8wuA9PzETaG"
                />
                <div className="form-field">
                  <label>E-mail*</label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail" name="email" type="email" />
                </div>
                <div className="form-field">
                  <label>Password*</label>
                  <input
                    placeholder="Password"
                    name="password"
                    type="password"
                    defaultValue=""
                    onChange={(e) => setPassword(e.target.value)}

                  />
                </div>
                <div className="form-field">
                  <input name="remember" type="checkbox" defaultValue={1} /> Remember Me
                </div>
                <input
                  type="hidden"
                  name="LoginUser"
                  defaultValue=""
                  style={{ display: "none" }}
                />
                <button
                  className="btn btn-block bg-pt crl-white margin-ver-1"
                  onClick={AuthRegister}
                  defaultValue="Login"
                >Submit</button>
                <input
                  name="prev"
                  type="hidden"
                  defaultValue="https://www.google.com/"
                />
              </div>
              <div className="text-left padding-bottom-05">
                <a href="https://www.propertyturkey.com/forget-password">
                  Forget Password
                </a>
              </div>
              <p className="text-left">
                {" "}
                Do not have an account?{" "}
                <a className="clr-pt" href="https://www.propertyturkey.com/register">
                  {" "}
                  Signup
                </a>
              </p>
            </div>
          </div>
          <button
            type="button"

            className="fancybox-button fancybox-close-small"

          >
            <svg xmlns="http://www.w3.org/2000/svg" version={1} viewBox="0 0 24 24">
              <path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z" />
            </svg>
          </button>
        </div>

      </Modal>





    </>
  )
}
