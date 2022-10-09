import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {product, handleAddToCart} = props;
    const {name, img, seller, price, ratings} = product;
    
    return (
        <div className='product'>
            <div className='img-box'>
                <img src={img} alt="" />
            </div>
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <h4>Price: ${price}</h4>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings} stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;