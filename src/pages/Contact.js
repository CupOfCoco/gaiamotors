import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="hcontact">
        <h1 data-aos="zoom-out-down" data-aos-duration="1000">
          Wanna be an owner of a Luxury Car ?
        </h1>
        <button
          className="btnstart"
        >
          GET STARTED
        </button>
      </div>

      <div className="mail" data-aos="zoom-in-down" data-aos-duration="1000">
        <h1 className="mailTitle">Save Time,Save Money!</h1>
        <span className="mailDesc">
          Sign up and we'll send the best deals to you
        </span>
        <div className="mailInputContainer">
          <input type="text" placeholder="Your Email" />
          <button className="btnend">Subscribe</button>
        </div>
      </div>

      <div className="footer">
        <div class="fList"
        data-aos="fade-up"
        data-aos-duration="1000">
          <div class="footer-box">
            <h3>Quick Links</h3>
            <li>Home</li>
            <li>about</li>
            <li>Products</li>
            <li>Review</li>
            <li>Contlict</li>
          </div>

          <div class="footer-box">
            <h3>Extra Links</h3>
            <li>My account</li>
            <li>My order</li>
            <li>My favorites</li>
          </div>

          <div class="footer-box">
            <h3>Location</h3>
            <li>USA</li>
            <li>Nigeria</li>
            <li>Canada</li>
            <li>UK</li>
          </div>

          <div class="footer-box">
            <h3>Contact Info</h3>
            <li>+ 123-456-7890</li>
            <li>Gaia@gmail.com</li>
            <li>Lagos, Nigeria - 400104</li>
          </div>
        </div>
        <div className="fText">Copyright &copy; 2024 CupofCoco</div>
      </div>
    </>
  );
};
export default Contact;
