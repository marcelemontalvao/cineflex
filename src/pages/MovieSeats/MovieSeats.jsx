import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api.js"
import PageTitle from "../../components/TitlePage/TitlePage.jsx";
import { SeatsContainer, SeatStyle, FooterContainer, DivSeats, CaptionsDiv, CaptionDiv, FormContainer} from './MovieSeatsStyle.js';
import Seat from '../../components/Seat/Seat.jsx';

const MovieSeats = () => {
    const {idSeat} = useParams()
    const [seats, setSeats] = useState([]);
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedSeats, setSelectedSeats] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")
    const [objectOrder, setObjectOrder] = useState({})

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
                        {seats.map((seat, index) => <Seat seat={seat} key={index}/>)}
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
                <FormContainer>
                    <label>
                        <span>Nome do comprador:</span>
                        <input data-test="client-name"  type="text" placeholder='Digite seu nome...' />
                    </label>
                    <label>
                        <span>CPF do comprador:</span>
                        <input data-test="client-cpf" type="text" placeholder='Digite seu CPF...' />
                    </label>
                    <button data-test="book-seat-btn">Reservar assento(s)</button>
                </FormContainer>
                <FooterContainer data-test="footer">
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