  import React from "react";
  import "./slider.css"
  import "slick-carousel/slick/slick.css"; 
  import "slick-carousel/slick/slick-theme.css";
  import Slider from "react-slick";


  const Aside = () =>{ 

     const sliderRoll = [
          {
                sliderHeading : "50% Off ForYour First Shopping" ,
                sliderPara : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis accusamus quo quidem ipsum tempora ratione repellat voluptatum dicta",
          }
     ]
      
      const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1
        };
      
      
      return(
          <>
            <div className="slider-page">
            <Slider {...settings}>
               <div className="slider-content">
                   <div className="left-side">
                    {sliderRoll.map((value) =>{
                         return(
                    <div>
                       <h1>{value.sliderHeading}</h1>
                       <p>{value.sliderPara}</p>
                       <button>Visit Collections</button>
                    </div>  
                    )
                    })}
                   </div>
                   <div className="right-side">
                       <img src="./images/shoes.jpg" />
                  </div>
                                
                  
                  
                 </div> 
                 <div className="slider-content">
                 <div className="left-side">
                    {sliderRoll.map((value) =>{
                         return(
                    <div>
                       <h1>{value.sliderHeading}</h1>
                       <p>{value.sliderPara}</p>
                       <button>Visit Collections</button>
                    </div>  
                    )
                    })}
                   </div> 
                   <div className="right-side">
                       <img src="./images/Yellow-Ladies.png" />
                  </div>
               
              </div>
              <div className="slider-content">
                 <div className="left-side">
                    {sliderRoll.map((value) =>{
                         return(
                    <div>
                       <h1>{value.sliderHeading}</h1>
                       <p>{value.sliderPara}</p>
                       <button>Visit Collections</button>
                    </div>  
                    )
                    })}
                   </div> 
                   <div className="right-side">
                       <img src="./images/OIP.jpg" />
                  </div>
               
              </div>
              <div className="slider-content">
                 <div className="left-side">
                    {sliderRoll.map((value) =>{
                         return(
                    <div>
                       <h1>{value.sliderHeading}</h1>
                       <p>{value.sliderPara}</p>
                       <button>Visit Collections</button>
                    </div>  
                    )
                    })}
                   </div> 
                   <div className="right-side">
                       <img src="./images/leather_jacket_PNG24.png" />
                  </div>
               
              </div>
              <div className="slider-content">
                 <div className="left-side">
                    {sliderRoll.map((value) =>{
                         return(
                    <div>
                       <h1>{value.sliderHeading}</h1>
                       <p>{value.sliderPara}</p>
                       <button>Visit Collections</button>
                    </div>  
                    )
                    })}
                   </div> 
                   <div className="right-side">
                       <img src="./images/smart watch.png" />
                  </div>
               
              </div>
               
            </Slider>

            </div>
           
            
          </>
      )
  }
  export default Aside;