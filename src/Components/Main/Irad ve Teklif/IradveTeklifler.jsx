import React from "react";
import "./IradTeklif.css";
import { BsArrowRightShort} from "react-icons/bs";
import lupa from "../../assets/Images/lupa.png";
import persons from "../../assets/Images/persons.png";
function IradveTeklifler() {
  return (
    <div className="flex-container">
      <div className="leftContainer">
        <div className="textContainer">
          <img src="https://aplus.weondevelopment.com/storage/TRFHCLxT4CRCkWAdii9Xt7d7wupjW5ofsq3Hu9fj.png"alt="" />
          <h1>A PLUS AİLƏSİNİN ÜZVÜ OL</h1>
          <p>A plus marketlərində təlim keç və işləmək şansını qazan</p>
          <button>
            Ətraflı
            <BsArrowRightShort />
          </button>
        </div>
        <div className="imgContainer"><img src={lupa} alt="lupa" />
        <img src={persons} alt="" /></div> 
      </div>
      <div className="rightContainer">
        <h1>İRAD VƏ TƏKLİFLƏRİNİZ</h1>
        <div className="input-span">
        <span>Mobil nömrə</span>
        <input placeholder="Mobil nömrənizi daxil edin" type="tel" /></div>
        <div className="textarea">
        <textarea placeholder="Müraciətinizin mətni" ></textarea>
        <span>Məxfilik tam qorunur</span></div>
        <button>
            Göndər
            <BsArrowRightShort />
          </button>
      </div>
    </div>
  );
}

export default IradveTeklifler;
