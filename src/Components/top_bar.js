import React from 'react';
import './styles/top_bar.css';

const TopBar = ({title}) =>{
    return (
        <section className="Top_bar">
            <div className="Title_bar">
                <p>{title}</p>
            </div>
        </section>
    );
}

export default TopBar;