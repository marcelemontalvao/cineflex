import { FooterContainer } from "./FooterStyles.js"

const Footer = ({infoMovieFooter}) => {
    return (
        <>
            <FooterContainer data-test="footer">
                <img src={infoMovieFooter.posterURL} alt={infoMovieFooter.title} /> 
                <h1>{infoMovieFooter.title}</h1>
            </FooterContainer> 
            
        </>
    )
}

export default Footer