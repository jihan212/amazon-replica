import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product;
    console.log(props.product);
    return (
        <div className = "product">
            <div className = "product-img">
            <img src={img} alt=""/>
            </div>
            <div>
            <h4>{name}</h4>
            <p><small>by:{seller}</small></p>
            <br/>
            <p>Price: $ {price}</p>
            <br/>
            <p> Only left {stock} in stock</p>
            <br/>
            <button className="main-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;