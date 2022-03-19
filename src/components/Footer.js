import React from 'react';
import { Link } from 'react-router-dom';
import './css/footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-link-one">
            <ul className="footer-link-ul">
              <li className="footer-link-li"><Link to="/" className='footer-link-a'>Головна</Link> </li>
              <li className="footer-link-li"><Link to="/contact" className='footer-link-a'>Контакти</Link> </li>
              <li className="footer-link-li"><Link to="/about" className='footer-link-a'>Про нас</Link> </li>
              <li className="footer-link-li"><Link to="/delivery" className='footer-link-a'>Доставка та оплата</Link> </li>            
            </ul>
          </div>
          <div className="footer-link-two">
            <ul className="footer-link-ul">
              <li className="footer-link-contact"><span className="footer-icon-contact"><img src="./img/footer/map.png" alt="" /></span><a className="footer-link footer-link-map" href="https://goo.gl/maps/xRdLhZUx1CUosd2v8" target="_blank" rel="noopener noreferrer">Краматорськ, Донецька область, Україна 84300</a> </li>
              <li className="footer-link-contact"><span className="footer-icon-contact"><img src="./img/footer/mail.png" alt="" /></span><a className="footer-link footer-link-mail" href="mailto:rctoysua@gmail.com" target="_blank" rel="noopener noreferrer">rctoysua@gmail.com</a></li>
              <li className="footer-link-contact"><span className="footer-icon-contact"><img src="./img/footer/phone.png" alt="" /></span><a className="footer-link footer-link-telephone" href="tel:+380958095279" target="_blank" rel="noopener noreferrer">+380958095279</a></li>
            </ul>
          </div>
          <div className="footer-link-three">
            <ul className="footer-link-ul-one">
              <li className="footer-link-social"><span className="footer-icon-social"><img src="./img/footer/instagram.png" alt="" /></span><a className='footer-icon-social-a' href="https://www.instagram.com/rctoysua/" target="_blank" rel="noopener noreferrer">Instagrame</a> </li>
              <li className="footer-link-social"><span className="footer-icon-social"><img src="./img/footer/facebook.png" alt="" /></span><a className='footer-icon-social-a' href="https://www.facebook.com/rctoys.ua" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="footer-link-social"><span className="footer-icon-social"><img src="./img/footer/telegram.png" alt="" /></span><a className='footer-icon-social-a' href="https://t.me/Radio_Control_Toys" target="_blank" rel="noopener noreferrer">Telegrame</a></li>
            </ul>
            <ul className="footer-link-ul">
              <li className="footer-link-social"><span className="footer-icon-social"><img src="./img/footer/youtube.png" alt="" /></span><a className='footer-icon-social-a' href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li className="footer-link-social"><span className="footer-icon-social"><img src="./img/footer/tiktok.png" alt="" /></span><a className='footer-icon-social-a' href="https://www.tiktok.com/@rctoysua?lang=uk-UA" target="_blank" rel="noopener noreferrer">Tik Tok</a></li>
              {/* <li className="footer-link-social"><span className="footer-icon-social"><img src="./img/footer/viber.png" alt="" /></span><Link className='footer-icon-social-a' to="tel:+380958095279" target="_blank">Телефон</Link></li> */}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copy-right">© 2021 All Rights Reserved</div>                    
        </div>
      </div>
    </footer>
  )
}

export default Footer