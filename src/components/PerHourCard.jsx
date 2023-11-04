import iconsformat from "../utils/iconsFormat.js"
import Icon from "./Icon.jsx"

const PerHourCard = ({ data }) => {
    // console.log(data)
    return (
        <>
            <div className="perHourCard">
                <div className="perHourCard__1stLine">
                    <b>{data.hour}</b>|
                    <Icon icon='ac_unit' />
                    <p>{data.temp}</p>|
                    <Icon icon={iconsformat[data.condition]} />
                </div>
                <div className="perHourCard__2ndLine">
                    <Icon icon='air' />
                    <p>{data.wind}kph</p>|
                    <Icon icon='settings_accessibility'/>
                    <p>{data.feelslike}</p>|
                    <Icon icon='navigation' />
                    <p>{data.dir}</p>
                </div>
            </div>
        </>
    )
}

export default PerHourCard