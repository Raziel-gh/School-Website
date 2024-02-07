import './App.css'
import Header from './Components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Achievments from './Pages/Achievments'
import Events from './Pages/Events'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  

  return (
    <div className=''>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Achievments' element={<Achievments/>}/>
      <Route path='/Events' element={<Events/>}/>
      <Route path='/Contact' element={<Contact/>}/>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
