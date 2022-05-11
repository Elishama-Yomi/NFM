import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block col-2 xy">
     <center> <h1>FASHION COLLECTION</h1> </center>
      <div className="boxy" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd}></Product>
        ))}
      </div>
    </main>
  );
}
