import React from "react";
import "../../mainComps/financesKids.css";
import { useContext } from "react";
import { DressContext } from "../providers/allProviders";
function Dresses() {
  const {
    fcbUrl,
    remove,
    admin3,
    instegramurl,
    homeurl,
    dress,
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
    addtodress,
  } = useContext(DressContext);
  return (
    <div className="sapakimWrap">
      <h1 className="coteretTheme">photograpgers</h1>
      <div className="sapakWraper">
        {dress.map((flower) => (
          <div className="banner">
            {admin3 ? (
              <div className="delete" onClick={() => remove(flower.name)}>
                ✖
              </div>
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
      {admin3 ? (
        <form>
          <input
            type="text"
            placeholder="add image url"
            onChange={(e) => setimage(e.target.value)}
            required
          />
          <br />
          <input
            required
            type="text"
            placeholder="add a name"
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            required
            type="text"
            placeholder="add a price range"
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="">address</label>
          <input
            required
            type="checkbox"
            checked={addresscheck}
            onChange={addressCheckChange}
          />
          {addresscheck ? (
            <input
              required
              type="text"
              placeholder="add an address"
              onChange={(e) => setHomeAddres(e.target.value)}
            />
          ) : null}
          <br />
          <label htmlFor="">instegram user name</label>
          <input
            required
            type="checkbox"
            checked={instegramcheck}
            onChange={instegramCheckChange}
          />
          {instegramcheck ? (
            <input
              required
              type="text"
              placeholder="add instegram username "
              onChange={(e) => setInstegramUserName(e.target.value)}
            />
          ) : null}
          <br />
          <label htmlFor="">facebook user name</label>
          <input
            required
            type="checkbox"
            checked={facebookcheck}
            onChange={facebookCheckChange}
          />
          {facebookcheck ? (
            <input
              required
              type="text"
              placeholder="add facebook username"
              onChange={(e) => setFacebookUserName(e.target.value)}
            />
          ) : null}
          <br />
          <button type="submit" onClick={(e) => addtodress(e)}>
            {" "}
            add to the suppliers
          </button>
        </form>
      ) : null}
    </div>
  );
}
export default Dresses;
