import React, { useEffect, useState } from "react";
import Carditems from "./Carditems";
import "./Xususi.css";
import Slider from "react-slick";
function XususiTeklif() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
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
        breakpoint: 600,
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
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [setData]);
  const fetchData = () => {
    fetch("https://aplus.weondevelopment.com/api/products")
      .then((response) => response.json())
      .then((data) => setData(data?.products?.data))
      .catch((error) => console.log("Error fetching data:", error));
  };
  return (
    <div className="cards-slide">
      <div className="card-header">
        <div className="text">
          <h1>Xüsusi təkliflər</h1>
          <h2>HƏR GÜN ÜÇÜN SUPER FÜRSƏTLƏR</h2>
        </div>
        <div className="arrow-counter">
          <span>1/1</span>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>

      <div className="cards">
        <Slider {...settings}>
          {data.map((item) => (
            <Carditems key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default XususiTeklif;
