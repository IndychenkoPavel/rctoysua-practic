import { useParams } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import ModalCar from './ModalCar';


const equipments = ['модель в зборі', 'пульт радіокерування', 'аккумулятор', 'зарядний пристрій', 'інструкція', 'набір інструментів'];

const shortCars = [
  {
    id: 1,
    title: 'Remo Hobby Rocket',
    class: 'Short Course',
    scale: '1/16',
    accumulator: 'Li-Ion 7.4v 1500 mAh',
    size: '210/125/285 mm',
    motor: '390 колекторний',
    price: '3100 грн',
    driveWheels: 'повний 4WD',
    img: './img/short/rocket.jpg',
    maxSpeed: 'до 42 км/год',
    width: '210 мм',
    height: '125 мм',
    length: '285 мм',
    timeWork: '20 хвилин',
    signal: 'до 100 метрів',
  },
  {
    id: 2,
    title: 'Remo Hobby EX3',
    class: 'Short Course',
    scale: '1/10',
    accumulator: 'Lipo 2s 7.4v 3300 mAh',
    size: '300/200/150 mm',
    motor: '550 колекторний',
    price: '4300 грн',
    driveWheels: 'повний 4WD',
    img: './img/short/ex3.jpg',
  },
  {
    id: 3,
    title: 'Remo Hobby 9emu',
    class: 'Short Course',
    scale: '1/8',
    accumulator: 'Lipo 2s 7.4v 4200 mAh',
    size: '300/200/150 mm',
    motor: '3650 бесколекторний',
    price: '9500 грн',
    driveWheels: 'повний 4WD',
    img: './img/short/9emu.jpg',
  }
];
// const monsterCars = [
//     {
//       id: 1,
//       title: 'Remo Hobby S Max 1635',
//       class: 'Monster Truck',
//       scale: '1/16',
//       accumulator: 'Li-Ion 7.4v 1500 mAh',
//       size: '300/200/150 mm',
//       motor: '2440 бесколекторний',
//       price: '3900 грн',
//       driveWheels: 'повний 4WD',
//       img: './img/monster/smax.jpg',
//       maxSpeed: 'до 42 км/год',
//       width: '210 мм',
//       height: '125 мм',
//       length: '285 мм',
//       timeWork: '20 хвилин',
//       signal: 'до 100 метрів',
//     },
//     {
//       id: 2,
//       title: 'Remo Hobby M Max 1031',
//       class: 'Monster Truck',
//       scale: '1/10',
//       accumulator: 'Lipo 2s 7.4v 3300 mAh',
//       size: '300/200/150 mm',
//       motor: '550 колекторний',
//       price: '4300 грн',
//       driveWheels: 'повний 4WD',
//       img: './img/monster/mmax.jpg',
//     },
//     {
//       id: 3,
//       title: 'ZD Racing Pirates 3',
//       class: 'Monster Truck',
//       scale: '1/8',
//       accumulator: 'Lipo 3s 11.1v 5000 mAh',
//       size: '300/200/150 mm',
//       motor: '2100 бесколекторний',
//       price: '12500 грн',
//       driveWheels: 'повний 4WD',
//       img: './img/monster/pirates3.jpg',
//     }
// ];


const Cars = () => {
    const {id} = useParams();
    console.log(id);
  const [modalActive, setModalActive] = useState(false);
  const [content, setContent] = useState('');

  const InfoCar = (contx) => {
    console.log(contx)
    setModalActive(true);
    setContent('fgcdahgvsdgkv');
  }
  const InfoConsult = (id) => {
    setModalActive(true);
  }
  const BuyerCar = (id) => {
    setModalActive(true);
  }
  return (
    <div className='monster-trucks'>
      <h2 className='monster-trucks-title'>Short Course</h2>
      <div className="container">
        <div className="monster-trucks-cars">
          {shortCars.map((item) => 
            <div key={item.id} className="monster-trucks-car">
              <div key={item.img} className="monster-trucks-img"><img src={item.img} alt="" /></div>
              <div className="monster-trucks-description">
                <h3 className="monster-trucks-ttl">{item.title}</h3>
                <div className="monster-trucks-box">
                  <ul className='monster-trucks-desc'>
                    <p className="monster-trucks-desc-ttl">Характеристики моделі :</p>
                    <li className="monster-trucks-class">Клас моделі: {item.class}</li>
                    <li className="monster-trucks-scale">Масштаб: {item.scale}</li>
                    <li className="monster-trucks-size">Розмір моделі: {item.size}</li>
                    <li className="monster-trucks-accumulator">Акумулятор: {item.accumulator}</li>
                    <li className="monster-trucks-motor">Мотор: {item.motor}</li>
                  </ul>
                <ul className='monster-trucks-equip'>
                  <p className='monster-trucks-equip-ttl'>Комплектація :</p>
                  {equipments.map((itm) =>
                  <li key={itm}>{itm}</li>
                  )}
                </ul>
                <div className="monster-trucks-btn">
                  <button onClick={() => BuyerCar(item.id)} className="monster-trucks-btn-one" >Замовити модель</button>
                  <button onClick={() => InfoCar('pfvjdbnb') } className="monster-trucks-btn-three">Замовити деталі</button>
                  <button onClick={() => InfoConsult(item.id)} className="monster-trucks-btn-two">Отримати консультацію</button> 
                </div> 
              </div>

            </div>
          </div>
          )}
        </div>
      </div>

      <ModalCar active={modalActive} setActive={setModalActive} content={content} />
          
    </div>
    
  )
}

export default Cars;