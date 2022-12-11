import { MovieContainer } from "./MovieStyle.js"
import { Link } from "react-router-dom"

const Movie = ({movie, setIsMovieSeats}) => {
    return (
        <MovieContainer data-test="movie">
            <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} onClick={() => setIsMovieSeats(false)} alt="" />
            </Link>
        </MovieContainer>
    )
}

export default Movie