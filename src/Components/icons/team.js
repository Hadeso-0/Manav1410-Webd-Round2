import React from "react";
import './icons.css';

const TeamIcon = ({stroke_col,stroke_width}) =>{
    return(
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default TeamIcon;