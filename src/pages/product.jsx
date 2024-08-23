import React from 'react'
import "../pages/product.css"
import Card from '../components/productCard'
import { Link } from 'react-router-dom'
import sep4 from "../assets/images/sep4.webp"
import diamn from "../assets/images/diamn.jpg"
import glossy from "../assets/images/glossy.jpg"
import nur1 from "../assets/images/nur1.jpg"
import nur2 from "../assets/images/nur2.jpg"
import nur3 from "../assets/images/nur3.jpg"
import nur4 from "../assets/images/nur4.jpg"
import nur5 from "../assets/images/nur5.jpg"
import nur6 from "../assets/images/nur6.jpg"
import nur7 from "../assets/images/nur7.jpg"
import nur8 from "../assets/images/nur8.jpg"
import nur9 from "../assets/images/nur9.jpg"
import nur10 from "../assets/images/nur10.jpg"
import nur11 from "../assets/images/nur11.jpg"
import nur12 from "../assets/images/nur12.jpg"
import nur13 from "../assets/images/nur13.jpg"
import nur14 from "../assets/images/nur14.jpg"
import nur15 from "../assets/images/nur15.jpg"


export default function product() {
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__container-title'>
          <div className='title-box'></div>
          <h1>Bütün Modellər</h1>
        </div>
        <div className='product__container-cards'>
          <Card image={nur11} information='Halqa Sırğa' />
          <Card image={nur2} information='Komplekt Dəst Sarı Qızıl' />
          <Card image={nur3} information='İmza Klon' />
          <Card image={nur4} information='Pələng Üzük' />
          <Card image={nur5} information='Kvadrat Üzüklər' />
          <Card image={nur6} information='585 Əyyar Dəst Model' />
          <Card image={nur7} information='Komplekt Üçlü Dəst' />
          <Card image={nur8} information='Tiffany Qolbağı' />
          <Card image={nur9} information='Komplekt Üçlü Dəst' />
          <Card image={nur10} information='Hərf Ürək Boyunbağılar' />
          <Card image={nur1} information='Komplekt brilliant Ağ Qızıl' />
          <Card image={nur15} information='Plastinka Qolbağı Yazı ilə' />
          <Card image={nur14} information='Ad Modeli Əl İşi' />
          <Card image={nur13} information='Pandora Dəst' />
          <Card image={diamn} information='Qolbağı Ağ Qızılla' />
          <Card image={nur12} information='Versace Dəst Yeni' />
          <Card image={glossy} information='Dəst Nişan Üzükləri' />
          <Card image={sep4} information=' Enli Boyunbağı' />
        </div>
      </div>
    </div>
  )
}
