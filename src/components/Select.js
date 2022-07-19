import React from 'react'
import './Select.css'
import BoraBora from '../assets/borabora.jpg'
import BoraBora2 from '../assets/borabora2.jpg'
import Maldives from '../assets/maldives.jpg'
import Maldives2 from '../assets/maldives2.jpg'
import Maldives3 from '../assets/maldives3.jpg'
import Keywest from '../assets/keywest.jpg'

function Select() {
    return (
        <div name="views" className='select'>
            <div className="select-img">
                <img  src={BoraBora} alt="" ></img>
                <img src={BoraBora2} alt="" ></img>
                <img  src={Maldives} alt="" ></img>
                <img src={Maldives2} alt=""></img>
                <img  src={Maldives3} alt=""></img>
                <img  src={Keywest} alt="" ></img>
                
            </div>


        </div>
    )
}

export default Select