import React from "react";
import "./css/about.css";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div class="about-top">
          <h2 class="title-about">RcToysUa</h2>
          <p>Інтернет магазин радіокерованих іграшок та комплектуючих</p>
        </div>

        <div class="about-box">
          <div class="about-box-left">
            <div class="about-info-box">
              <div class="about-display-block">
                <div class="about-card-img">
                  <img
                    src="./img/about/9emu-blue.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="about-display-none">
                <div class="about-card-img">
                  <img
                    src="./img/about/rocket-red.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="about-info-box">
              <div class="about-display-block">
                <div class="about-card-img">
                  <img
                    src="./img/about/m-max-red.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="about-display-none">
                <div class="about-card-img">
                  <img
                    src="./img/about/sevor-blue.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div class="about-info-box">
              <div class="about-display-block">
                <div class="about-card-img">
                  <img
                    src="./img/about/s-max-blue.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="about-display-none">
                <div class="about-card-img">
                  <img
                    src="./img/about/dingo-red.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="about-box-right">
            <p class="about-welcome-text">
            Ласкаво просимо у захоплюючий світ яскравих емоцій!!!
            </p>
            <p class="about-list">
            Хобі для драйву, де багато позитиву та все під твоїм контролем.
            </p>
            <p class="about-list">
              Ви знайдете багато моделей для швидкості та бездоріжжя, стрибків та
              трюків, дрифту та подолання перешкод, зібрані моделі та
              комплекти для самостійного збирання моделі.
            </p>

            <p class="about-list">
            Ми допоможемо вам підібрати модель для себе або для подарунка.
            </p>
            <p class="about-list">
            Консультація та допомога при виборі необхідних деталей для ремонту та
              тюнінгу машинок.
            </p>
            <p class="about-list">
              Великий вибір машинок на радіокеруванні в наявності та на замовлення,
              акумуляторів, коліс для машинок та інших комплектуючих для
              радіокерованих коделей.
            </p>
            <p class="about-list">
            В наявності деталі електроніки, ходової частини, трансмісії, рульового.
              керування, кузовні частини та аксесуари для моделей.
            </p>
            <p class="about-list"> Ютуб канал 
                <a
                class="about-link" target="_blank" rel="noreferrer"
                href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos"
              > RcToysUa</a> - тут багато відеороликів з оглядами, тестами, тюнінгом, ремонтом та
              обслуговуванням машинок на радіокеруванні.
            </p>
            <p class="about-list">Інстаграм
              <a
                class="about-link"
                href="https://www.instagram.com/rctoysua/" target="_blank" rel="noreferrer"
              > RcToysUa</a> -  велика кількість фото моделей та комплектуючихю
            </p>
            <p class="about-list">Tik Tok
              <a
                class="about-link"
                href="https://www.tiktok.com/@rctoysua?lang=uk-UA" target="_blank" rel="noreferrer"
              > RcToysUa</a> -  відео з машинками на радіокеруванні.
            </p>
            <p class="about-list">Телеграм
            <a
                class="about-link"
                href="https://t.me/RcToysUa" target="_blank" rel="noreferrer"
              > RcToysUa</a>  канал з моделями та деталямим
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
