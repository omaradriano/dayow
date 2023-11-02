import { useState } from "react"

//📝 A los botones aún no se les ha dado funcionalidad

const Button = ({customClassName = '', text = '', data_bs_toggle='', data_bs_target='', action=()=>{return}}) => {
    let customClass = `btn ${customClassName}`

    const [like, updateLike] = useState(false) //📝useState con el que se va a manipular una variable like (booleana)

    return (
        <input 
            onClick={action} 
            type="button" 
            value={text} 
            className={customClass}
            data-bs-toggle={data_bs_toggle}
            data-bs-target={data_bs_target}/>
    )
}

export default Button