import Title from "./components/Title.jsx"
import Weather from "./components/Weather.jsx";
// import Card from './components/card.jsx'

import './css/custom.css'

let msg = 'Day of week'

const App = () => {
    return (
        <>
            <Title className="title" text={msg} />
            <Weather/>

        </>
    )
}

export default App