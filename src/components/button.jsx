import { useState } from "react"

const Button = (props) => {

    const [like, updateLike] = useState(false) //useState con el que se va a manipular una variable like (booleana)

    return (
        <input onClick={() => updateLike(!like)} type="button" className={
            like ? 'btn btn__liked' : 'btn btn__notLiked'
        } value={like ? 'Liked' : 'NO'} />
    )
}

export default Button