import React from "react";
import "./bigdeal.css"



const BigDeal = () => {
    return(
        <>
          <div className="big-deal">
            <span className="bheading">Big Discount</span>
            <div className="big-box">
              <div className="big-dic">
                  <div className="big-images">
                    <img src="./images/echo.jpg" alt="" />
                  </div>
                 <h3>Echo</h3>
                <p>$450</p>
              </div>
              <div className="big-dic">
                  <div className="big-images">
                    <img src="./images/iphone.jpg" alt="" />
                  </div>
                 <h3>IphoneX</h3>
                <p>$850</p>
              </div>
              <div className="big-dic">
                  <div className="big-images">
                    <img src="./images/gear.png" alt="" />
                  </div>
                 <h3>Modam</h3>
                <p>$200</p>
              </div>
              <div className="big-dic">
                  <div className="big-images">
                    <img src="./images/tonka.jpg" alt="" />
                  </div>
                 <h3>Tonka Truck</h3>
                <p>$350</p>
              </div>
              <div className="big-dic">
                  <div className="big-images">
                    <img src="./images/sunglass.jpg" alt="" />
                  </div>
                 <h3>Sun Glass</h3>
                <p>$150</p>
              </div>
              <div className="big-dic">
                  <div className="big-images">
                    <img src="./images/smartwatch3.webp" alt="" />
                  </div>
                 <h3>Smart Watch</h3>
                <p>$250</p>
              </div>
              
           </div>
            
          </div>
        </>
    )
}
export default BigDeal;