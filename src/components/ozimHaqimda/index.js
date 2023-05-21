import React from "react";
import "./ozim.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";
import dars from "../boshSahifa/rasmlar/dars.jpg";
import ish from "../boshSahifa/rasmlar/ish.jpg";
// import qol from "./rasmlar/qol.jpg";

export default function OzimHaqimda() {
  const { theme, toggleTheme, Exchange, change } = useContext(ThemaContext);

  return (
    <div class={`ozimHaqimdaBox mb-5 p-2 ${theme == "dark" ? "" : "rang"}`}>
      <div className={`themeBox`}>
        <button id="button" onClick={Exchange}>
          {change == true ? (
            <FontAwesomeIcon icon={faSquareXmark} />
          ) : (
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
        <button id="buttonSun" onClick={toggleTheme}>
          {theme == "dark" ? (
            <FontAwesomeIcon icon={faSun} />
          ) : (
            <FontAwesomeIcon icon={faMoon} />
          )}
        </button>
      </div>
      <div className="sarlovha mb-4">
        <h1
          className={`tex-sarlovha text-${
            theme == "dark" ? "light" : "dark"
          } text-center`}
        >
          Men bilan bog'lanish
        </h1>
      </div>
      {/* sarlovha tugadi va manzil qiisim boshlandi */}

      <div className="contact-box d-flex justify-content-between">
        <div className="contactInfo">
          <h4
            className={`text-${theme == "dark" ? "light" : "dark"} mb-1`}
          >
            Aloqa
          </h4>
          <p
            className={`text-${theme == "dark" ? "light" : "dark"} mb-3`}
          >
            {" "}
            Agar meni kompaniyangizga mos deb bilsangiz, <br /> men bilan bog'laning{" "}
          </p>
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Ism
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            Shuhratov Iqboljon
          </p>
          <br />
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Manzil
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            Toshkent, Oʻzbekiston
          </p>
          <br />
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            Elektron pochta
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            <a href="#">shuhratjonoviqboljon@gmail.com</a>
          </p>
          <br />
          <span
            className={`text-${theme == "dark" ? "light" : "dark"} fw-bold`}
          >
            GitHub
          </span>
          <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
            <a href="https://github.com/iqboljonshuhratov">GitHub profil</a>
          </p>
        </div>
        <div className="input-box">
          <h3 className={`text-${theme == "dark" ? "light" : "dark"} fw-bold mb-3`} >Menga xabar yuboring</h3>
          <div className="fullname-box mb-3">
            <input type="text" placeholder="ism" />
            <input type="number" placeholder="nomer" />
          </div>
          <textarea name="text" id="" placeholder="malumot" className="malumotInput rounded mb-5"></textarea>
          <button className="rounded">Xabar yuborish</button>
        </div>
      </div>
    </div>
  );
}
