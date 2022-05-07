import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
            {/* <div className='container'>
            <h2 className='text-primary text-center mt-5 mb-4'> Our Packages</h2>
            <div className='services-container'>
                  {
                      services.slice(0,3).map(service => <Service
                      key={service.id}
                      service={service}
                      ></Service>)
                  }
            </div>
            <div className='more-package text-center mt-3'>
                <Link to="/services">See more packages</Link>
                <FontAwesomeIcon icon={faArrowRight} />
            </div>
            </div>
            <Reviews></Reviews>
            <Footer></Footer> */}
        </>
    );
};

export default Home;