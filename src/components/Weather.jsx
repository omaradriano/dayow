import { useEffect, useState } from "react"
import Slider from "./Slider.jsx"
import Card from "./Card.jsx"

const apikey = 'd12a4203bb8343b6b70235323232110' //⬅️Api key | Falta buscar la manera de no hacerla pública

const Weather = () => {

    //Pendiente acomodar el código para pasarle la petición de datos a la card y al slider

    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true) //Hook que establece si los datos están cargando | hay que agregar una vista de carga
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=chihuahua&lang=es&days=5`) //Falta gregar un componente (Select) para elegir la ubicación
            .then(res => {
                return res.json() //Falta agregar si la respuesta además de ser OK, devuelve los datos correctos
            })
            .then(data => {
                let weatherData = {
                    current: {
                        location: `${data.location.name}, ${data.location.region}`,
                        temp: data.current.temp_c,
                        wind: data.current.wind_kph,
                        humidity: data.current.humidity,
                        condition: data.current.condition.text,
                        wind_direction: data.current.wind_dir
                    },
                    forecast: [
                        {   
                            date: data.forecast.forecastday[0].date,
                            min_temp: data.forecast.forecastday[0].day.mintemp_c,
                            max_temp: data.forecast.forecastday[0].day.maxtemp_c,
                            avg_temp: data.forecast.forecastday[0].day.avgtemp_c,
                        },
                        {
                            date: data.forecast.forecastday[1].date,
                            min_temp: data.forecast.forecastday[1].day.mintemp_c,
                            max_temp: data.forecast.forecastday[1].day.maxtemp_c,
                            avg_temp: data.forecast.forecastday[1].day.avgtemp_c,
                        },
                        {
                            date: data.forecast.forecastday[2].date,
                            min_temp: data.forecast.forecastday[2].day.mintemp_c,
                            max_temp: data.forecast.forecastday[2].day.maxtemp_c,
                            avg_temp: data.forecast.forecastday[2].day.avgtemp_c,
                        },
                        {
                            date: data.forecast.forecastday[3].date,
                            min_temp: data.forecast.forecastday[3].day.mintemp_c,
                            max_temp: data.forecast.forecastday[3].day.maxtemp_c,
                            avg_temp: data.forecast.forecastday[3].day.avgtemp_c,
                        },
                        {
                            date: data.forecast.forecastday[4].date,
                            min_temp: data.forecast.forecastday[4].day.mintemp_c,
                            max_temp: data.forecast.forecastday[4].day.maxtemp_c,
                            avg_temp: data.forecast.forecastday[4].day.avgtemp_c,
                        }
                    ]
                }
                setWeather(weatherData)
                setIsLoading(false)
                // console.log(weatherData.forecast)
                // console.log(data.forecast)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    return (
        <>
            <Card data={weather.current} isLoading={isLoading} />
            <h4 style={{margin: '20px 0'}}>Next Days</h4>
            <Slider data={weather.forecast} isLoading={isLoading}/>
        </>
    )
}

export default Weather