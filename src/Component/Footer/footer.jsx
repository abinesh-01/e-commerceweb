import React from "react";
import "./footer.css"


const Footer = () => {
    return(
        <>
        <div className="footer">
            <div className="footer-box">
                <div className="box-1">
                    <div className="logo">
                        Logo
                    </div>
                    <span className="para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ratione eos architecto tempora enim id deleniti! Voluptates illum qui et natus recusandae quidem saepe id?Voluptates illum qui et natus recusandae quidem saepe id?</span>
                    <div className="icons">
                        <img src="./images/google.png" alt="" />
                    </div>
                </div>
                <div className="box">
                    <h1>About Us</h1>
                    <h4>Careers</h4>
                    <h4>Our Stores</h4>
                    <h4>Our Cares</h4>
                    <h4>Teams & Conditions</h4>
                    <h4>Private Policy</h4>
                </div>
                <div className="box">
                    <h1>Customer Care</h1>
                    <h4>Help Center</h4>
                    <h4>How to Buy</h4>
                    <h4>Track Your Order</h4>
                    <h4>Bulk Purchasing</h4>
                    <h4>Returns & Refunds</h4>
                </div>
                <div className="box">
                    <h1>New York</h1>
                    <h4>Email:*****@gamil.com</h4>
                    <h4>Phone:+1 123456789</h4>
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;