import { useEffect, useState } from "react"
import Slider from "./Slider.jsx"
import Card from "./Card.jsx"

const apikey = 'd12a4203bb8343b6b70235323232110' //⬅️Api key | Falta buscar la manera de no hacerla pública

const Weather = () => {

    //Pendiente acomodar el código para pasarle la petición de datos a la card y al slider

    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true) //Hook que establece si los datos están cargando | hay que agregar una vista de carga
    useEffect(() => {
        fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=chihuahua&lang=es`) //Falta gregar un componente (Select) para elegir la ubicación
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
                    forecast: {

                    }
                }
                setWeather(weatherData)
                setIsLoading(false)
            })
            .catch(() => {
                console.log('Ha habido un error al traer los datos')
            })
    }, [])

    return (
        <Card data={weather} isLoading={isLoading} />
    )
}

export default Weather