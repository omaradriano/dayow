import { useState, useEffect } from 'react';
import Button from './Button.jsx'
import Icon from './Icon.jsx';
import iconsformat from '../utils/iconsFormat.js'; //📝 Trae información para poder renderizar correctamente el icono de material icons
import Modal from './Modal.jsx';

const Card = ({ data, isLoading = true }) => {
    const {current, forecast} = data
    // console.log(forecast)
    return (
        <section className="weathercard">
            {isLoading ?
                <Icon icon='sync' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
                :
                //📝El ícono se elige de manera dinámica dependiendo del dato que devuelve current.condition
                <Icon icon={iconsformat[current.condition]} customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
            }
            <div className={`weatherInfo ${isLoading ? 'placeholder-glow' : ''}`}>
                <p className={`weatherInfo__grades ${isLoading ? 'placeholder col-3' : ''}`}>{isLoading ? '' : current.temp}°</p>
                <p className={`weatherInfo__location ${isLoading ? 'placeholder' : ''}`}>{isLoading ? 'Loading' : current.location}</p>
                <p className={`weatherInfo__state ${isLoading ? 'placeholder' : ''}`}>{isLoading ? 'Loading' : current.condition}</p>
            </div>
            <div className="weatherStadistics">
                <div className="weatherStadistics__left">
                    <p>Viento</p>
                    <p>Humedad</p>
                </div>
                <div className={`weatherStadistics__right ${isLoading ? 'placeholder-glow' : ''}`}>
                    <p className={isLoading ? 'placeholder' : ''}>{isLoading ? 'Loading' : current.wind_direction} {isLoading ? 'Loading' : current.wind} KPH</p>
                    <p className={isLoading ? 'placeholder' : ''}>{isLoading ? 'Loading' : current.humidity}%</p>
                </div>
                {
                    !isLoading ?
                        <Button
                            text='Detalles'
                            customClassName={`btn__weatherDetails ${isLoading ? 'placeholder' : ''}`}
                            data_bs_toggle='modal'
                            data_bs_target='#currentWeatherModal'
                        />
                    : ''
                }

            </div>
            {/* Boton para mostrar los detalles */}
            {/* {!isLoading ? <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Launch demo modal</button> : ''} */}
            {!isLoading ? <Modal data={data} isLoading={isLoading} /> : ''}

        </section>
    )
}
export default Card