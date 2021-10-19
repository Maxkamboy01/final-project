import styled from "styled-components";

export const HistoryWrapper = styled.div `
    width: 84%;
    margin-left: auto;
    background-color: #FAFAFA;
    padding: 30px;
`;

export const HistoryWrapper1 = styled.div `
    width: 312px;
    display: flex;
    border: 1px solid lightgray;
    border-radius: 5px;
    input{
        font-weight: bold;
        border: none;
        padding: 10px;
    }
    .icon{
        font-size: 22px;
        margin-left: -20px;
        margin-top: 7px;
    }
`;

export const HistoryDiv = styled.div `
    padding: 10px 12px;
    font-weight: bold;
    background-color: lightgray;
`;

export const HistoryWrappers = styled.div `
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .icon{
        width: 300px;
        margin: auto;
        padding: 25px;
        border-radius: 50%;
        /* box-shadow: 5px 5px 5px 5px lightgray; */
        /* border: 1px solid lightgray; */
        text-align: center;
        font-size: 100px;
        margin-bottom: 35px;
    }
`;

export const HistoryWrapper2 = styled.div `
    width: 31%;
    border: 2px solid lightgray;
    margin-top: 30px;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 3px 3px 3px 3px lightgray;
`;

export const HistoryCard = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    p{
        font-size: 16px;
        font-weight: bold;
        span{
            font-size: 14px;
            color: red;
        }
    }
`;

export const HistoryCard1 = styled.div `
    display: flex;
    font-size: 15px;
    font-weight: bold;
    margin-bottom: 15px;
    border-bottom: 1px solid lightgray;
`;

export const HistoryCard2 = styled.div `
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    font-weight: bold;
    margin-top: 20px;
    span{
        font-size: 13px;
        font-weight: bold;
        color: red;
    }
`;