import MovieSelection from "./MovieSelection";
import TopMovies from "./TopMovies"
import "./style.css"
const componentName = "Home";
export default function () {
  return (
    <div className={componentName}>
      <div className="movie-top">
        <TopMovies></TopMovies>
      </div>
      <div className="text">
        Movie Selection
      </div>
      <div className="movie-selection">
        <MovieSelection></MovieSelection>
      </div>
    </div>
  )
}
