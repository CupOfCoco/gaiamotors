import React from "react";
import Image from "../assets/car.jpg";
import Car1 from "../assets/car101.jpg";
import Car2 from "../assets/car13.jpg";
import Car3 from "../assets/car5.jpg";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-cark text-white border-0">
        <img src={Image} class="card-img" alt="background" height="600px" />
        <div class="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 class="card-title display-2 mb-0" data-aos="fade-down"
        data-aos-duration="1000">TASTE THE LUXURY</h5>
            <p data-aos="fade-up"
        data-aos-duration="1000">
              You see it, You love it, You want it, We got it!!!!
            </p>
          </div>
        </div>
      </div>
      <h1 className="homeTitle" data-aos="zoom-in-down"
        data-aos-duration="1000">Exotic Cars Only</h1>
      <div className="featured">
        <div className="featuredItem"
        data-aos="fade-down"
        data-aos-duration="1000">
          <img src={Car1} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h1>533 cart</h1>
          </div>
        </div>

        <div className="featuredItem"
        data-aos="fade-down"
        data-aos-duration="1000">
          <img src={Car2} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h1>533 cart</h1>
          </div>
        </div>

        <div className="featuredItem"
        data-aos="fade-down"
        data-aos-duration="1000">
          <img src={Car3} alt="" className="featuredImg" />
          <div className="featuredTitles">
            <h1>Dublin</h1>
            <h1>533 cart</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
