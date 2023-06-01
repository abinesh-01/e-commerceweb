import React from "react";
import Header from "./Component/Home/header";
import Search from "./Component/Home/search";
import Navbar from "./Component/Home/navbar";
import Main from "./Component/Main/main";
import Flash from "./Component/Flashdeal/flash";
import Data from "./Component/Flashdeal/dataflash";
import Top from "./Component/Top/top";
import NewArrival from "./Component/New Arrival/newarrival";
import BigDeal from "./Component/Big deal/bigdeal";
import Mobile from "./Component/Mobile phone/mobile";
import Ads from "./Component/Ads/ads";
import Service from "./Component/Service/service";
import Footer from "./Component/Footer/footer";


function App( ) {
  const {productItems} = Data;  
  return (
    <div className="App">
      <Header />
      <Search />
      <Navbar />
      <Main />
      <Flash productItems={productItems}/>
      <Top />
      <NewArrival />
      <BigDeal />
      <Mobile />
      <Ads />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
