import React from 'react';
import cart1 from "../../Images/cart1.jpg"
import cart2 from "../../Images/cart-2.jpg"
import cart3 from "../../Images/cart-3.jpg"
function Cart(props) {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner_start">
                        <h1>Cart</h1>
                        <div className="banner-links">
                            <p>Home</p>
                            <span>/</span>
                            <span>cart</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart">
                    <div className="cart_start">
                        <table className="table">
                            <thead>
                            <tr>
                                <th className="item">Item Name</th>
                                <th className="item">Item Price</th>
                                <th className="item">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="">
                                <td className="">
                                    <div className="product-info">
                                        <img src={cart1} alt=""/>
                                            <a className="product_table-text" href="#!">Sunglass</a>
                                    </div>
                                </td>
                                <td className="table_price">$200.00</td>
                                <td className="">
                                    <a className="product-remove" href="#!">Remove</a>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">
                                    <div className="product-info">
                                        <img src={cart2} alt=""/>
                                            <a className="product_table-text" href="#!">Airspace</a>
                                    </div>
                                </td>
                                <td className="table_price">$200.00</td>
                                <td className="">
                                    <a className="product-remove" href="#!">Remove</a>
                                </td>
                            </tr>
                            <tr className="">
                                <td className="">
                                    <div className="product-info">
                                        <img src={cart3} alt=""/>
                                            <a className="product_table-text" href="#!">Bingo</a>
                                    </div>
                                </td>
                                <td className="table_price">$200.00</td>
                                <td className="">
                                    <a className="product-remove" href="#!">Remove</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
            <button className="cart_btn">Checkout</button>
        </div>
    );
}

export default Cart;