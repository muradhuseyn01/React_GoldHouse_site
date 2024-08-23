import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import About from './pages/about'
import Product from './pages/product'
import Error from './pages/error'
import Footer from './components/footer'
import diamn7 from '../src/assets/images/diamn7.webp'

function App() {

  return (
    <div className='app'>
      <Header 
      infoText="Eksklüziv dizaynda Qızıl və Brilliant modellər burada "
      infoImg={diamn7}  />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
