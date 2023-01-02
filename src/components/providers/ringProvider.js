import React, { useState } from "react";
import { RingContext } from "./allProviders";
import facbookLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/facebookLogo.jpg";
import instaLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/instaLogo.jpg";
import houseLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/houseLogo.jpg";

import contactimage from "../../imgs/contactImage.jpeg";
const RingProvider = (props) => {
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
  const [admin2, setAdmin2] = useState(false);
  const [rings, setRings] = useState([
    {
      img: contactimage,
      name: "goldy",
      price: "3500-3750",
      home: houseLogo,
      homeAddress: "Ramat Gan 12 Aba H. Silver Rd",
      instegram: instaLogo,
      instegramUserName: "goldy-store",
      facebook: facbookLogo,
      facebookUserName: "goldy.store",
      homeurl: homeurl,
      instegramurl: instegramurl,
      fcbUrl: fcbUrl,
    },
    {
      img: contactimage,
      name: "jewelry botic",
      price: "3250-3600",
      home: houseLogo,
      homeAddress: " Ramat Hasharon 91 Sokolov",
      instegram: instaLogo,
      instegramUserName: "jewelry-botic",
      facebook: facbookLogo,
      facebookUserName: "jewelry.botic",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Asia israel",
      price: "3400-3800",
      home: houseLogo,
      homeAddress: " Petah Tikva 3 Hamagshimim",
      instegram: instaLogo,
      instegramUserName: "Asia-israel",
      facebook: facbookLogo,
      facebookUserName: -"Asia.israel",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Padani",
      price: "3500-4000",
      home: houseLogo,
      homeAddress: "Tel Aviv 11 Levinsky St.",
      instegram: instaLogo,
      instegramUserName: "Padani-store",
      facebook: facbookLogo,
      facebookUserName: "Padani.store",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Armani",
      price: "3750-4250",
      home: houseLogo,
      homeAddress: "Haifa 37 Allenby Rd",
      instegram: instaLogo,
      instegramUserName: "Armani-store",
      facebook: facbookLogo,
      facebookUserName: "Armani.store",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Gold Jewelry",
      price: "1400-1600",
      home: houseLogo,
      homeAddress: "Netanya 6 Sapir St",
      instegram: instaLogo,
      instegramUserName: "Gold-Jewelry",
      facebook: facbookLogo,
      facebookUserName: "Gold.Jewelry",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
  ]);
  const remove = (name) => {
    let x = rings.filter((obj) => obj.name !== name);
    setRings(x);
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
  const addtoRings = (e) => {
    e.preventDefault();
    console.log(name);
    if (name || price || homeAddress || instegramUserName || facebookUserName)
      setRings([
        ...rings,
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
    <RingContext.Provider
      value={{
        fcbUrl,
        remove,
        admin2,
        setAdmin2,
        instegramurl,
        homeurl,
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
      }}
    >
      {children}
    </RingContext.Provider>
  );
};

export default RingProvider;
