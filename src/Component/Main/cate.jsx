import React from "react";
import "./cate.css"



const Categories = () =>{

  const data =[
    {
      cateIcon:<i class="fa-solid fa-shirt"></i>,
      cateName:"Fashion"
    },
    {
      cateIcon:<i class="fa-solid fa-tv"></i>,
      cateName:"Electronic"
    },
    {
      cateIcon:<i class="fa-solid fa-car"></i>,
      cateName:"Car"
    },
    {
      cateIcon:<i class="fa-solid fa-home"></i>,
      cateName:"Home & Garden"
    },
    {
      cateIcon:<i class="fa-solid fa-gift"></i>,
      cateName:"Gifts"
    },
    {
      cateIcon:<i class="fa-solid fa-music"></i>,
      cateName:"Music"
    },
    {
      cateIcon:<i class="fa-solid fa-notes-medical"></i>,
      cateName:"Health & Beauty"
    },
    {
      cateIcon:<i class="fa-solid fa-shield-dog"></i>,
      cateName:"Health & Beauty"
    },
    {
      cateIcon:<i class="fa-solid fa-notes-medical"></i>,
      cateName:"Health & Beauty"
    },
      
    {
      cateIcon:<i class="fa-solid fa-cart-shopping"></i>,
      cateName:"Graceries"
    },
    {
      cateIcon:<i class="fa-solid fa-book"></i>,
      cateName:"Book"
    }
  ]
    return(
      <>
        <div className="category">
          {data.map((value) => {
            return(
              <div className="content">
                <span className="cate-icon">{value.cateIcon}</span>
                <span className="cate-name">{value.cateName}</span>
              </div>
            )
          })}
        </div>
      </>
    )
}
export default Categories;