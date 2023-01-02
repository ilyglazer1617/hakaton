import React, { useContext } from "react";
import {
  DressContext,
  FlowerContext,
  HairContext,
  PhotoContext,
  RingContext,
  SuitContext,
} from "./components/providers/allProviders";
function adminFun() {
  const { admin1 } = useContext(FlowerContext);
  const { admin2 } = useContext(RingContext);
  const { admin3 } = useContext(DressContext);
  const { admin4 } = useContext(SuitContext);
  const { admin5 } = useContext(HairContext);
  const { admin6 } = useContext(PhotoContext);

    return(
 changeAplly()=> {
        
    }
    )
}

export default adminFun;
