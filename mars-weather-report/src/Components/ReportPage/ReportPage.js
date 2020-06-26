import React, { useContext } from "react";
import WeatherDetails from "../WeatherDetails/WeatherDetails"
import { DataContext } from "../../App"

const ReportPage = ({ weatherData }) => {
 const weatherDisplay = useContext(DataContext);
    
//   const weekDisplay = weatherDisplay.map((day, i) => {
//       return <WeatherDetails day={day} key={i}
//         />
//   })
   
    return (
    <div>  
        <h1>Today's weather here:</h1>
        <WeatherDetails />
        <h1>7 day report here:</h1>
        {/* {weekDisplay} */}
    </div>  
    )
}

export default ReportPage;