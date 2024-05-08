import React from 'react'
import SearchBar from '../Component/siteHeader/sub_coponentSiteHeare/searchBar'
import LogoSection from '../Component/siteHeader/sub_coponentSiteHeare/LogoSection'

const Siteheader = () => {
    return (
        <>
            <div className='flex bg-teal'>
                <div className='container md:w-8/12 flex'>
                    <LogoSection />
                    <SearchBar />
                </div>
            </div>
        </>
    )
}

export default Siteheader