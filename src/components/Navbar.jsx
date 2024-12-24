import React from 'react'
import logo from '../assets/images/logo.png'
import lense from '../assets/images/search.svg'
import profile from '../assets/images/profile.svg'
import heart from '../assets/images/heart.svg'
import bag from '../assets/images/bag.svg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <div className='flex text-sm font-bold text-gray-700 items-center p-4 shadow-lg mb-5 w-full'>
        <Link to="/"><img src={logo} className='ml- h-16 w-16 ml-5' alt="logo" /></Link>

        <h1 className='ml-4'>MEN</h1>
        <h1 className='ml-8'>WOMEN</h1>
        <h1 className='ml-8'>KIDS</h1>
        <h1 className='ml-8'>HOME & LIVING</h1>
        <h1 className='ml-8'>BEAUTY</h1>
        <h1 className='ml-12'>STUDIO</h1>

        <div className=' border-gray-100 border flex items-center bg-gray-100 w-80 h-10 ml-14 mr-28'>
          <img src={lense} className='h-4 w-4 ml-4' alt='search' />
          <input className=" bg-gray-100 ml-3 text-gray-900 outline-none text-sm rounded-lg block w-full p-2.5" placeholder="Search Product" required />
        </div>

        <Link to="/login" className=' ml-6 text-xs'>
          <img src={profile} className='h-5 w-5 m-auto' />
          <h5>Login</h5>
        </Link>
        <div className=' ml-6 text-xs'>
          <img src={heart} className='h-5 w-5 m-auto' />
          <h1>Wishlist</h1>
        </div>
        <div className=' ml-6 text-xs'>
          <img src={bag} className='h-5 w-5 m-auto' />
          <h1>Bag</h1>
        </div>
      </div>



    </>
  )
}

export default Navbar
