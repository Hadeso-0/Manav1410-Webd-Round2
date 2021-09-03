import React,{useEffect,useState} from 'react';
import './styles/home_page.css';
// import {Link} from 'react-router-dom';


const HomePage =()=>{

    // const api_token = 'ENmDvVaqZSPzMqN5UbCoKRwFhuOtPFoyHFa0DXQhGHsnHHjDfucVwskraaP9';
    
    const [today,settoday] = useState("");
    useEffect(()=>{
        // const getData = async() =>{
        //     const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/fixtures/date/?api_token=${api_token}&include=position,team,stats,trophies,country`);
        //     const data = await response.json();
        // }  
        getDate();
    },[]);


    const getDate = () => {
        const date = new Date();
        settoday(date.getFullYear() + "-" + date.getMonth() +"-" + date.getDate());
    };

    return(
        <section className="Home_page">
            <p>{today}</p>
        </section>
    );
}

export default HomePage;