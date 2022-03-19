import React from 'react';
import SliderHeader from './SliderHeader';
import GalleryCar from './GalleryCar';
import GaleeryBrend from './GaleeryBrend';
import Repair from './Repair';
import GalleryDetail from './GalleryDetail';

const Home = () => {
  return (
    <div>
        <SliderHeader /> 
        <GalleryCar /> 
        <GaleeryBrend />
        <GalleryDetail /> 
        <Repair /> 
         

    </div>
  )
}

export default Home