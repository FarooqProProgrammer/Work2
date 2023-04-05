import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};
export default function Testimonial() {
    return (

        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div className="item">
                <img
                    className="testimonal-img lazyloaded"
                    data-src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                    src="https://www.propertyturkey.com/front/image/images2019/Icons/quote-left-solid.png"
                />
                <a
                    href="testimonials/world-class-service-company-and-team"
                    className="abhaya"
                >
                    <b>World class service company and team</b>
                </a>
                <p limit={300}>
                    "It gives me immense joy to inform you that yesterday I received the Title
                    Deed for the apartment I purchased recently in Istanbul through Property
                    Turkey." Find out what else S. Bhat from Muscat, Oman, had to say about
                    their experience obtaining Turkish Citizenship by Investment wi
                </p>
                <div className="testimonial-date">
                    <img
                        className=" lazyloaded"
                        data-src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                        src="https://www.propertyturkey.com/front/image/images2019/Icons/placeholder.jpg"
                    />
                    <h4>
                        {" "}
                        /<span>15 Jun 2022</span>
                    </h4>
                </div>
            </div>

            <div>Item 2</div>
            <div>Item 3</div>
            <div>Item 4</div>
        </Carousel>
    )
}
