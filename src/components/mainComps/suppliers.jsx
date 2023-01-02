import React, { useContext } from "react";
import {
  DressContext,
  FlowerContext,
  HairContext,
  PhotoContext,
  RingContext,
  SuitContext,
} from "./../providers/allProviders";
import GroomSuits from "./../financesComp/groomSuits";
function Suppliers() {
  const { flowers } = useContext(FlowerContext);
  const { rings } = useContext(RingContext);
  const { dress } = useContext(DressContext);
  const { suit } = useContext(SuitContext);
  const { hair } = useContext(HairContext);
  const { photographer } = useContext(PhotoContext);
  const allsup = [
    ...flowers,
    ...rings,
    ...dress,
    ...suit,
    ...hair,
    ...photographer,
  ];
  console.log(allsup);

  return (
    <div className="sapakimWrap">
      <h1 className="coteretTheme">Suppliers</h1>
      <div className="sapakWraper">
        {allsup.map((flower) => (
          <div className="banner">
            <img src={flower.img} alt="" className="banner_picture" />
            <label className="sapakName">{flower.name}</label>
            <br />
            <label className="sapakName">{flower.price}</label>
            <br />
            <div className="images">
              <div>
                {flower.homeurl ? (
                  <img
                    src={flower.home}
                    alt=""
                    title={flower.homeAddress}
                    className="adress"
                  />
                ) : null}
              </div>
              <div>
                {flower.instegramurl ? (
                  <a href="https://www.instagram.com/">
                    <img
                      src={flower.instegram}
                      alt=""
                      className="instegram"
                      title={flower.instegramUserName}
                    />
                  </a>
                ) : null}
              </div>
              <div>
                {flower.fcbUrl ? (
                  <a href="https://www.facebook.com/">
                    <img
                      src={flower.facebook}
                      alt=""
                      className="facebook"
                      title={flower.facebookUserName}
                    />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Suppliers;
