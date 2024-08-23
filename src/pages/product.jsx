import React from 'react'
import "../pages/product.css"
import Card from '../components/productCard'
import { Link } from 'react-router-dom'

export default function product() {
  return (
    <div className='product'>
      <div className='product__container'>
        <div className='product__container-title'>
          <div className='title-box'></div>
          <h1>Bütün Modellər</h1>
        </div>
        <div className='product__container-cards'>
          <Card image='src/assets/images/nur11.jpg' information='Halqa Sırğa' />
          <Card image='src/assets/images/nur2.jpg' information='Komplekt Dəst Sarı Qızıl' />
          <Card image='src/assets/images/nur3.jpg' information='İmza Klon' />
          <Card image='src/assets/images/nur4.jpg' information='Pələng Üzük' />
          <Card image='src/assets/images/nur5.jpg' information='Kvadrat Üzüklər' />
          <Card image='src/assets/images/nur6.jpg' information='585 Əyyar Dəst Model' />
          <Card image='src/assets/images/nur7.jpg' information='Komplekt Üçlü Dəst' />
          <Card image='src/assets/images/nur8.jpg' information='Tiffany Qolbağı' />
          <Card image='src/assets/images/nur9.jpg' information='Komplekt Üçlü Dəst' />
          <Card image='src/assets/images/nur10.jpg' information='Hərf Ürək Klonlar' />
          <Card image='src/assets/images/nur1.jpg' information='Komplekt brilliant Ağ Qızıl' />
          <Card image='src/assets/images/nur15.jpg' information='Plastinka Qolbağı Yazı ilə' />
          <Card image='src/assets/images/nur14.jpg' information='Ad Modeli Əl İşi' />
          <Card image='src/assets/images/nur13.jpg' information='Pandora Dəst' />
          <Card image='src/assets/images/diamn.jpg' information='Qolbağı Ağ Qızılla' />
          <Card image='src/assets/images/nur12.jpg' information='Versace Dəst Yeni' />
          <Card image='src/assets/images/glossy.jpg' information='Dəst Nişan Üzükləri' />
          <Card image='src/assets/images/sep4.webp' information=' Enli Boyunbağı' />
        </div>
      </div>
    </div>
  )
}
