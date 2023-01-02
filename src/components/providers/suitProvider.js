import React, { useState } from "react";
import facbookLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/facebookLogo.jpg";
import instaLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/instaLogo.jpg";
import houseLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/houseLogo.jpg";

import contactimage from "../../imgs/contactImage.jpeg";
import { SuitContext } from "./allProviders";
const SuitProvider = (props) => {
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
  const [admin4, setAdmin4] = useState(false);
  const [suit, setSuit] = useState([
    {
      img: contactimage,
      name: "suit direct",
      price: "1500-2200",
      home: houseLogo,
      homeAddress: "Tel Aviv 23 Yud-Lamed Peretz",
      instegram: instaLogo,
      instegramUserName: "suit-direct",
      facebook: facbookLogo,
      facebookUserName: "suit.direct",
      homeurl: homeurl,
      instegramurl: instegramurl,
      fcbUrl: fcbUrl,
    },
    {
      img: contactimage,
      name: "Don amor",
      price: " 1650-2150",
      home: houseLogo,
      homeAddress: " Rehovot 7 Yetzira",
      instegram: instaLogo,
      instegramUserName: "Don-amor",
      facebook: contactimage,
      facebookUserName: "Don.amor",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Bono suit",
      price: "1750-2250",
      home: houseLogo,
      homeAddress: "Haifa 64 Hanetka",
      instegram: instaLogo,
      instegramUserName: "Bono-suit",
      facebook: facbookLogo,
      facebookUserName: "Bono.suit",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "salina fashion",
      price: "1800-2350",
      home: houseLogo,
      homeAddress: "Rehovot kadima 9/15",
      instegram: instaLogo,
      instegramUserName: "salina-fashion",
      facebook: facbookLogo,
      facebookUserName: "salina.fashion",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "hlifot",
      price: "1750-2150",
      home: houseLogo,
      homeAddress: "Tel Aviv 4 Hanegev",
      instegram: instaLogo,
      instegramUserName: "hlifot-store",
      facebook: facbookLogo,
      facebookUserName: "hlifot.store",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "Segal fashion",
      price: "1850-2400",
      home: houseLogo,
      homeAddress: "Tel-aviv 20 Lillenblum",
      instegram: instaLogo,
      instegramUserName: "Segal-fashion",
      facebook: facbookLogo,
      facebookUserName: "Segal.fashion",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
  ]);
  const remove = (name) => {
    let x = suit.filter((obj) => obj.name !== name);
    setSuit(x);
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
  const addtosuit = (e) => {
    e.preventDefault();
    console.log(name);
    if (name || price || homeAddress || instegramUserName || facebookUserName)
      setSuit([
        ...suit,
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
    <SuitContext.Provider
      value={{
        fcbUrl,
        remove,
        admin4,
        setAdmin4,
        instegramurl,
        homeurl,
        suit,
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
        addtosuit,
      }}
    >
      {children}
    </SuitContext.Provider>
  );
};

export default SuitProvider;
