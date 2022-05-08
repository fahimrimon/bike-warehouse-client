// import React, { useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/product")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  const [products, setProducts] = useProducts();

    // const handleDelete = id =>{
    //     const proceed = window.confirm('Are you sure?');
    //     if(proceed){
    //         const url = `http://localhost:5000/product/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             const remaining = products.filter(product => product._id !== id);
    //             setProducts(remaining);
    //         })
    //     }
    // }

  return (
    <div id="products" className="container">
      <div className="row">
        <h1 className="text-primary text-center mt-5 mb-4"> Manage Products</h1>
        <div className="products-container">
          {products.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
