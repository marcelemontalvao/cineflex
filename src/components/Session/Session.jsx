import { SessionContainer } from "./SessionStyles"
import { Link } from "react-router-dom"

const Session = ({session, setIsMovieSeats}) => {
    return (
        <SessionContainer data-test="movie-day">
            <span>{session.weekday} - {session.date}</span>
            <div>
                <Link to={`/assentos/${session.showtimes[0].id}`}>
                    <button data-test="showtime" onClick={() => setIsMovieSeats(true)}>{session.showtimes[0].name}</button>
                </Link>
                <Link to={`/assentos/${session.showtimes[1].id}`}>
                    <button data-test="showtime" onClick={() => setIsMovieSeats(true)}>{session.showtimes[1].name}</button>
                </Link>
            </div>
        </SessionContainer>
    )
}

export default Session;