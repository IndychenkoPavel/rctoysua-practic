import React from 'react';
import './css/modalCar.css'

const ModalCar = ({active, setActive, content, equipments}) => {
  return (
    <div className={active ? "modal-car active" : "modal-car" }>
        <div className="modal-content">
          <div className="modal-close" onClick={() => setActive(false)}> <img src="./img/modal-img/close-icon.png" alt="" /> </div>
          <div className="context">
          <h3 className="modal-car-title">{content.title}</h3>
            <ul className='modal-car-list'>
              <p className="modal-car-p">Характеристики моделі :</p>
              <li className="modal-car-li">Клас моделі: {content.class}</li>
              <li className="modal-car-li">Масштаб: {content.scale}</li>
              <li className="modal-car-li">Розмір моделі: {content.size}</li>
              <li className="modal-car-li">Акумулятор: {content.accumulator}</li>
              <li className="modal-car-li">Мотор: {content.motor}</li>
              <li className="modal-car-li">Максимальна швидкість: {content.maxSpeed}</li>
              <li className="modal-car-li">Ширина: {content.width}</li>
              <li className="modal-car-li">Висота: {content.height}</li>
              <li className="modal-car-li">Довжина: {content.length}</li>
              <li className="modal-car-li">Час роботи: {content.timeWork}</li>
              <li className="modal-car-li">Радіус управління: {content.signal}</li>
            </ul>
            <ul className='modal-car-equipments'>
              <p className='modal-car-p'>Комплектація :</p>
              {equipments.map((itm) =>
                <li key={itm}>{itm}</li>
              )}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default ModalCar