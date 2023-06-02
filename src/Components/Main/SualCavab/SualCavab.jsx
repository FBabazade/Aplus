import "./SualCavab.css";
import { BsArrowRightShort } from "react-icons/bs";
import Slider from "react-slick";
function SualCavab() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="cards-slide">
      <div className="card-header">
        <div className="text">
          <h1>SUAL CAVAB</h1>
        </div>
        <div className="arrow-counter">
          <span>1/1</span>
        </div>
      </div>

      <div className="actions-cards">
        <Slider {...settings}>
          <div className="comment-card">
              <span className="num">1</span>
              <h1>Lorem ipsum dolor sit.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque,
                fugit consectetur aliquid excepturi possimus non.
              </p>
              <span className="arrow">
                Davamını oxu <BsArrowRightShort />
              </span>
            </div>
         
        </Slider>
      </div>
    </div>
  );
}
export default SualCavab;
