import React from 'react';

const Product = (props) => {
    return (<div className={"product"} >
        <div>{props.name}</div>
        <div>{props.productDesc}</div>
        <p>{props.price}</p>
    </div>);
}

export default Product;
