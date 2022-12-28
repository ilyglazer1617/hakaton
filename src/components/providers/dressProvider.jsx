import { createContext, useState } from "react";

export const deressContext = createContext();

function DressProvidor(props) {
  const choseRow = true;
  const dressesrow1 = [
    {
      name: Ola,
      price: 100,
    },
    {
      name: roza,
      price: 1200,
    },
  ];
  const dressesrow2 = [
    {
      name: liz,
      price: 100,
    },
    {
      name: ariel,
      price: 1200,
    },
  ];
  const [dress, setDress] = useState(null);

  return (
    <deressContext.Provider value={{ dresses }}>
      {children}
    </deressContext.Provider>
  );
}
export default DressProvidor;
