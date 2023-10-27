import Icon from "./Icon.jsx"

const Minicard = ({ data = '', isLoading = '' }) => {

    console.log(data)
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
                            <Icon icon={'light_mode'} customIconClassName="accordion__icon"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Minicard