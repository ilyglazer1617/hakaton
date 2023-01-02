import React, { useState } from "react";
import facbookLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/facebookLogo.jpg";
import instaLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/instaLogo.jpg";
import houseLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/houseLogo.jpg";

import contactimage from "../../imgs/contactImage.jpeg";
import { HairContext } from "./allProviders";
const HairProvider = (props) => {
  const { children } = props;
  const [fcbUrl, setFcbUrl] = useState(true);
  const [instegramurl, setInstegramurl] = useState(true);
  const [homeurl, setHomeurl] = useState(true);
  const [image, setimage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [homeAddress, setHomeAddres] = useState("");
  const [instegramUserName, setInstegramUserName] = useState("");
  const [facebookUserName, setFacebookUserName] = useState("");
  const [addresscheck, setAddressCheck] = useState(false);
  const [instegramcheck, setInstegreamCheckd] = useState(false);
  const [facebookcheck, setFacebookCheckd] = useState(false);
  const [admin5, setAdmin5] = useState(false);
  const [hair, setHair] = useState([
    {
      img: contactimage,
      name: "adi sharaban",
      price: "1250-1350",
      home: houseLogo,
      homeAddress: "Ramat Hasharon  31 Bustenai",
      instegram: instaLogo,
      instegramUserName: "adi-sharaban",
      facebook: facbookLogo,
      facebookUserName: "adi.sharaban",
      homeurl: homeurl,
      instegramurl: instegramurl,
      fcbUrl: fcbUrl,
    },
    {
      img: contactimage,
      name: "gal melamed",
      price: " 1250-1350",
      home: houseLogo,
      homeAddress: " Tel Aviv 41 Greenboim",
      instegram: instaLogo,
      instegramUserName: "gal-melamed",
      facebook: facbookLogo,
      facebookUserName: "gal.melamed",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "lihi koren cohen",
      price: "1050-1150",
      home: houseLogo,
      homeAddress: " Lod 1 Hatzionut",
      instegram: instaLogo,
      instegramUserName: "lihi-koren-cohen",
      facebook: facbookLogo,
      facebookUserName: "lihi.koren.cohen",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "mor glam",
      price: "1900-2100",
      home: houseLogo,
      homeAddress: "Ramat Hasharon 7 Weizmann Blvd",
      instegram: instaLogo,
      instegramUserName: "mor-glam",
      facebook: facbookLogo,
      facebookUserName: "mor.glam",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "liz vernik",
      price: "1450-1600",
      home: houseLogo,
      homeAddress: "Tel Aviv 6 Kaufman",
      instegram: instaLogo,
      instegramUserName: "liz-vernik",
      facebook: facbookLogo,
      facebookUserName: "liz.vernik",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "eti dabus hair styling",
      price: "1850-2400",
      home: houseLogo,
      homeAddress: "Tel-aviv 20 Lillenblum",
      instegram: instaLogo,
      instegramUserName: "eti-dabus-hair-styling",
      facebook: facbookLogo,
      facebookUserName: "eti.dabus.hair.styling",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
  ]);
  const remove = (name) => {
    let x = hair.filter((obj) => obj.name !== name);
    setHair(x);
  };
  const addressCheckChange = () => {
    if (addresscheck == false) {
      setAddressCheck(true);
    } else setAddressCheck(false);
  };
  const instegramCheckChange = () => {
    if (instegramcheck == false) {
      setInstegreamCheckd(true);
    } else setInstegreamCheckd(false);
  };
  const facebookCheckChange = () => {
    if (facebookcheck == false) {
      setFacebookCheckd(true);
    } else setFacebookCheckd(false);
  };
  const addhair = (e) => {
    e.preventDefault();
    console.log(name);
    if (name || price || homeAddress || instegramUserName || facebookUserName)
      setHair([
        ...hair,
        {
          img: contactimage,
          name: name,
          price: price,
          home: houseLogo,
          homeAddress: homeAddress,
          instegram: instaLogo,
          instegramUserName: instegramUserName,
          facebook: facbookLogo,
          facebookUserName: facebookUserName,
          fcbUrl: fcbUrl,
          instegramurl: instegramurl,
          homeurl: homeurl,
        },
      ]);
  };
  return (
    <HairContext.Provider
      value={{
        fcbUrl,
        instegramurl,
        remove,
        admin5,
        setAdmin5,
        homeurl,
        hair,
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
        addhair,
      }}
    >
      {children}
    </HairContext.Provider>
  );
};

export default HairProvider;
