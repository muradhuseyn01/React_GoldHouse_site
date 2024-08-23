import React from 'react'
import '../pages/home.css'

export default function productCard(probs) {
    const {image, information}= probs;
    return (
        <div>
            <div className='home__container-products-cards-card'>
                <div className='home__container-products-cards-card-img'>
                    <img src={image} alt="photo" />
                </div>
                <div className='home__container-products-cards-card-info'>
                    <p>{information}</p>
                    <span>Çəki: X</span>
                    <span>Əyyar: X</span>
                    <span>Br: X</span>
                    <span>Qiymət: X</span>
                </div>
            </div>
        </div>
    )
}
