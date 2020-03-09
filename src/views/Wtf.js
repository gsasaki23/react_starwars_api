import React from "react";


const Wtf = ({ string,text,back }) => {
    return (
        <div>
            <h2 style={{backgroundColor: back, color:text}}>The word is: {string}</h2>
        </div>
    );
};

export default Wtf;