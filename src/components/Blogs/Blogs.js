import React from 'react';
import Footer from '../Footer/Footer';
import "./Blogs.css";
const Blogs = () => {
    return (
        <div className='container'>
            <div className='mt-5 ques'>
                <h2>Q-1: Defference between Javascript and Node js.</h2>
                <div className='ans-1 mt-3'>
                <div>
                <h4>Javascript:</h4>
                <p>1. Javascript is a programming language that is used for writing scripts on the website.</p>
                <p>2. Javascript can only be run in the browsers..</p>
                <p>3. It is basically used on the client-side..</p>
                <p>4. 	Javascript is used in frontend development.</p>
                </div>
                <div>
                    <h4>Node js:</h4>
                    <p>1. NodeJS is a Javascript runtime environment.</p>
                    <p>2. We can run Javascript outside the browser with the help of NodeJS.</p>
                    <p>3. It is mostly used on the server-side.</p>
                    <p>4. Nodejs is used in server-side development.</p>
                </div>
                </div>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default Blogs;