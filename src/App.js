import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import BoshSaxifa from "./components/boshSahifa";
import ThemaContext from "./components/contex/ThemeContex";
import OzimHaqimda from "./components/ozimHaqimda";
import Prayektlar from "./components/prayektlar";
import Sidebar from "./components/sidebar";
import Talim from "./components/talim";

function App() {
  const [theme, setTheme] = useState("dark");
  const [change, setChange] = useState(false);
  const [info, setInfo] = useState("boshSahifa");

  const toggleTheme = () => {
    setTheme((theme) => (theme == "light" ? "dark" : "light"));
  };

  const Exchange = () => {
    setChange((change) => (change = !change));
  };

  const BoshSahifa1 = () => {
    setInfo((info) => (info != "boshSahifa" ? "boshSahifa" : info));
  };

  const OzimHaqimda1 = () => {
    setInfo((info) => (info != "ozimHaqimda" ? "ozimHaqimda" : info));
  };

  const Talim1 = () => {
    setInfo((info) => (info != "talim" ? "talim" : info));
  };

  const Prayektlar1 = () => {
    setInfo((info) => (info != "prayektlar" ? "prayektlar" : info));
  };

  return (
    <BrowserRouter>
    <ThemaContext.Provider
    value={{
      theme,
      toggleTheme,
      Exchange,
          change,
          info,
          BoshSahifa1,
          OzimHaqimda1,
          Talim1,
          Prayektlar1,
        }}
        >
          <div class={`containers ${theme == "dark" ? "" : "rang"}`}>
            <div className={`container1 ${theme == "dark" ? "" : "rang"}`}>
              {change == true ? <Sidebar></Sidebar> : ""}
              <div className="Hide">
                <Sidebar></Sidebar>
              </div>

              {info == "boshSahifa" ? <BoshSaxifa></BoshSaxifa> : ""}
              {info == "ozimHaqimda" ? <Routes> <Route path="/Contact" element={<OzimHaqimda />} /></Routes>   : ""}
              {info == "talim" ? <Routes> <Route path="/Education" element={<Talim></Talim>} /></Routes>  : ""}
              {info == "prayektlar" ? <Routes> <Route path="/Portfolio" element={<Prayektlar></Prayektlar>} /></Routes> : ""}
            </div>
          </div>
      </ThemaContext.Provider>
    </BrowserRouter>
  );
}

export default App;
