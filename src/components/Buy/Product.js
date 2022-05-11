import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="boxy" style={{ display: "flex", flexWrap: "wrap" }}>
  
   <div className="box" style={{ padding: "25px", margin: "30px"}}>
    <h2> {product.name} </h2>
    <br></br>
    <img className="hoo" src={product.img} alt="loading..." />
    <br></br>
    <p> {product.description} </p>
    <span> {product.size} </span>
    <div style={{ display: "block", padding: "3px" }}><strong>Price: {product.currencySymbol} {product.amount}</strong> </div>
    
    <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
   </div>
        
   
   </div>
  );
}


  