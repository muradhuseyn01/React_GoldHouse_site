import React from 'react'

export default function article(probs) {
    const { title, info, img, logo } = probs;

    return (
        <div className='home__container-articleLeft'>
            <div className='home__container-articleLeft-one'>
                <div className='home__container-articleLeft-one-title'>
                    <img src={logo} alt="Logo" />
                    <h3>{title}</h3>
                    <p>{info}</p>
                </div>
                <div className='home__container-articleLeft-one-img'>
                    <img src={img} alt="photo" />
                </div>
            </div>
        </div>
    )
}
