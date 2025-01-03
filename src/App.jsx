import React from 'react'
import './App.css'
import '../src/index.css'
import Navbar from './components/navbar'
import Home from './components/Home'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Products from './components/Products'
import Productview from './components/Productview'
import Footer from './components/Footer'
function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/products' element={<Products />} />
          <Route exact path='/productview' element={<Productview />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
