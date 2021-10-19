import React from 'react'
import { Link } from 'react-router-dom';
import { FooterCard, FooterTitle, FooterWrapper } from './style';

function Footer() {
    return (
        <FooterWrapper>
            <FooterTitle>E - commerse</FooterTitle>
            <Link to="/" style={{ textDecoration: "none" }}>
                <FooterCard>
                    <div className="footer-icon"><i class="fas fa-grip-vertical"></i></div>
                    <p>Dashboard</p>
                </FooterCard>
            </Link>
            <Link to="/orders" style={{ textDecoration: "none" }}>
                <FooterCard>
                    <div className="footer-icon"><i class="fas fa-shopping-cart"></i></div>
                    <p>Orders</p>
                </FooterCard>
            </Link>
            <Link to="/products" style={{ textDecoration: "none" }}>
                <FooterCard>
                    <div className="footer-icon"><i class="fas fa-id-card-alt"></i></div>
                    <p>Products</p>
                </FooterCard>
            </Link>
            <Link to="/history" style={{ textDecoration: "none" }}>
                <FooterCard>
                    <div className="footer-icon"><i class="fas fa-user-friends"></i></div>
                    <p>History</p>
                </FooterCard>
            </Link>
            <Link to="/cart" style={{ textDecoration: "none" }}>
                <FooterCard>
                    <div className="footer-icon"><i class="fas fa-envelope"></i></div>
                    <p>Message</p>
                </FooterCard>
            </Link>
            <Link to="/add-product" style={{ textDecoration: "none" }}>
                <FooterCard>
                    <div className="footer-icon"><i class="fas fa-cog"></i></div>
                    <p>Settings</p>
                </FooterCard>
            </Link>
        </FooterWrapper>
    )
}

export default Footer;
