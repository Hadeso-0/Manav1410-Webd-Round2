import React from "react";
import './icons.css';

const LeagueIcon = ({stroke_col,stroke_width}) =>{
    return(
        <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke={stroke_col} stroke-width={stroke_width} stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}

export default LeagueIcon;