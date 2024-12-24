import React, { useState } from 'react'

const Offertime = () => {
    const [time, settime] = useState([])
    const date=new Date()
    const hours=date.getHours()
    const minits=date.getMinutes()
    const seconds=date.getSeconds()
    setTimeout(() => {
        settime(`${hours}H ${minits}M ${seconds}S`)
    }, 1000);
    return (
        <>
            <div className='flex flex-col items-center justify-center w-full bg-blue-50 h-14 text-xl'>
               <h1 className='text-gray-500'>Sale Ends In : <span className='text-rose-500'>{time}</span></h1>
            </div>
        </>
    )
}

export default Offertime