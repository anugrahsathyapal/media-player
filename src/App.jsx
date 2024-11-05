import { Route,Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'

function App() {
  

  return (
    <>
       {/* Path for Landing,Home,History */}
       <Header/>
       <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/history' element={<History/>}/>
       </Routes>      
       <Footer/>      
    </>
  )
}

export default App
