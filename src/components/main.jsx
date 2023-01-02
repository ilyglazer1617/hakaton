import React from "react";
import "../Main.css";
import { Route, Routes, Router } from "react-router-dom";
import Home from "./mainComps/home";
import Ddesign from "./mainComps/dDesign";
import Finances from "./mainComps/finances";
import Suppliers from "./mainComps/suppliers";
import AboutUs from "./mainComps/aboutUs";
import Contact from "./mainComps/contact";
import Flower from "./financesComp/flower";
import Rings from "./financesComp/rings";
import Dresses from "./financesComp/dresses";
import GroomSuits from "./financesComp/groomSuits";
import HairStyle from "./financesComp/hairStyle";
import Photographer from "./financesComp/photoGrapher";
import FlowerProvider from "./providers/flowerProvider";

function Main() {
  return (
    <div className="mainweap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/3D" element={<Ddesign />} />
        <Route path="/Finances" element={<Finances />} />
        <Route path="/Suppliers" element={<Suppliers />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />

        <Route path="/Finances/flower" element={<Flower />} />

        <Route path="/Finances/rings" element={<Rings />} />
        <Route path="/Finances/dresses" element={<Dresses />} />
        <Route path="/Finances/groomSuits" element={<GroomSuits />} />
        <Route path="/Finances/hairStyle" element={<HairStyle />} />
        <Route path="/Finances/photoGrapher" element={<Photographer />} />
      </Routes>
    </div>
  );
}
export default Main;
