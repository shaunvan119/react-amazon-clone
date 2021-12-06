import React from 'react';
import "./Home.css";
import Product from "./Product"

const Home = () => {
    return (
        <div className="home">
        <div className="home_container">
        <img 
        className="home_image"
        src="https://m.media-amazon.com/images/I/61NAmZaTBTL._SX3000_.jpg" 
        alt=""/>

        <div className="home_row">
          <Product title="The lean startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" alt=""
            rating={5}
          />
          <Product/>
        </div>

        <div className="home_row">
          <Product/>
          <Product/>
          <Product/>
        </div>

        <div className="home_row">
          <Product/>
        </div>

      </div>        
    </div>
    )
}

export default Home

