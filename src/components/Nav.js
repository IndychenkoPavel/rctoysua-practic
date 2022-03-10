import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
        <div className="container">
            <div className="block-nav">
                <Link to='/' className="nav-left">RcToysUa</Link>
                <div className="nav-center">
                    <ul className="nav-center-ul">
                        <li className="nav-center-li">
                            <Link to="/" className='nav-center-link'>Головна</Link>
                        </li>
                        <li className="nav-center-li">
                            <Link to="/delivery" className='nav-center-link'>Доставка та оплата</Link>
                        </li>
                        <li className="nav-center-li">
                            <Link to="/about" className='nav-center-link'>Про нас</Link>
                        </li>
                        <li className="nav-center-li">
                            <Link to="/contact" className='nav-center-link'>Контакти</Link>
                        </li>
                        <li className="nav-center-li">
                            <Link to="/sale" className='nav-center-link'>Акції</Link>
                        </li>
                    </ul>
                </div>
                <div className="nav-right">
                    <ul className="nav-right-ul">
                        <li className="nav-right-li">
                            <a href="https://www.instagram.com/rctoysua/" className='nav-right-link'><img src="./img/nav-img/instagram-nav.png" alt="" /></a>
                        </li>
                        <li className="nav-right-li">
                            <a href="https://t.me/Radio_Control_Toys" className='nav-right-link'><img src="./img/nav-img/telegram-nav.png" alt="" /></a>
                        </li>
                        <li className="nav-right-li">
                            <a href="https://www.tiktok.com/@rctoysua?lang=uk-UA" className='nav-right-link tiktok-white'>
                                <span></span><img src="./img/nav-img/tiktok-nav.png" alt="" /></a>
                        </li>
                        <li className="nav-right-li">
                            <a href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos" className='nav-right-link'><img src="./img/nav-img/youtube-nav.png" alt="" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="nav-bottom">
            <div className="container">
                <div className="nav-bottom-block">
                    <a className='nav-bottom-link' href="tel::+380958095279"><span className='nav-bottom-img'><img src="./img/nav-img/phone.png" alt="" /></span>+380958095279</a>
                </div> 
                <div className="nav-bottom-block">
                    <a className='nav-bottom-link' href="https://goo.gl/maps/xRdLhZUx1CUosd2v8"><span className='nav-bottom-img'><img src="./img/nav-img/map.png" alt="" /></span> м.Краматорськ, Донецька область</a>
                </div>
                <div className="nav-bottom-block">
                    <a className='nav-bottom-link' href="mailto:rctoysua@gmail.com"><span className='nav-bottom-img'><img src="./img/nav-img/mail.png" alt="" /></span> rctoysua@gmail.com</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Nav