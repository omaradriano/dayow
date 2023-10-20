import Button from './Button.jsx'

import Icon from './Icon.jsx';

const Card = () => {

    return (
        <section className="card">
            <Icon icon='light_mode' customIconClassName='weatherIcon weatherIcon__sunny'></Icon>
            <div className='weatherInfo'>
                <p className="weatherInfo__state">Sunny</p>
                <p className="weatherInfo__grades">22°</p>
                <p className="weatherInfo__location">Chihuahua,Chihuahua</p>
            </div>
            <div className="weatherStadistics">
                <div className="weatherStadistics__left">
                    <p>Wind</p>
                    <p>Humidity</p>
                </div>
                <div className="weatherStadistics__right">
                    <p>N 8 MPH</p>
                    <p>52%</p>
                </div>
            </div>
        </section>
    )
}
export default Card