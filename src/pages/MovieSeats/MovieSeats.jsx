import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api.js"
import PageTitle from "../../components/TitlePage/TitlePage.jsx";
import { SeatsContainer, SeatStyle } from './MovieSeatsStyle.js';

const MovieSeats = () => {
    const {idSeat} = useParams()
    const [seats, setSeats] = useState([]);
    const [response, setResponse] = useState([]);

    useEffect(()=> {
        async function getSeats() {
            try {
                const data = await api.get(`/showtimes/${idSeat}/seats`)
                setSeats(data.data.seats)
                setResponse(data.data)
            } catch (error) {
                console.log("Erro:" + error)
            }
        }
        getSeats()
    }, [idSeat])
    console.log(response)

    return (
        <>
            <PageTitle title={"Selecione o(s) assento(s)"} />
            <SeatsContainer>
                {seats.map((seat) => {
                   return <SeatStyle isAvailable={seat.isAvailable}>{seat.name}</SeatStyle>
                })}
            </SeatsContainer>
            {/* <Footer infoMovieFooter={seats.movie} weekday={seats} isMovieSeats={isMovieSeats} /> */}
        </>
    )
}

export default MovieSeats;