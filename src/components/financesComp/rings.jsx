import React, { useContext } from "react";
import { RingContext } from "./../providers/allProviders";
import "../../mainComps/financesKids.css";
function Rings() {
  const {
    fcbUrl,
    instegramurl,
    homeurl,
    admin2,
    remove,
    rings,
    image,
    setimage,
    name,
    setName,
    price,
    setPrice,
    homeAddress,
    setHomeAddres,
    instegramUserName,
    setInstegramUserName,
    facebookUserName,
    setFacebookUserName,
    addresscheck,
    setAddressCheck,
    instegramcheck,
    setInstegreamCheckd,
    facebookcheck,
    setFacebookCheckd,
    addressCheckChange,
    instegramCheckChange,
    facebookCheckChange,
    addtoRings,
  } = useContext(RingContext);
  return (
    <div className="sapakimWrap">
      <h1 className="coteretTheme">Rings</h1>
      <div className="sapakWraper">
        {rings.map((flower) => (
          <div className="banner">
            {admin2 ? (
              <button className="delete" onClick={() => remove(flower.name)}>
                ✖
              </button>
            ) : null}
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
      {admin2 ? (
        <form>
          <div className="addingWrap">
            <input
              type="text"
              placeholder="add image url"
              onChange={(e) => setimage(e.target.value)}
              required
              className="inputadd"
            />
            <br />
            <input
              required
              type="text"
              placeholder="add a name"
              onChange={(e) => setName(e.target.value)}
              className="inputadd"
            />
            <br />
            <input
              required
              type="text"
              placeholder="add a price range"
              onChange={(e) => setPrice(e.target.value)}
              className="inputadd"
            />
            <br />
            <div>
              <label htmlFor="">address</label>
              <input
                required
                type="checkbox"
                checked={addresscheck}
                onChange={addressCheckChange}
                className="inputadd"
              />
            </div>
            {addresscheck ? (
              <input
                required
                type="text"
                placeholder="add an address"
                onChange={(e) => setHomeAddres(e.target.value)}
                className="inputadd"
              />
            ) : null}
            <br />
            <label htmlFor="">instegram user name</label>
            <input
              required
              type="checkbox"
              checked={instegramcheck}
              onChange={instegramCheckChange}
              className="inputadd"
            />
            {instegramcheck ? (
              <input
                required
                type="text"
                placeholder="add instegram username "
                onChange={(e) => setInstegramUserName(e.target.value)}
                className="inputadd"
              />
            ) : null}
            <br />
            <label htmlFor="">facebook user name</label>
            <input
              required
              type="checkbox"
              checked={facebookcheck}
              onChange={facebookCheckChange}
              className="inputadd"
            />
            {facebookcheck ? (
              <input
                required
                type="text"
                placeholder="add facebook username"
                onChange={(e) => setFacebookUserName(e.target.value)}
                className="inputadd"
              />
            ) : null}
            <br />
            <button type="submit" onClick={(e) => addtoRings(e)}>
              {" "}
              add to the suppliers
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
}
export default Rings;
