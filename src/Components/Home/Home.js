import React,{useEffect,useRef} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from "../../Images/bg-1.jpg"
import bg2 from "../../Images/coming-soon-bg.jpg"
import Product_Cat from "../Products/Product_Cat";
import ProductTrand from "../Products/ProductTrand";
import {gsap} from "gsap"
import Product from "../Products/Product";

function Home(props) {
    useEffect(() => {

        const navbarRightAnimation = gsap.to('.navbar_text-ani', {
            duration: .5,
            ease: "power1.out",
            opacity:1,
            y:-50,
        });

        const navbarLeftTextAnimation = gsap.from('.home_btn', {
            duration: .6,
            ease: "power1.out",
            opacity:1,
            y:-50,
        });


        gsap.timeline().add(navbarRightAnimation).add(navbarLeftTextAnimation, 0); // 0 означает, что анимация начнется одновременно с navbarRightAnimation
    }, []);
    return (
        <div className="home">
            <Carousel >
                <Carousel.Item>
                    <div className="home_img">
                        <img style={{height: '700px', width:"100%"}} src={bg1} alt=""/>

                    </div>
                    <Carousel.Caption>
                        <div className="home_albom">
                            <span className="navbar_text">Products</span>
                            <h1 className="navbar_text-ani">The beauty of nature <br/> is hidden im details. </h1>
                            <button className="home_btn">Shop Now</button>
                        </div>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="home_img">
                        <img style={{height: '700px', width:"100%"}} src={bg2} alt=""/>

                    </div>
                    <Carousel.Caption>
                        <div className="home_albom">
                            <span>Products</span>
                            <h1>The beauty of nature <br/> is hidden im details. </h1>
                            <button className="home_btn">Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
            <Product_Cat/>
          <ProductTrand/>
            <h2 className="home_text">VIEW US ON INSTAGRAM</h2>

        </div>
    );
}

export default Home;