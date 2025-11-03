import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <>
            <nav className='flex w-full bg-slate-800 justify-between px-3 items-center '>
                <Link href="/"><h2 className='text-white'>BDF</h2></Link>
                <ul className='flex bg-slate-800 text-white text-center gap-5 my-2'>
                    <Link href="/"><li>Home</li></Link>
                    <Link href="/new"><li>New</li></Link>
                    <Link href="/account"><li>Account</li></Link>
                    <Link href="/about"><li>About</li></Link>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
