import React from 'react';
import Zoom from 'react-reveal'
import { HistoryCard, HistoryCard1, HistoryCard2, HistoryDiv, HistoryWrapper, HistoryWrapper1, HistoryWrapper2, HistoryWrappers } from './style';

function History() {

    const cards = [
        {
            date: "04/09/2021",
            time: "22:00",
            pok: "5",
            total: "500.00 $"
        },
        {
            date: "05/09/2021",
            time: "21:00",
            pok: "7",
            total: "700.00 $"
        },
        {
            date: "06/09/2021",
            time: "17:00",
            pok: "9",
            total: "900.00 $"
        },
        {
            date: "07/09/2021",
            time: "15:00",
            pok: "11",
            total: "1400.00 $"
        },
        {
            date: "08/09/2021",
            time: "03:00",
            pok: "15",
            total: "1600.00 $"
        },
        {
            date: "09/09/2021",
            time: "09:00",
            pok: "17",
            total: "200.00 $"
        },
    ]

    const card = [
        {
            number: 1,
            product: "banan",
            num: "3",
            price: "5.000 $",
        },
        {
            number: 2,
            product: "orange",
            num: "5",
            price: "99.000 $",
        },
        {
            number: 3,
            product: "apple",
            num: "15",
            price: "71.000 $",
        },
        {
            number: 4,
            product: "grapes",
            num: "19",
            price: "731.000 $",
        },
    ]

    return (
        <HistoryWrapper>
            <HistoryWrapper1>
                <HistoryDiv>search date</HistoryDiv>
                <input type="text" placeholder="dd/mm/yyy" />
                <div className="icon"><i class="far fa-calendar"></i></div>
            </HistoryWrapper1>
            <HistoryWrappers>
                {cards?.map(({ date, time, pok, total }) => (
                    <HistoryWrapper2>
                        <Zoom> <div className="icon"><i class="fas fa-cart-arrow-down"></i></div></Zoom>
                        <div>
                            <HistoryCard>
                                <p>Date: <span>{date}</span></p>
                                <p>Time: <span>{time}</span></p>
                            </HistoryCard>
                            <HistoryCard1>
                                <div style={{ width: "10%" }}>#</div>
                                <div style={{ width: "30%" }}>Product</div>
                                <div style={{ width: "30%" }}>Num</div>
                                <div style={{ width: "30%" }}>Price</div>
                            </HistoryCard1>
                            {card?.map(({ number, product, num, price, }) => (
                                <HistoryCard1>
                                    <div style={{ width: "10%" }}>{number}</div>
                                    <div style={{ width: "30%" }}>{product}</div>
                                    <div style={{ width: "30%" }}>{num}</div>
                                    <div style={{ width: "30%" }}>{price}</div>
                                </HistoryCard1>
                            ))}
                            <HistoryCard2>
                                <div>Pok: <span>{pok}</span></div>
                                <div>Total: <span>{total}</span></div>
                            </HistoryCard2>
                        </div>
                    </HistoryWrapper2>
                ))}
            </HistoryWrappers>

        </HistoryWrapper>
    )
}

export default History;
