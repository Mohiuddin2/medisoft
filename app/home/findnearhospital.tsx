import React from 'react'
import { lato } from '../fonts'

const Finnearhospital = () => {
    return (
        <div className='bg-white h-[400px]'>
            <div className='container md:w-8/12 h-[400px]'>
                <div className='w-6/12 p-6'>
                    <h1 className={`${lato.className} text-5xl`}>Find your nearest hospital or clinic</h1>
                    <h2 className={`${lato.className} text-lg font-bold`}>We have -- hospitals and -- clinics across the Bangladesh</h2>
                </div>
                <div className='pl-4'>
                    <input type="text" placeholder="Type here" className="input bg-white input-info input-md border border-teal2 w-full max-w-xs" />
                </div>
            </div>
        </div>
    )
}

export default Finnearhospital