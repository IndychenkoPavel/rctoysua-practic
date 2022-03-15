import React from 'react';
import { Link } from 'react-router-dom';

const GalleryCar = () => {
  return (
    <div className='gallery-car'>
        {/* <h2 className='title-gallery-cars'>RC Cars</h2> */}
        <div className="container">
            <div className="gallery-car-block">
                <Link to='/Monster Truck' className="gallery-car-box gallery-car-monster">
                    <h3 className='gallery-car-title'>Monster Truck</h3>
                    <div className="gallery-car-img"><img src="./img/gallery-img/monster.jpg" alt="" /></div>
                </Link>
                <Link to='/Short Course' className="gallery-car-box gallery-car-short">
                    <h3 className='gallery-car-title'>Short Course</h3>
                    <div className="gallery-car-img"><img src="./img/gallery-img/short.jpg" alt="" /></div>
                </Link>
                <Link to='/Buggy' className="gallery-car-box gallery-car-byggy">
                    <h3 className='gallery-car-title'>Buggy</h3>
                    <div className="gallery-car-img"><img src="./img/gallery-img/buggy.jpg" alt="" /></div>
                </Link>
                <Link to='/Trophy' className="gallery-car-box gallery-car-trophy">
                    <h3 className='gallery-car-title'>Trophy</h3>
                    <div className="gallery-car-img"><img src="./img/gallery-img/trophy.jpg" alt="" /></div>
                </Link>
                <Link to='/Truggy' className="gallery-car-box gallery-car-tryggy">
                    <h3 className='gallery-car-title'>Truggy</h3>
                    <div className="gallery-car-img"><img src="./img/gallery-img/truggy.jpg" alt="" /></div>
                </Link>
                <Link to='/Crawler' className="gallery-car-box gallery-car-crawler">
                    <h3 className='gallery-car-title'>Crawler</h3>
                    <div className="gallery-car-img"><img src="./img/gallery-img/crawler.jpg" alt="" /></div>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default GalleryCar