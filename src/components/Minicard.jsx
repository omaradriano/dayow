import Icon from "./Icon.jsx"
import iconsformat from '../utils/iconsFormat.js';

//📝 Aquí se renderizan los datos de los días de clima siguientes

const Minicard = ({ data = '', isLoading = '' }) => {
    return (
        <>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        {data.date}
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {data.avg_temp}
                            <Icon icon={iconsformat[data.condition]} customIconClassName='accordion__icon'></Icon>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Minicard