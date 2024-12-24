import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import coopan from '../assets/banner/500off.jpg'
const Login = () => {
    return (
        <>
            <div className='bg-rose-50 h-screen flex flex-col justify-center items-center'>
                <div className='bg-white h-72 w-96 flex flex-col justify-center items-center'>
                    <img src={coopan} className='mb-16'/>
                    <h1 className='font-bold text-lg'>Login<span className='font-normal text-sm'> or </span>Sighup</h1>
                    <div className='mt-5'>
                    <PhoneInput country={'in'} buttonStyle={{backgroundColor:"white"}} inputStyle={{width:"320px"}} placeholder='Mobile Number'/>
                    </div>
                    <h1 className='text-xs text-gray-400 mt-4'>By continuting I agree To the <span className='text-rose-500 font-bold'>Terms Of Use</span> & <span className='text-rose-500 font-bold'>Privacy Policy</span> </h1>
                    <button type="button" class="mt-4 bg-rose-500 text-white w-80 font-bold py-2 px-4 text-sm">CONTINEW</button>
                    <h1 className='text-xs text-gray-400 mt-4'>Have Trobule To Login <span className='text-rose-500 font-bold'>Get Help</span></h1>

                </div>
            </div>
        </>
    )
}

export default Login
