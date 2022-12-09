import { SessionsContainer } from "./MoviePageStyle.js"
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { api } from "../../services/api.js"
import PageTitle from "../../components/TitlePage/TitlePage.jsx";
import Session from "../../components/Session/Session.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const MoviePage = () => {
    const {idMovie} = useParams()
    const [infoMovie, setInfoMovie] = useState([]);
    const [infoDaysMovie, setInfoDaysMovie] = useState([]);

    useEffect(()=> {
        async function getInfoMovie(idMovie) {
            try {
                const data = await api.get(`/movies/${idMovie}/showtimes`)
                setInfoMovie(data.data)
                setInfoDaysMovie(data.data.days)
            } catch (error) {
                console.log(error)
            }
        }
       getInfoMovie(idMovie)
    }, [idMovie])
    return (
        <>
            <PageTitle title={"Selecione o horário"} />
            <SessionsContainer>
                {
                infoDaysMovie.map((session, index) => <Session session={session} key={index} />)
                }
            </SessionsContainer>
            <Footer infoMovie={infoMovie} />
        </>
    )
}

export default MoviePage