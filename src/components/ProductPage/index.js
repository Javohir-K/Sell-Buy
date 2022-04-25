import React from "react";
import { Link } from "react-router-dom";
import "./ProductPage.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import PersonIcon from "../../person.png";
import PhoneIcon from "@mui/icons-material/Phone";
function ProductPage({
  image,
  owner_name,
  time,
  name,
  description,
  price,
  location,
  phone_number,
}) {
  const ImageSizer = () => {
    const image = document.querySelector(".ppm_left");

    if (!image.classList.contains("image_show")) {
      image.classList.add("image_show");
    } else {
      image.classList.remove("image_show");
    }
  };

  return (
    <div className="product_page">
      <div className="product_page_header">
        <div className="breadcrumbs">
          <Link to="/">
            <ChevronLeftIcon />
            Back to homepage
          </Link>
        </div>
      </div>
      <div className="product_page_main">
        <div className="ppm_left" onClick={ImageSizer}>
          <img src={image} alt="" />
        </div>
        <div className="ppm_right">
          <div>
            <div className="owner_info">
              <img src={PersonIcon} alt="" />
              <h2>{owner_name}</h2>
            </div>
            <div className="ppm_product_info">
              <span className="ppm_time">{time}</span>
              <p className="ppm_name">{name}</p>
              <h1 className="ppm_price">{price} $</h1>
              <div className="ppm_description">
                <h4>Description</h4>
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="ppm_phone_number">
            <h4>Phone number</h4>
            <p>
              <PhoneIcon />
              {phone_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
