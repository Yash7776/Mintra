import React from 'react'
import jeance from '../assets/jeans.jpg'
import electronics from '../assets/electronics.jpg'
import shoes from '../assets/shoes.jpg'
import sofa from '../assets/sofa.jpg'
import beauty from '../assets/beauty.jpg'
import sunglasess from '../assets/sunglasess.jpg'
import { Link } from 'react-router-dom'
const Category = () => {
  return (
    <div className='text-center'>
    <h2 className='text-3xl mt-6 text-start font-bold uppercase ml-6 text-gray-700'>Shop By Category</h2>
    <div className='p-10 flex justify-between'>
        <Link to="/products" state={{category:"Clothes"}} style={{backgroundImage:`url(${jeance})`,backgroundRepeat:"no-repeat",backgroundSize:"193px 300px"}}>
            <div className='h-72 w-48 p-2 pt-48'>
                <div className='bg-pink-800 text-white flex flex-col items-center justify-center'>
                    <h1 className='text-sm font-bold'>Clothes</h1>
                    <h1 className='text-xl font-bold '>40%-60% Off </h1>
                    <h1 className='text-sm font-bold'>Shop Now</h1>
                </div>
            </div>
        </Link>
        <Link to="/products" state={{category:"Electronics"}} style={{backgroundImage:`url(${electronics})`,backgroundRepeat:"no-repeat",backgroundSize:"193px 300px"}}>
            <div className='h-72 w-48 p-2 pt-48'>
                <div className='bg-pink-800 text-white flex flex-col items-center justify-center'>
                    <h1 className='text-sm font-bold'>Electronics</h1>
                    <h1 className='text-xl font-bold '>40%-60% Off </h1>
                    <h1 className='text-sm font-bold'>Shop Now</h1>
                </div>
            </div>
        </Link>
        <Link to="/products" state={{category:"Shoes"}}  style={{backgroundImage:`url(${shoes})`,backgroundRepeat:"no-repeat",backgroundSize:"193px 300px"}}>
            <div className='h-72 w-48 p-2 pt-48'>
                <div className='bg-pink-800 text-white flex flex-col items-center justify-center'>
                    <h1 className='text-sm font-bold'>Shoes</h1>
                    <h1 className='text-xl font-bold '>40%-60% Off </h1>
                    <h1 className='text-sm font-bold'>Shop Now</h1>
                </div>
            </div>
        </Link>
        <Link to="/products" state={{category:"Furniture"}}  style={{backgroundImage:`url(${sofa})`,backgroundRepeat:"no-repeat",backgroundSize:"193px 300px"}}>
            <div className='h-72 w-48 p-2 pt-48'>
                <div className='bg-pink-800 text-white flex flex-col items-center justify-center'>
                    <h1 className='text-sm font-bold'>Furniture</h1>
                    <h1 className='text-xl font-bold '>40%-60% Off </h1>
                    <h1 className='text-sm font-bold'>Shop Now</h1>
                </div>
            </div>
        </Link>
        <Link to="/products" state={{category:"Miscellaneous"}} style={{backgroundImage:`url(${sunglasess})`,backgroundRepeat:"no-repeat",backgroundSize:"193px 300px"}}>
            <div className='h-72 w-48 p-2 pt-48'>
                <div className='bg-pink-800 text-white flex flex-col items-center justify-center'>
                    <h1 className='text-sm font-bold'>Sunglasess</h1>
                    <h1 className='text-xl font-bold '>40%-60% Off </h1>
                    <h1 className='text-sm font-bold'>Shop Now</h1>
                </div>
            </div>
        </Link>
        <Link to="/products" state={{category:"Beauty"}} style={{backgroundImage:`url(${beauty})`,backgroundRepeat:"no-repeat",backgroundSize:"193px 300px"}}>
            <div className='h-72 w-48 p-2 pt-48'>
                <div className='bg-pink-800 text-white flex flex-col items-center justify-center'>
                    <h1 className='text-sm font-bold'>Beauty</h1>
                    <h1 className='text-xl font-bold '>40%-60% Off </h1>
                    <h1 className='text-sm font-bold'>Shop Now</h1>
                </div>
            </div>
        </Link>
    </div>

    </div>
  )
}

export default Category
