import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";
import './talim.scss'

export default function Talim() {
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
          className={`text-${theme == "dark" ? "light" : "dark"} text-center`}
        >
          Ta'lim
        </h1>
      </div>
      {/* sarlovha tugadi va manzil qiisim boshlandi */}
      <div className={`InfoBox bg-${theme} rounded shadow-lg p-5 mt-3`}>
        <div className="befor-box m-2 pt-2 pb-2">
          <div className="befor"></div>
          <div className="befor"></div>
          <div className="befor"></div>
        </div>
        <div className={`info1 rounded bg-${theme}`}>
          <div className="img-box p-2">
            <img
              className="rounded"
              src={`https://avatars.mds.yandex.net/get-altay/4398559/2a000001825b3e71b438ddee4d13276bc6d5/XXL_height`}
              alt="dars"
            />
          </div>
          <div className="text-box">
            <h3 className={`text-${theme == "dark" ? "light" : "dark"} p-3`}>
              Men ta'lim olgan muassasa
            </h3>
            <p className={`text-${theme == "dark" ? "light" : "dark"} p-3`}>
              Men "<a href="https://online.pdp.uz/about-us">PDP ACADEMY</a>" da ta'lim olganman. Boshlang'ich qursda c++ dasturlash tili bilan ishlaganman. C++ ni o'rganib bo'lgach asosiy qursga imtihon asosida qabul qilinganman. Mening qiziqishim Frontendga bo'lganligi bois, men asosiy qursni frontend sohasida davom ettirganman.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
