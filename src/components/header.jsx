import React from 'react'
import { useState } from 'react'
import '../components/header.css'
import { Link } from 'react-router-dom'

export default function header(probs) {
    const { infoImg, infoText } = probs;

    const [open, setOpen] = useState(false);
    const toggleClick = () => setOpen(!open);

    return (
        <div className='header'>

            <div className='container__header-up'>
                <div className='container__header-up-logo'>
                    <img src="src/assets/images/logo.jpg" alt="NurLogo" />
                </div>
                <div className='container__header-up-dropdown' onClick={toggleClick}>
                    <img src="src/assets/images/bars-solid.svg" alt="icon" />
                </div>
                <div className={`container__header-up-pages ${open ? 'active' : ''}`}>
                    <Link to="/" className=' up-pages-name pages-act'>Əsas</Link>
                    <Link to="/about" className=' up-pages-name pages-about'>Haqqımızda</Link>
                    <Link to="/product" className=' up-pages-name pages-product'>Bütün Məhsullar</Link>
                    <div className='up-pages-logo'>
                        <p>ƏA</p>
                    </div>
                </div>

            </div>
            <div className='container__header-down'>
                <div className='container__header-down-info'>
                    <h1>Nur Qızıl</h1>
                    <p>MY Collection</p>
                    <p>{infoText}</p>
                    <p>Lazerlə adların yazılması burada</p>
                    <Link to="/about"><button className='container__header-down-info-btn'>Ətraflı</button></Link>
                    <br />
                    <a href="https://www.instagram.com/beyleqan_qizil_gumus/">
                        <img className='icon-instagram' src="src/assets/images/insta.jpg" alt="photo" />
                    </a>
                    <img className='icon-whatsapp' src="src/assets/images/wp.jpg" alt="photo" />
                    <p className='wp-hover'>050-994-74-04 | 051-313-00-43</p>
                </div>
                <div className='container__header-down-img'>
                    <img src={infoImg} alt="photo" />
                </div>
            </div>
        </div>
    )
}
