import React,{useEffect,useState} from 'react';
import './styles/player_page.css';
import {Link} from 'react-router-dom';


const PlayersPage =({match})=>{

    const api_token = 'ENmDvVaqZSPzMqN5UbCoKRwFhuOtPFoyHFa0DXQhGHsnHHjDfucVwskraaP9';
    const [player,setplayer] = useState({});
    const [trophies,settrophies] = useState([]);
    const [team,setteam] = useState({});
    
    useEffect(()=>{
        const getData = async() =>{
            const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/players/${match.params.id}?api_token=${api_token}&include=position,team,stats,trophies,country`);
            const data = await response.json();
            setplayer(data.data);
            settrophies(data.data.trophies.data);
            setteam(data.data.team.data);
        }  
        getData();
    },[match.params.id]);

    return(
        <section className="Player_page">
            <div className="Player_container"> 
                <div className="PlayerPage_card">
                    <div className="PlayerPage_Image_cont">
                        <div className="PlayerPage_Image">
                            <img src={player.image_path} alt={player.common_name}/>
                        </div>
                    </div>
                    <div className="PlayerPage_GenData">
                        <p className="FName">{player.firstname}</p>
                        <p className="LName">{player.lastname}</p>
                        <p className="PositionField">Position: {player.position_id != null ? player.position.data.name : "-" }</p>
                        <p className="heightField">H: {player.height !==null ? player.height : "-"}</p>
                        <p className="weightField">W: {player.weight !==null ? player.weight : "-"}</p>
                        <p className="BirthField">Birth:</p>
                        <p className="BDateField">{player.birthdate}</p>
                        <p className="NationField">Nationality: {player.nationality}</p>
                    </div>
                </div>

                <div className="PlayerPage_TeamData">
                    <div className="Player_team_cont">
                    <div className="Team_logo">
                        <img src={player.team_id !== null ? team.logo_path : "-" } alt={player.team_id != null ? team.short_code : "-" }/>
                    </div>
                    <p><Link to={`/teams/${player.team_id}`}>{`${player.team_id != null ? team.name : "-" } (${player.team_id != null ? team.short_code : "-" })`}</Link></p>
                    </div>
                </div>

                <div className="PlayerPage_Trophies_cont">
                    <h3 className="PlayerPage_Trophies_Title">Achievements</h3>
                    <div className="PlayerPage_Trophies">
                        {
                            trophies.map(trophy =>(
                             <div className="Trophy_cont" key={`${trophy.league_id}.${trophy.times}.${trophy.status}`}>
                                 <p className="Trophy_value">{trophy.status}</p>
                                 <div className="trophy_times_cont"><p className="Trophy_times">{trophy.times}</p></div>
                                 <p className="Trophy_league">{trophy.league}</p>
                             </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="Extra"></div>
        </section>
    );
}

export default PlayersPage;