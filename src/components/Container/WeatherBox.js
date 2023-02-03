import React, { useState } from 'react';
import { FaTemperatureLow } from 'react-icons/fa';
import { MdPlace } from 'react-icons/md';
import { WeatherContents } from '../Presenter/WeatherBoxPresenter';

function WeatherBox() {
    const [forecast, setForecast] = useState({
        Temperature: '??',
        Place: 'Searching...',
    });
    const { Temperature, Place } = forecast;
    
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
    const COORDS = 'coords';

    function getWeather(lat, log) {
        fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`,
        )
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            const icon = json.weather[0].icon;
            setForecast({ Temperature: temperature, Place: place, WIcon: icon });
        });
    }

    function saveCoords(coordsObj) {
        localStorage.setItem(COORDS, JSON.stringify(coordsObj));
    }

    function handleGeoSucces(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const coordsObj = {
        latitude,
        longitude,
        };
        saveCoords(coordsObj);
        getWeather(latitude, longitude);
    }

    function handleGeoError() {
        console.log('Cant access geo location');
    }

    function askForCoords() {
        navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
    }

    function loadCoords() {
        const loadedCoords = localStorage.getItem(COORDS);
        if (loadedCoords === null) {
        askForCoords();
        } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
        }
    }

    loadCoords();

    return (
        <WeatherContents>
            <FaTemperatureLow style={{ marginBottom: '-5' }} alt="Temperature here" />{Temperature}º
            <MdPlace style={{ marginLeft: '15', marginBottom: '-5' }} alt="My place"/>{Place}
        </WeatherContents>
    );
}

export default React.memo(WeatherBox);