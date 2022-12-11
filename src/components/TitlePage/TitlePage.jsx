import { TitlePageContainer } from "./TitlePageStyle"

const TitlePage = ({title, fontWeight, color}) => {
    return (
        <TitlePageContainer fontWeight={fontWeight} color={color}>
            <span>{title}</span>
        </TitlePageContainer>
    )
}

export default TitlePage