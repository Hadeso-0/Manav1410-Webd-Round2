import React,{useEffect,useState} from 'react';
import PlayerCard from './player_card';
import './styles/search_players.css';
import SearchIcon from './icons/search';


const SearchPlayers =()=>{

    const api_token = 'ENmDvVaqZSPzMqN5UbCoKRwFhuOtPFoyHFa0DXQhGHsnHHjDfucVwskraaP9';
    const [players,setPlayers] = useState([]);
    const [searchQ,setSearchQ] = useState('');
    const [searchT,setSearchT] = useState('Cristiano Ronaldo');
    
    useEffect(()=>{
        getList();
    },[searchT]);

    const getList = async() =>{
        const list = await fetch(`https://soccer.sportmonks.com/api/v2.0/players/search/${searchT}?api_token=${api_token}&include=team,position,country`);
        const dataList = await list.json();
        setPlayers(dataList.data);
    }  
    

    const updateSearchQ = e =>{
        setSearchQ(e.target.value);
    }
    const updateSearchT = e =>{
        e.preventDefault();
        setSearchT(searchQ);
        setSearchQ('');
    }

    return(
        <section className="Search_page">
        <form className="SearchForm" onSubmit={updateSearchT}>
            <input type="text" placeholder="Player Name..." className="Search_bar" value={searchQ} onChange={updateSearchQ}/>
            <button className="Search_btn" type="Submit"><SearchIcon stroke_col="green" stroke_width="2"/></button>
        </form>

        <div className="display">
            {  
                players.map((player,idx)=>(
                    idx < 100 ? <PlayerCard 
                                    key={player.player_id}
                                    name={player.common_name} 
                                    imagesrc={player.image_path}
                                    country={player.country_id != null ? player.country.data.name : "-" }
                                    position={player.position_id != null ? player.position.data.name : "-" }
                                    team_sc = {player.team_id != null ? player.team.data.short_code : "-" }
                                    team_logo={player.team_id != null ? player.team.data.logo_path : "-" }
                                    country_logo={player.country.data.image_path}
                                    /> : ""
            ))}
        </div>
        </section>
    );

}

export default SearchPlayers;