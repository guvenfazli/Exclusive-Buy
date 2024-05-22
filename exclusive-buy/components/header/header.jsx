"use client"

import { useContext } from 'react'
import { searchGlass } from './headerIcons'
import { cartIcon } from './headerIcons'
import { heartIcon } from './headerIcons'

import { Cart } from '@/store/Cart'
import Link from 'next/link'

export default function Header() {

  const cartCtx = useContext(Cart)
  const cartQuantity = cartCtx.cart.map((item) => item.quantity)
  const cartItemsQuantity = cartQuantity.reduce((a, b) => a + b, 0)

  return (
    <header className="flex justify-between items-center p-3 bg-white border-b border-gray-200 whitespace-nowrap">
      <div className="flex p-3 max-lg:hidden">
        <p className="text-black text-xl font-bold max-lg:text-base max-lg:whitespace-normal max-lg:text-center">Exclusive Buy</p>
      </div>

      <div className="flex p-3 items-center justify-between max-lg:p-1 max-md:hidden">
        <Link href={'/'} className="text-black mr-8 ease-in-out duration-75 hover:border-b text-lg border-black">Home</Link>
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b text-lg border-black">Contact</button>
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b text-lg border-black">About</button>
        <button className="text-black ease-in-out duration-75 hover:border-b text-lg border-black">Sign Up</button>
      </div>

      <div className="flex p-3 items-center justify-between max-md:w-full max-sm:justify-center">
        <div className="flex justify-between items-center rounded-md bg-gray-100 px-3">
          <input className="bg-transparent p-3 text-black focus:outline-none" placeholder="What are you looking for?" />
          <p>{searchGlass}</p>
        </div>

        <div className="flex p-3 items-center justify-between ml-12 max-lg:p-1 max-lg:ml-7 max-sm:hidden">
          <div className='flex justify-center items-center p-3 relative'>
            <Link href={'/cart'}>{cartIcon}</Link>
            <p className='absolute top-0 bg-red-700 px-1.5 left-2 rounded-full text-sm text-white'>{cartItemsQuantity}</p>
          </div>
          <div className='flex justify-center items-center relative p-3'>
            <Link href={'/wishList'}>{heartIcon}</Link>
            <p className='absolute top-0 bg-red-700 px-1.5 left-2 rounded-full text-sm text-white'>{cartCtx.wishList.length}</p>
          </div>
        </div>

      </div>
    </header>
  )
}