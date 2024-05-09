import React from 'react'
import DoctorImage from '../Component/bodyContent/doctorImageBody'
import BodyInfo from '../Component/bodyContent/bodyInfo'


const BodyContent = () => {
    return (
        <div className='bg-teal2'>
            <div className='container md:w-8/12 md:flex gap-5'>
                <DoctorImage />
                <BodyInfo />
            </div>
        </div>
    )
}

export default BodyContent