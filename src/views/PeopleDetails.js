import React, { useEffect, useState } from "react";

import axios from "axios";

const PeopleDetails = ({ id }) => {
    const [person, setPerson] = useState(null);
    // Fetch data on load OR id change
    useEffect(() => {
        axios
            .get(`https://swapi.co/api/people/${id}`)
            // log to see if it's res or res.data
            .then(res => setPerson(res.data))
            .catch(err => console.log(err));
    }, [id]);
    if (person === null) {
        return "Loading...";
    }
    return (
        <div>
            <h2>{person.name}</h2>
            <h3>Height: {person.height}</h3>
            <h3>Hair Color: {person.hair_color}</h3>
            <h3>Eye Color: {person.eye_color}</h3>
            <h3>Skin Color: {person.fair}</h3>
            <h3>homeworld LINK: {person.homeworld}</h3>
        </div>
    )
    
};


export default PeopleDetails;