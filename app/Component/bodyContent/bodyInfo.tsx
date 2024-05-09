import React from 'react'

const BodyInfo = () => {
    return (
        <div>
            <div className='md:pt-6'>
                <h1 className='text-5xl text-white w-100 font-serif text-start leading-tight'>Ensuring Your Path to Recovery :)</h1>
                <h2 className='font-serif text-2xl text-white'>See an expert within 48 hours.</h2>
            </div>
            <div className='mt-8 flex justify-evenly md:justify-around'>
                <button className="btn bg-white hover:text-white mb-4 md:mb-0 text-black">Make an Enquiry</button>
                <button className="btn bg-white px-5 md:px-10 hover:text-white text-black">Book Online</button>
            </div>
            <div>
                <span className="countdown font-mono text-2xl text-white pt-14 pl-20">
                    <span style={{ "--value": 10 }}></span>:
                    <span style={{ "--value": 24 }}></span>:
                    <span style={{ "--value": 53 }}></span>
                </span>
            </div>
        </div>
    )
}

export default BodyInfo