import styled from "styled-components";

export const TitlePageContainer = styled.div`
    width: 100%;
    height: 110px;

    span {
        font-size: 24px;
        line-height: 28px;
        font-weight: ${(props) => props.fontWeight ? 700 : 400};
        display: flex;
        justify-content: center;
        align-items: center;
        letter-spacing: 0.04em;
        color: ${(props) => props.color ? '#247A6B' : '#293845'};
        height: 100%;
    }
   
`