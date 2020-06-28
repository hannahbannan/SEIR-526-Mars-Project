import React, { useContext } from "react";
import { DataContext } from "../../App"

const SeasonsPage = ({ weatherData }) => {
    const weatherDisplay = useContext(DataContext);
    // console.log(weatherDisplay)
    if (weatherDisplay) {
        let currentDay = weatherDisplay.sol_keys[6];
        let seasonName = weatherDisplay[currentDay].Season.toUpperCase();
    return (
    <div className="season">
        <h1>{seasonName}</h1>
    </div>
    )
}  else {
    return (<h2>Loading...</h2>)
}
}

export default SeasonsPage;