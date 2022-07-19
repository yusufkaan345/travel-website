import React from 'react'
import './Carousel.css'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'


function Carousels() {
    return (
        <div name="travel" className='container'>
            <Carousel showArrows={true} className="carousel" autoPlay={true} infiniteLoop={true} >
                <div>
                    <img src={BoraBora} alt="" />
                    <p className="legend">Borabora</p>
                </div>
                <div>
                    <img src={BoraBora2} alt="" />
                    <p className="legend">Borabora 2</p>
                </div>
                <div>
                    <img src={Maldives} alt="" />
                    <p className="legend">Maldives</p>
                </div>
                
            </Carousel>
        </div>
    )
}

export default Carousels