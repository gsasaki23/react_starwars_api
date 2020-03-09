import React, { useEffect, useState } from "react";

import axios from "axios";

const SingleLaunch = ({ id }) => {
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
};

export default SingleLaunch;