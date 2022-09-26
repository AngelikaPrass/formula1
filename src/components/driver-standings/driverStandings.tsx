import React, {useEffect, useState} from "react";
const axios = require('axios').default;

interface Driver {
    driverId: string;
    position: number;
    points: number;
    permanentNumber: string;
    code: string;
    url: string;
    givenName: string;
    familyName: string;
    constructor: string;
}

const DriverStandings = () => {

    const [driverStandings, setDriverStandings] = useState<Driver[]>([]);

    useEffect(() => {
                axios.get('https://ergast.com/api/f1/2022/driverStandings.json').then((response: any) => {
                    console.log(response.data);
                    setDriverStandings(
                        response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings.
                        map((driver: any) => {
                            return {
                                driverId: driver.Driver.driverId,
                                position: driver.position,
                                points: driver.points,
                                permanentNumber: driver.Driver.permanentNumber,
                                code: driver.Driver.code,
                                url: driver.Driver.url,
                                givenName: driver.Driver.givenName,
                                familyName: driver.Driver.familyName,
                                constructor: driver.Constructors[0].name
                            }
                        }
                    ));
                }).catch((error: any) => {
                    console.log(error);
                })

        }, []);

    return (
        <div>
            {driverStandings.map((driver: Driver) => {
                return (
                    <div key={driver.position}>
                        <h1> {driver.position}. {driver.givenName} {driver.familyName} </h1>
                        <h2> Team: {driver.constructor} </h2>
                        <h2> Points: {driver.points} </h2>
                    </div>
                )
            })}
        </div>
  );
}
export default DriverStandings;