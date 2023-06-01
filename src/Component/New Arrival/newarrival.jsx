import React from "react";
import "./newarrival.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



const NewArrival = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 3,
      };

    return(
        <>
          <div className="new-arrivals">
            <div className="new">
               <span className="nheading"> New Arrivals </span>
            </div>
        <Slider {...settings}>
          <div className="images">
              <img src="./images/headphone.png" />
          </div>
          <div className="images">
              <img src="./images/iphone.jpg" />
          </div>
          <div className="images">
              <img src="./images/tv.jpg" />
          </div>
          <div className="images">
              <img src="./images/gardening.jpg" />
          </div>
          <div className="images">
              <img src="./images/smart watch.png" />
          </div>
          <div className="images">
          <img src="./images/makeup.png" />
         </div>
          <div className="images">
              <img src="./images/cricket-kits.jpg" />
          </div>
          <div className="images">
              <img src="./images/chocolatepng.png" />
          </div>
          <div className="images">
              <img src="./images/hoddies.jpg" />
          </div>
          <div className="images">
              <img src="./images/normal watch.jpg" />
          </div>
          <div className="images">
              <img src="./images/wireless.jpg" />
          </div>
          <div className="images">
              <img src="./images/gunpla.jpg" />
          </div>
        </Slider>
      </div>
        </>
         
    )
}
export default NewArrival;