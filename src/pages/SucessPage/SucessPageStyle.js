import styled from "styled-components";

export const InfoMovie = styled.div`
    letter-spacing: 0.04em;
    color: #293845;
    margin: 0 0 28px 28px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    span {
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }

    p {
        font-size: 22px;
        line-height: 26px;  
    }
`

export const ButtonToInitialPage = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 72px;

    button {
        width: 225px;
        height: 42px;
        background-color: #E8833A;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        border: none;
    }
    
`