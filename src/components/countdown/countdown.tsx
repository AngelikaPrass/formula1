import React, { useEffect, useState } from 'react';
import CountdownTimer from "./CountdownTimer";
import "./countdown.css";
const axios = require('axios').default;

const Countdown = () => {

    const [nextRace, setNextRace] = useState<String>("");
    const [nextRaceDate, setNextRaceDate] = useState<Date>(new Date());

    function getValidDateString(date: string, time: string): Date {
        return new Date(date + "T" + time);
    }

    useEffect(() => {
        axios.get('http://ergast.com/api/f1/current/next.json').then((response: any) => {
            setNextRace(response.data.MRData.RaceTable.Races[0].raceName);
            let dateString: Date = getValidDateString(
                response.data.MRData.RaceTable.Races[0].date,
                response.data.MRData.RaceTable.Races[0].time
            )
            setNextRaceDate(dateString);
        }).catch((error: any) => {
            console.log(error);
        });
    });

    const timezone: string = Intl.DateTimeFormat().resolvedOptions().timeZone;

    const formattedDate: string = nextRaceDate.toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) + " at " + nextRaceDate.toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true }) + " " + timezone +" time";
    const string: string = `The next race is the ${nextRace} - ${formattedDate}`;
    return (
        <div>
            <CountdownTimer targetDate={nextRaceDate} />
            {string}
            {/*{nextRace} @ {nextRaceDate.toString()}*/}
        </div>
    );
}

export default Countdown;
