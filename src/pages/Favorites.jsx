import "../css/Favorites.css"
import MovieCard from "../components/MovieCard.jsx";
import {useMovieContext} from "../contexts/MovieContext";

function Favorites() {
    const favorites = useMovieContext();
    if(!favorites){
        return <div className="movies-grid">
            {favorites.map((movie)=>(
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    }
    return (
        <div className="favorites">
            <h2> Your Favorites</h2>
        <div className="favorites-empty">
            <h2>No Favorites Movies Yet</h2>
            <p> Start adding movies</p>
        </div>
        </div>
    )
}
export default Favorites