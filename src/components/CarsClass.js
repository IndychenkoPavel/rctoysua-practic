import React from 'react';
import { useState } from 'react';
import ModalCar from './ModalCar';
import FormAll from './FormAll';
import { useParams } from 'react-router-dom';
import './css/cars.css';
import { cars } from './Cars';

const equipments = ['модель в зборі', 'пульт радіокерування', 'аккумулятор', 'зарядний пристрій', 'інструкція', 'набір інструментів'];

const CarsClass = () => {
  const {id} = useParams();
  const [modalActive, setModalActive] = useState(false);
  const [modalForm, setModalForm] = useState(false);
  const [content, setContent] = useState([]);
  const [text, setText] = useState('');
  const [product, setProduct] = useState('');

  // const massClass = cars.filter((e) => e.class === id);
  console.log(id);
  let massCar = [];
  if(id === 'Remo Hobby' || id === 'ZD Racing' || id === 'WPL') {
    massCar = cars.filter((e) => e.brend === id);
  } else {
    massCar = cars.filter((e) => e.class === id);
  }

  const InfoCar = (item) => {
    setModalActive(true);
    setContent(item);
  }
  const InfoConsult = (product, text) => {
    setModalForm(true);
    setText(text);
    setProduct(product);
  }
  const BuyerCar = (product, text) => {
    setModalForm(true);
    setText(text);
    setProduct(product);
  }
  return (
    <div className='cars'>
      <h2 className='monster-trucks-title'>{id}</h2>
      <div className="container">
        <div className="monster-trucks-cars">
          {massCar.map((item) => 
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
                    <li className="monster-trucks-motor">Максимальна швидкість: {item.maxSpeed}</li>
                  </ul>
                <ul className='monster-trucks-equip'>
                  <p className='monster-trucks-equip-ttl'>Комплектація :</p>
                  {equipments.map((itm) =>
                  <li key={itm}>{itm}</li>
                  )}
                </ul>
                <div className="monster-trucks-btn">
                  <button onClick={() => InfoCar(item)} className="monster-trucks-btn-three">Більше інформації</button>
                  <button onClick={() => BuyerCar(item.title, 'Замовити')} className="monster-trucks-btn-one">Замовити модель</button>
                  <button onClick={() => InfoConsult(item.title, 'Отримати консультацію')} className="monster-trucks-btn-two">Отримати консультацію</button> 
                </div> 
              </div>

            </div>
          </div>
          )}
        </div>
      </div>

      <ModalCar active={modalActive} setActive={setModalActive} content={content} equipments={equipments}/>
      <FormAll active={modalForm} setActive={setModalForm} text={text} product={product} />

          
    </div>
    
  )
}

export default CarsClass