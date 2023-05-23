import React from "react";
import "./style.scss";
import qol from "./rasmlar/qol.jpg";
import logo from "./rasmlar/Iqboljon.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faSquareXing,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";

export default function BoshSaxifa() {
  const { theme, toggleTheme, Exchange, change } = useContext(ThemaContext);
  return (
    <div class={`mainBox mb-5 ${theme == "dark" ? "" : "rang"}`}>
      {change == false ? (
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
      ) : (
        ""
      )}
      {/* theme box */}
      <div class="ImgBox mt-5">
        <img class="rasm" src={logo} alt="Iqboljon" />
        <div class="qol">
          <img class="qoll" src={qol} alt="qol" />
        </div>
      </div>
      <h1
        className={`text-${
          theme == "dark" ? "light" : "dark"
        } fw-bold text-center`}
      >
        {" "}
        Iqboljon Shuhratov{" "}
      </h1>
      <p
        className={`text-${
          theme == "dark" ? "light" : "dark"
        } fs-1 text-center mb-4`}
      >
        {" "}
        Frontend developer{" "}
      </p>

      <div class="ijtimoiyTarmoqlar">
        <a
          class="tel"
          href="https://t.me/Iqboljon_Shuxratbekov"
          target="_blank"
        >
          <FontAwesomeIcon icon={faTelegram} />
        </a>
        <a
          class="tel"
          href="https://www.facebook.com/profile.php?id=100081163933802"
          target="_blank"
        >
          {" "}
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          class="tel"
          href="https://www.instagram.com/_iqboljon_shuhratbekov/"
          target="_blank"
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a class="tel" href="tel:+998940664060" target="_blank">
          <FontAwesomeIcon icon={faPhone} />
        </a>
      </div>
    </div>
  );
}
