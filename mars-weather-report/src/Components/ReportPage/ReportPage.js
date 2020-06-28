import React, { useContext } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails"
import { DataContext } from "../../App"

const ReportPage = ({ weatherData }) => {
 const weatherDisplay = useContext(DataContext);

 console.log(weatherDisplay);

//     const display = Object.keys(weatherDisplay).map((day, i) => {
//       return <WeatherDetails day={day} />
//   })
    return (
    <div>  
        <h1>Today's weather here:</h1>
        {/* {display} */}
        <h1>7 day report here:</h1>
    </div>  
    )
   
}

export default ReportPage;