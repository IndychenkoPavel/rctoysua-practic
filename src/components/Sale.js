import React from 'react';
import "./css/sale.css";

const Sale = () => {
  return (
    <div className='sale'>
      <div className="container">
      <div class="block-sale">
        <div class="sale-top">
          <h2 class="title-sale">RcToysUa</h2>
          <p>Інтернет-магазин радіокерованих іграшок та комплектуючих</p>
        </div>
         <div class="box-sale">
            <p>Акції та знижки:</p>
            <ul class="sale-box-ul">
              <li class="sale-list">Безкоштовна доставка заказів, якщо вартість замовлення понад 1000 грн. </li>
              <li class="sale-list">При покупці радіокерованної моделі отримай знижку до 10% на колеса та комплектуючі.</li>
              <li class="sale-list">Для постійних клієнтів та підписників ютуб каналу знижка до 5% від суми замовлення.</li>
              <li class="sale-list">При покупці двох та більше радіокерованих моделей або комплектуючих знижка до 10% на другу. </li>
              <li class="sale-list">Хочеш більше знижок - підпишись на соціальні мережі і будь в курсі всіх новин.</li>
              <li class="sale-list">Тут незабаром з'явиться нова акція!</li>
            </ul>
          </div>  
          <div class="sale-link">
            <ul class="sale-box-social">
              <p>Ми в соц мережах:</p>
              <li class="sale-social-list"> <a href="https://www.instagram.com/rctoysua/" target="_blank" rel="noreferrer"> <span className="sale-social-img"> <img src="./img/sale/instagram.png" alt="" /></span>Instagram: RcToysUa</a> </li>
              <li class="sale-social-list"> <a href="https://t.me/Radio_Control_Toys" target="_blank" rel="noreferrer"><span className="sale-social-img"><img src="./img/sale/telegram.png" alt="" /></span>Telegram: RcToysUa</a> </li>
              <li class="sale-social-list"> <a href="https://www.tiktok.com/@rctoysua?lang=uk-UA" target="_blank" rel="noreferrer"><span className="sale-social-img"><img src="./img/sale/tiktok.png" alt="" /></span>Tik Tok: RcToysUa </a></li>
              <li class="sale-social-list"> <a href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos" target="_blank" rel="noreferrer"><span className="sale-social-img"><img src="./img/sale/youtube.png" alt="" /></span>YouTube: RcToysUa</a> </li>
            </ul>
          </div>        
        </div>
      </div>
    </div>
  )
}

export default Sale