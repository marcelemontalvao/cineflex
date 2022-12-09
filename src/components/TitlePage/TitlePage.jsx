import { TitlePageContainer } from "./TitlePageStyle"

const TitlePage = ({title}) => {
    return (
        <TitlePageContainer>
            <span>{title}</span>
        </TitlePageContainer>
    )
}

export default TitlePage