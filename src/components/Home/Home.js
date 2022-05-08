import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Product from "../Product/Product";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/product")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  return (
    <>
      <Banner></Banner>
      <div id="products" className="container">
        <div className="row">
          <h1 className="text-primary text-center mt-5 mb-4"> Our Products</h1>
          <div className="products-container">
            {products.slice(0, 6).map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
        </div>
      </div>
      <Link to="/manage">
      <button className='btn btn-info mt-5 mb-5'>Manage All Product</button>
      </Link>
      <Services></Services>
      <Reviews></Reviews>
      <Footer></Footer>
    </>
  );
};

export default Home;
