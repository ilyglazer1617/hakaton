import React from "react";
import "../../mainComps/aboutus.css";
import img from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/aboutusImg.png";

function AboutUs() {
  return (
    <div className="aboutusWrap">
      <p className="coteret">Our Story</p>
      <div className="middel">
        <img className="homeImg" src={img} alt="" />
        <p className="story">
          We are 32 teenagers from the villages of Julis, Yarka, Beit Jann, Ein
          El Asad and we’re volunteers at the unistream organization at the
          Julis Entrepreneurship Center. Unistream promotes business and social
          entrepreneurship among youth from the periphery. The Julis Unistream
          Center is the only Druze center. As part of our participation in
          Unistream, we established a company called Blury September 2020. It’s
          our third year in Unistream so for the past two years we have been
          working and developing a platform called 3D Event with the help of our
          business mentor Oded Tal.
        </p>
      </div>
    </div>
  );
}
export default AboutUs;
