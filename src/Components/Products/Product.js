import React from 'react';
import Product_Cat from "./Product_Cat";
import ProductTrand from "./ProductTrand";

function Product(props) {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner_start">
                        <h1>Shop</h1>
                        <div className="banner-links">
                            <p>Home</p>
                            <span>/</span>
                            <span>Shop</span>
                        </div>
                    </div>
                </div>
            </div>
            <ProductTrand/>
        </div>
    );
}

export default Product;