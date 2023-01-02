import React, { useState } from "react";
import { FlowerContext } from "./allProviders";
import facbookLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/facebookLogo.jpg";
import instaLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/instaLogo.jpg";
import houseLogo from "C:/Users/עילי גלזר/OneDrive/שולחן העבודה/Hakaton/hakatonapp/src/imgs/houseLogo.jpg";

import contactimage from "../../imgs/contactImage.jpeg";
const FlowerProvider = (props) => {
  const { children } = props;
  const [fcbUrl, setFcbUrl] = useState(true);
  const [instegramurl, setInstegramurl] = useState(true);
  const [homeurl, setHomeurl] = useState(true);
  const [flowers, setFlowers] = useState([
    {
      img: contactimage,
      name: "liatris",
      price: "7150-7900",
      home: houseLogo,
      homeAddress: "ashkelon aviv 26/21",
      instegram: instaLogo,
      instegramUserName: "liatris.flowers",
      facebook: facbookLogo,
      facebookUserName: "lataris-flowers",
      homeurl: homeurl,
      instegramurl: instegramurl,
      fcbUrl: fcbUrl,
    },
    {
      img: contactimage,
      name: "kim biolu",
      price: " 9500-10500",
      home: houseLogo,
      homeAddress: "Gedera mimon 11/14",
      instegram: instaLogo,
      instegramUserName: "kim-biolu",
      facebook: facbookLogo,
      facebookUserName: "kim.biolu",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "arya flowers",
      price: "7150-7900",
      home: houseLogo,
      homeAddress: "Haifa rishonim 14/20",
      instegram: instaLogo,
      instegramUserName: "arya-flowers",
      facebook: facbookLogo,
      facebookUserName: "arya.flowers",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "adeline's flower",
      price: "7600-8400",
      home: houseLogo,
      homeAddress: "Rehovot kadima 9/15",
      instegram: instaLogo,
      instegramUserName: "adeline-flower",
      facebook: facbookLogo,
      facebookUserName: "adeline.flower",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "girls flower",
      price: "14250-15750",
      home: houseLogo,
      homeAddress: "Rishon lezion sesemi 4/25",
      instegram: instaLogo,
      instegramUserName: "girls-flower",
      facebook: facbookLogo,
      facebookUserName: "girls.flower",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
    {
      img: contactimage,
      name: "inbal yanay",
      price: "6650-7350",
      home: houseLogo,
      homeAddress: "Tel-aviv alenbi 45/12",
      instegram: instaLogo,
      instegramUserName: "inbal-yanay",
      facebook: facbookLogo,
      facebookUserName: "inbal.yanay",
      fcbUrl: fcbUrl,
      instegramurl: instegramurl,
      homeurl: homeurl,
    },
  ]);

  const [image, setimage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [homeAddress, setHomeAddres] = useState("");
  const [instegramUserName, setInstegramUserName] = useState("");
  const [facebookUserName, setFacebookUserName] = useState("");
  const [addresscheck, setAddressCheck] = useState(false);
  const [instegramcheck, setInstegreamCheckd] = useState(false);
  const [facebookcheck, setFacebookCheckd] = useState(false);
  const [admin1, setAdmin1] = useState(false);

  const remove = (name) => {
    let x = flowers.filter((obj) => obj.name !== name);
    setFlowers(x);
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
  const addtoflowres = (e) => {
    e.preventDefault();
    console.log(name);
    if (name || price || homeAddress || instegramUserName || facebookUserName)
      setFlowers([
        ...flowers,
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
    <FlowerContext.Provider
      value={{
        fcbUrl,
        remove,
        admin1,
        setAdmin1,
        instegramurl,
        homeurl,
        flowers,
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
        addtoflowres,
      }}
    >
      {children}
    </FlowerContext.Provider>
  );
};

export default FlowerProvider;
