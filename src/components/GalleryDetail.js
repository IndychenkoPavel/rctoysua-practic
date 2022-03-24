import React from 'react';
import './css/galleryDetail.css';
import FormAll from './FormAll';
import { useState } from 'react';
import Tilt from 'react-vanilla-tilt'

const GalleryDetail = () => {
  const [modalForm, setModalForm] = useState(false);
  const [product, setProduct] = useState('');
  const openForm = (product) => {
    setModalForm(true);
    setProduct(product);
  }
  const detail = [
    {
      id: 1,
      title: 'Запчастини Remo Hobby',
      img: './img/detail/detail.jpg',
    },
    {
      id: 2,
      title: 'Запчастини WPL',
      img: './img/detail/wpl.jpg',
    },
    {
      id: 3,
      title: 'Запчастини ZD Racing',
      img: './img/detail/detail.jpg',
    },
    {
      id: 4,
      title: 'Акумулятори',
      img: './img/detail/battery.jpg',
    },
    {
      id: 5,
      title: 'Зарядні пристрої',
      img: './img/detail/change.jpg',
    },
    {
      id: 6,
      title: 'Колеса',
      img: './img/detail/wheels.jpg',
    },
    
  ]; 

  return (
    <div className='gallery-detail'>
        <div className="container">
          <h3 className="detail-title"><span>Деталі та комплектуючі для радіокерованих моделей</span> </h3>
          <div className="gallery-detail-block">
          {detail.map((item) => 
          <div className="detail-block" key={item.id} onClick={()=> openForm(item.title)}>
            <Tilt style={{ height: '15rem' }} className="gallery-detail-box" options={{ max: 20,
              speed: 500,
              easing:"cubic-bezier(.03,.98,.52,.99)",
              perspective: 1000,
              transition:true }}>
                <p className='detail-box-title'>{item.title}</p>
              <div className="gallery-detail-img"><img src={item.img} alt="" />
              </div>
             
            </Tilt>
            {/* <button onClick={()=> openForm(item.title)} className='btn-detail'>замовити</button> */}
          </div>
            
          )}
          </div>
        </div>
        <FormAll active={modalForm} setActive={setModalForm} text={'Замовити'} product={product} texteria={'Напишіть назву, номер або характеристики'}/>
    </div>
  )
}

export default GalleryDetail