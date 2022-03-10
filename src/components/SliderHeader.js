import Slider from "react-slick";
import React from "react";
import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

const SliderHeader = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // eslint-disable-next-line no-dupe-keys
        speed: 2000,
        autoplaySpeed: 4000,
        ssEase: "linear",
        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,
      };

      // function SampleNextArrow(props) {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{ ...style, display: "block" }}
      //       onClick={onClick}
      //     ></div>
      //   );
      // }
      // function SamplePrevArrow(props) {
      //   const { className, style, onClick } = props;
      //   return (
      //     <div
      //       className={className}
      //       style={{ ...style, display: "block" }}
      //       onClick={onClick}
      //     />
      //   );
      // }

  return (
    <div className="slider-header">
        <Slider {...settings}>
          <div>
              {/* <h2 className="title-slider">Monster Truck</h2> */}
            <img className="slick-img" src="./img/slider-img/1.jpg" alt="" />
          </div>
          <div>
            <img className="slick-img" src="./img/slider-img/2.jpg" alt="" />
          </div>
          <div>
            <img className="slick-img" src="./img/slider-img/3.jpg" alt="" />
          </div>
          <div>
            <img className="slick-img" src="./img/slider-img/4.jpg" alt="" />
          </div>
          <div>
            <img className="slick-img" src="./img/slider-img/5.jpg" alt="" />
          </div>
          <div>
            <img className="slick-img" src="./img/slider-img/6.jpg" alt="" />
          </div>
        </Slider>
      </div>
  )
}

export default SliderHeader
