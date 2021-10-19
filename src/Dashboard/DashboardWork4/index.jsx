import React from 'react';
import DashboardCardImg from '../../Assets/Images/snikers.jpg';
import DashboardCardImg1 from '../../Assets/Images/headphones.jpg';
import DashboardCardImg2 from '../../Assets/Images/phone.jpg';
import { ApexChart } from '../DashboardChart';
import { DashboardWork4Card, DashboardWork4Card1, DashboardWork4Cards, DashboardWork4Div, DashboardWork4Div1, DashboardWork4Div2, DashboardWork4Wrapper, DashboardWork4Wrapper1, DashboardWork4Wrappers } from './style';

function DashboardWork4() {

    const card = [
        {
            text: "Order ID",
            icon: <i className="fas fa-caret-down"></i>
        },
        {
            text: "Product",
            icon: <i className="fas fa-caret-down"></i>
        },
        {
            text: "Date",
            icon: <i className="fas fa-caret-down"></i>
        },
        {
            text: "Price",
            icon: <i className="fas fa-caret-down"></i>
        },
        {
            text: "Status",
            icon: <i className="fas fa-caret-down"></i>
        },
    ]

    const proCard = [
        {
            text: "#78522135",
            img: DashboardCardImg,
            text1: "Nike Air Max",
            text2: "31/03/2021",
            text3: "$250.00",
            name: "Complete",
        },
        {
            text: "#78522135",
            img: DashboardCardImg1,
            text1: "Headphones",
            text2: "31/03/2021",
            text3: "$250.00",
            name: "Pending",
        },
        {
            text: "#78522135",
            img: DashboardCardImg2,
            text1: "iPhone Pro",
            text2: "31/03/2021",
            text3: "$250.00",
            name: "Canceled",
        },
    ]

    return (
        <DashboardWork4Wrapper>
            <DashboardWork4Wrappers>
                <DashboardWork4Wrapper1>
                    <DashboardWork4Div1>
                        <p>Recent Orders</p>
                        <div><i className="fas fa-ellipsis-v"></i></div>
                    </DashboardWork4Div1>
                    <DashboardWork4Div2>
                        {card?.map(({ text, icon }) => (
                            <DashboardWork4Div>
                                <p>{text}</p>
                                <div>{icon}</div>
                            </DashboardWork4Div>
                        ))}
                    </DashboardWork4Div2>
                    {proCard?.map(({ text, img, text1, text2, text3, name }) => (
                        <DashboardWork4Card>
                            <DashboardWork4Cards>
                                <p>{text}</p>
                            </DashboardWork4Cards>
                            <DashboardWork4Cards style={{ width: "30%" }}>
                                <img src={img} alt="#" />
                                <p>{text1}</p>
                            </DashboardWork4Cards>
                            <DashboardWork4Cards>
                                <p>{text2}</p>
                            </DashboardWork4Cards>
                            <DashboardWork4Cards>
                                <p>{text3}</p>
                            </DashboardWork4Cards>
                            <DashboardWork4Cards>
                                <button>{name === "Complete" ? "Salom" : name === "Pending" ? "Qalisan" : name === "Canceled" ? "Hayr" : ""}</button>
                            </DashboardWork4Cards>
                        </DashboardWork4Card>
                    ))}
                    <p className="see-all">See all</p>
                </DashboardWork4Wrapper1>
                <DashboardWork4Card1>
                    <ApexChart/>         
                </DashboardWork4Card1>
            </DashboardWork4Wrappers>
        </DashboardWork4Wrapper>
    )
}

export default DashboardWork4;
