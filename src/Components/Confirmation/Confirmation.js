import React from 'react';
import Card from "../../Images/credit-card.png"

function Confirmation(props) {
    return (
        <div className="confirmation">
            <div className="payment">
                <img src={Card} alt="card"/>
                <h2 className="text-center">Thank you! For your payment</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, sed.</p>
                <button>Continue Shopping</button>
            </div>

        </div>
    );
}

export default Confirmation;
