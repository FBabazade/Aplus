import React, { useEffect, useState } from 'react'
import AksiyalarItem from './AksiyalarItem';
import Slider from 'react-slick';
import "./Aksiyalar.css"
function Aksiyalar() {
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
    }, []);
    const fetchData = () => {
      fetch("https://aplus.weondevelopment.com/api/actions")
        .then((response) => response.json())
        .then((data) => setData(data?.actions?.data))
        .catch((error) => console.log("Error fetching data:", error));
    };
  return (
    <>
   <div className="cards-slide">
      <div className="card-header">
        <div className="text">
          <h1>AKSİYALAR</h1>
          <h2>HƏR GÜN ÜÇÜN SUPER FÜRSƏTLƏR</h2>
        </div>
        <div className="arrow-counter">
          <span>1/1</span>
          <button>prev</button>
          <button>next</button>
        </div>
      </div>

      <div className="actions-cards">
      <Slider {...settings}>
          {data.map((item) => (
            <AksiyalarItem key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  </>
  )
}

export default Aksiyalar