import { FooterContainer } from "./FooterStyles"

const Footer = ({infoMovie}) => {
    return (
        <FooterContainer>
            <img src={infoMovie.posterURL} alt={infoMovie.title} />
            <h1>{infoMovie.title}</h1>
        </FooterContainer>
    )
}

export default Footer