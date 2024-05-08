'use client'
// import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'
import Link from 'next/link'

const Navbar = () => {
    // const { status, data: session } = useSession()

    return (
        <div className='bg-navbarbg text-white'>
            <div className='container md:w-8/12 flex justify-center p-2 py-2 gap-6 '>
                <Link className="hover:underline hover:underline-offset-4 decoration-emerald decoration-1" href="/">Home</Link>
                <h2 className="text-emerald">|</h2>



            </div>
        </div>
    )
}

export default Navbar