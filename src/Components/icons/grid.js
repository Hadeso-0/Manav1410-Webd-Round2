import React from "react";
import './icons.css';

const GridIcon = ({stroke_col,stroke_width}) =>{
    return(
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3H3V10H10V3Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 3H14V10H21V3Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 14H14V21H21V14Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M10 14H3V21H10V14Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default GridIcon;