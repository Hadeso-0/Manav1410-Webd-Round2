import React,{useEffect,useState} from 'react';
import './styles/team_page.css';


const TeamsPage =({match})=>{

    const api_token = 'ENmDvVaqZSPzMqN5UbCoKRwFhuOtPFoyHFa0DXQhGHsnHHjDfucVwskraaP9';
    const [Team,setTeam] = useState({});
    const [coach,setCoach] = useState({});
    const [assist,setassist] = useState([]);
    const [goals,setgoals] = useState([]);
    const [cardS,setcardS] = useState([]);
    const [country,setcountry] = useState({});
    const [trophies,settrophies] = useState([]);
    const [venue,setvenue] = useState({});
    const [uefaranking,setuefaranking] = useState({});
    const [league,setleague] = useState({});

    useEffect(()=>{
        const getData = async() =>{
            const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/teams/${match.params.id}?api_token=${api_token}&include=country,squad,coach,venue,goalscorers,cardscorers,assistscorers,trophies,uefaranking,league`);
            const data = await response.json();

            const setExpressions = () =>{
            setTeam(data.data);
            setCoach(data.data.coach.data);
            setassist(data.data.assistscorers.data);
            setcardS(data.data.cardscorers.data);
            setgoals(data.data.goalscorers.data);
            setcountry(data.data.country.data);
            settrophies(data.data.trophies.data);
            setvenue(data.data.venue.data);
            setuefaranking(data.data.uefaranking.data);
            setleague(data.data.league.data);
            }
            setExpressions();
        }  
        getData();
    },[match.params.id]);


    return(
        <section className="Team_page">
            <div className="Team_page_cont"> 
            <div className="TeamPage_card card">
                <div className="TeamCard_img_cont">
                    <div className="Team_Img">
                        <img src={Team.logo_path} alt={Team.short_code}/>
                    </div>
                </div>
                <div className="TeamCard_data">
                    <p className="Team_name">{`${Team.name} (${Team.short_code})`}</p>
                    <p className="Team_founded">{`Founded: ${Team.founded}`}</p>
                    <p className="Team_country">{`Country: ${country.name}`}</p>
                    <p className="Team_home_gnd">Home Ground: </p>
                    <p className="Team_home_name">{`${venue.name}`}</p>
                    <p className="Team_home_address">{`${venue.address}, ${venue.city}`}</p>
                    <p className="Team_league">League: {league.name}, ({league.type})</p>
                </div>
            </div>
            <div className="Team_stats_card card">
                <p className="stats_card_title">Stats</p>
                <div className="Team_stat_field">
                    <p className="Team_assists_title title">Assists</p>
                    <p className="Team_assists_val">{assist.length}</p>
                </div>
                <div className="Team_stat_field">
                    <p className="Team_goals_title title">Goals</p>
                    <p className="Team_goals_val">{goals.length}</p>
                </div>
                <div className="Team_stat_field">
                    <p className="Team_cards_title title">Cards</p>
                    <p className="Team_cards_val">{cardS.length}</p>
                </div>
            </div>
            <div className="MidCardsRow">
                <div className="TeamPage_coach_card card">
                    <p className="coach_title">Coach</p>
                    <div className="coach_img_cont">
                        <img src={coach.image_path} alt={coach.common_name}/>
                    </div>
                    <div className="coach_card_data">
                        <p className="coach_Fname">{coach.firstname}</p>
                        <p className="coach_Lname">{coach.lastname}</p>
                        <p className="coach_nation">Nationality: {coach.nationality}</p>
                    </div>
                </div>

                <div className="Team_uefa_card card">
                <p className="uefa_title">UEFA Detials</p>
                <p className="uefa_points_title title">Ranking </p>
                <p className="uefa_position">{uefaranking.position}</p>
                <p className="uefa_points_title title">Ranking Status </p>
                <p className="uefa_pos_sts">{uefaranking.position_status}</p>
                <p className="uefa_points_title title">Coefficient </p>
                <p className="uefa_coefficient">{uefaranking.coeffiecient}</p>
                <p className="uefa_points_title title">Points</p>
                <p className="uefa_points">{uefaranking.points}</p>
            </div>
            </div>
              <div className="Team_Trophies_card card">
                <p className="Team_trophies_title">Achievements</p>
                <div className="Team_trophies_cont">
                    {
                        trophies.map( trophy =>(
                            <div className="Trophy_cont" key={`${trophy.league_id}.${trophy.times}.${trophy.status}`}>
                                <p className="Trophy_league">{trophy.league}</p>
                                <div className="trophy_times_cont"><p className="Trophy_times">{trophy.times}</p></div>
                                <p className="Trophy_value">{trophy.status}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            </div>
            <div className="Extra"></div>
        </section>
    );

}

export default TeamsPage;