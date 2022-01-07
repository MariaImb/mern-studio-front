import React from 'react'


const CardItem = (props) => {
    return (
        <>
        <li className="cards__item">
            <div className="cards__item__link">
                
                <img src={props.src} alt="" className="cards_item_img"></img>
                
                <div className="cards__item__info">
                    <h5 className="card__item__text">{props.label}</h5>
                </div>            
                <div className="card__description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, debitis ullam. Animi quas quis aspernatur eos quia praesentium maiores iure, dicta iusto totam ipsam nemo repudiandae explicabo, doloribus ratione tempora.</p>
                </div> 
            </div>
        </li>
            
        </>
    )
}

export default CardItem