import React from 'react';
import './App.css';
import SideNav from './Components/side_nav';
import TopBar from './Components/top_bar';
// import SearchPlayers from './Components/search_players';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Side_Nav"><SideNav /></div>
        <div className="Top_Bar"><TopBar title="App" /></div>
        <div className="Main">
          <Switch>
            <Route path="/" exact component={SideNav} />
            {/* <Route path="/sqs" exact component={SearchPlayers} /> */}
            <Route path="/ddd" exact component={TopBar} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
