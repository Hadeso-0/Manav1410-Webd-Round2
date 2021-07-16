import React from 'react';
import './styles/player_card.css'

const PlayerCard = (props) =>{
    return(
        <div className="PlayerCard">
            <div className="top_style"></div>
                <div className="PDataCont">
                    <div className="PData">
                    <img className="PFlag" src={props.country_logo} alt={props.country}/>
                    <img className="Pimg" src={props.imagesrc} alt={props.name}/>
                    <div className="screen"></div>
                    <div className="ncpos">
                        <p className="Pname">{props.name}</p>
                        <p className="Pcountry">{props.country}</p>
                        <p className="Ppos">{props.position}</p>
                    </div>
                    <div className="team">
                        <img className="Ptlogo" src={props.team_logo} alt={props.team_sc}/>
                        <p className="Pteam">{props.team_sc}</p>
                    </div>
                    </div>
                </div>
            <div className="bot_style"></div>
        </div>
    );
}

export default PlayerCard;