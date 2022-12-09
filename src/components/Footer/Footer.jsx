import { FooterContainer } from "./FooterStyles.js"

const Footer = ({isMovieSeats, infoMovieFooter, weekday}) => {
    return (
        <>
             { isMovieSeats 
                ? 
                    <FooterContainer>
                        <img src={infoMovieFooter.posterURL} alt={infoMovieFooter.title} /> 
                        <div>
                            <h1>{infoMovieFooter.title}</h1>
                            <span>{weekday.day.weekday} - {weekday.name}</span>
                        </div>
                    </FooterContainer> 
                :
                    <FooterContainer>
                        <img src={infoMovieFooter.posterURL} alt={infoMovieFooter.title} /> 
                        <h1>{infoMovieFooter.title}</h1>
                    </FooterContainer> 
            } 
        </>
    )
}

export default Footer