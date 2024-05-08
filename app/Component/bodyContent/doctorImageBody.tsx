import React from 'react'
import Image from 'next/image'
import doctorImage from '@/public/doctor_iamge/doctor.jpg'

const DoctorImage = () => {
    return (
        <div className='grid justify-end'> <Image src={doctorImage} alt='MediSoft doctor image' /></div>
    )
}

export default DoctorImage