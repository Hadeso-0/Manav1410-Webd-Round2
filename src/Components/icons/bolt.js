import React from "react";
import './icons.css';

const BoltIcon = ({stroke_col,stroke_width}) =>{
    return(
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default BoltIcon;