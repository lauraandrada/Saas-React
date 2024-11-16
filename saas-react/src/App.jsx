import './App.css'
// import LoginPage from './components/LoginPage'
import HomePage from "./components/HomePage.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./components/LoginPage.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar></Navbar>
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App
