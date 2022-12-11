import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api.js"
import TitlePage from "../../components/TitlePage/TitlePage.jsx";
import { SeatsContainer,FooterContainer, DivSeats, CaptionsDiv, CaptionDiv, FormContainer} from './MovieSeatsStyle.js';
import Seat from '../../components/Seat/Seat.jsx';

const MovieSeats = ({selectedSeats, setSelectedSeats, name, setName, cpf, setCpf, response, setResponse}) => {
    const {idSeat} = useParams();
    const [seats, setSeats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [objectOrder, setObjectOrder] = useState({});
    const navigate = useNavigate();

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
    }, [idSeat]);
    
    useEffect(()=> {    
        setObjectOrder({ids: selectedSeats, name: name, cpf: cpf})
    }, [cpf]);
    
    const reserveSeats = () => {
        
        async function postSeats() {
            try {
                await api.post('/seats/book-many', objectOrder);
                navigate("/sucesso");
            } catch (error) {
                console.log("Erro:" + error);
            }
        }
        postSeats();
    }

    if(loading){
        return (<h1>Carregando</h1>)
    } else {
        return (
            <>
                <TitlePage title={"Selecione o(s) assento(s)"} />
                <SeatsContainer>
                    <DivSeats>
                        {seats.map((seat, index) => <Seat seat={seat} key={index} setSelectedSeats={setSelectedSeats} selectedSeats={selectedSeats}/>)}
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
                        <span>
                            <CaptionDiv isSelected={false} isAvailable={false}></CaptionDiv>
                            <p>Indisponível</p>
                        </span>
                    </CaptionsDiv>
                </SeatsContainer> 
                <FormContainer>
                    <label htmlFor='name'>
                        <span>Nome do comprador:</span>
                        <input 
                            id='name' 
                            value={name} 
                            onChange={(e) => setName(e.target.value)} 
                            data-test="client-name" 
                            type="text" 
                            placeholder='Digite seu nome...' 
                            required 
                        />
                    </label>
                    <label htmlFor='cpf'>
                        <span>CPF do comprador:</span>
                        <input 
                            id='cpf' 
                            value={cpf} 
                            onChange={(e) => setCpf(e.target.value)}  
                            data-test="client-cpf" 
                            type="number" 
                            placeholder='Digite seu CPF...'
                            required 
                        />
                    </label>
                    <button onClick={() => reserveSeats()} type='submit' data-test="book-seat-btn">Reservar assento(s)</button>
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