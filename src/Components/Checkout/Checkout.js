import React from 'react';
import {Link} from "react-router-dom"
import img from "../../Images/cart-1.jpg"
import Visa from "../../Images/verified.png"

function Checkout(props) {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner_start">
                        <h1>Checkout</h1>
                        <div className="banner-links">
                            <p>Home</p>
                            <span>/</span>
                            <span>Checkout</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout">
                <div className="container">
                    <div className="checkout_start">
                        <div className="checkout_left">
                            <div className="checkout_details">
                                <h3>
                                    BILLING DETAILS
                                </h3>
                                <input type="text" placeholder="FULL NAME" />
                                <input type="text" placeholder="ADDRESS"/>
                                <div className="checkout_city">
                                    <input type="text" placeholder="ZIP CODE"/>
                                    <input type="text" placeholder="CITY"/>
                                </div>
                                <input type="text" placeholder="Country"/>
                            </div>
                            <div className="checkout_payment">
                                <h3>
                                    PAYMENT METHOD
                                </h3>
                                <p>Credit Cart Details (Secure payment)</p>
                                <input id="ccn" type="tel" inputMode="numeric" pattern="[0-9\s]{13,19}"
                                       autoComplete="cc-number" maxLength="19"
                                       placeholder="xxxx xxxx xxxx xxxx" required/>
                                <input type="date" placeholder="ADDRESS"/>
                                <input name="credit-cvc" class="cc-cvc" type="tel" pattern="\d*" maxlength="4" placeholder="CVC"/>
                            </div>
                            <button>Place Order</button>
                        </div>
                        <div className="checkout_right">
                            <h3>ORDER SUMMARY</h3>
                            <div className="checkout_product">
                                <img src={img} alt="img"/>
                                <div className="checkout_product-text">
                                    <h5>
                                        Ambassador Heritage 1921</h5>
                                    <span>1 x $249</span>
                                    <p>Remove</p>
                                </div>
                            </div>
                            <Link to={'/'}>Have a discount ? enter it here</Link>
                            <div className="checkout_prices">
                                <div className="checkout_price">
                                    <span className='price_checkout'>Subtotal:</span>
                                    <p  className="name_checkout">$190</p>
                                </div>
                                <div className="checkout_delivery">
                                    <span className='price_checkout'>Shipping:</span>
                                    <p className="name_checkout">Free</p>
                                </div>
                                <div className="checkout_all-price">
                                    <span>Total:</span>
                                    <p>$250
                                    </p>
                            </div>

                            </div>
                            <img className="Visa" src={Visa} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Checkout;