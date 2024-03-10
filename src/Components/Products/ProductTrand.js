import React from 'react';
import product1 from "../../Images/product-1.jpg"
import product2 from "../../Images/product-2.jpg"
import product3 from "../../Images/product-3.jpg"
import product4 from "../../Images/product-4.jpg"
import product5 from "../../Images/product-5.jpg"
import product6 from "../../Images/product-6.jpg"
import product7 from "../../Images/product-7.jpg"
import product8 from "../../Images/product-8.jpg"
import product9 from "../../Images/product-9.jpg"

function ProductTrand(props) {
    const product = [
        {
            id: 1,
            name: "Reef Boardsport",
            price: 200,
            img: product2,
        },
        {
            id: 2,
            name: "Reef Boardsport",
            price: 200,
            img: product1,
        },
        {
            id: 3,
            name: "Reef Boardsport",
            price: 200,
            img: product3,
        },
        {
            id: 4,
            name: "Reef Boardsport",
            price: 200,
            img: product4,
        },
        {
            id: 5,
            name: "Reef Boardsport",
            price: 200,
            img: product5,
        },
        {
            id: 6,
            name: "Reef Boardsport",
            price: 200,
            img: product6,
        },
        {
            id: 7,
            name: "Reef Boardsport",
            price: 200,
            img: product7,
        },
        {
            id: 8,
            name: "Reef Boardsport",
            price: 200,
            img: product8,
        },
        {
            id: 9,
            name: "Reef Boardsport",
            price: 200,
            img: product9,
        },
    ]
    const productSale = [
        {
            id:1,
            name: "Reef Boardsport",
            price: 200,
            img: product7,
        },
        {
            id:2,
            name: "Reef Boardsport",
            price: 200,
            img: product1,
        },
        {
            id:2,
            name: "Reef Boardsport",
            price: 200,
            img: product4,
        },
    ]
    return (
        <div className="product_trand">
            <div className="container">
                <div className="prodict_trand-start">
                    <h3 className="Gtext">TRENDY PRODUCTS
                    </h3>
                    <div className="product_trands">
                        {
                            product.map(item =>{
                                return(
                                    <div className="product_trand-box" key={item.id}>
                                        <div className="product_trand-img">
                                            <img src={item.img} alt="product"/>
                                            <p>{item.name}</p>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className="product_sales">
                        <h3 className="Gtext">PRODUCT SALE
                        </h3>
                        <div className="product_sale-box">

                        {
                            productSale.map(item =>{
                                return(
                                    <div className="product_trand-box" key={item.id}>
                                        <div className="product_trand-img">
                                            <img src={item.img} alt="product"/>
                                            <p>{item.name}</p>
                                            <span>${item.price}</span>
                                        </div>
                                        <span className="sale">Sale</span>
                                    </div>
                                )
                            })
                        }
                        </div>

                    </div>

                    <div className="product_search">
                        <h3 className="Gtext">SUBSCRIBE TO NEWSLETTER</h3>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, <br/>
facilis numquam impedit ut sequi. Minus facilis vitae excepturi sit laboriosam.</span>
                        <div className="product_search-start">
                            <input className="search" type="search" placeholder="Enter your Email Address"/>
                            <button className="product_btn">Subscribe Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProductTrand;