import React from 'react';
import './css/contact.css';
import Form from './Form';



const Contact = () => {
  return (
    <div className='contact-main'>
      <div className="container">
        <div className="contact-block">
          <h2 className="contact-title">RcToysUa</h2>
          <p className="contact-top">Інтернет магазин радіокерованих іграшок та комплектуючих</p>
          <div className="contact-box">
            <div className="contact-box-info">
              <div className="contact-box-text">
                <p>Контакти:</p>
                <ul className="contact-box-ul">
                  <li className="contact-list">Консультації та закази за телефоном:
                    <a className="contact-list-telephone" href="tel:+380958095279"> +38(095)809-52-79</a></li>
                  <li className="contact-list">Напишіть нам на пошту або в месенжер: Viber, Telegram, Whats Up.</li>
                  <li className="contact-list"> Email: <a href="mailto:rctoysua@gmail.com">rctoysua@gmail.com</a></li>
                  <li className="contact-list">Графік роботи: </li>
                  <li className="contact-list">пн-пт  9:00 - 18:00</li>
                  <li className="contact-list">сб 10:00 - 17:00</li>
                  <li className="contact-list">Якщо вже неробочий час, але у вас є питання - напишіть нам в месенжер або замовте зворотний дзвінок.</li>
                </ul>
              </div>
              <div className="contact-box-social">
                <ul className="contact-ul-social">
                  <p>Ми в соц мережах:</p>
                  <li className="contact-social-list"> <a href="https://www.instagram.com/rctoysua/" target="_blank" rel="noreferrer"> <span className='contact-social-list-img'><img src="./img/contact-img/instagram.png" alt="" /></span> Instagram: @RcToysUa </a> </li>
                  <li className="contact-social-list"> <a href="https://t.me/Radio_Control_Toys" target="_blank" rel="noreferrer"><span className='contact-social-list-img'><img src="./img/contact-img/telegram.png" alt="" /></span> Telegram: Игрушки на радиоуправлении</a> </li>
                  <li className="contact-social-list"> <a href="https://www.tiktok.com/@rctoysua?lang=uk-UA" target="_blank" rel="noreferrer"><span className='contact-social-list-img'><img src="./img/contact-img/tiktok.png" alt="" /></span> Tik Tok: RcToysUa </a>  </li>
                  <li className="contact-social-list"> <a href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos" target="_blank" rel="noreferrer"><span className='contact-social-list-img'><img src="./img/contact-img/youtube.png" alt="" /></span> YouTube: RcToysUa</a></li>
                </ul>
              </div>
            </div>
            <div className="contact-box-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact