import React, { useEffect, useState } from "react";

import axios from "axios";

const PlanetDetails = ({ id }) => {
    const [planet, setPlanet] = useState(null);
    const [axiosError, setAxiosError] = useState(null);

    // Fetch data on load OR id change
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/planets/${id}/`)
            .then(res => setPlanet(res.data))
            .catch((err) => {
                console.log(err);
                setAxiosError("true");
            })    }, [id]);
    if (planet === null && axiosError === null) {
        return "Loading...";
    }
    return (
        <div>
            {axiosError==="true" ? <a href="https://www.youtube.com/watch?v=532j-186xEQ">These aren't the droids you're looking for</a> :
                <div>
                <h2>{planet.name}</h2>
                <h3>Climate: {planet.climate}</h3>
                <h3>Terrain: {planet.terrain}</h3>
                <h3>Gravity: {planet.gravity}</h3>
                <h3>Population: {planet.population}</h3>
            </div>}
        </div>
    )
};


export default PlanetDetails;