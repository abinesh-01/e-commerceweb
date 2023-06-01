import React from "react";
import Categories from "./cate";
import "./main.css"
import Aside from "./aside";


const Main = () =>{
    return(
        <>
         <section className="main">
             <div className="main-container">
                 <Categories />
                 <Aside />
             </div>
         </section>
        </>
    )
}
export default Main;