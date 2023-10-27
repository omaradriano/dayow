import { useState } from "react"

//📝 A los botones aún no se les ha dado funcionalidad

const Button = ({customClassName = '', text = ''}) => {
    let customClass = `btn ${customClassName}`

    const [like, updateLike] = useState(false) //📝useState con el que se va a manipular una variable like (booleana)

    return (
        <input onClick={() => console.log('Un mensaje')} type="button" value={text} className={customClass}/>
    )
}

export default Button