import React from 'react';

function Contact(props) {
    return (
        <div>
            <div className="banner">
                <div className="container">
                    <div className="banner_start">
                        <h1>Contact</h1>
                        <div className="banner-links">
                            <p>Home</p>
                            <span>/</span>
                            <span>Contact</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact">
                <div className="container">
                    <div className="contact_start">
                        <div className="contact_message">
                            <input type="text" placeholder="Your name"/>
                            <input type="email" placeholder="Email"/>
                            <input type="text" placeholder="Subject"/>
                            <textarea name="Message" id="message" >Message</textarea>
                            <button>Submit</button>
                        </div>
                        <div className="contact_address">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2483.26658583396!2d-0.127758!3d51.508325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce3941eb1f%3A0x1a5342fdf089c627!2z0KLRgNCw0YTQsNC70YzQs9Cw0YDRgdC60LDRjyDQv9C70L7RidCw0LTRjA!5e0!3m2!1sru!2sus!4v1709997991512!5m2!1sru!2sus"
                              ></iframe>
                            <p> Khaja Road, Bayzid, Chittagong, Bangladesh</p>
                            <p> Phone: +880-31-000-000</p>
                            <p> Fax: +880-31-000-000</p>
                            <p> Email: hello@example.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;