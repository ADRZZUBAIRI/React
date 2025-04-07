import './App.css'
import Home from "./pages/Home.jsx";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

    return (
        <BrowserRouter>
            <div className="vitepractice">
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
