import React from 'react';
import { mainCaroselData } from './mainCaroselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



const MainCarosel = () => {
    const items = mainCaroselData.map((item)=> <img className='cursur-pointer' role='presentation' src={item.image} alt=''/>)

    return(
        <AliceCarousel
            items={items}
            disableButtonsControls
            autoPlay
            autoPlayInterval={1000}
            infinite
            
        />
    )
    }
export default MainCarosel;