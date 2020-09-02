import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ singleCountry }) => {

    const [temp, setTemp] = useState('')
    const [icon, setIcon] = useState('')
    const [windSpeed, setWindSpeed] = useState('')
    const [windDir, setWindDir] = useState('')

    const api_key = process.env.REACT_APP_API_KEY
    const capital = singleCountry.capital

    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}`

    useEffect(() => {
        axios
            .get(url)
            .then(response => {
                const apiResponse = response.data;
                setTemp(apiResponse.current.temperature)
                setIcon(apiResponse.current.weather_icons[0])
                setWindSpeed(apiResponse.current.wind_speed)
                setWindDir(apiResponse.current.wind_dir)
            }).catch(error => {
                console.log(error);
            });
    }, [url])

    return (
        <div>
            <h2>Weather in {capital}</h2>
            <p>Temperature: {temp} Celcius</p>
            <img src={icon} alt='Icon'></img>
            <p>Wind: {windSpeed} mph direction {windDir}</p>
        </div>
    )
}

export default Weather