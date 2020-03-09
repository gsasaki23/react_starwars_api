import React, { useEffect, useState } from "react";

import axios from "axios";

const FilmDetails = ({ id }) => {
    const [film, setFilm] = useState(null);
    const [axiosError, setAxiosError] = useState(null);

    // Fetch data on load OR id change
    useEffect(() => {
        axios.get(`https://swapi.co/api/films/${id}/`)
            .then(res => {
                setFilm(res.data);
            })
            .catch((err) => {
                console.log(err);
                setAxiosError("true");
            });
    }, [id]);

    if (film === null && axiosError === null) {
        return "Loading...";
    }
    return (
        <div>
            {axiosError === "true" ? <a href="https://www.youtube.com/watch?v=532j-186xEQ">These aren't the droids you're looking for</a> :
                <div>
                    <h2>{film.title}</h2>
                    <h3>Episode ID: {film.episode_id}</h3>
                    <h3>Released On: {film.release_date}</h3>
                </div>}
        </div>
    )
};


export default FilmDetails;