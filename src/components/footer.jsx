import React from 'react'
import '../components/footer.css'
import { Link } from 'react-router-dom'
import tiktok from "../assets/images/tiktok-brands-solid.svg"
import wp from "../assets/images/whatsapp-brands-solid.svg"
import insta from "../assets/images/instagram-brands-solid.svg"


export default function footer() {
    return (
        <div className='footer'>
            <div className='container__footer'>
                <div className='container__footer-models'>
                    <h3>Jewellery Kateqoriya</h3>
                    <p>Boyunbağı</p>
                    <p>Qolbaq</p>
                    <p>Sırqa</p>
                    <p>Klon</p>
                    <p>Üzük</p>
                </div>
                <div className='container__footer-info'>
                    <h3>Keçidlər</h3>
                    <p>Bütün Məhsullar</p>
                    <p>Haqqımızda</p>
                    <p>Əsas</p>
                </div>
                <div className='container__footer-contact'>
                    <div className='container__footer-contact-inst'>
                        <a href="https://www.instagram.com/beyleqan_qizil_gumus/">
                            <img className='icon-instagram' src={insta} alt="photo" />
                        </a>
                    </div>
                    <div className='container__footer-contact-wp'>
                        <img className='icon-whatsapp' src={wp} alt="photo" />
                    </div>
                    <div className='container__footer-contact-tt'>
                        <img className='icon-whatsapp' src={tiktok} alt="photo" />
                    </div>
                </div>
            </div>
            <div className='container__footer-down'>
                <p>Copy Right 2024 &copy; MH</p>
            </div>
        </div>
    )
}
