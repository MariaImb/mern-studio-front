import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import grabacion from '../images/img-13.jpg'
import mezcla from '../images/img-11.jpg'
import master from '../images/img-14.jpg'

const Cards = () => {
    return (
        <div className='cards'>
            <div className="subtitle__container">
                <h1>SERVICIOS</h1>
            </div>
            
            {/* <div className="cards__container"> */}
                
                <ul className="cards__items">
                    <CardItem
                        src= {grabacion}
                        text="GRABACIÓN"
                        label="GRABACIÓN"
                    />
                    <CardItem
                        src= {mezcla}
                        text="MEZCLA"
                        label="MEZCLA"
                    />
                    <CardItem
                        src= {master}
                        text="lorem"
                        label="MASTERIZACIÓN"
                    />
                </ul>
            {/* </div> */}
        </div>   
        
    )
}

export default Cards
