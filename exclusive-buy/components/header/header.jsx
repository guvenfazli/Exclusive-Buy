"use client"
import { useContext, useEffect, useRef, useState } from 'react'
import { searchGlass } from './headerIcons'
import { cartIcon } from './headerIcons'
import { heartIcon } from './headerIcons'
import { searchProduct } from '@/utils/dataManagement'
import { Cart } from '@/store/Cart'
import SearchResults from "@/components/searchResults/searchResults"
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

export default function Header() {

  const cartCtx = useContext(Cart)
  const cartQuantity = cartCtx.cart.map((item) => item.quantity)
  const cartItemsQuantity = cartQuantity.reduce((a, b) => a + b, 0)

  /* S T A T E S */
  const [keyWord, setKeyWord] = useState('')
  const [searchResult, setSearchResult] = useState()
  const [isVisible, setIsVisible] = useState(searchResult ? true : false)
  const [loading, setLoading] = useState(false)
  /* S T A T E S */

  const searchWord = useRef()

  function setSearchWord() {
    setTimeout(() => {
      setKeyWord(searchWord.current?.value)
    }, 1000)
  }


  useEffect(() => {
    if (keyWord.length > 2) {
      async function setData() {
        const animationTimer = setInterval(() => {
          setLoading((prev) => !prev)
        }, 800)
        const data = await searchProduct(keyWord)
        setSearchResult(data)
        clearInterval(animationTimer)
        setLoading(false)
      }
      setData()
    } else {
      setSearchResult('')
    }
  }, [keyWord])


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
        <div className={`flex justify-between relative items-center rounded-md focus:outline-none focus:ring-0 focus:border-transparent bg-gray-100 ${loading ? 'bg-gray-50' : 'bg-gray-100'} px-3`}>
          <input onMouseEnter={() => setIsVisible(true)} ref={searchWord} onChange={setSearchWord} className={`bg-transparent duration-100 ease-in-out p-3 text-black focus:outline-none focus:border-transparent transition-none focus:ring-0`} placeholder="What are you looking for?" />
          <p>{searchGlass}</p>
          {searchResult &&
            <AnimatePresence>
              <SearchResults result={searchResult} isVisible={isVisible} setIsVisible={setIsVisible} />
            </AnimatePresence>
          }
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