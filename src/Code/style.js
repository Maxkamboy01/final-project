import styled from "styled-components";

export const LogOutButton = styled.div `
    width: fit-content;
    display: flex;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;
    border-radius: 15px;
    cursor: pointer;
    color: red;
    position: absolute;
    left: 10px;
    top: -60px;
    .footer-icon{
        margin-right: 10px;
    }
    &:hover{
        color: #45A5FF;
        background-color: #EDF6FF;
        transition-duration: .3s;
    }
`;

export const CodeWrapper=styled.div`
    width: fit-content;
    display: flex;
    margin: auto;
    background-color: lightgray;
    padding: 50px;
    input{
        width: 300px;
        height: 40px;
        padding-left: 15px;
        margin-bottom: 20px;
    }
    .input{
        width: fit-content;
        padding: 0 20px;
    }
`;