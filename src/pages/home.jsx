import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import Card from '../components/productCard'
import Category from '../components/categoryCard'
import Article from '../components/article'
import ArticleLeft from '../components/articleLeft'
import compl1 from "../assets/images/compl1.jpg"
import sep4 from "../assets/images/sep4.webp"
import sirqa1 from "../assets/images/sirqa1.jpg"
import diamn3 from "../assets/images/diamn3.webp"
import sep from "../assets/images/sep.webp"
import diamn from "../assets/images/diamn.jpg"

export default function home() {
  return (
    <div className='home'>

      <div className='home__container'>
        <div className='models-name'>
          <p className='name-efe'>EFE MODEL</p>
          <p className='name-mej'>MEJURI</p>
          <p className='name-tiff'>TIFFANY CO</p>
          <p className='name-car'>CARTIER</p>
          <p className='name-cho'>CHOBARD</p>
          <p className='name-graff'>GRAFF DIAMONDS</p>
          <p className='name-chan'>CHANEL</p>
          <p className='name-buc'>BUCCELLATI</p>
        </div>

        <div className='home__container-products'>
          <div className='home__container-products-title'>
            <div className='title-box'></div>
            <h1>Yeni Modellərimiz</h1>
          </div>
          <div className='home__container-products-cards'>
            <Card image={compl1} information='Komplekt Dəst Ağ Qızıl' />
            <Card image={sep4} information='Boyunbagı' />
            <Card image={sirqa1} information='Piercing Ağ Qızılla' />
            <Card image={diamn3} information='585 Əyyar Üzük' />
            <Card image={sep} information='Enli Boyunbağı' />
            <Card image={diamn} information='Qolbağı Ağ Qızılla' />
          </div>
          <Link to='/product'><button className='product-btn'>Məlumat üçün</button></Link>
          <div className='home__container-products-category'>
            <div className='home__container-products-title'>
              <div className='title-box'></div>
              <h1>"Jewellery" Kateqoriya</h1>
            </div>
            <div className='home__container-products-category-card'>
              <Category image='src/assets/images/uzuk1.jpg' title='Üzük' />
              <Category image='src/assets/images/sirqa3.jpg' title='Sırqa' />
              <Category image='src/assets/images/sep4.jpg' title='Boyunbağı' />
              <Category image='src/assets/images/uzuk1.jpg' title='Klon' />
              <Category image='src/assets/images/qolb4.jpg' title='Qolbağı' />
              <Category image='src/assets/images/goldname2.jpg' title='Əl İşləri' />
            </div>
          </div>
          <div className='home__container-products-one'>
            <img src="src/assets/images/uzuk4.jpg" alt="photo" />
            <div className='home__container-products-one-info'>
              <h3>Öz Nişan Üzüyünüzü Özünüz Dizayn Edin..</h3>
              <p>Büdcənizə və üslubunuza mükəmməl uyğun gələn əl işi dizaynları ilə sevginizi canlandırın.
                Seçim çoxluğu, qiymət müxtəlifliyi ilə istənilən model və dizaynla zövqünüzə oxşayan modelləri əldə edə bilərsiniz.</p>
              <Link to='/product'><button className='one-info-btn'>Məlumat üçün</button></Link>
            </div>
          </div>
        </div>

        <Article title='Sarı qizildan ibarət Brilliant dəst'
          logo='src/assets/images/logo.jpg'
          info='Xüsusi işləmələrə malik sadə və gözəçarpan model. İncə olduğu qədər də çəkiyə malik olan, Brilliant daşlarla bəzədilən bir Model..'
          img='src/assets/images/compl4.jpg' />
        <ArticleLeft title='Sal qızıldan ibarət tək və dəst Qolbaqlar'
          logo='src/assets/images/logo.jpg'
          info='Sal qızıldan ibarət sadə, pandora, cartier modellərinin fərqli dizaynda istəyə uyğun sifarişləri..'
          img='src/assets/images/qolb1.jpg' />
        <Article title='Əl işi olan zövqlü Klon Ad və Hərflər'
          logo='src/assets/images/logo.jpg'
          info='İncə sadə qaşlarla bəzədilən klon ad modeli. Həmçinin sal qızıldan ibarət fərqli dizaynlarla, işləmələrlə hazırlanan əl işləri..'
          img='src/assets/images/sepname.jpg' />
        {/* <ArticleLeft title='Sal qizildan ibarət tək və dəst Qolbaqlar'
          logo='src/assets/images/logo.jpg'
          info='Sal qızıldan ibarət sadə, pandora, cartier modellərinin fərqli dizaynda istəyə uyğun sifarişləri.'
          img='src/assets/images/mix1.jpg' /> */}

        <div className='home__container-collages'>
          <div className='home__container-collages-title'>
            <div className='title-box'></div>
            <h1>Fərqli Çeşidlərlə</h1>
          </div>
          <div className='home__container-collages-left-right'>
            <div className='home__container-collages-left'>
              <img src="src/assets/images/uzuk3.jpeg" alt="photo" />
              <div className='home__container-collages-left-box'>
                <img src="src/assets/images/sirqa4.jpg" alt="photo" />
                <img src="src/assets/images/sep3.webp" alt="photo" />
              </div>
            </div>
            <div className='home__container-collages-right'>
              <img src="src/assets/images/compl7.jpg" alt="photo" />
              <div className='home__container-collage-right-box'>
                <img src="src/assets/images/diamn41.webp" alt="photo" />
                <img src="src/assets/images/compl8.jpg" alt="photo" />
              </div>
            </div>
          </div>
        </div>

        <div className='home__container-aside'>
          <div className='home__container-aside-left'>
            <img src="src/assets/images/compl10.jpg" alt="photo" />
          </div>
          <div className='home__container-aside-center'>
            <h2>TOY NİŞAN ÖZƏL GÜNLƏRİNİZƏ zövq qatın</h2>
            <h1>Hədiyyələr + Endirimli qiymətlər</h1>
            <p>Mağazamızdan Toyunuz üçün dəst modellər, Nişan üzükləri və digər kiçik hədiyyələr əldə edə bilərsiniz.
              Fərqli çeşidlər arasından zövqünüzə uyğun modeli seçmək və ya istədiyiniz başqa modeli göstərib sifariş vermək mümkündür.
            </p>
            <Link to='/product'><button className='aside-btn'>Daha çox</button></Link>
          </div>
          <div className='home__container-aside-right'>
            <img src="src/assets/images/potret1.jpg" alt="photo" />
          </div>
        </div>

        <div className='home__container-handcraft'>
          <div className='home__container-handcraft-example'>
            <img src="src/assets/images/goldname1.jpg" alt="photo" />
            <img src="src/assets/images/sirqa4.jpg" alt="photo" />
          </div>
          <div className='home__container-handcraft-img'>
            <img src="src/assets/images/zerger1.jpg" alt="photo" />
            <div className='home__container-handcraft-about'>
              <h1>Zərgərlik</h1>
              <p>Mağazamıza yaxınlaşaraq zədələnmiş qızıllarınızı təmir etdirə, həmçinin istəyə uyğun tərzdə yeni sifarişlər verə bilərsiniz.
                Qolbaq, Boyunbağı, Üzük və digər modellərin sifarişləri mümkündür.
              </p>
            </div>
          </div>
        </div>

        <div className='home__container-details'>
          <div className='home__container-details-left'>
            <img src="src/assets/images/truck-fast-solid.svg" alt="icons" />
            <p>Alınan malların sürətli və vaxtında ünvana çatdırılması xidməti mövcüddur. İş saatı: 08:00 - 18:00</p>
          </div>
          <div className='home__container-details-center'>
            <img src="src/assets/images/face-smile-solid.svg" alt="icons" />
            <p className='details-center-p2'>Müştəri məmmuniyyəti və yüksək keyfiyyətli xidmət. Rahat şəkildə kartla və ya nağd ödəniş üsulu mövcüddur.</p>
          </div>
          <div className='home__container-details-right'>
            <img src="src/assets/images/phone-solid.svg" alt="icons" />
            <p>Sifarişlər vermək üçün əlaqə vastitələri: 051-313-00-43 | 050-994-74-07</p>
          </div>
        </div>

      </div>
    </div>
  )
}
