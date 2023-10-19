//Este documento va a ser el entrypoint a webpack
import {createRoot} from "react-dom/client";

import App from './App.js'
import { StrictMode } from "react";

// const container = document.getElementById('root');
// const root = createRoot(container); 

// root.render(<App/>)

createRoot(document.getElementById('root')).render(
    <App/>
)