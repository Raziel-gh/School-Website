import './App.css'
import Header from './Components/Header'
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Achievments from './Pages/Achievments'
import Events from './Pages/Events'
import Contact from './Pages/Contact'

function App() {
  

  return (
    <div className='bg-slate-600'>
     <Header/>
     <Routes>
      <Route to='/' element={<Home/>}/>
      <Route to='/About' element={<About/>}/>
      <Route to='/Achievments' element={<Achievments/>}/>
      <Route to='/Events' element={<Events/>}/>
      <Route to='/Contact' element={<Contact/>}/>
     </Routes>
    </div>
  )
}

export default App
