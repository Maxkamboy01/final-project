import React from 'react';
import OrderCardImg from '../Assets/Images/smart-watch.png'
import OrderCardImg1 from '../Assets/Images/headphones.jpg'
import OrderCardImg2 from '../Assets/Images/phone.jpg'
import OrderCardImg3 from '../Assets/Images/airpods.jfif'
import OrderCardImg4 from '../Assets/Images/snikers.jpg'
import OrderCardImg5 from '../Assets/Images/girls-bag.jpg'
import OrderCardImg6 from '../Assets/Images/camera.jpg'
import OrderCardImg7 from '../Assets/Images/apple-watch.jfif'
import OrderCardImg8 from '../Assets/Images/alexa-box.jpg'
import OrderCardImg9 from '../Assets/Images/macbook.jfif'
import { OrderWorks, OrderWork, OrderWork1, OrderWork2, OrderWorkCards, OrderWorkCards1, OrderWorkText, OrderWrapper } from '../Orders/style'

function Orders() {

    const card = [
        {
            number: 1,
            id: "#78522135",
            img: OrderCardImg,
            product: "Smart watch",
            address: "351 Shearwood Forest Drive",
            date: "20/03/2021",
            price: "$376.00"
        },
        {
            number: 2,
            id: "#78522135",
            img: OrderCardImg1,
            product: "Headphones",
            address: "6391 Elgin St. Celina",
            date: "21/03/2021",
            price: "$276.00"
        },
        {
            number: 3,
            id: "#78522135",
            img: OrderCardImg2,
            product: "iPhone Pro",
            address: "8502 Preston Rd. Inglewood",
            date: "01/04/2021",
            price: "$300.00"
        },
        {
            number: 4,
            id: "#78522135",
            img: OrderCardImg3,
            product: "Apple AirPods Pro",
            address: "4517 Washington Ave.Manchester",
            date: "01/04/2021",
            price: "$200.00"
        },
        {
            number: 5,
            id: "#78522135",
            img: OrderCardImg4,
            product: "Nike Air Max",
            address: "3891 Ranchview Dr. Richadson",
            date: "02/04/2021",
            price: "$100.00"
        },
        {
            number: 6,
            id: "#78522135",
            img: OrderCardImg5,
            product: "Girls Bag",
            address: "2972 Westheimer Rd. Santa Ana",
            date: "02/04/2021",
            price: "$76.00"
        },
        {
            number: 7,
            id: "#78522135",
            img: OrderCardImg6,
            product: "Canon 600d",
            address: "3517 W.Gray St. Utica",
            date: "03/04/2021",
            price: "$500.00"
        },
        {
            number: 8,
            id: "#78522135",
            img: OrderCardImg7,
            product: "Apple Watch",
            address: "4140 Parker Rd.Allentown",
            date: "07/04/2021",
            price: "$300.00"
        },
        {
            number: 9,
            id: "#78522135",
            img: OrderCardImg8,
            product: "Alexa Box",
            address: "2464 Royal Ln. Mesa",
            date: "09/04/2021",
            price: "$76.00"
        },
        {
            number: 10,
            id: "#78522135",
            img: OrderCardImg9,
            product: "Apple Macbook Air 13'",
            address: "3517 W. Gray St. Utica",
            date: "10/04/2021",
            price: "$600.00"
        },
    ]

    return (
        <OrderWrapper>
            <OrderWork>
                <div>
                    <OrderWorkText>Product <small>15 Products found</small></OrderWorkText>
                </div>
                <OrderWork1>
                    <div><i className="far fa-calendar-alt"></i></div>
                    <p>Mar - April,2021</p>
                    <div><i className="fas fa-chevron-down"></i></div>
                </OrderWork1>
            </OrderWork>
            <OrderWork2>
                <p className="all-orders">All orders</p>
                <p>Completed</p>
                <p>Panding</p>
                <p>Cancel</p>
            </OrderWork2>
            <OrderWorkCards>
                <OrderWorkCards1 style={{ width: "5%" }}>#</OrderWorkCards1>
                <OrderWorkCards1 style={{ width: "15%" }}>
                    <p>Order ID ▼</p>
                </OrderWorkCards1>
                <OrderWorkCards1 style={{ width: "25%" }}>
                    <p>Product Name ▼</p>
                </OrderWorkCards1>
                <OrderWorkCards1 style={{ width: "30%" }}>
                    <p>Address ▼</p>
                </OrderWorkCards1>
                <OrderWorkCards1 style={{ width: "20%" }}>
                    <p>Date ▼</p>
                </OrderWorkCards1>
                <OrderWorkCards1 style={{ width: "20%" }}>
                    <p>Price ▼</p>
                </OrderWorkCards1>
                <OrderWorkCards1 style={{ width: "20%" }}>
                    <p>Status ▼</p>
                </OrderWorkCards1>
            </OrderWorkCards>
            {card?.map(({ number, id, img, product, address, date, price }) => (
                <OrderWorkCards>
                    <OrderWorkCards1 style={{ width: "5%" }}>{number}</OrderWorkCards1>
                    <OrderWorkCards1 style={{ width: "15%" }}>
                        <p>{id}</p>
                    </OrderWorkCards1>
                    <OrderWorkCards1 style={{ width: "25%" }}>
                        <img src={img} alt="img" />
                        <p>{product}</p>
                    </OrderWorkCards1>
                    <OrderWorkCards1 style={{ width: "30%" }}>
                        <p>{address}</p>
                    </OrderWorkCards1>
                    <OrderWorkCards1 style={{ width: "20%" }}>
                        <p>{date}</p>
                    </OrderWorkCards1>
                    <OrderWorkCards1 style={{ width: "20%" }}>
                        <p>{price}</p>
                    </OrderWorkCards1>
                    <OrderWorkCards1 style={{ width: "20%" }}>
                        <div className="card-icon"><i class="fas fa-shopping-cart"></i></div>
                    </OrderWorkCards1>

                </OrderWorkCards>
            ))}
            <OrderWorks>
                <OrderWorkCards1>Showing 1 to 10 of 100 entries</OrderWorkCards1>
                <div>
                    <button className="order-button">Previous</button>
                    <button className="order-button1">1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>7</button>
                    <button className="order-button">Next</button>
                </div>
            </OrderWorks>
        </OrderWrapper>
    )
}

export default Orders;
