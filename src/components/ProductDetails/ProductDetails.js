import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productId}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="details">
        <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text> <small>{product.price}</small> </Card.Text>
        <Card.Text>Supplier: <small>{product.supplierName}</small> </Card.Text>
        <Card.Text>Quantity: <small>{product.quantity}</small> </Card.Text>
        <Card.Text> <small>{product.description}</small> </Card.Text>
        <Button variant="primary">Delivered</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default ProductDetails;
