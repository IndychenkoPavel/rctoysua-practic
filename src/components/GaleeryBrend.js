import React from 'react';
import { Link } from 'react-router-dom';
import './css/galleryBrend.css';

const GaleeryBrend = () => {
  return (
    <div className="container">
      <div className='brend-gallery-car'>
          <Link to='/ZD Racing' className="brend-gallery-box">
              <h2 className="brend-gallery-title">ZD Racing</h2>
              <img src="./img/gallery-brend/zd.jpg" alt="" className="brend-gallery-img" />
          </Link>
          <Link to='/Remo Hobby' className="brend-gallery-box">
              <h2 className="brend-gallery-title">Remo Hobby</h2>
              <img src="./img/gallery-brend/remo.jpg" alt="" className="brend-gallery-img" />
          </Link>
          <Link to='/WPL' className="brend-gallery-box">
              <h2 className="brend-gallery-title">WPL</h2>
              <img src="./img/gallery-brend/wpl.jpg" alt="" className="brend-gallery-img" />
          </Link>
      </div>
    </div>
  )
}

export default GaleeryBrend
