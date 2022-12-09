import { SessionContainer } from "./SessionStyles"
import { Link } from "react-router-dom"

const Session = (session) => {
    return (
        <SessionContainer>
            <span>{session.session.weekday} - {session.session.date}</span>
            <div>
                <Link to={`/assentos/${session.session.showtimes[0].id}`}>
                    <button>{session.session.showtimes[0].name}</button>
                </Link>
                <Link to={`/assentos/${session.session.showtimes[1].id}`}>
                    <button>{session.session.showtimes[1].name}</button>
                </Link>
            </div>
        </SessionContainer>
    )
}

export default Session