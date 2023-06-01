import React from "react";
import FlashCard from "./Flashcard";



const FlashDeals = ({productItems}) =>{

  return(
     <>
      <div className="flash">
          <h3 className="fheading"><i className="fa-solid fa-bolt"></i>Flash Deal</h3>
       <div className="flash-deal">
         <FlashCard productItems = {productItems}/>           
       </div>     
      </div>
       
     </>
  )
}
export default FlashDeals;