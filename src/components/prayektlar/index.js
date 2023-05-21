import React from "react";
import "./prayekt.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faSun,
  faMoon,
  faSquareXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import ThemaContext from "../contex/ThemeContex";
import styledImg from "./reactImg/styledComponenta.jpg";
import ThemaContextimg from "./reactImg/Themecontex.jpg";
import whatsapp from "./reactImg/whatsApp.jpg";
import olcha from "./reactImg/olcha.jpg";
import reactjpg from "./reactImg/react.jpg";
import reactmap from "./reactImg/reactmap.jpg";
import korinish from "./reactImg/korinish.jpg";
import korinish2 from "./reactImg/korinish2.jpg";

export default function Prayektlar() {
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

  const cards = [
    {
      imgLink: styledImg,
      title:
        "Bu loyhaga stil berishda Styled componensdan foydalanilgan scss yoki css dan umuman foydalanilmagan",
      link: "https://styledcomponentsloyha.netlify.app/",
    },
    {
      imgLink: ThemaContextimg,
      title:
        "Bu loyhada contex, bootstrap va react bootstrap kutubxonalaridan keng foydalanilgan.",
      link: "https://reactbootstraployha.netlify.app/#memes",
    },
    {
      imgLink: whatsapp,
      title:
        "Bu whatsapp loyhasi bolib bunda foydalanilgan kutubxona asosan contex hisoblanadi",
      link: "https://whatsapployha.netlify.app/",
    },
    {
      imgLink: olcha,
      title:
        "Bu loyha olcha.uz loyhasi bo'lib bunda купить kinopkasi bosilganda карзина qismiga ma'lumotlar kelib tushadi. Loyhada statelardan keng qo'llanilgan hattoki inputga tex kiritilishi ham statega bog'lanan ",
      link: "https://olchaloyha.netlify.app/",
    },
    {
      imgLink: reactjpg,
      title: "Bu loyha boshlang'ich react loyhalarimdan.",
      link: "https://reactloyha5.netlify.app/",
    },
    {
      imgLink: reactmap,
      title: "Bu loyhada barcha ma'lumotlar map function orqalik qurilgan",
      link: "https://reactloyha3.netlify.app/",
    },

    {
      imgLink: korinish,
      title: "Bu loyha boshlang'ich react loyhalarimdan.",
      link: "https://reactkorinish.netlify.app/",
    },

    {
      imgLink: korinish2,
      title: "Bu loyha boshlang'ich react loyhalarimdan.",
      link: "https://reactkorinish2.netlify.app/",
    },
  ];

  const java = [
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347264040_254520530468293_2966080841737429538_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=EVk_YcKQ86gAX_TLgMT&_nc_ht=scontent.ftas9-1.fna&oh=00_AfC8eBRygGpEkKArmH516Wa8I1wkBRHtY57ymVEMX5ut_w&oe=646E7172",
      title:
        "Bu loyhada so'rovlar almashinuvi recuestsdan foydalanilgan. Backendga so'rov yuborish kelgan sorovlarni qurish va sorovlarni o'chirish aks ettirilgan",
      link: "https://js-loyha-5.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347408868_954593698905823_2884010330645569752_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=nK0ae6CrIfwAX-zZ6p4&_nc_ht=scontent.ftas9-1.fna&oh=00_AfBN1RyIoAvyZuAwJtfyNoYGsd1ag7aAAUGAQNmG8pbuMg&oe=646E4F9F",
      title:
        "Bu loyha kalkulyator loyhasi. Qo'llanilgan kutubxonalar asosan try va catch xisoblanadi",
      link: "https://js-loyha3.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347394378_602869448457619_8150432138663987791_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=4bm_J8D_OzgAX-K6qIU&_nc_ht=scontent.ftas9-1.fna&oh=00_AfBP8txyPbcYHAjv1svmKZWu-6-8w9k_DDgLl0Rm8dIsBQ&oe=646EC61C",
      title:
        "Bu video qidiruv loyhasi. Videoni topish uchun youtubedan keraklik linkni olib tashlashning ozi kifoya. bitta silka 2 marta tashlanganda ogohlantirish beradi",
      link: "https://js-loyha2.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347242842_640498821276516_1257941143219214786_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=q__EKCgjiXMAX8Z8vWn&_nc_ht=scontent.ftas9-1.fna&oh=00_AfCkxK381P07jag3UjphWJV340U6AzEsnG9xYbT5WM5atQ&oe=646F16B5",
      title:
        "Bu loyha Maktab loyhasi bo'lib. Bunda filter yani qidiruv funktioni mavjud. Loyhadagi tablelar to'liq JavaScriptda qurilgan ",
      link: "https://js-loyha1.netlify.app/",
    },
  ];

  const htmlCards = [
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347451380_561986982750016_7057183982176312124_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7EVJGQjbXJEAX8miNGY&_nc_oc=AQn9FwxrJe-f6f5rCN7FQvGt5EIJVJ713_m99GDYm0HeXCkYxeg2S_qpRYL7qOFun3g&_nc_ht=scontent.ftas9-1.fna&oh=00_AfBlLcwxJgMUEtuen0FdNuoNNIqdf0szXOXyG1AspS8uXA&oe=646F4411",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha01.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347433810_950777776250350_2830776784148130300_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=uPf57y8VQwMAX97pkP_&_nc_ht=scontent.ftas9-1.fna&oh=00_AfCuGyvdqpMFyFGA_WZJckCztajccn0d9C5nysMlMywMWg&oe=646FF319",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha2.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347384522_166015306422564_4327422640399749769_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=te_2dPVBUvcAX_NXGVV&_nc_ht=scontent.ftas9-1.fna&oh=00_AfC-Nq8r_5eYyrDOcmYSKijY6D4aYCDUG6_khbdSzNHWsA&oe=646EC47E",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab'",
      link: "https://loyha3.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347596192_1305742993347367_4648329255482819955_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=IH4vivafySQAX_Pa-gB&_nc_ht=scontent.ftas9-1.fna&oh=00_AfBKP07wc-Qg8Z8Ursp_YaWPcXzETy7twZIOpbeBZgJZFw&oe=646F5C4E",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha4.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347595223_3447819388881002_6314880019281173614_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=jMnwWa9TygsAX967hoZ&_nc_ht=scontent.ftas9-1.fna&oh=00_AfDB0cJ4RzozvlOF-R92wsMFrwqL3YVIk5_UD6gBsqhPeA&oe=646F400F",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha5.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347419934_771042534473837_5679663727633726626_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Hl8gNu0Ij-YAX_zO1F8&_nc_ht=scontent.ftas9-1.fna&oh=00_AfDBZqLAltKQF75XzbcXi1IsBFxh_RoZjrylrw3EGC6QqQ&oe=646E2D4D",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha06.netlify.app/",
    },

    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347228351_1018178745834395_929360592173916398_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=cm6-U8lB7aQAX9B3J2G&_nc_ht=scontent.ftas9-1.fna&oh=00_AfC_GmI01Vo2jVFIgkcbbxd9faMmXqcpoISlGT-dl0cd-w&oe=646E5880",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha7.netlify.app/",
    },

    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347550756_255435497168708_1120641104404748180_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=yRA0wEgopwoAX8MSftK&_nc_ht=scontent.ftas9-1.fna&oh=00_AfCEI2jc7vDO4y97Ur7u1narUuICvbKTBKxGzLdCHargBg&oe=646E78E9",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha8.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347248150_929282064996060_1843199586983653626_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=eSt_pgzAsGkAX86t5es&_nc_ht=scontent.ftas9-1.fna&oh=00_AfACjOXfohLktWN5A3LnvbpklpFccH79jGQTBpx4dGBk3w&oe=646F2493",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha10.netlify.app/",
    },
    {
      imgLink: "https://scontent.ftas9-1.fna.fbcdn.net/v/t39.30808-6/347238154_1320403401874386_1242454479414700921_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Hm88w9lKf-wAX9VXfMx&_nc_ht=scontent.ftas9-1.fna&oh=00_AfCDb1lG_SxZ1UI62MNc1N7Ibf-cY9enLUOlHjrzeuS9_g&oe=646E7B1E",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, voluptatem ad reprehenderit ullam quaerat ab",
      link: "https://loyha010.netlify.app/",
    },
    
  ];

  return (
    <div class={`prayektBox ${theme == "dark" ? "" : "rang"}`}>
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
            
      <div className="loyhaMainBox mt-4">
        <h1
          className={`text-center text-${theme == "dark" ? "light" : "dark"}`}
        >
          React
        </h1>
        <div className="loyha-box">
          <div className="row">
            {cards.map((v) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                <div className={`portfolioBox shadow rounded p-3 bg-${theme}`}>
                  <img src={`${v.imgLink}`} alt="" />
                  <h3 className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    portfolio
                  </h3>
                  <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    {v.title}
                  </p>
                  <button className={`p-1 rounded loyhalink`}>
                    <a href={`${v.link}`} target="_blank">
                      loyhaga o'tish
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*  react loyha tugadi  */}

      <div className="loyhaMainBox mt-5">
        <h1
          className={`text-center mb-5 text-${
            theme == "dark" ? "light" : "dark"
          }`}
        >
          JavaScript
        </h1>
        <div className="loyha-box">
          <div className="row">
            {java.map((v) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                <div className={`portfolioBox shadow rounded p-3 bg-${theme}`}>
                  <img src={`${v.imgLink}`} alt="" />
                  <h3 className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    portfolio
                  </h3>
                  <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    {v.title}
                  </p>
                  <button className={`p-1 rounded loyhalink`}>
                    <a href={`${v.link}`} target="_blank">
                      loyhaga o'tish
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* js loyha tugadi */}
        
      <div className="loyhaMainBox mt-5">
        <h1
          className={`text-center mb-5 text-${
            theme == "dark" ? "light" : "dark"
          }`}
        >
          HTML CSS
        </h1>
        <div className="loyha-box">
          <div className="row">
            {htmlCards.map((v) => (
              <div className="col col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                <div className={`portfolioBox shadow rounded p-3 bg-${theme}`}>
                  <img src={`${v.imgLink}`} alt="" />
                  <h3 className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    portfolio
                  </h3>
                  <p className={`text-${theme == "dark" ? "light" : "dark"}`}>
                    {v.title}
                  </p>
                  <button className={`p-1 rounded loyhalink`}>
                    <a href={`${v.link}`} target="_blank">
                      loyhaga o'tish
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* html loyha tugadi */}

    </div>
  );
}
