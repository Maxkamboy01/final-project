import styled from "styled-components";

export const CartWrapper = styled.div `
    width: 84%;
    margin-left: auto;
    background-color: #FAFAFA;
    padding: 30px;
    display: flex;
    justify-content: space-between;
`;

export const CartBox1 = styled.div `
    width: 65%;
    border-radius: 20px;
    background-color: white;
    padding: 40px 15px;
`;

export const CartWrapper1 = styled.div `
    display: flex;
    font-size: 14px;
    font-weight: bold;
    color: #313438;
    margin-bottom: 25px;
`;

export const CartWrapper2 = styled.div `
    display: flex;
    align-items: center;
    font-weight: bold;
    color: #313438;
    border: 1px solid lightgray;
    border-radius: 10px;
    padding: 20px 10px;
    margin-bottom: 20px;
`;

export const CartBox2 = styled.div `
    width: 33%;
`;

export const CartIcon = styled.div `
    width: 9%;
    border: 1px solid red;
    padding: 15px 20px;
    border-radius: 10px;
    color: red;
    &:hover{
        color: lime;
        cursor: pointer;
        border: 1px solid;
    }
`;

export const CartNumber = styled.div `
    width: 18%;
    p{
        width: 90px;
        border: 1px solid lightgray;
        padding: 15px 20px;
        border-radius: 10px;
    }
`;

export const CartImg = styled.div `
    width: 17%;
    img{
        width: 65px;
        height: 50px;
        border: 1px solid lightgray;
        border-radius: 10px;
        object-fit: cover;
    }
`;

export const CartBox = styled.div `
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const CardBoxText = styled.div `
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const CardDiv = styled.div `
    width: 170px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    p{
        font-size: 16px;
        font-weight: bold;
    }
    .card{
        width: 70px;
    }
`;

export const CartNextBox = styled.div `
    padding: 20px;
    border-radius: 20px;
    background-color: white;
`;

export const CartNextBox1 = styled.div `
    display: flex;
    align-items: center;
    input{
        padding: 13px;
        font-size: 16px;
        border-radius: 10px 0 0 10px;
        border: 1px solid #CFD4D9;
    }
    p{
        border: 1px solid #CFD4D9;
        background-color: #EDEDED;
        font-weight: bold;
        padding: 13px 18px;
        border-radius:  0 10px 10px 0;
    }
`;

export const CartNextBox2 = styled.div `
    p{
        font-size: 17px;
        font-weight: bold;
        margin: 15px 0;
        
    }
    textarea{
        width: 100%;
        height: 70px;
        border: 1px solid #CFD4D9;
        border-radius: 10px;
    }
`;

export const CartButton = styled.div `
    display: flex;
    margin-top: 20px;
    .all-b{
        margin-left: auto;
        background-color: #D8514B;
        color: white;
        font-weight: bold;
        padding: 15px 22px;
        font-size: 16px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        &:hover{
            background-color: #ED774D;
            transition-duration: .5s;
        }
    }
    .check-b{
        margin-left: 20px;
        background-color: #ED774D;
        color: white;
        font-weight: bold;
        padding: 15px 22px;
        font-size: 16px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        &:hover{
            background-color: #D8514B;
            transition-duration: .5s;
        }
    }
`;