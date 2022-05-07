import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Product.css";
const Product = ({product}) => {
    const {id, name, img, description, supplierName, price} = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id =>{
        navigate(`/product/${id}`);
    }

    return (
        <div className='product'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Supplier: {supplierName}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToProductDetail(id)} className='btn btn-primary'>Manage Item</button>
        </div>
    );
};

export default Product;