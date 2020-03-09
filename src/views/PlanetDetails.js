import React, { useEffect, useState } from "react";

import axios from "axios";

const PlanetDetails = ({ id }) => {
    const [launch, setLaunch] = useState(null);

    // get the data on initial load and again if id changes
    useEffect(() => {
        axios
            .get("https://api.spacexdata.com/v3/launches/" + id)
            .then(res => setLaunch(res.data))
            .catch(err => console.log(err));
    }, [id]);
    if (launch === null) {
        return "Loading...";
    }
    return (
        <div>
            <h2>Mission: {launch.mission_name}</h2>
            <p>Date: {launch.launch_date_local}</p>
            <p>Details: {launch.details}</p>
            <p>Launch Success: {launch.launch_success}</p>
            {/* launch 8 has 1 ship: http://localhost:3000/launches/8 */}
            <p>Ships:</p>
            <ul>
                {launch.ships.map((ship, i) => {
                    return <li key={i}>{ship}</li>;
                })}
            </ul>
        </div>
    );

    // const [planet, setPlanet] = useState(null);
    // // Fetch data on load OR id change
    // useEffect(() => {
    //     axios
    //         .get("https://swapi.co/api/planets/" + id)
    //         // log to see if it's res or res.data
    //         .then(res => setPlanet(res.data))
    //         .catch(err => console.log(err));
    // }, [id]);
    // if (planet === null) {
    //     return "Loading...";
    // }
    // return (
    //     <div>
    //         <h2>{planet.name}</h2>
    //         <h3>Climate: {planet.climate}</h3>
    //         <h3>Terrain: {planet.terrain}</h3>
    //         <h3>Gravity: {planet.gravity}</h3>
    //         <h3>Population: {planet.population}</h3>
    //     </div>
    // )
    
};


export default PlanetDetails;