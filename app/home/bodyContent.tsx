import React from 'react'
import DoctorImage from '../Component/bodyContent/doctorImageBody'
import BodyInfo from '../Component/bodyContent/bodyInfo'


const BodyContent = () => {
    return (
        <div className='bg-teal2'>
            <div className='container md:w-8/12 flex'>
                <BodyInfo />
                <DoctorImage />
            </div>
        </div>
    )
}

export default BodyContent