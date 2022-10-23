import React from 'react';
import './Shipping.css';

const Shipping = () => {
    return (
        <div className='common-container'>
            <div className='shipping-card'>
                <h2>Shipping Info</h2>
                <hr />
                <p>Order Status: Packaging.</p>
                <p>Your delivery is on the way!!!</p>
                <small>Coming soon...</small>
            </div>
        </div>
    );
};

export default Shipping;