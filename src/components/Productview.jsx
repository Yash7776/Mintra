import React from 'react'
import saree from '../assets/apple.jpg'
const Productview = () => {
    return (
        <>
        <div className='grid grid-cols-2 p-4'>
            <div className='grid grid-rows-2'>
                <img src={saree} className='p-1' />
                <div className='flex w-3/6'>
                    <img src={saree} className='p-1' />
                    <img src={saree} className='p-1'/>
                </div>
            </div>
            <div className='p-5'>
                <h1 className='text-2xl font-bold'>Saree title</h1>
                <h1 className='text-gray-500 text-xl mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus dolores libero mollitia voluptatum ea minus sed reiciendis illum molestiae quam!</h1>
                <hr className='mt-2'/>
                <div className='flex items-center mt-4'>
                <h1 className='text-2xl font-bold'>Rs.500</h1>
                <h1 className='text-xl text-gray-500 ml-2'>MRP.</h1>
                <h1 className='line-through text-xl text-gray-500 ml-1'>1000</h1>
                <h1 className='text-lg font-bold text-orange-500 ml-2'>(Rs. 500 Off)</h1>
                </div>
                <h1 className='text-lg font-semibold text-green-500 mt-3'>Including all texes</h1>
                <button type="button" class="mt-4 bg-rose-500 h-14 text-white w-80 font-bold py-2 px-4 text-lg rounded-sm">Add To Cart</button>

            </div>
        </div>
        </>
    )
}

export default Productview
