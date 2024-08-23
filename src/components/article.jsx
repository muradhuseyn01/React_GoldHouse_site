import React from 'react'

export default function article(probs) {
    const { title, info, img, logo } = probs;

    return (
        <div className='home__container-article'>
            <div className='home__container-article-one'>
                <div className='home__container-article-one-title'>
                    <img src={logo} alt="Logo" />
                    <h3>{title}</h3>
                    <p>{info}</p>
                </div>
                <div className='home__container-article-one-img'>
                    <img src={img} alt="photo" />
                </div>
            </div>
        </div>
    )
}
