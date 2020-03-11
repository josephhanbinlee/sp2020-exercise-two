import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import Header from '../components/Header';

import WeatherImage from '../components/WeatherImage'

// API Keys
const defaultKey = "afe2424a140f9fbf501e5fd6cbd995b3";

function Home() {
    // lets us track the info flow through the application
    const[weatherData, setWeatherData] = useState({});
    const[city, setCity] = useState("Tokyo");

    // useState (reactLand --> val you're calling and the function that will update it )
    const[cloudiness, setCloudiness] = useState(0); // setting a default value
    const[CurrentTemperature, setCurrentTemperature] = useState('');
    const[WindSpeed, setWindSpeed] = useState('');
    const[weatherType, setWeatherType] = useState("Clouds");

    let history = useHistory();

    useEffect(() => {
        // Get city from URL
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let city = urlParams.get("city")
        // causes the city to update
        if (city) {
            setCity(city);
        }
        
    }, [history])


    useEffect(() => {
        // Make a request for the weather by city
        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${defaultKey}`
            )
            .then(function (response) {
            // handle success
            setWeatherData(response.data); // we don't need the other data yet
        })
            .catch(function (error) {
            // handle error
            console.log(error);
        })
    }, [city]); /* [] is updated and useEffect will keep running --> bc  */


    // Update weather data
    useEffect(() => {
        if (weatherData.main) { // if the data exists...
            setCurrentTemperature(weatherData.main); 
            setWindSpeed(weatherData.wind.speed);
            setCloudiness(weatherData.clouds.all/300);
            setWeatherType(weatherData.weather[0].main);

        }
    }, [weatherData]); // weatherData updates

    // Returning the values
    return (
        <div style={{ backgroundColor: `rgba(0,0,0,${cloudiness})`, padding: `0px 50px`}}>
        <Header />
            <div className="Home"> 
                <h1>{city}</h1> 
                <div className="WeatherInfo">
                    <WeatherImage weatherType={weatherType} /> 
                    <div className="WeatherInfo_Data">
                        <div className="CurrentTemperature">
                            <p className="CurrentTemperatureTemp"> {CurrentTemperature.temp}&#176; </p>
                            <p className="CurrentTemperatureLabel"> Current Temperature </p>
                        </div>
                        

                        <div className="OtherTemperatures">
                            <p> High Temp: {CurrentTemperature.temp_max}&#176;</p>
                            <p> Low Temp: {CurrentTemperature.temp_min}&#176;</p>
                        </div>
                        <p> Humidity: {CurrentTemperature.humidity}%</p>
                        <p> Wind: {WindSpeed} mph</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

// on the first render, weatherData object is undefined, so it cannot get data
// if weatherData.main is empty, do nothing. otherwise, display weatherData.main.humidity

export default Home;