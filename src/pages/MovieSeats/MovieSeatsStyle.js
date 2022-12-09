import styled from "styled-components";

export const SeatsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 30px 0px;
    gap: 10px;
`

export const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => `${props.isAvailable}` ? "#C3CFD9" : "#FBE192"};
    border: 1px solid #808F9D;
    border-radius: 12px;    
`