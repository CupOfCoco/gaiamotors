import React from "react";
import Car5 from "../assets/car5.jpg";
import Car6 from "../assets/car61.jpg";
import Car7 from "../assets/car9.jpg";
import Car8 from "../assets/car101.jpg";
import Car9 from "../assets/car141.jpg";
import Car10 from "../assets/car191.jpg";
import Car11 from "../assets/car7.jpg";
import Car12 from "../assets/car161.jpg";
import Car13 from "../assets/benz.jpg";
import Car14 from "../assets/car211.jpg";
import Carousel from "react-bootstrap/Carousel";

const Product = () => {
  return (
    <>
      <div className="cList">
        <div
          className="cListItem"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={Car5} alt="" className="ClistImg" />
          <div className="cListTitles">
            <h1>Convertibles</h1>
            <h2>2334</h2>
          </div>
        </div>

        <div className="cListItem" 
        data-aos="zoom-in-down" 
        data-aos-duration="1000"
        data-aos-easing="linear">
          <img src={Car6} alt="" className="ClistImg" />
          <div className="cListTitles">
            <h1>Sport</h1>
            <h2>2334</h2>
          </div>
        </div>

        <div
          className="cListItem"
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-easing="linear"
        >
          <img src={Car7} alt="" className="ClistImg" />
          <div className="cListTitles">
            <h1>SUV</h1>
            <h2>2334</h2>
          </div>
        </div>

        <div className="cListItem"  
         data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="linear">
          <img src={Car8} alt="" className="ClistImg" />
          <div className="cListTitles">
            <h1>Sedan</h1>
            <h2>2334</h2>
          </div>
        </div>

        <div className="cListItem" 
        data-aos="fade-up" 
        data-aos-duration="1000"
          data-aos-easing="linear">
          <img src={Car9} alt="" className="ClistImg" />
          <div className="cListTitles">
            <h1>Luxury</h1>
            <h2>2334</h2>
          </div>
        </div>

        <div className="cListItem" 
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-easing="linear">
          <img src={Car10} alt="" className="ClistImg" />
          <div className="cListTitles">
            <h1>Sedan</h1>
            <h2>2334</h2>
          </div>
        </div>
      </div>
      <h1 className="hitem">BUY NOW,PAY IN INSTALLMENTS</h1>
      <small className="sitem">
        Get 10% discount on any of these vehicles when you buy in our black
        november
      </small>
      <Carousel>
        <Carousel.Item>
          <div className="cgItem">
            <img src={Car11} alt="" className="cgImg" />
            <span className="cgName">Hyundai</span>
            <span className="cgType">Automatic</span>
            <span className="cgPrice">$9500</span>
            <span className="cgSpeed">190mph</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cgItem">
            <img src={Car12} alt="" className="cgImg" />
            <span className="cgName">Porshe</span>
            <span className="cgType">Automatic</span>
            <span className="cgPrice">$9500</span>
            <span className="cgSpeed">190mph</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cgItem">
            <img src={Car13} alt="" className="cgImg" />
            <span className="cgName">Benz</span>
            <span className="cgType">Automatic</span>
            <span className="cgPrice">$7000</span>
            <span className="cgSpeed">192mph</span>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="cgItem">
            <img src={Car14} alt="" className="cgImg" />
            <span className="cgName">Ford</span>
            <span className="cgType">Automatic</span>
            <span className="cgPrice">$8500</span>
            <span className="cgSpeed">183mph</span>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Product;
