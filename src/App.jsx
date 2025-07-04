import './css/App.css'
import MovieCard from "./components/MovieCard.jsx";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites.jsx";
import {Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";

function App() {
    return (
        <div>
            <NavBar/>
            <main className="Main-Content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
        </div>

    )
}
export default App;