import { useNavigate } from "react-router-dom"
import TitlePage from "../../components/TitlePage/TitlePage"
import { InfoMovie, ButtonToInitialPage } from "./SucessPageStyle"

const SucessPage = ({infoMovie, setInfoMovie, selectedSeats, setSelectedSeats, name, setName, cpf, setCpf, response, setResponse}) => {
    const navigate = useNavigate()

    const goToHome = () => {
        setInfoMovie([])
        setSelectedSeats([])
        setName("")
        setCpf("")
        setResponse([])
        navigate("/")
    }

    return (
        <>
            <TitlePage title={"Pedido feito com sucesso!"} fontWeight={"fontWeight"} color={"color"} />
            <InfoMovie  data-test="movie-info">
                <span>Filme e sessão</span>
                <p>{infoMovie.title}</p>
                <p>{response.day.weekday} - {response.name}</p>
            </InfoMovie>
            <InfoMovie  data-test="seats-info">
                <span>Ingressos</span>
                {selectedSeats.map(seat => <p>Assento {seat}</p>)}
            </InfoMovie>
            <InfoMovie  data-test="client-info">
                <span>Comprador</span>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </InfoMovie>
            <ButtonToInitialPage>
                <button data-test="go-home-btn" onClick={() => goToHome()}>Voltar para Home</button>
            </ButtonToInitialPage>
        </>
    )
}

export default SucessPage