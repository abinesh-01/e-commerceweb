import React from "react";
import "./top.css"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


/*const SampleNextArrow = (props) =>{
    const {onClick} = props
    return(
        <div className="btn" onClick={onClick}>
            <button>
                <i class='fa fa-long-arrow-alt-right'></i>
            </button>

        </div>
    )
}
const PrewArrows = (props) =>{
    const {onClick} = props
    return(
        <div className="btn" onClick={onClick}>
            <button>
                <i class='fa fa-long-arrow-alt-right'></i>
            </button>

        </div>
    )
}

*/
const Top = () =>{
    
    const settings = {
        dots: false,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 3,
        //nextArrow : 'SampleNextArrow',
        //prevArrow : 'PrewArrows',
      };

    return(
        <>
           <div className="top-cate">
             <span className="theading"><i className="fa-solid fa-table-cells-large"></i>Multiple items </span>
        <Slider {...settings}>
          <div className="images">
            <h4>Watch</h4>
              <img src="./images/watch3.jpg" />
              <img src="./images/smart watch.png" />
              <img src="./images/suunto.jpg" />
          </div>
          <div className="images">
          <h4>Airpods</h4>
              <img src="./images/bose.png" />
              <img src="./images/airpods.jpg" />
              <img src="./images/Airpods-PNG-Photo.png" />
          </div>
          <div className="images">
          <h4>Laptop</h4>
              <img src="./images/loptop.jpg" />
              <img src="./images/mouse.jpg" />
              <img src="./images/keybord.webp" />
          </div>
          <div className="images">
          <h4>Playstation</h4>
              <img src="./images/ps4.jpg" />
              <img src="./images/sonycontroller.png" />
              <img src="./images/speaker.jpg" />
          </div>
          <div className="images">
          <h4>cricket</h4>
              <img src="./images/bat.jpg" />
              <img src="./images/cricketball.png" />
              <img src="./images/Cricket-Helmet.jpg" />         
          </div>
          <div className="images">
          <h4>Cloth</h4>
              <img src="./images/navyblue.jpg" />
              <img src="./images/pant.png" />
              <img src="./images/hoddies.jpg" />
          </div>
          <div className="images">
          <h4>Toys</h4>
              <img src="./images/toy.jpg" />
              <img src="./images/dinosaur.jpg" />
              <img src="./images/gunpla.jpg" />
          </div>
          <div className="images">
          <h4>Accessories</h4>
              <img src="./images/charger.webp" />
              <img src="./images/headphone.png" />
              <img src="./images/realme.png" />
          </div>
          <div className="images">
          <h4>Phones</h4>
              <img src="./images/redmi.jpg" />
              <img src="./images/oneplus.jpg" />
              <img src="./images/iphone.jpg" />
          </div>
        </Slider>
      </div>
        </>
    )
}
export default Top;