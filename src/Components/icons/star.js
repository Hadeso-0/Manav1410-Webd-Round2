import React from "react";
import './icons.css';

const StarIcon = ({stroke_col,stroke_width}) =>{
    return(
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default StarIcon;