import styled from "styled-components";

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

    h1 {
        font-size: 26px;
        line-height: 30px;
        display: flex;
        align-items: center;
        color: #293845;
    }
`