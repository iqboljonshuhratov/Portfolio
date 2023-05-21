import { faBook, faBuilding, faContactCard, faHome } from "@fortawesome/free-solid-svg-icons";
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
    <div class={`sidebar shadow bg-${theme}`}>
      <div class={`content shadow-lg bg-${theme}`}>
        <h1
          className={`text-${
            theme == "dark" ? "light" : "dark"
          } mt-5 ps-5 pt-5`}
        >
          Iqboljon
        </h1>
        <ul className={`text-${theme == "dark" ? "light" : "dark"} mt-5`}>
          <li className={`text-${info== 'boshSahifa'?'success': ''} fs-5 fw-bold`} onClick={BoshSahifa1}>
          <FontAwesomeIcon icon={faHome} />  Bosh Saxifa
          </li>
          <p></p>
          <li className={`text-${info== 'talim'?'success': ''} fs-5 fw-bold`} onClick={Talim1} > <FontAwesomeIcon icon={faBook} /> Ta'lim</li>
          <p></p>
          <li className={`text-${info== 'prayektlar'?'success': ''} fs-5 fw-bold`} onClick={Prayektlar1}> <FontAwesomeIcon icon={faBuilding} /> Loyhalar</li>
          <p></p>
          <li className={`text-${info== 'ozimHaqimda'?'success': ''} fs-5 fw-bold`} onClick={OzimHaqimda1}> <FontAwesomeIcon icon={faContactCard} /> Ulanish</li>
        </ul>
      </div>
    </div>
  );
}
