import Title from "./components/titles.jsx"
import Card from "./components/card.jsx"

import './css/custom.css'

let msg = 'El nuevo texto agregado'

const App = () => {
    return (
        <>
            <Title className="title" text = {msg} />
            <Card />
        </>
    )
}

export default App