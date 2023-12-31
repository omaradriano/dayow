import { useEffect, useState } from "react"
import Slider from "./Slider.jsx"
import Card from "./Card.jsx"
import saveFetchedData from "../utils/saveFetchedData.js"
import getPosition from "../utils/getPosition.js"

const apikey = 'd12a4203bb8343b6b70235323232110' //⬅️Api key | Falta buscar la manera de no hacerla pública

const Weather = () => {
    const [weather, setWeather] = useState({})
    const [isLoading, setIsLoading] = useState(true) //📝Hook que establece si los datos están cargando | hay que agregar una vista de carga
    useEffect(() => {
        getPosition()
            .then(res => {
                const { lat, lon } = res
                fetch(`http://api.weatherapi.com/v1/forecast.json?key=${apikey}&q=${lat},${lon}&lang=es&days=3`) //Falta gregar un componente (Select) para elegir la ubicación
                    .then(res => {
                        // console.log(res)
                        return res.json() //⬅️Agregar si la respuesta además de ser OK, devuelve los datos correctos
                    })
                    .then(data => {
                        let weatherData = saveFetchedData(data)
                        setWeather(weatherData)
                        setIsLoading(false)
                    })
                    .catch(e => {
                        console.log(e)
                        console.log('Intento de fetch con datos fallido')
                    })
            })
            .catch(e => {
                console.log(e)
                console.log('Intento de fetch con datos fallido')
            })

    }, [])

    return (
        <>
            <Card data={weather} isLoading={isLoading} />
            {!isLoading ? <h4 id="nextdays" style={{ margin: '20px 0' }}>Next Days</h4> : ''}
            <Slider data={weather.forecast} isLoading={isLoading} />
        </>
    )
}

export default Weather