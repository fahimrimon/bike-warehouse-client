import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import "./Review.css";
const Review = (props) => {
    const {img, revname, review} = props.review;
    return (
        <div className='review'>
            <img src={img} alt="" />
            <div className='name-with-icon'>
                <h6 style={{"color":"red"}}>{revname}</h6>
                <div className='icons'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                </div>
            </div>
            <p style={{"margin":"20px 10px"}}>{review}</p>
            <p className='full-review'><Link to="">Full review...</Link></p>
        </div>
    );
};

export default Review;