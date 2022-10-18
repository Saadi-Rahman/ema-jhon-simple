import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({product, handleRemoveItem}) => {
    const { id, name, price, quantity, shipping, img } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>

            <div className='review-details-container'>
                <div className='review-details'>
                    <h5>{name}</h5>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;