import styled from "styled-components";

export const SeatStyle = styled.div`
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.isSelected ? "#1AAE9E" : props.isAvailable ? "#C3CFD9" : "#FBE192"};     border: 1px solid #808F9D;
    border-radius: 50%;   
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    cursor: ${(props) => props.isAvailable ? "pointer" : props.isSelected ? "pointer" : "default"};
`