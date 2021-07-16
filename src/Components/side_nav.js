import React,{useState} from 'react';
import './styles/side_nav.css';
import HomeIcon from './icons/home';
import PlayersIcon from './icons/players';
import TeamIcon from './icons/team';
import LeagueIcon from './icons/leagues';
import StarIcon from './icons/star';
import BoltIcon from './icons/bolt';


const SideNav = () =>{

    const [Expand,setExpand] = useState(false);

    const updateExpand = e =>{
        e.preventDefault();
        setExpand(!Expand);
    }
    return (
        <section className="Side_nav">
            <form className={Expand?"menu_icon_box menu_icon_box_expand":"menu_icon_box"} onSubmit={updateExpand}>
                <button className="menu_btn" type="submit">
                    <div className={Expand?"menu_icon menu_icon_expand":"menu_icon"}>
                        <p className="top_line"></p>
                        <p className="mid_line"></p>
                        <p className="bot_line"></p>
                    </div>
                </button>
            </form>
            <div className={Expand?"p_br p_br_expand" : "p_br"}><p></p></div>
            <div className={Expand ? "Menu Menu_expand" : "Menu"}>
                <div className="Menu_btns_cont">
                    <div className={Expand ? "Menu_btns Menu_btns_expand" : "Menu_btns"}>
                        <div className="Menu_btn">
                            <div className="Icon_cont home_icon">
                                <HomeIcon stroke_col="#fff" stroke_width="2" />
                            </div>
                            <p className="icon_name">Home</p>
                        </div>
                        <div className="Menu_btn">
                            <div className="Icon_cont players_icon">
                                <PlayersIcon stroke_col="#fff" stroke_width="2" />
                            </div>
                            <p className="icon_name">Players</p>
                        </div>
                        <div className="Menu_btn">
                            <div className="Icon_cont team_icon">
                                <TeamIcon stroke_col="#fff" stroke_width="2" />
                            </div>
                            <p className="icon_name">Teams</p>
                        </div>
                        <div className="Menu_btn">
                            <div className="Icon_cont league_icon">
                                <LeagueIcon stroke_col="#fff" stroke_width="2" />
                            </div>
                            <p className="icon_name">Leagues</p>
                        </div>
                        <div className="Menu_btn">
                            <div className="Icon_cont star_icon">
                                <StarIcon stroke_col="#fff" stroke_width="2" />
                            </div>
                            <p className="icon_name">Favorites</p>
                        </div>
                        <div className="Menu_btn">
                            <div className="Icon_cont bolt_icon">
                                <BoltIcon stroke_col="#fff" stroke_width="2" />
                            </div>
                            <p className="icon_name">About</p>
                        </div>
                    </div>
                </div>
                <div className={Expand?"p_br p_br_expand" : "p_br"}><p></p></div>
            </div>
        </section>
    );
}

export default SideNav;