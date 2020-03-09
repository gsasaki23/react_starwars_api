import React, { useEffect, useState } from "react";

import axios from "axios";

const PeopleDetails = ({ id }) => {
    const [person, setPerson] = useState(null);
    const [homeworld, setHomeworld] = useState(null);
    const [homeworldLink, setHomeworldLink] = useState(null);
    const [axiosError, setAxiosError] = useState(null);

    // Fetch data on load OR id change
    useEffect(() => {
        axios.get(`https://swapi.co/api/people/${id}/`)
            .then(res => {
                setPerson(res.data);
                // If person fetch was successful, re-fetch for homeworld info
                axios.get(res.data.homeworld)
                    .then(homeRes => {
                        setHomeworld(homeRes.data.name);
                        let temp = res.data.homeworld.split("/");
                        temp.pop()
                        setHomeworldLink("/planets/" + temp.pop() + "/");
                    })
                    .catch((err) => {
                        console.log(err);
                        setAxiosError("true");
                    });
            })
            .catch((err) => {
                console.log(err);
                setAxiosError("true");
            });
    }, [id]);

    if (person === null && axiosError === null) {
        return "Loading...";
    }
    return (
        <div>
            {axiosError === "true" ? <a href="https://www.youtube.com/watch?v=532j-186xEQ">These aren't the droids you're looking for</a> :
                <div>
                    <h2>{person.name}</h2>
                    <h3>Height: {person.height}</h3>
                    <h3>Hair Color: {person.hair_color}</h3>
                    <h3>Eye Color: {person.eye_color}</h3>
                    <h3>Skin Color: {person.skin_color}</h3>
                    <h3>Homeworld: <a href={homeworldLink}>{homeworld}</a></h3>
                    <h3>HW Link: {person.homeworld}</h3>
                </div>}

        </div>
    )
};


export default PeopleDetails;