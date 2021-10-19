import styled from "styled-components";

export const OrderWrapper = styled.div `
    width: 84%;
    margin-left: auto;
    background-color: #FAFAFA;
    padding: 30px;
`;

export const OrderWork = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

export const OrderWorkText = styled.div `
    font-size: 22px;
    font-weight: bold;
    small{
        font-size: 12px;
        color: #787F86;
    }
`;

export const OrderWork1 = styled.div `
    display: flex;
    border-radius: 10px;
    font-size: 12px;
    padding: 13px;
    color: #DBF4FE;
    background-color: #45A5FF;
    cursor: pointer;
    p{
        margin: 0 10px;
    }
    &:hover{
            background-color: #DBF4FE;
            color: #45A5FF;
            transition-duration: .5s;
        }
`;

export const OrderWork2 = styled.div `
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    p{
        font-size: 15px;
        font-weight: bold;
        color: #787F86;
        &:hover{
            transition-duration: .5s;
            color: #45A5FF;
            border-bottom: 2px solid #45A5FF;
            cursor: pointer;
        }
    }
    .all-orders{
        color: #45A5FF;
        border-bottom: 2px solid #45A5FF;
    }
`;

export const OrderWorkCards = styled.div `
    height: 45px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid lightgrey;
    margin-bottom: 10px;
`;

export const OrderWorkCards1 = styled.div `
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: bold;
    color: #787F86;
    img{
        width: 25px;
        height: auto;
        margin-right: 10px;
    }
    .card-icon{
        font-size: 18px;
        color: white;
        background-color: #5CECA4;
        border-radius: 50%;
        padding: 10px;
        cursor: pointer;
        &:hover{
            background-color: #DBF4FE;
            color: #45A5FF;
            transition-duration: .5s;
        }
    }
`;

export const OrderWorks=styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
    button{
        padding: 13px 18px;
        margin-left: 13px;
        background-color: transparent;
        border: 1px solid lightgray;
        border-radius: 10px;
        font-size: 12px;
        font-weight: bold;
        color: #787F86;
    }
    .order-button{
        background-color: white;
    }
    .order-button1{
        background-color: #45A5FF;
        color: white;
    }
`;