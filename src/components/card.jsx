import { useState, useEffect } from 'react';
import Button from './Button.jsx'

import Icon from './Icon.jsx';
const apikey = 'd12a4203bb8343b6b70235323232110' //⬅️Api key | Falta buscar la manera de no hacerla pública

const Card = () => {

    const [isLoading, setIsLoading] = useState(false) //Hook que establece si los datos están cargando | hay que agregar una vista de carga
    const [weather, setWeather] = useState({}) //Hook que guarda los datos que devuelve la petición a la API
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=chihuahua&lang=es`) //Falta gregar un componente (Select) para elegir la ubicación
            .then(res =>{
                return res.json() //Falta agregar si la respuesta además de ser OK, devuelve los datos correctos
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

    console.log(weather.condition)

    if (!isLoading) {
        return (
            <section className="card">
                <Icon icon='light_mode' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                <div className='weatherInfo'>
                    <p className="weatherInfo__grades">{weather.temp}°</p>
                    <p className="weatherInfo__location">{weather.location}</p>
                    <p className="weatherInfo__state">{weather.condition}</p>
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
                <Button text='Detalles' customClassName='btn__weatherDetails'></Button>
                </div>
            </section>
        )
    } else { //Esta parte se va a usar cuando aún no hayan cargado los datos del clima | Falta agregar diseño
        return(
            <section className="card">
                <Icon icon='light_mode' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                <div>Loading</div>
            </section>
        )
    }


}
export default Card