const Icon = ({icon='', className='material-icons', customIconClassName=''}) => {
    //📝 Agregar una customIconClassName es opcional, se usa cuando necesita ajustarse la posición
    let style = `${className} ${customIconClassName}`
    return(
        <span className={style}>{icon}</span>
    )
}

export default Icon