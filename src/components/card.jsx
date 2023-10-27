import { useState, useEffect } from 'react';
import Button from './Button.jsx'
import Icon from './Icon.jsx';

const Card = ({ data, isLoading = true }) => {

    console.log(data)

    return (
        <section className="card">
            {isLoading ?
                <Icon icon='sync' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                :
                <Icon icon='light_mode' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
            }
            <div className='weatherInfo'>
                <p className="weatherInfo__grades">{isLoading ? 'Loading' : data.current.temp}°</p>
                <p className="weatherInfo__location">{isLoading ? 'Loading' : data.current.location}</p>
                <p className="weatherInfo__state">{isLoading ? 'Loading' : data.current.condition}</p>
            </div>
            <div className="weatherStadistics">
                <div className="weatherStadistics__left">
                    <p>Viento</p>
                    <p>Humedad</p>
                </div>
                <div className="weatherStadistics__right">
                    <p>{isLoading ? 'Loading' : data.current.wind_direction} {isLoading ? 'Loading' : data.current.wind} KPH</p>
                    <p>{isLoading ? 'Loading' : data.current.humidity}%</p>
                </div>
                <Button text='Detalles' customClassName='btn__weatherDetails'></Button>
            </div>
        </section>
    )
}
export default Card