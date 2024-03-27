import React from "react";
import Car4 from "../assets/tyler-clemmensen-4gSavS9pe1s-unsplash.jpg";


export const Featured = () => (
  <div className="mainf">
    <div className=" container mainf-container">
      <div className="mainf-left"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-in-sine">
        <h4>#GaiaCars</h4>
        <h1>Car purchase and services simplified</h1>
        <p>
          Buy,rent,choose and repair with ease. Our diverse car types and
          reliable repair points ensure a seamless car experience.
        </p>
      </div>
      <div className="mainf-right"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="linear"
      >
        <img
          src={Car4}
          
          alt=""
          className="featuredImgs"
        />
      </div>
    </div>
    <div className="featuremoves"  
    data-aos="fade-down"
        data-aos-duration="1000">
      <h1>Unmatched excellence and customer satisfaction</h1>
      <p>
        {" "}
        Our priority is to provide exceptional services that sets us apart from
        the competition, From the moment you engage with us, we strive to exceed
        your expectations in every interaction
      </p>
      {/* <img src={Car11} height="450px"width="700px" alt="" className='featuredImgses'/> */}
    </div>
    <div className="values-container">
      <div className="values-right">
        <div className="value-wrapper"
        data-aos="fade-up">
          <div className="values-value">
            <h2>Buy simply and quickly</h2>
            <small>
              We provide your needs and go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </small>
          </div>
        </div>
        <div className="value-wrapper"
        data-aos="fade-up"
        data-aos-duration="1500">
          <div className="values-value">
            <h2>Modern & well made vehicles</h2>
            <small>
              We provide your needs and go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </small>
          </div>
        </div>
        <div className="value-wrapper"
        data-aos="fade-up"
        data-aos-duration="3000">
          <div className="values-value">
            <h2>Prompt and flexible services</h2>
            <small>
              We provide your needs and go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </small>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Featured;
