import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Services.css";
const Services = () => {
    return (
        <div className='container services mt-5'>
            <div>
            <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://www.gfsimport-export.com/images/services/5/s5.jpg" />
      <Card.Body>
        <Card.Title>CARGO</Card.Title>
        <Card.Text> <small>Transport specializes in the safe transportation of office, computer, and medical related equipment. From a single laptop to an...</small> </Card.Text>
        <Button variant="danger">READ MORE</Button>
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/photos/global-business-logistics-import-export-background-and-container-picture-id1266958681?k=20&m=1266958681&s=612x612&w=0&h=VfpQl6Fe83meeTksLdtIvoclXldL2bfD7D9A72WO5nI=" />
      <Card.Body>
        <Card.Title>LOGISTIC SERVICE</Card.Title>
        <Card.Text> <small>Transport offers a host of logistic management services and supply chain solutions. We provide innovative solutions with the best...</small> </Card.Text>
        <Button variant="danger">READ MORE</Button>
      </Card.Body>
    </Card>
            </div>
            <div>
            <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://www.cmcbikes.com/img/stores/2/2.jpg?w=818" />
      <Card.Body>
        <Card.Title>STORAGE</Card.Title>
        <Card.Text> <small>Transport has access to over a ten million square feet of storage space in strategic partnership locations throughout the...</small> </Card.Text>
        <Button variant="danger">READ MORE</Button>
      </Card.Body>
    </Card>
            </div>
        </div>
    );
};

export default Services;