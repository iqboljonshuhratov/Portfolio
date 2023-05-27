import { Link } from "react-router-dom";
import { faRectangleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faBook,
  faBuilding,
  faContactCard,
  faFilterCircleXmark,
  faHome,
  faHouseCircleXmark,
  faHouseMedicalCircleXmark,
  faL,
  faMoon,
  faSackXmark,
  faSquareXmark,
  faSun,
  faXmarkCircle,
  faXmarksLines,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useContext } from "react";
import BoshSaxifa from "../boshSahifa";
import ThemaContext from "../contex/ThemeContex";
import "./style.scss";

export default function Sidebar() {
  const {
    theme,
    toggleTheme,
    Exchange,
    change,
    info,
    BoshSahifa1,
    OzimHaqimda1,
    Talim1,
    Prayektlar1,
  } = useContext(ThemaContext);
  return (
    <div class={`sidebar shadow bg-${theme} ${change == true ? "" : "hide"}`}>
      <div
        class={`content shadow-lg bg-${theme} ${change == true ? "" : "hide"}`}
      >
        {change == true ? (
          <div className={`themeBox2`}>
            <button
              id="button2"
              className={`text-${theme == "dark" ? "light" : "dark"}`}
              onClick={Exchange}
            >
              {change == true ? (
                <FontAwesomeIcon
                  className="iconXmark"
                  icon={faRectangleXmark}
                />
              ) : (
                <FontAwesomeIcon className="iconXmark" icon={faBars} />
              )}
            </button>

            <div
              className={`mode ${theme == "dark" ? "" : "mode_dark"}`}
              onClick={toggleTheme}
            >
              <div className={`btn ${theme == "dark" ? "" : "dark"}`}>
                <div className={`btn_icon_container`}>
                  {theme == "dark" ? (
                    <FontAwesomeIcon className="sun" icon={faSun} />
                  ) : (
                    <FontAwesomeIcon className="moon" icon={faMoon} />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* theme qismi tugadi */}
        <h1
          className={`text-${
            theme == "dark" ? "light" : "dark"
          } mt-5 ps-5 pt-5`}
        >
          Iqboljon
        </h1>

        {/* sarlovha qismim tugadi */}

        <ul className={`text-${theme == "dark" ? "light" : "dark"} mt-5`}>
          <Link to={`/`}>
            <li
              className={`text-${
                info == "boshSahifa" ? "danger" : "light"
              } fs-5`}
              onClick={BoshSahifa1}
            >
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
          </Link>

          <p></p>
          <Link to={`/Education`}>
            <li
              className={`text-${info == "talim" ? "danger" : "light"} fs-5`}
              onClick={Talim1}
            >
              {" "}
              <FontAwesomeIcon icon={faBook} /> Education
            </li>
          </Link>

          <p></p>
          <Link to={`/Portfolio`}>
            <li
              className={`text-${
                info == "prayektlar" ? "danger" : "light"
              } fs-5`}
              onClick={Prayektlar1}
            >
              {" "}
              <FontAwesomeIcon icon={faBuilding} /> Portfolio
            </li>
          </Link>

          <p></p>
          <Link to={`/Contact`}>
            <li
              className={`text-${
                info == "ozimHaqimda" ? "danger" : "light"
              } fs-5`}
              onClick={OzimHaqimda1}
            >
              {" "}
              <FontAwesomeIcon icon={faContactCard} /> Contact
            </li>
          </Link>
        </ul>

        {/* barchasi tugadi */}
      </div>
    </div>
  );
}
