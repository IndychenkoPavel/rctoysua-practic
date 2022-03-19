import React from 'react';
import './css/repair.css';

const Repair = () => {
  return (
    <div className='repair'>
        <div className="container">
            <div className="service-block">
                <h3 className="repair-title"><span>Ремонт та обслуговування</span></h3>
                <ul className="delivery-box">
                    <li className="service-list">Послуги з ремонту та обслуговування радіокерованих машинок.</li>
                    <li className="service-list">Допоможемо вам підібрати необхідну запчастину для ремонту та тюнінгу моделі.</li>                           
                    <li className="service-list">Безкоштовні консультації з ремонту, обслуговування та тюнінгу.</li>
                    <li className="service-list">На каналi <a className="service-youtube" href="https://www.youtube.com/channel/UCczUOgbKIesFxaRMVRpQrNg/videos" target="_blank" rel="noreferrer">RcToysUa</a>  багато відеороликів з ремонту, обслуговування моделей.</li>
                    <li className="service-list">Підбір коліс, шин та дисків за потрібними розмірами та протектором.</li>
                    <li className="service-list">Великий вибір олії для амортизаторів та диференціалів.</li>
                    <li className="service-list">Акумулятори для радіокерованих моделей в наявності та на замовлення.</li>                      
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Repair;