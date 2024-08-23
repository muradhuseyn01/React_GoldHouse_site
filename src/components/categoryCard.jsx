import React from 'react'
import '../pages/home.css'

export default function categoryCard(probs) {
    const {image, title}=probs;
  return (
              <div className="category-card-flex">
                <img src={image} alt="photo" />
                <p>{title}</p>
              </div>
  )
}
