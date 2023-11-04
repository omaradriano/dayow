import iconsformat from "../utils/iconsFormat.js"
import Icon from "./Icon.jsx"
import PerHourCard from "./PerHourCard.jsx"

const Modal = ({ data, isLoading }) => {
    const { current, forecast } = data
    let perhourcard = forecast[0].perHour.map(elem => {
        return <PerHourCard key={elem.hour} data={elem} />
    })
    // console.log(perhourcard)
    if (!isLoading) {
        return <>
            <div className="modal fade" id="currentWeatherModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* Mostrar ubicación en el header del modal */}
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Clima para <b>{current.location}(Hoy)</b></h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body modal-body--custom">
                            <Icon
                                icon={iconsformat[current.condition]}
                                customIconClassName="weatherIcon weatherIcon__modal"
                            />
                            <div className="modal-body__perHour">
                                {/* <p>Hora a hora</p> */}
                                {/* ⬅️ Llenar con más información */}
                                {perhourcard}
                            </div>
                        </div>
                        {/* <div className="modal-footer modal-footer--custom">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    }

}

export default Modal