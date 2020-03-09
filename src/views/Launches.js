import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

import axios from "axios";

const Launches = () => {
    const [launches, setLaunches] = useState([]);

    // empty array to tell useEffect to run only one time
    // it will run once on first load of this component
    useEffect(() => {
        // make api request to get launches data and then set launches

        axios
            .get("https://api.spacexdata.com/v3/launches")
            .then(res => setLaunches(res.data))
            .catch(err => console.log(err));
    }, []);

    return launches.map(launch => {
        // const {flight_number, mission_name, launch_date_local} = launch;

        return (
            <div key={launch.flight_number}>
                <h2>
                    <Link to={"/launches/" + launch.flight_number}>
                        Mission: {launch.mission_name}
                    </Link>
                </h2>
                <p>Date: {launch.launch_date_local}</p>
            </div>
        );
    });
};

export default Launches;