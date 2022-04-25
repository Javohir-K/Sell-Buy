import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about_us">
      <div className="about_us_container">
        <div>
          <h2>About Sell&Buy</h2>
          <p>
            Sell&Buy is an online e-commerce project for people who want to sell
            and buy products online. Sell&Buy makes it easy to transact among
            users. Feel free to use our project and help us to improve it if you
            have any suggestions about this website.
          </p>
        </div>
        <div>
            <h2>How to use website</h2>
            <p>
                In this platform you can buy things you want and you can sell your things if you don't need them anymore.
                On the main page of the website you can see products displayed from users who want to sell them.
                And if you are seeking something and find it from the products page you can click it and you will be redirected to the items page and there you can see the full information about product and owners phone number.
                You can call them and negotiate the purchase!
            </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
