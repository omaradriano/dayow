import Title from "./components/Title.jsx"
import Card from "./components/Card.jsx"

import './css/custom.css'

let msg = 'Day OW'

const App = () => {
    return (
        <>
            <Title className="title" text = {msg} />
            <Card />
        </>
    )
}

export default App