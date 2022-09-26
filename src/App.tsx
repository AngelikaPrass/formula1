import React, {useEffect, useState} from 'react';
import './App.css';

import Countdown from "./components/countdown/countdown";
import DriverStandings from "./components/driver-standings/driverStandings";

function App() {


  return (
    <div className="App">
        <Countdown />
        <DriverStandings />
        <header className="App-header">
        </header>
    </div>
  );
}

export default App;
