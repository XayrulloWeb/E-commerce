import React from 'react';
import phone from "../Images/call.png"
import cart from "../Images/cart.png"
import search from "../Images/search.png"
import logo from "../Images/logo.png"
import header_img from "../Images/header-img.jpg"
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <div className="navbar">
               <div className="container">
                   <div className="navbar_start">
                       <div className="navbar_about">
                           <div className="navbar_about-number center">
                               <img src={phone} alt="call"/>
                               <span>+99890-000-00-00</span>
                           </div>
                           <Link to={'/'}>                           <img className="logo" src={logo} alt="logo"/>
                           </Link>

                           <div className="navbar_about-btns">
                                   <div className="navbar_about-cart center">
                                       <img src={cart} alt="cart"/>
                                       <span>Cart</span>
                                   </div>


                               <div className="navbar_about-search center">
                                   <img src={search} alt="search"/>
                                   <span>Search</span>
                               </div>
                               <select id="language" name="language">
                                   <option value="english">Ru</option>
                                   <option value="russian">Eng</option>
                               </select>

                           </div>
                       </div>
                       <div className="navbar_links">
                           <div className="dropdown">
                               <Link to={"/"}
                               >HOME</Link>

                           </div>
                           <div className="dropdown">
                               <span>SHOP</span>
                               <div className="dropdown-content">
                                   <div className="shop_content-start">
                                       <div className="shop-content-left">
                                           <span>Pages</span>
                                           <div className="shop-content-list">
                                               <Link to={'/product'}>Shop</Link>
                                               <Link to={'/cart'}>Cart</Link>
                                               <Link to={'/checkout'}>Checkout</Link>
                                               <Link to={'/pricing'}>Pricing</Link>
                                               <Link to={'/confirmation'}>Confirmation</Link>
                                           </div>
                                       </div>
                                       <div className="shop-content-right">
                                           <span>Layout</span>
                                           <div className="shop-content-list">
                                               <Link to={'/'}>Product <br/> details</Link>
                                               <Link to={'/'}>Shop with <br/> Sidebar</Link>

                                           </div>
                                       </div>
                                   </div>

                               </div>
                           </div>
                           <div className="dropdown">
                               <span>PAGES</span>
                               <div className="dropdown-content">
                                   <div className="shop_content-start">
                                       <div className="shop-content-left">
                                           <span>Introduction</span>
                                           <div className="shop-content-list">
                                               <Link to={'/contact'}>Contact Us</Link>
                                               <Link to={'/'}>About Us</Link>
                                               <Link to={'/'}>404 Page</Link>
                                               <Link to={'/'}>Coming Soon</Link>
                                               <Link to={'/'}>Faq</Link>
                                           </div>
                                       </div>
                                       <div className="shop-content-right">
                                           <span>Dashboard</span>
                                           <div className="shop-content-list">
                                               <Link to={'/'}>User Interface</Link>
                                               <Link to={'/'}>Orders</Link>
                                               <Link to={'/'}>Address</Link>
                                               <Link to={'/'}>Profile Details</Link>

                                           </div>
                                       </div>
                                       <div className="shop-content-right">
                                           <span>Utility</span>
                                           <div className="shop-content-list">
                                               <Link to={'/login'}>Login Page</Link>
                                               <Link to={'/'}>Signin Page</Link>
                                               <Link to={'/'}>Forget Password</Link>
                                           </div>
                                       </div>

                                   </div>
                               </div>
                           </div>
                           <div className="dropdown">
                               <span>BLOG</span>
                               <div className="dropdown-content">
                                       <Link to={'/'}>Blog SideBar</Link>
                                       <Link to={'/'}>Blog RightBar</Link>
                                       <Link to={'/'}>Blog LeftBar</Link>
                               </div>
                           </div>
                           <div className="dropdown">
                               <span>ELEMENT</span>
                               <div className="dropdown-content">
                                   <Link to={""} className="navbar_p">ELEMENT</Link>
                                   <Link to={""} className="navbar_p">ELEMENT</Link>
                                   <Link to={""} className="navbar_p">ELEMENT</Link>
                               </div>
                           </div>
                       </div>
                   </div>

               </div>
        </div>
    );
}

export default Navbar;