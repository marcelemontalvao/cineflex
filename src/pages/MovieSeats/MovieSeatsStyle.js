import styled from "styled-components";

export const SeatsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
    justify-content: center;
`

export const DivSeats = styled.div `
    width: 95%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 8px;
`

export const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => `${props.isAvailable}` ? "#C3CFD9" : "#FBE192"};
    border: 1px solid #808F9D;
    border-radius: 50%;   
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
`

export const FooterContainer = styled.footer`
    width: 100%;
    height: 117px;
    display: flex;
    align-items: center;
    gap: 15px;
    position: fixed;
    bottom: 0;
    left:0;
    background-color: #DFE6ED;
    border-top: 1px solid #9EADBA;

    img {
        width: 48px;
        height: 72px;
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        padding: 8px;
        margin-left: 10px;
    }

    h1, span {
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }
`

export const CaptionsDiv = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;

    span {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }

    p {
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;
    }
`

export const CaptionDiv = styled.div`
    width: 25px;
    height: 25px;
    background-color: ${(props) => props.isSelected ? "#1AAE9E" : props.isAvailable ? "#C3CFD9" : "#FBE192"}; 
    border: 1px solid ${(props) => props.isSelected ? "#0E7D71" : props.isAvailable ? "#7B8B99" : "#F7C52B"};
    border-radius: 17px; 
    cursor: ${(props) => props.isAvailable ? "pointer" : props.isSelected ? "pointer" : "default"}; ;
`

export const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 7px;
    margin-top: 41px;

    label {
        display: flex;
        flex-direction: column;
    }

    span {
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    input {
        width: 327px;
        height: 51px;
        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
    }

    input::placeholder {
        font-size: 18px;
        line-height: 21px;
        padding-left: 18px;
        color: #AFAFAF;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 50px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.04em;
        color: #FFFFFF;
        cursor: pointer;
    }
`