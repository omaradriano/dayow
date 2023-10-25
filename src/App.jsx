import Slider from "./components/Slider.jsx";
import Title from "./components/Title.jsx"
// import Card from './components/card.jsx'

import './css/custom.css'

let msg = 'Day OW'

const App = () => {

    return (
        <>
            <Title className="title" text={msg} />
            <Slider/>

        </>
    )
}

export default App