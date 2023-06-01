import React, { useState } from "react";
import "./search.css"


const Search = () =>{

    const [show, setShow] = useState(true);

    const toggle = () =>{
        setShow(!show)
    };


    return(
        <>
        <div className="search-box">
            <div className="logo">Logo</div>
            <div className="search">
                <i class="fa-solid fa-magnifying-glass"></i>
                <div className="search-container">
                  <input type="search" placeholder="search and hit enter..."/>
                  <span>All Category</span>
                </div>
                
            </div>
            <div className="items">
                <div className="contact">
                    <span><i class="fa-solid fa-address-book"></i></span>
                </div>
                <div className="shop">
                    <div className="bag"><button onClick={toggle}><i class="fa-solid fa-cart-shopping"></i></button></div>
                    <span>0</span>
                </div>
            </div>
            {!show && <div className="card">
                <button onClick={toggle}>x</button>
            </div>}
        </div>
        </>
    )
}
export default Search;