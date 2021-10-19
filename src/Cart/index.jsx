import React from 'react';
import CartImage from '../Assets/Images/hand-watch.jpg';
import CartImage1 from '../Assets/Images/toy-car.jpg';
import CartImage2 from '../Assets/Images/sunglasses.jpg';
import CartImage3 from '../Assets/Images/cake.jpg';
import { CartBox1, CartBox2, CartIcon, CartWrapper, CartWrapper1, CartWrapper2, CartNumber, CartImg, CardBoxText, CartNextBox, CartBox, CardDiv, CartNextBox1, CartNextBox2, CartButton } from './style';

function Cart() {

    const cart = [
        {
            photo: CartImage,
            name: "Digital clock",
            quantity: 1,
            price: "$1.190,90",
            total: "$1.190,90",
        },
        {
            photo: CartImage1,
            name: "Toy car",
            quantity: 1,
            price: "$139,58",
            total: "$139,58",
        },
        {
            photo: CartImage2,
            name: "Sunglasses",
            quantity: 2,
            price: "$50,90",
            total: "$101,80",
        },
        {
            photo: CartImage3,
            name: "Cake",
            quantity: 1,
            price: "$10,50",
            total: "$10,50",
        },
    ]

    return (
        <CartWrapper>
            <CartBox1>
                <CartWrapper1>
                    <div style={{ width: "18%" }}>PHOTO</div>
                    <div style={{ width: "20%" }}>NAME</div>
                    <div style={{ width: "17%" }}>QUANTITY</div>
                    <div style={{ width: "18%" }}>PRICE</div>
                    <div style={{ width: "18%" }}>TOTAL</div>
                </CartWrapper1>
                {cart?.map(({ photo, name, quantity, price, total }) => (
                    <CartWrapper2>
                        <CartImg><img src={photo} alt="#" /></CartImg>
                        <div style={{ width: "24%" }}>{name}</div>
                        <CartNumber><p>{quantity}</p></CartNumber>
                        <div style={{ width: "20%" }}>{price}</div>
                        <div style={{ width: "18%" }}>{total}</div>
                        <CartIcon><i className="far fa-trash-alt"></i></CartIcon>
                    </CartWrapper2>
                ))}
            </CartBox1>
            <CartBox2>
                <CartBox>
                    <CardBoxText>Price</CardBoxText>
                    <CardDiv>
                        <p>Sub Total:</p>
                        <p className="card">$1.442,78</p>
                    </CardDiv>
                    <CardDiv>
                        <p>Shipping :</p>
                        <p className="card">Free</p>
                    </CardDiv>
                    <CardDiv>
                        <p>Tax(18%):</p>
                        <p className="card">$259.70</p>
                    </CardDiv>
                    <CardDiv style={{ fontWeight: "900" }}>
                        <p>Total:</p>
                        <p className="card">$1.702,48</p>
                    </CardDiv>
                </CartBox>
                <CartNextBox>
                    <CartNextBox1>
                        <input type="text" placeholder="Coupon Code" />
                        <p>Apply</p>
                    </CartNextBox1>
                    <CartNextBox2>
                        <p>Order note:</p>
                        <textarea></textarea>
                    </CartNextBox2>
                </CartNextBox>
                <CartButton>
                    <button className="all-b">All Clear</button>
                    <button className="check-b">Checkout</button>
                </CartButton>
            </CartBox2>
        </CartWrapper>
    )
}

export default Cart;
