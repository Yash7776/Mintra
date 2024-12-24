import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loade
import Offertime from './Offertime';
const Products = () => {
  const location = useLocation()
  const [product, setproduct] = useState([])
  useEffect(() => {
    fetchProduct()
  }, [])
  const fetchProduct = async () => {
    let response = await fetch('https://api.escuelajs.co/api/v1/products')
    let data = await response.json()
    setproduct(data)
  }
  return (
    <>
      <Offertime />
      <div className='flex items-center text-sm ml-5 mt-2'>
        <Link to='/' className='text-gray-500'><h1>Home / </h1></Link>
        <h1 className='ml-1 font-semibold'>{location.state?.category}</h1>
      </div>
      <h1 className='font-bold text-lg ml-5 mt-3'>{location.state?.category ?? "No Product"} </h1>
      <div className='grid grid-cols-4 p-3'>
        {product.filter((data) => data.category.name.includes(location.state.category)).map((item) => (
          <Link to="/productview">
            <div key={item.id}>
              <Carousel className='p-2 mt-4' autoPlay={true} showThumbs={false} showArrows={false} showStatus={false}>
                <div>
                  <img src={item.images[0]} />
                </div>
                <div>
                  <img src={item.images[1]} />
                </div>
                <div>
                  <img src={item.images[2]} />
                </div>
              </Carousel>
              <h1 className='ml-4 font-bold mt-6'>{item.title}</h1>
              <h1 className='ml-4 text-sm text-gray-500'>{item.category.name}</h1>
              <div className='flex items-center'>
                <h1 className='ml-4 font-bold'>Rs. {item.price}</h1>
                <h1 className='text-xs text-gray-400 line-through ml-1'>{item.price + 500}</h1>
                <h1 className='text-xs text-orange-400 ml-1'>(Rs 100 off)</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>



    </>
  )
}

export default Products
