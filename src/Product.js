import React from 'react'
import "./Product.css"; 

function Product({id, title, image, price, rating}) {
    return (
        <div className="product">
          <div className="product_info">
            <p>{title}</p>
            <p className="product_info">
               <small>$</small> 
               <strong>{price}</strong>
            
           <div className="product_rating">
           {Array(rating)
           .fill()
           .map((_, i) => (
               <p>⭐</p>
           ))}
               
           </div>  
           </p>
        </div>
     <img src={image} alt=""/>
    
     <button>Add to Basket</button>
    </div>
    );
}

export default Product
