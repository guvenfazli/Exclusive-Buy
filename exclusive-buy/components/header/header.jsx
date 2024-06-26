"use client"
import { useContext, useEffect, useRef, useState } from 'react'
import { searchGlass, cartIcon, heartIcon } from './headerIcons'
import { searchProduct } from '@/utils/dataManagement'
import { Cart } from '@/store/Cart'
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import SearchResults from "@/components/searchResults/searchResults"
import Link from 'next/link'
import SearchLoader from "@/components/loading/searchLoader"

export default function Header() {
  const router = useRouter()
  const cartCtx = useContext(Cart)
  const cartQuantity = cartCtx.cart.map((item) => item.quantity)
  const cartItemsQuantity = cartQuantity.reduce((a, b) => a + b, 0) // Sum Quantity

  /* S T A T E S */
  const [keyWord, setKeyWord] = useState('')
  const [searchResult, setSearchResult] = useState()
  const [isVisible, setIsVisible] = useState(searchResult ? true : false)
  const [loading, setLoading] = useState(false)
  /* S T A T E S */

  const searchWord = useRef()

  function setSearchWord() {
    setTimeout(() => { setKeyWord(searchWord.current?.value) }, 1500) // Debouncing the search keys.
  }

  useEffect(() => {
    if (keyWord.length > 0) {
      async function setData() {
        setLoading(true)
        const data = await searchProduct(keyWord)
        setSearchResult(data)
        setLoading(false)
      }
      setData()
    } else {
      setSearchResult('')
    }
  }, [keyWord])

  function findResults(e) {
    if (e.key === 'Enter') {
      router.push(`/searchResults/${keyWord}`)
    }
  }



  return (
    <header className="flex justify-between items-center p-3 bg-white border-b border-gray-200 whitespace-nowrap max-sm:flex-col">
      <div className="flex p-3 ">
        <Link href={'/'} className="text-black text-xl font-bold max-lg:text-base max-lg:whitespace-normal max-lg:text-center headerLogo">Exclusive Buy</Link>
      </div>

      <div className="flex p-3 items-center justify-between max-lg:p-1 max-md:hidden">
        <Link href={'/'} className="text-black mr-8 ease-in-out duration-75 hover:border-b text-lg border-black">Home</Link>
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b text-lg border-black">Contact</button>
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b text-lg border-black">About</button>
        <button className="text-black ease-in-out duration-75 hover:border-b text-lg border-black">Sign Up</button>
      </div>

      <div className="flex p-3 items-center justify-between max-md:w-full max-sm:justify-center max-sm:flex-col max-sm:pb-0">
        <div className={`flex justify-between relative items-center rounded-md focus:outline-none focus:ring-0 focus:border-transparent ${loading ? 'bg-gray-200' : 'bg-gray-100'} px-3 max-sm:mb-4`}>
          <input onMouseEnter={() => setIsVisible(true)} ref={searchWord} onChange={(e) => setSearchWord(e)} onKeyDown={(e) => findResults(e)} className={`bg-transparent duration-100 ease-in-out p-3 text-black focus:outline-none focus:border-transparent transition-none focus:ring-0`} placeholder="What are you looking for?" />
          <Link href={`/searchResults/${keyWord}`} className='cursor-pointer'>{loading ? <SearchLoader /> : searchGlass}</Link>
          {searchResult &&
            <AnimatePresence>
              <SearchResults result={searchResult} isVisible={isVisible} setIsVisible={setIsVisible} />
            </AnimatePresence>
          }
        </div>

        <div className="flex p-3 items-center justify-between ml-12 max-lg:p-1 max-lg:ml-7">
          <div className='flex justify-center items-center p-3 relative'>
            <Link href={'/cart'}>{cartIcon}</Link>
            <motion.p animate={{ scale: [1, 1.2, 1], }} transition={{ duration: 0.3 }} key={cartItemsQuantity} className='absolute top-0 bg-red-700 px-1.5 left-2 rounded-full text-sm text-white'>{cartItemsQuantity}</motion.p>
          </div>
          <div className='flex justify-center items-center relative p-3'>
            <Link href={'/wishList'}>{heartIcon}</Link>
            <motion.p animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 0.3 }} key={cartCtx.wishList.length} className='absolute top-0 bg-red-700 px-1.5 left-2 rounded-full text-sm text-white'>{cartCtx.wishList.length}</motion.p>
          </div>
        </div>

      </div>
    </header>
  )
}