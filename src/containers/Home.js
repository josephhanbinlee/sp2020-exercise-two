import React from "react";

// API Keys
const defaultKey = "afe2424a140f9fbf501e5fd6cbd995b3";

function Home() {

    return (
        <div className="Home">
            <h1>City</h1>
            <div className="WeatherInfo">
                <div className="WeatherInfo_Image">
                    <img src= "" alt="" />
                </div>
                <div className="WeatherInfo_Data">
                    <div className="CurrentTemperature">
                        <p className="CurrentTemperatureTemp"> 48&#176; </p>
                        <p className="CurrentTemperatureLabel"> Current Temperature </p>
                    </div>
                    

                    <div className="OtherTemperatures">
                        <p> High Temp: 53&#176;</p>
                        <p> Low Temp: 32&#176;</p>
                    </div>

                    <p> Humidity</p>
                    <p> Wind</p>
                </div>
            </div>
        </div>
    );
}

export default Home;