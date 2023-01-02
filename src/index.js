import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
import FlowerProvider from "./components/providers/flowerProvider";
import { RingContext } from "./components/providers/allProviders";
import RingProvider from "./components/providers/ringProvider";
import PhotoProvider from "./components/providers/photoProvider";
import HairProvider from "./components/providers/hairProvider";
import DressProvider from "./components/providers/dressesProvider";
import SuitProvider from "./components/providers/suitProvider";
import Suppliers from "./components/mainComps/suppliers";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FlowerProvider>
    <RingProvider>
      <PhotoProvider>
        <HairProvider>
          <DressProvider>
            <SuitProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </SuitProvider>
          </DressProvider>
        </HairProvider>
      </PhotoProvider>
    </RingProvider>
  </FlowerProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
