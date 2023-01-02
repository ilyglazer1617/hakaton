import React from "react";
import "../../mainComps/dDesign.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hall1 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall1.jpg";
import hall2 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall2.jpg";
import hall3 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall3.jpg";
import hall4 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall4.JPG";
import hall5 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall5.jpg";
import hall6 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall6.jpg";
import hall7 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall7.jpg";
import hall8 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall8.jpg";
import hall9 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall9.jpg";
import hall10 from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/hall10.jpg";
const images = [
  hall1,
  hall2,

  hall4,
  hall5,
  hall6,
  hall7,
  hall8,
  hall9,
  hall10,
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345767/demo_image2.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
  // "https://res.cloudinary.com/ifeomaimoh/image/upload/v1652345874/demo_image1.jpg",
];
function Ddesign() {
  return (
    <div className="desighnWrapper">
      <h4 className="designText">3D DESIGN</h4>
      <h1 className="designText2"> Pick your venue</h1>
      <div className="box">
        <Carousel useKeyboardArrows={false}>
          {images.map((hall1, index) => (
            <div>
              <img
                style={{ height: "50%" }}
                className="hallImg"
                alt="sample_file"
                src={hall1}
                key={index}
              />
              <p> hod</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Ddesign;
