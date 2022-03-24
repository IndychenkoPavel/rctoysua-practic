import React from "react";
import { Link } from "react-router-dom";
import "./css/burgerMenu.css";

const BurgerMenu = ({ active, setActive }) => {
  return (
    <div className={active ? "burger-menu active" : "burger-menu"}>
      <div className="burger-content">
        <div className="burger-top">
          <div className="burger-title">RcToysUa</div>
          <div className="burger-close" onClick={() => setActive(false)}>
            <span className="burger-close-one"></span>
            <span className="burger-close-two"></span>
          </div>
        </div>
        <div className="burger-link">
          <ul className="burger-link-ul">
            <li className="burger-link-li">
              <Link
                to="/"
                className="burger-link-str"
                onClick={() => setActive(false)}
              >
                Головна
              </Link>
            </li>
            <li className="burger-link-li">
              <Link
                to="/delivery"
                className="burger-link-str"
                onClick={() => setActive(false)}
              >
                Доставка та оплата
              </Link>
            </li>
            <li className="burger-link-li">
              <Link
                to="/about"
                className="burger-link-str"
                onClick={() => setActive(false)}
              >
                Про нас
              </Link>
            </li>
            <li className="burger-link-li">
              <Link
                to="/contact"
                className="burger-link-str"
                onClick={() => setActive(false)}
              >
                Контакти
              </Link>
            </li>
            <li className="burger-link-li">
              <Link
                to="/sale"
                className="burger-link-str"
                onClick={() => setActive(false)}
              >
                Акції
              </Link>
            </li>
            <li className="burger-link-li">
              <a
                className="burger-contact-link"
                href="tel::+380958095279"
                target="_blank"
                rel="noopener noreferrer"
              >
                +380958095279
              </a>
            </li>
            <li className="burger-link-li">
              <a
                className="burger-contact-link"
                href="mailto:rctoysua@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                rctoysua@gmail.com
              </a>
            </li>
            <li className="burger-link-li">
              <a
                className="burger-contact-link"
                href="https://goo.gl/maps/xRdLhZUx1CUosd2v8"
                target="_blank"
                rel="noopener noreferrer"
              >
                м.Краматорськ
              </a>
            </li>
          </ul>
        </div>

        <div className="burger-social">
          <ul className="nav-right-ul">
            <li className="nav-right-li">
              <a
                href="https://www.instagram.com/rctoysua/"
                className="nav-right-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./img/nav-img/instagram-nav.png" alt="" />
              </a>
            </li>
            <li className="nav-right-li">
              <a
                href="https://t.me/Radio_Control_Toys"
                className="nav-right-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./img/nav-img/telegram-nav.png" alt="" />
              </a>
            </li>
            <li className="nav-right-li">
              <a
                href="https://www.tiktok.com/@rctoysua?lang=uk-UA"
                className="nav-right-link tiktok-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span></span>
                <img src="./img/nav-img/tiktok-nav.png" alt="" />
              </a>
            </li>
            <li className="nav-right-li">
              <a
                href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos"
                className="nav-right-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="./img/nav-img/youtube-nav.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
