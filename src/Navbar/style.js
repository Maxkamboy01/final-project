import styled from "styled-components";

export const NavbarWrapper = styled.nav `
    width: 84%;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 30px;
    margin-left: auto;
    input{
        width: 350px;
        height: 40px;
        padding: 10px;
        color: lightgray;
        border-radius: 15px;
        outline: none;
        border: none;
        background-color: #FAFAFA;
    }
`;

export const NavbarWrapper1 = styled.nav `
    display: flex;
    align-items: center;
    p{
        width: 110px;
        text-align: center;
    }
`;

export const Navbarimg = styled.img `
    width: 30px;
    height: 30px;
    object-fit: cover;
    margin-left: 20px;
    border-radius: 10px;
`;