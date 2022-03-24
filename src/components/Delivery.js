import React from "react";
import "./css/delivery.css";
// import Form from './Form';

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="container">
        <div className="delivery-top">
          <h2 className="delivery-title">RcToysUa</h2>
          <p className="delivery-shop">
            Інтернет магазин радіокерованих іграшок та комплектуючих
          </p>
        </div>
        <div className="delivery-block">
          <p className="title-deliv">Доставка</p>
          <ul className="delivery-box">
            <li className="delivery-list">
              Доставка по території України транспортними компаніями Нова
              пошта, Укр пошта, Meest Express.
            </li>
            <li className="delivery-list">
              Відправка посилок в день замовлення або на наступний день.
            </li>
            <li className="delivery-list">
              Сроки доставки 1-3 дні в залежності від транспортної компанії.
            </li>
            <li className="delivery-list">
              Швидка доставка Новою поштою до Киева, Харкова, Дніпра, Запорожжя, Полтави за 1 день.
            </li>
            <li className="delivery-list">
              Безкоштовна доставка заказів вартість яких більше 1000 грн.
            </li>
          </ul>
        </div>

        <div className="pay-block">
          <p className="tittle-pay">Оплата</p>
          <ul className="pay-box">
            <li className="pay-list">
              Можливість обирати спосіб оплати який для вас буде найбільш підходящим:
            </li>
            <li className="pay-list">готівкою та безготівкова оплата. </li>
            <li className="pay-list">Оплата при отриманні.</li>
            <li className="pay-list">Оплата на карту банка.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
