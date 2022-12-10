import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api.js"
import PageTitle from "../../components/TitlePage/TitlePage.jsx";
import { SeatsContainer, SeatStyle, FooterContainer, DivSeats, CaptionsDiv, CaptionDiv, InputsContainer} from './MovieSeatsStyle.js';

const MovieSeats = () => {
    const {idSeat} = useParams()
    const [seats, setSeats] = useState([]);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(()=> {
        async function getSeats() {
            try {
                const data = await api.get(`/showtimes/${idSeat}/seats`)
                setSeats(data.data.seats)
                setResponse(data.data)
                setLoading(false)
            } catch (error) {
                console.log("Erro:" + error)
            }
        }
        getSeats()
    }, [idSeat])

    if(loading){
        return (<h1>Carregando</h1>)
    } else {
        return (
            <>
                <PageTitle title={"Selecione o(s) assento(s)"} />
                <SeatsContainer>
                    <DivSeats>
                        {seats.map((seat, index) => <SeatStyle isAvailable={seat.isAvailable} key={index}>{seat.name}</SeatStyle>
                        )}
                    </DivSeats>
                    <CaptionsDiv>
                        <span>
                            <CaptionDiv isSelected={true} isAvailable={false}></CaptionDiv>
                            <p>Selecionado</p>
                        </span>
                        <span >
                            <CaptionDiv isSelected={false} isAvailable={true}></CaptionDiv>
                            <p>Disponível</p>
                        </span>
                        <span >
                            <CaptionDiv isSelected={false} isAvailable={false}></CaptionDiv>
                            <p>Indisponível</p>
                        </span>
                    </CaptionsDiv>
                </SeatsContainer> 
                <InputsContainer>
                    <label>
                        <span>Nome do comprador:</span>
                        <input type="text" placeholder='Digite seu nome...' />
                    </label>
                    <label>
                        <span>CPF do comprador:</span>
                        <input type="text" placeholder='Digite seu CPF...' />
                    </label>
                    <button>Reservar assento(s)</button>
                </InputsContainer>
                <FooterContainer>
                    <img src={response.movie.posterURL} alt={response.movie.title} /> 
                    <div>
                        <h1>{response.movie.title}</h1>
                        <span>{response.day.weekday} - {response.name}</span>
                    </div>
                </FooterContainer> 
             </>
        )
    }
}

export default MovieSeats;