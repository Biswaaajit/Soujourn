/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "../../components/ImageSlider";

function HomeSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container relative">
      <Slider {...settings}>
        <div>
          <ImageSlider image="/d1.jpg" />
        </div>
        <div>
          <ImageSlider image="/d2.jpg" />
        </div>
        <div>
          <ImageSlider image="/d3.jpg" />
        </div>
        <div>
          <ImageSlider image="/d4.jpg" />
        </div>
      </Slider>
    </div>
  );
}

export default HomeSlider;
