import React from 'react';
import product from "../../Images/category-1.jpg"
import product2 from "../../Images/category-2.jpg"
import product3 from "../../Images/category-3.jpg"

function ProductCat(props) {
    return (
        <div className="product_category">
            <div className="container">
                <h2>Product Category</h2>

                <div className="product_category-start">
                    <div className="product_category-left">
                        <div className="product_category-img1 transform">
                            <img src={product} alt="product"/>
                            <div className="product_category-text">
                                <h3>Clothes Sales</h3>
                                <p>Shop New Season Clothing</p>
                            </div>

                        </div>
                        <div className="product_category-img2 transform">
                            <img src={product2} alt="product"/>
                            <div className="product_category-text">
                                <h3>Clothes Sales</h3>
                                <p>Shop New Season Clothing</p>
                            </div>

                        </div>
                    </div>
                    <div className="product_category-right3 transform">
                        <img src={product3} alt="product"/>
                        <div className="product_category-text">
                            <h3>Clothes Sales</h3>
                            <p>Shop New Season Clothing</p>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductCat;