import React from "react";
import "../../mainComps/finances.css";
import { Route, Routes, Link } from "react-router-dom";
import ringPhoto from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/ringsPhoto.jpg";
import DressesImg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/dressesPhoto.jpg";
import flowerImg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/flowerPhoto.jpg";
import hairImg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hairPhoto.jpg";
import grapherImg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/photoGrapherPhoto.jpg";
import suitImg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/suitPhoto.jpg";

function Finances() {
  return (
    <div className="financesWrapper">
      <h4 className="designText1">Fineances</h4>
      <h1 className="designTextFinence2">How much a wedding cost?</h1>
      <div className="topFinancesRow">
        <Link className="ancorFinence" to="/finances/flower">
          <img className="financesLink" src={flowerImg} />
        </Link>
        <Link to="/finances/rings">
          <img className="financesLink" src={ringPhoto} alt="" />
        </Link>
        <Link style={{ width: "fit-content" }} to="/finances/dresses">
          <img className="financesLink" src={DressesImg} alt="" />
        </Link>
      </div>
      <div className="topFinancesRow">
        <Link to="/finances/groomSuits">
          <img className="financesLink" src={suitImg} alt="" />
        </Link>
        <Link to="/finances/hairStyle">
          <img className="financesLink" src={hairImg} alt="" />
        </Link>
        <Link to="/finances/photoGrapher">
          <img className="financesLink" src={grapherImg} alt="" />
        </Link>
      </div>
    </div>
  );
}
export default Finances;
