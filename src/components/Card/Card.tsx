import React from 'react';
import './style.scss';

function Card({children}:any) {
    return (
         
        <div className="card" >
            {children}
      </div>
    )
}


export default Card

export const CardImage = ({path}:any) => {
   
    return (
        <img className="card__img" src={`${path}/detail.jpg`} alt="Marvel"/>
    )
}

export const CardOverlay = ({children}:any) => {
    return (
        <div className="card__overlay">
            {children}
        </div>
    )
}
export const CardTitle = ({name}:any) => {
    return (
        <p className="card__title">
            {name}
        </p>
    )
}

export const CardButton = () => {
    return (
        <div onClick={()=>alert("hey")} className="card__button">
            More...
        </div>
    )
}