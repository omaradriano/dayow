export default function (data) {
    return {
        current: {
            location: `${data.location.name}, ${data.location.region}`,
            temp: data.current.temp_c,
            wind: data.current.wind_kph,
            humidity: data.current.humidity,
            condition: data.current.condition.text,
            wind_direction: data.current.wind_dir
        },
        forecast: data.forecast.forecastday.map((elem, index, arr) => {
            return {
                date:elem.date,
                min_temp:elem.day.mintemp_c,
                max_temp:elem.day.maxtemp_c,
                avg_temp:elem.day.avgtemp_c,
                condition:elem.day.condition.text,
                perHour: elem.hour.map(elem => {
                    return {
                        hour: elem.time.substring(11,),
                        condition: elem.condition.text,
                        temp: elem.temp_c,
                        wind: elem.wind_kph,
                        dir: elem.wind_dir,
                        feelslike: elem.feelslike_c
                    }
                })
            }
        })
    }
}
