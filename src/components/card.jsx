import { useState, useEffect } from 'react';
import Button from './Button.jsx'
import Icon from './Icon.jsx';
import iconsformat from '../utils/iconsFormat.js'; //📝 Trae información para poder renderizar correctamente el icono de material icons

const Card = ({ data, isLoading = true }) => {

    return (
        <section className="weathercard">
            {isLoading ?
                <Icon icon='sync' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                :
                //📝El ícono se elige de manera dinámica dependiendo del dato que devuelve data.condition
                <Icon icon={iconsformat[data.condition]} customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
            }
            <div className={`weatherInfo ${isLoading ? 'placeholder-glow' : ''}`}>
                <p className={`weatherInfo__grades ${isLoading ? 'placeholder col-3' : ''}`}>{isLoading ? '' : data.temp}°</p>
                <p className={`weatherInfo__location ${isLoading ? 'placeholder' : ''}`}>{isLoading ? 'Loading' : data.location}</p>
                <p className={`weatherInfo__state ${isLoading ? 'placeholder' : ''}`}>{isLoading ? 'Loading' : data.condition}</p>
            </div>
            <div className="weatherStadistics">
                <div className="weatherStadistics__left">
                    <p>Viento</p>
                    <p>Humedad</p>
                </div>
                <div className={`weatherStadistics__right ${isLoading ? 'placeholder-glow' : ''}`}>
                    <p className={isLoading ? 'placeholder' : ''}>{isLoading ? 'Loading' : data.wind_direction} {isLoading ? 'Loading' : data.wind} KPH</p>
                    <p className={isLoading ? 'placeholder' : ''}>{isLoading ? 'Loading' : data.humidity}%</p>
                </div>
                <Button text='Detalles' customClassName={`btn__weatherDetails ${isLoading ? 'placeholder' : ''}`}></Button>
            </div>
        </section>
    )
}
export default Card