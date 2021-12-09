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
          <Product 
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses" 
          price={29.99} 
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
          rating={5}
          />

          <Product id="23445930"
          title="LEGO Star Wars Darth Vader Helmet 75304" 
          price={71.20} 
          image="https://m.media-amazon.com/images/I/71qqzFRLc+L._AC_SL1500_.jpg" 
          rating={4} />
        </div>

        <div className="home_row">
          <Product 
          id="4903850"
          title="The Storyteller: Tales of Life and Music" 
          price={24} 
          image="https://m.media-amazon.com/images/P/B08ZNTKJVY.01._SCLZZZZZZZ_SX500_.jpg" 
          rating={4}
          />
          <Product
          id="23445930"
          title="Will: The Sunday Times Bestselling Autobiography" 
          price={22} 
          image="https://images-na.ssl-images-amazon.com/images/I/51povAtTE5L._SX327_BO1,204,203,200_.jpg" 
          rating={4}
          />
          <Product
          id="3254354345"
          title="Intex Challenger Kayak Inflatable Set with Aluminum Oars" 
          price={120} 
          image="https://m.media-amazon.com/images/I/81YZevt3C2L._AC_SL1500_.jpg" 
          rating={5}
          />
        </div>

        <div className="home_row">
          <Product
          id="3254354345"
          title="Dragon Touch 4K Action Camera 16MP Sony Sensor Vision 3 Underwater Waterproof Camera 170° Wide Angle WiFi Sports Cam with Remote 2 Batteries and Mounting Accessories Kit" 
          price={89} 
          image="https://m.media-amazon.com/images/I/61Q4a4oiUkL._AC_SL1001_.jpg" 
          rating={5}
          />
        </div>

      </div>        
    </div>
    )
}

export default Home

