import React from 'react'
import "../pages/about.css"
import { Link } from 'react-router-dom'
import compl11 from "../assets/images/compl11.jpg"
import compl8 from "../assets/images/compl8.jpg"
import adres2 from "../assets/images/adres2.jpg"
import insta from "../assets/images/insta.jpg"
import wp from "../assets/images/wp.jpg"
import glossy from "../assets/images/glossy.jpg"

export default function about() {
  return (
    <div className='about'>
      <div className='about__container-up'>
        <img src={compl11} alt="photo" />
        <div className='about__container-up-information'>
          <h2>İstənilən növ Qızılın alışı və satışı bizim ünvanda!!</h2>
          <p>İllərdir fəaliyyət göstərən mağazamızda həm yeni model Qızıl və Brilliant aksesuarları  əldə edə həm də yeni modellər üzərindən sifariş verə bilərsiniz.
            İnstagramda, whatsappda paylaşılan modellər üzərindən seçim imkanı, həmçinin mağaza ünvanına gələrək yaxından baxmaq imkanınız vardır.</p>
            <h2>İkinci əl Qızıllarınızı gətirərək Yenisi ilə əvəz edə bilərsiniz</h2>
            <p>Əlavə suallar üçün əlaqə saxlayın!<br/>
            İş saatı: 08:00 - 18:00</p>
        </div>
      </div>
      <div className='about__container-down'>
        <div className='about__container-down-information'>
          <div className='about__container-down-information-adres'>
            <img src={adres2} alt="photo" />
            <p>Beyləqan rayonu mərkəzi bazarın qarşısı: <span>NUR & QIZIL</span> Mağazası</p>
          </div>
          <div className='about__container-down-information-socialWp'>
            <img src={wp} alt="photo" />
            <p>050-994-74-04 | 051-313-00-43 | 050-321-80-47</p>
          </div>
          <div className='about__container-down-information-socialIns'>
            <img src={insta} alt="photo" />
            <p>Beyleqan_qizil_gumus | Nur_qizil_beyleqan</p>
          </div>
        </div>
        <img src={compl8} alt="photo" />
        <div className='smallimg'>
        <img src={glossy} alt="photo" />
        </div>
      </div>
    </div>
  )
}
