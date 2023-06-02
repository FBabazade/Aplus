import React from "react";
import "./Umico.css"
function Uicobonus() {
  return (
    <div className="umico-container">
      <div className="bonus-cards">
       <img src="https://a-plus-eta.vercel.app/static/media/card2.693ec5e81a628f3a3b7a.png" alt="" />
        <img src="https://a-plus-eta.vercel.app/static/media/card1.067d5980330a195a1196.png" alt="" />
      </div>
      <div className="text-and-logos">
        <h1>UMICO bonusları Aplus-da!</h1>
        <p>UMICO kartı sizə Aplusda-da hər alış-veriş etdiyiniz məbləğin 1% -nin geri qaytarılması imkanı verir.</p>
        <div className="logos">
           <img style={{borderRight:"1px solid #707070"}} src="	https://aplus.weondevelopment.com/storage/TRFHCLxT4CRCkWAdii9Xt7d7wupjW5ofsq3Hu9fj.png" alt="" />
           <img src="data:image/png;base64,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" alt="" />
        </div>
      </div>
      <div className="balls">  <div className="bottomball"></div>
      <div className="topball"></div>
      
       
      </div>
    </div>
  );
}

export default Uicobonus;
