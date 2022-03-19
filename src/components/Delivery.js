import React from "react";
import "./css/delivery.css";
// import Form from './Form';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="container">
        <div class="delivery-top">
          <h2 className="delivery-title">RcToysUa</h2>
          <p className="delivery-shop">
            Інтернет магазин радіокерованих іграшок та комплектуючих
          </p>
        </div>
        <div class="delivery-block">
          <p class="title-deliv">Доставка</p>
          <ul class="delivery-box">
            <li class="delivery-list">
              Доставка по території України транспортними компаніями Нова
              пошта, Укр пошта, Meest Express.
            </li>
            <li class="delivery-list">
              Відправка посилок в день замовлення або на наступний день.
            </li>
            <li class="delivery-list">
              Сроки доставки 1-3 дні в залежності від транспортної компанії.
            </li>
            <li class="delivery-list">
              Швидка доставка Новою поштою до Киева, Харкова, Дніпра, Запорожжя, Полтави за 1 день.
            </li>
            <li class="delivery-list">
              Безкоштовна доставка заказів вартість яких більше 1000 грн.
            </li>
          </ul>
        </div>

        <div class="pay-block">
          <p class="tittle-pay">Оплата</p>
          <ul class="pay-box">
            <li class="pay-list">
              Можливість обирати спосіб оплати який для вас буде найбільш підходящим:
            </li>
            <li class="pay-list">готівкою та безготівкова оплата. </li>
            <li class="pay-list">Оплата при отриманні.</li>
            <li class="pay-list">Оплата на карту банка.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
