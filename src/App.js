import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import { createContext, useState } from "react";
function App() {
  const [main, setMain] = useState(true);

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
