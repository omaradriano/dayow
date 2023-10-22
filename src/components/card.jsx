import { useState, useEffect } from 'react';
import Button from './Button.jsx'

import Icon from './Icon.jsx';
const apikey = 'd12a4203bb8343b6b70235323232110'

const Card = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [weather, setWeather] = useState({})
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/current.json?key=${apikey}&q=chihuahua`)
            .then(res =>{
                return res.json()
            })
            .then(data => {
                let weatherData = {
                    location: `${data.location.name}, ${data.location.region}`,
                    temp: data.current.temp_c,
                    wind: data.current.wind_kph,
                    humidity: data.current.humidity,
                    condition: data.current.condition.text,
                    wind_direction: data.current.wind_dir
                }
                // console.log(weatherData)
                setWeather(weatherData)
                setIsLoading(false) //Variable usada para saber si los datos están cargados o no
            })
    }, []);

    if (!isLoading) {
        return (
            <section className="card">
                <Icon icon='light_mode' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                <div className='weatherInfo'>
                    <p className="weatherInfo__state">{weather.condition}</p>
                    <p className="weatherInfo__grades">{weather.temp}°</p>
                    <p className="weatherInfo__location">{weather.location}</p>
                </div>
                <div className="weatherStadistics">
                    <div className="weatherStadistics__left">
                        <p>Viento</p>
                        <p>Humedad</p>
                    </div>
                    <div className="weatherStadistics__right">
                        <p>{weather.wind_direction} {weather.wind} KPH</p>
                        <p>{weather.humidity}%</p>
                    </div>
                </div>
                <Button></Button>
            </section>
        )
    } else {
        return(
            <section className="card">
                <Icon icon='light_mode' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                <div>Loading</div>
            </section>
        )
    }


}
export default Card