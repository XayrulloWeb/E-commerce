import React from 'react';
import insta from "../Images/instagram.png"
import face from "../Images/facebook.png"
import twitch from "../Images/twitch.png"
import pinterest from "../Images/pinterest.png"
import {Link} from "react-router-dom";

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-start">
                <div className="footer_links-apps">
                    <img src={insta} alt="icon"/>
                    <img src={face} alt="icon"/>
                    <img src={twitch} alt="icon"/>
                    <img src={pinterest} alt="icon"/>
                </div>
                <div className="footer_links">
                    <ul>
                        <li><Link to={"/"}>CONTACT</Link></li>
                        <li><Link to={"/"}>SHOP</Link></li>
                        <li><Link to={"/"}>PRICING</Link></li>
                        <li><Link to={"/"}>PRIVACY POLICY</Link></li>
                    </ul>
                </div>
                <p>Copyright ©2021, Designed & Developed by Themefisher</p>
            </div>
        </div>
    );
}

export default Footer;
