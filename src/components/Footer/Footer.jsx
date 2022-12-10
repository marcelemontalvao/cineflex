import { FooterContainer } from "./FooterStyles.js"

const Footer = ({isMovieSeats, infoMovieFooter, weekday}) => {
    return (
        <>
            <FooterContainer>
                <img src={infoMovieFooter.posterURL} alt={infoMovieFooter.title} /> 
                <h1>{infoMovieFooter.title}</h1>
            </FooterContainer> 
            
        </>
    )
}

export default Footer