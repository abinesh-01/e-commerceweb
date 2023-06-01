import React from "react";
import "./mobile.css"


const Mobile = () => {
    return(
        <>
          <div className="mobile-main">
            <div className="left-side">
                <div className="leftside-container">
                    <div className="btn">
                        <button className="brand">Brands</button><button>Shops</button>
                    </div>
                    <div className="content">
                        <div className="apple">
                            <i className="fa-brands fa-apple icon"></i>
                            <span>Apple</span>
                        </div>
                        <div className="samsung">
                            <img src="" alt="" />
                            <p>Samsung</p>
                        </div>
                        <div className="oppo">
                            <img src="" alt="" />
                            <p>Oppo</p>
                        </div>
                        <div className="oppo">
                            <img src="" alt="" />
                            <p>Vivo</p>
                        </div>
                        <div className="oppo">
                            <img src="" alt="" />
                            <p>Realme</p>
                        </div>
                        <div className="oppo">
                            <img src="" alt="" />
                            <p>Oneplus</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-side">
                <div className="heading">
                    <h3>Mobile Phones</h3>
                    <span>View all</span>
                </div>
                <div className="models">
                    <div className="box-1 box">
                           <p>30% offer</p>
                       <div className="images">
                         <img src="./images/bose.png" alt="" />
                       </div>
                     <div className="product-name">
                         <span>Bose</span>
                     </div>
                     <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                     <div className="content">
                       <span>100.00</span>
                       <span>+</span>
                     </div>                   
                   </div>
                    <div className="box-2 box">
                    <p>40% offer</p>
                       <div className="images">
                         <img src="./images/oneplus.jpg" alt="" />
                       </div>
                     <div className="product-name">
                         <span>Oneplus</span>
                     </div>
                     <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                     <div className="content">
                       <span>200.00</span>
                       <span>+</span>
                     </div> 
                    </div>
                    <div className="box-3 box">
                    <p>50% offer</p>
                       <div className="images">
                         <img src="./images/microfiber.jpg" alt="" />
                       </div>
                     <div className="product-name">
                         <span>MicroFiber</span>
                     </div>
                     <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                     <div className="content">
                       <span>50.00</span>
                       <span>+</span>
                     </div> 
                    </div>
                    <div className="box-4 box">   
                    <p>70% offer</p>
                       <div className="images">
                         <img src="./images/tv.jpg" alt="" />
                       </div>
                     <div className="product-name">
                         <span>Tv</span>
                     </div>
                     <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                     <div className="content">
                       <span>200.00</span>
                       <span>+</span>
                     </div> </div>
                    <div className="box-5 box">   
                    <p>30% offer</p>
                       <div className="images">
                         <img src="./images/iphone.jpg" alt="" />
                       </div>
                     <div className="product-name">
                         <span>Iphone</span>
                     </div>
                     <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                     <div className="content">
                       <span>300.00</span>
                       <span>+</span>
                     </div> </div>
                    <div className="box-6 box">   
                    <p>30% offer</p>
                       <div className="images">
                         <img src="./images/ps4.jpg" alt="" />
                       </div>
                     <div className="product-name">
                         <span>Ps4</span>
                     </div>
                     <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                     </div>
                     <div className="content">
                       <span>250.00</span>
                       <span>+</span>
                     </div> </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Mobile;