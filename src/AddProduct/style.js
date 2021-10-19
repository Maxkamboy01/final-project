import styled from "styled-components";

export const AddProductWrapper = styled.div `
    width: 84%;
    margin-left: auto;
    background-color: #FAFAFA;
    padding: 30px;
`;

export const AddProductTitle = styled.p `
    font-size: 22px;
    font-weight: bold;
`;

export const AddProductDiv = styled.div `
    width: 350px;
    display: flex;
    justify-content: space-between;
    margin: 20px 0 35px 0;
    font-size: 15px;
    font-weight: bold;
    .grey{
        color: #A9B1BB;
    }
`;

export const AddProductDiv1 = styled.div `
    width: 60%;
    padding: 20px;
    border-radius: 15px;
    background-color: white;
    border: 1px solid #F0F1F3;
    box-shadow: 3px 3px 3px 5px #F0F1F3;
    small{
        font-weight: bold;
        color: #7E8993;
    }
    p{
        font-weight: bold;
    }
    .line{
        width: 100%;
        height: 40px;
        border: 2px solid #E1E4E8;
        margin-top: 15px;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
    }
`;

export const AddProductBox = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const AddProductInput = styled.input `
    width: 100%;
    height: 50px;
    padding-left: 15px;
    font-size: 15px;
    border-radius: 10px;
    border: 2px solid #E1E4E8;
    margin-bottom: 25px;
`;

export const AddProductInput1 = styled.textarea `
    width: 100%;
    height: 170px;
    padding: 15px;
    font-size: 15px;
    color: #E1E4E8;
    border-radius: 0 0 10px 10px;
    color: #E1E4E8;
    border: 2px solid #E1E4E8;
    margin-bottom: 20px;
`;

export const AddProductFayl = styled.div `
    width: 100%;
    height: 200px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F6F8;
    border: 2px dashed #E1E4E8;
    border-radius: 10px;
    img{
        width: 210px;
        margin-right: 10px;
        height: auto;
        border-radius: 20px;
    }
`;

export const AddProductDiv2 = styled.div `
    width: 38%;
    button{
        width: 100%;
        height: 50px;
        background-color: #4CA85E;
        border: none;
        border-radius: 10px;
        color: white;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }
`;

export const AddProductWrapper1 = styled.div `
    padding: 20px;
    box-shadow: 3px 3px 3px 5px #F0F1F3;
    border-radius: 15px;
    border: 1px solid #F0F1F3;
    background-color: white;
    margin-bottom: 20px;
    small{
        font-weight: bold;
        color: #667380;
    }
    
`;

export const AddProductDiv3 = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .icon{
        font-size: 30px;
        margin-right: 10px;
        color: #4CA85E;
    }
    p{
        font-weight: bold;
        color: #464D55;
    }
`;

export const AddProductInputes = styled.div `
    display: flex;
    flex-direction: column;
    input{
        height: 50px;
        border-radius: 10px;
        padding: 10px;
        border: 2px solid #F0F1F3;
        font-size: 16px;
        margin-bottom: 20px;
    }
`;

export const AddProductInput5 = styled.div `
    display: flex;
    margin-bottom: 10px;
`;

export const AddProductInputBox = styled.div `
    display: flex;
    align-items: center;
    margin: 15px 0 20px 0;
    input{
        margin-right: 15px;
        color: red;
    }
    p{
        margin-right: 25px;
        font-weight: bold;
        color: #667380;
    }
`;

export const AddProductInputCategory = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

export const AddProductDiv4 = styled.div `
    position: relative;
    input{
        width: 100%;
        height: 55px;
        padding: 15px;
        font-size: 16px;
        color: black;
        font-weight: bold;
        border-radius: 10px;
        border: 2px solid #F0F1F3;
    }
    .icon{
        margin-left: -20px;
    }
    .category{
        width: fit-content;
        padding: 0 8px;
        position: absolute;
        top: -8px;
        left: 12px;
        background-color: white;
    }
`;