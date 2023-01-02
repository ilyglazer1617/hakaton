import React from "react";
import "../../mainComps/home.css";
import Homeimg from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/homePagePic.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeWrap">
      <p className="coteretHome">
        YOUR <span className="coteretHome2"> Event - your own </span>CREATION
      </p>

      <div className="middel">
        <img className="homeImg" src={Homeimg} alt="" />
        <p className="info">
          We are the Unistream-Julis Center and we strive to create change in
          society and lead a revolutionary generation of values and principles,
          and to make our lives more comfortable through a technological and
          innovative venture. To do so, we will work collaboratively to create a
          donating and effective start-up for the environment and the community.
          <br />
          <Link to="/AboutUs" className="anew">
            <button className="button button4 ">Learn more</button>
          </Link>
        </p>
      </div>
    </div>
  );
}
export default Home;
