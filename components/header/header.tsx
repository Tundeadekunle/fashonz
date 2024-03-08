import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
      <nav className='navbar justify-between bg-base-300'>
        <Link href={'/'} className='btn btn-ghost text-lg'>
            Fashonz
        </Link>
        <ul className='flex'>
            <li>
                <Link className='btn btn-ghost rounded-btn' href={'/cart'}>Cart</Link>
            </li>
            <li>
                <Link className='btn btn-ghost rounded-btn' href={'/signin'}>Sign In</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
