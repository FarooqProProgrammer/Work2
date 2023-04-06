import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default function TurkeyTv() {
  return (
    <section className="padding-top-2">
      <div
        id="hot-properties"
        className="pt-videos-listing wrap-dis-85 wrap-tab-11 wrap-mob-11"
      >
        <h2 className="title-lined abhaya">
          <span className="small">Straight Talk - Property Turkey TV</span>
        </h2>
        <Carousel responsive={responsive} >
          <div className="figure-container" style={{ width: 350 }}>
            <figure className="h-23rem" id="height-10">
              <img
                data-src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                className=" lazyloaded"
                alt="13 AMAZING Facts About Turkey"
                src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
              />
              <img
                className="homeVideos-item-play lazyloaded"
                id="videos-about-turkey"
                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
              />
            </figure>
            <div className="" style={{height:70,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h2 itemProp="name headline" className="fs-6">
              13 AMAZING Facts About Turkey
            </h2>
            </div>
          </div>
          <div className="figure-container" style={{ width: 350 }}>
            <figure className="h-23rem" id="height-10">
              <img
                data-src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                className=" lazyloaded"
                alt="13 AMAZING Facts About Turkey"
                src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
              />
              <img
                className="homeVideos-item-play lazyloaded"
                id="videos-about-turkey"
                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
              />
            </figure>
            <div className="" style={{height:70,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h2 itemProp="name headline" className="fs-6">
              13 AMAZING Facts About Turkey
            </h2>
            </div>
          </div>
          <div className="figure-container" style={{ width: 350 }}>
            <figure className="h-23rem" id="height-10">
              <img
                data-src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
                className=" lazyloaded"
                alt="13 AMAZING Facts About Turkey"
                src="https://img.youtube.com/vi/B2g7571VBe8/hqdefault.jpg"
              />
              <img
                className="homeVideos-item-play lazyloaded"
                id="videos-about-turkey"
                data-src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
                src="https://www.propertyturkey.com/front/image/images2019/Icons/youtube-playicon.svg"
              />
            </figure>
            <div className="" style={{height:70,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <h2 itemProp="name headline" className="fs-6">
              13 AMAZING Facts About Turkey
            </h2>
            </div>
          </div>


        </Carousel>
        <div className="text-center">
          <a
            className="view-all-btn btn margin-top-2 rednew-border"
            style={{
              padding: ".5rem 2rem !important",
              backgroundColor: "transparent"
            }}
            
          >
            <span>View All</span>
          </a>
          <a
            className="view-all-btn btn margin-top-2 rednew-border margin-left-1"
            style={{
              padding: ".5rem 2rem !important",
              backgroundColor: "transparent"
            }}
            data-fancybox=""
            data-src="#subscribe-media-modal"
            href="javascript:;"
          >
            <span>Subscribe</span>
          </a>
        </div>
        <br />
        <br />
      </div>
    </section>

  )
}
