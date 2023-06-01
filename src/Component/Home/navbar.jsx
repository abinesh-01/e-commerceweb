import React from "react";
import "./navbar.css"


const Navbar = () =>{
    return(
        <>
        <div className="navbar">
            <div className="categories">
                <span><i class="fa-solid fa-table-cells-large"></i></span>
                <span className="chead">Categories</span>
                <span><i class="fa-solid fa-angle-down"></i></span>
            </div>
            <div className="nav-items">
                <ul>
                   <li>Home</li>
                   <li className="active">Pages</li>
                   <li>User Account</li>
                   <li>Vender Account</li>
                   <li>Track My Order</li>
                   <li>Contact</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default Navbar;