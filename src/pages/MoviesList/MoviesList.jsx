import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { MoviesContainer } from "./MoviesListStyle.js"
import Movie from "../../components/Movie/Movie"
import TitlePage from "../../components/TitlePage/TitlePage"

const MoviesList = () => {
    const [allMovies, setAllMovies] = useState([])
    useEffect(()=> {
        async function getMovies() {
            try {
                const allMovies = await api.get('/movies')
                setAllMovies(allMovies.data)
            } catch (error) {
                console.error("Não foi possível completar a requisição")
            }
        }
        getMovies()
    }, [])    
    return (
        <>
            <TitlePage title={"Selecione o filme"} />
            <MoviesContainer>
                {allMovies.map((movie, index) => <Movie movie={movie} key={index}/>)}
            </MoviesContainer>
        </>
        
    )
}

export default MoviesList