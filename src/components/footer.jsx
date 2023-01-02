import React, { useContext, useState } from "react";
import { Form, Link } from "react-router-dom";
import {
  DressContext,
  FlowerContext,
  HairContext,
  PhotoContext,
  RingContext,
  SuitContext,
} from "./providers/allProviders";
import "../footer.css";

function Footer() {
  const { setAdmin1 } = useContext(FlowerContext);
  const { setAdmin2 } = useContext(RingContext);
  const { setAdmin3 } = useContext(DressContext);
  const { setAdmin4 } = useContext(SuitContext);
  const { setAdmin5 } = useContext(HairContext);
  const { setAdmin6 } = useContext(PhotoContext);
  const [input, setInput] = useState("");
  const changeAplly = (ev) => {
    if (input == "nadavandily") {
      setAdmin1(true);
      setAdmin2(true);
      setAdmin3(true);
      setAdmin4(true);
      setAdmin5(true);
      setAdmin6(true);
    }
  };
  const cancelAplly = (ev) => {
    setAdmin1(false);
    setAdmin2(false);
    setAdmin3(false);
    setAdmin4(false);
    setAdmin5(false);
    setAdmin6(false);
  };

  //   const {} = useContext();
  return (
    <div className="footer">
      <div>
        <p>3D EVENT | 2022 </p>
      </div>

      <div className="pupup">
        <input onChange={(ev) => setInput(ev.target.value)} type="password" />
        <button onClick={(ev) => changeAplly(ev)}>Log in</button>
        <button onClick={(ev) => cancelAplly(ev)}>Log Out</button>
      </div>

      <div className="footerButtons">
        <div className="adminButton">
          {" "}
          <button className="footerbutton">Admin Login</button>
        </div>

        <button className="footerbutton">Accessibility Statmen</button>
        <button className="footerbutton">Privacy Policy</button>
      </div>
    </div>
  );
}
export default Footer;
