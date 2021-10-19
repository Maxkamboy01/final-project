import styled from "styled-components";

export const FooterWrapper = styled.div `
    width: 16%;
    padding: 50px 18px 0;
    position: fixed;
    top: 0;
    left: 0;
`;

export const FooterTitle = styled.p `
    font-size: 20px;
    padding: 0 0 50px 15px;
`;

export const FooterCard = styled.div `
    border: 1px solid lightgrey;
    width: 190px;
    display: flex;
    padding: 17px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    margin-bottom: 10px;
    color: #A0A4A7;
    .footer-icon{
        margin-right: 10px;
    }
    &:hover{
        color: #45A5FF;
        background-color: #EDF6FF;
        transition-duration: .3s;
    }
`;