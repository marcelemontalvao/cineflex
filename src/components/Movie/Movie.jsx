import { MovieContainer } from "./MovieStyle.js"
import { Link } from "react-router-dom"

const Movie = ({movie}) => {
    return (
        <MovieContainer>
            <Link to={`/sessoes/${movie.id}`}>
                <img src={movie.posterURL} alt="" />
            </Link>
        </MovieContainer>
    )
}

export default Movie