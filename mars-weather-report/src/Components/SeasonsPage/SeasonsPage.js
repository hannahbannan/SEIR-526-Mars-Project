import React, { useContext } from "react";
import { DataContext } from "../../App"

const SeasonsPage = ({ weatherData }) => {
    const weatherDisplay = useContext(DataContext);
    if (weatherDisplay['555']) {
        let seasonName = weatherDisplay['555'].Season.toUpperCase();
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