import React from "react";
import "./header.css"


const Header = () =>{
    return(
        <>
         <div className="header">
            <div className="left-side">
                <span><i className="fa-solid fa-phone"></i>+ 88012 4523 4523</span>
                <span><i className="fa-solid fa-envelope"></i>example@gmail.com</span>
            </div>
            <div className="right-side">
                <span>Theme FAQ's</span>
                <span>Need Helps</span>
                <span>EN</span>
                <span>USD</span>
            </div>
         </div>
        </>
    )
    
}
export default Header;