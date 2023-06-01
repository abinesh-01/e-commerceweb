import React from "react";
import "./flash.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





const FlashCard = ({productItems}) =>{

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 3,
      };

    return(     
        <>
        {productItems.map((productItem)=>{
        return(
        <div className="flash-card">
            <div className="another-div">
               <div className="box">
                   <span>{productItem.discount}% offer</span>
                       <div className="heart">
                    <h3>0</h3>
                    <i class="fa-regular fa-heart"></i>
                   </div>
                   <div className="images">
                       <img src={productItem.image} alt="" />
                   </div>
                   <div className="product-name">
                       <span>{productItem.name}</span>
                   </div>
                   <div className="stars">
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                       <i class="fa-solid fa-star"></i>
                   </div>
                   <div className="content">
                       <span>100.00</span>
                       <span>+</span>
                   </div>
               </div>
             </div>
        </div>
        
        )
})}

        </>
    )
}
export default FlashCard;