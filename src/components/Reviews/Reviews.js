import React from 'react';
import useProducts from '../hooks/useProducts';
import Review from '../Review/Review';
import "./Reviews.css";
const Reviews = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h2 className='text-primary my-5'>What Our Client Say?</h2>
            <div  className='container'>
            <div className='reviews-item' id='reviews'>
                {
                    products.map(review => <Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }
            </div>
            </div>
        </div>
    );
};

export default Reviews;