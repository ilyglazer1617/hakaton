import React, { useState } from "react";
import facbookLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/facebookLogo.jpg";
import instaLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/instaLogo.jpg";
import houseLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/houseLogo.jpg";

import contactimage from "../../imgs/contactImage.jpeg";
import { DressContext } from "./allProviders";
const DressProvider = (props) => {
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
  const [admin3, setAdmin3] = useState(false);
  const [dress, setdress] = useState([
    {
      img: contactimage,
      name: "Yossi shitrit",
      price: "1200-1500",
      home: houseLogo,
      homeAddress: " Holon 20 Rabinovitz Y",
      instegram: instaLogo,
      instegramUserName: "Yossi-shitrit",
      facebook: facbookLogo,
      facebookUserName: "Yossi.shitrit",
      homeurl: homeurl,
      instegramurl: instegramurl,
      fcbUrl: fcbUrl,
    },
    {
      img: contactimage,
      name: "Michael aviv",
      price: "1150-1550",
      home: houseLogo,
      homeAddress: " Petah Tikva 15 Rabinson Yehezkel",
      instegram: instaLogo,
      instegramUserName: "Michael-aviv",
      facebook: facbookLogo,
      facebookUserName: "Michael.aviv",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Ben haion",
      price: "1350-1500",
      home: houseLogo,
      homeAddress: " Rishon Lezion 16 Rabbi Akiva",
      instegram: instaLogo,
      instegramUserName: "Ben-haion",
      facebook: facbookLogo,
      facebookUserName: "Ben.haion",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "lior refael",
      price: "1350-1600",
      home: houseLogo,
      homeAddress: "Petah Tikva 16 Chen",
      instegram: instaLogo,
      instegramUserName: "lior-refael",
      facebook: facbookLogo,
      facebookUserName: "lior.refael",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "lioz manor",
      price: "1600-1800",
      home: houseLogo,
      homeAddress: "Haifa 26 Hanapach",
      instegram: instaLogo,
      instegramUserName: "lioz-manor",
      facebook: facbookLogo,
      facebookUserName: "lioz.manor",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Tamir ashkenzi",
      price: "1400-1600",
      home: houseLogo,
      homeAddress: "Tel-aviv 20 Lillenblum",
      instegram: instaLogo,
      instegramUserName: "Tamir-ashkenzi",
      facebook: facbookLogo,
      facebookUserName: "Tamir.ashkenzi",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
  ]);
  const remove = (name) => {
    let x = dress.filter((obj) => obj.name !== name);
    setdress(x);
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

  const addtodress = (e) => {
    e.preventDefault();
    console.log(name);
    if (name || price || homeAddress || instegramUserName || facebookUserName)
      setdress([
        ...dress,
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
    <DressContext.Provider
      value={{
        fcbUrl,
        remove,
        admin3,
        setAdmin3,
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
      }}
    >
      {children}
    </DressContext.Provider>
  );
};

export default DressProvider;
