import React from 'react'
import Image from 'next/image'
import logo from '@/public/logo.png'

const LogoSection = () => {
    return (
        <div className='flex'>
            <div>
                <Image src={logo} alt='Find Doctor, Schedule Doctor' className='py-2' width={100} placeholder='blur' />
            </div>
            <div>
                <h1 className='text-4xl hidden sm:block text-white font-serif py-2'>Medisoft</h1>
            </div>
        </div>

    )
}

export default LogoSection