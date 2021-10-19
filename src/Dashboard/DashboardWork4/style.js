import styled from "styled-components";

export const DashboardWork4Wrapper = styled.div `
    margin-top: 25px;
`;

export const DashboardWork4Wrappers = styled.div `
    display: flex;
    justify-content: space-between;
`;

export const DashboardWork4Wrapper1 = styled.div `
    width: 670px;
    padding: 25px 20px;
    background-color: white;
    border-radius: 10px;
    .see-all{
        font-size: 12px;
        font-weight: bold;
        color: #6A7179;
        text-align: center;
    }
`;

export const DashboardWork4Div1 = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
    color: lightgrey;
    p{
        font-size: 17px;
        font-weight: bold;
        color: #525B65;
    }
`;

export const DashboardWork4Div2 = styled.div `
    display: flex;
    border-bottom: 1px solid lightgrey;
`;

export const DashboardWork4Div = styled.div `
    width: 20%;
    height: 30px;
    display: flex; 
    align-items: center;
    color: grey;
    p{
        font-size: 13px;
        font-weight: bold;
        margin-right: 5px;
    }
`;

export const DashboardWork4Card = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 18px;
`;

export const DashboardWork4Cards = styled.div `
    width: 20%;
    height: 40px;
    display: flex; 
    align-items: center;
    color: #6A7179;
    p{
        font-size: 12px;
        font-weight: bold;
    }
    img{
        width: 30px;
        height: auto;
        margin-right: 5px;
    }
    button{
        width: 100px;
        height: 30px;
        color: #f0ba68;
        background-color: #FFF8ED;
        border: none;
        border-radius: 15px;
        font-size: 12px;
        font-weight: bold;
    }
`;

export const DashboardWork4Card1=styled.div`
    width: 370px;
    background-color: white;
    border-radius: 15px;
    padding: 25px 0;
`;

/* color: ${Complete?"#F0BA68":Pending?"#6ECF95":Canceled?"#E9755A":""}; */
                                {/* {data.map((value) => (
            <HomeCard1>
                <HomeCardIcon1>
                    {value.socialMediaName==="facebook"?<i class="fab fa-facebook-square"/>:
                    value.socialMediaName==="twitter"?<i class="fab fa-twitter-square"></i>:
                    value.socialMediaName==="instagram"?<i class="fab fa-instagram-square"></i>
                    :value.socialMediaName==="youtube"?<i class="fab fa-youtube-square"></i>:""}
                </HomeCardIcon1>
                <p>{value.numberOfFollowers} <span>Fans</span> </p>
            </HomeCard1>
            ))} */}