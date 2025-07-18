import './css/App.css'
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import {MovieProvider} from "./contexts/MovieContext.jsx";

function App() {
    return (
        <MovieProvider>
            <NavBar/>
            <main className="Main-Content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
        </MovieProvider>

    )
}
export default App;