import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import { Route, Redirect, Link } from "react-router-dom";
import ReportPage from "./Components/ReportPage/ReportPage"
import SeasonsPage from "./Components/SeasonsPage/SeasonsPage";
import AboutPage from "./Components/AboutPage/AboutPage";

export const DataContext = createContext();
console.log('DataContext up and running');

function App() {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const nasaUrl ='https://api.nasa.gov/insight_weather/?api_key=NVPo1OZ86ApquiqVgY9DX61fYLbMSAO1vfNbNDwP&feedtype=json&ver=1.0';
    const makeApiCall = async () => {
      const res = await fetch(nasaUrl);
      const data = await res.json();
      setWeatherData(data)
    } 
    makeApiCall();
  }, []);

  console.log(weatherData)

  return (
    <div className="App">
      <header>
        <h2>MARS WEATHER REPORT</h2>
        <nav>
          <Link to='/report'>
            <h3>Weather Report</h3>
          </Link>
          <Link to='/season'>
            <h3>Mars Seasons</h3>
          </Link>
          <Link to='/about'>
            <h3>About</h3>
          </Link>
        </nav>
      </header>
      <main>
          <DataContext.Provider value={weatherData}>
          <Route path="/report">
            <ReportPage />
          </Route>
          <Route exact path="/season">
            <SeasonsPage weatherData={weatherData}/>
          </Route>
          </DataContext.Provider>
        <Route exact path="/about" component={AboutPage}/>
        <Redirect to="/report" />
        </main>
        <footer>
          <p>Mars Weather Report created by Hannah Bannan</p>
        </footer>
    </div>
  );
}

export default App;
