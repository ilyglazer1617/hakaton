import { createContext } from "react";
import Home from "./../mainComps/home";
import Finances from "./../mainComps/finances";
import Ddesign from "./../mainComps/dDesign";
import Suppliers from "./../mainComps/suppliers";
import AboutUs from "./../mainComps/aboutUs";
import Contact from "./../mainComps/contact";
import Flower from "./../financesComp/flower";
import Rings from "./../financesComp/rings";
import Dresses from "./../financesComp/dresses";
import GroomSuits from "./../financesComp/groomSuits";
import HairStyle from "../financesComp/hairStyle";
import PhotoGrapher from "./../financesComp/photoGrapher";

export const FlowerContext = createContext();
export const RingContext = createContext();
export const PhotoContext = createContext();
export const HairContext = createContext();
export const DressContext = createContext();
export const SuitContext = createContext();

const FlowerProvider = (props) => {
  const { children } = props;
  return <></>;
};

export default FlowerProvider;
