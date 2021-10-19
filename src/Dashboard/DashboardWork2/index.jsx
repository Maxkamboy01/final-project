import React from 'react'
import { DashboartWork2Div, DashboartWork2Icon, DashboartWork2Icon1, DashboartWork2Text, DashboartWork2Text1, DashboartWork2Wrapper, DashboartWork2Wrapper1, DashboartWork2Wrapper2 } from './style';

function DashboardWork2() {

    const dash = [
        {
            icon: <i className="fas fa-receipt"></i>,
            money: "$25,255.00",
            text: "Today Sales",
            icon1: <i className="fas fa-external-link-square-alt"></i>,
            price: "+35%"
        },
        {
            icon: <i className="fas fa-hand-holding-usd"></i>,
            money: "$1255.00",
            text: "Today Expenses",
            icon1: <i className="fas fa-external-link-square-alt"></i>,
            price: "+10%"
        },
        {
            icon: <i className="fas fa-users"></i>,
            money: "5355",
            text: "Today Visitors",
            icon1: <i className="fas fa-external-link-square-alt"></i>,
            price: "+15%"
        },
        {
            icon: <i className="fas fa-shopping-cart"></i>,
            money: "500",
            text: "Today Orders",
            icon1: <i className="fas fa-external-link-square-alt"></i>,
            price: "+17%"
        },
    ]

    return (
        <DashboartWork2Wrapper>
            {dash.map(({ icon, money, text, icon1, price }) => (
                <DashboartWork2Wrapper1>
                    <DashboartWork2Icon>{icon}</DashboartWork2Icon>
                    <DashboartWork2Text>{money}</DashboartWork2Text>
                    <DashboartWork2Wrapper2>
                        <DashboartWork2Text1>{text}</DashboartWork2Text1>
                        <DashboartWork2Div>
                            <DashboartWork2Icon1>{icon1}</DashboartWork2Icon1>
                            <p>{price}</p>
                        </DashboartWork2Div>
                    </DashboartWork2Wrapper2>
                </DashboartWork2Wrapper1>
            ))}

        </DashboartWork2Wrapper>
    )
}

export default DashboardWork2;
