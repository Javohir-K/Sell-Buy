import React from 'react'
import { Link } from 'react-router-dom'
import "./ProductCard.css"

function ProductCard({image,name, price, location, time, link}) {
  return (
    <div className='product_card'>
      <Link to={link}>
        <img src={image} alt="" />
      </Link>
      <div className="pc_bottom">
        <h4>{name}</h4>
        <div className="pc_bottom_2">
          <p>{location}</p>
          <span>{price} $</span>
          <span className='time'>{time}</span>
        </div>
      </div>

    </div>
  )
}

export default ProductCard