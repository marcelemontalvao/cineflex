import styled from "styled-components";

export const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 23px;

    span {
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;
        color: #293845;
    }

    div {
        display: flex;
        gap: 8px;
    }
    
    button {
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        line-height: 21px;
        text-align: center;
        letter-spacing: 0.02em;
        color: #FFFFFF;
        cursor: pointer;
    }
`