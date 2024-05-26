"use client"

import { useState } from "react"
import { phonesIcon, laptopsIcon, camerasIcon, shoesIcon, headphonesIcon } from "./buttonIcons"
import { phonesActive, laptopsActive, camerasActive, shoesActive, headphonesActive } from "./buttonIcons"
import { nextArrow, prevArrow } from "../itemShowcase/showcaseIcons"
import CategoryItems from "../categoryItems/categoryItems"

export default function CategoryButtons() {

  const [activeFilter, setActiveFilter] = useState('Phones')
  const [pageNumber, setPageNumber] = useState(1)

  function searchByCategory(category) {
    setActiveFilter(category)
    setPageNumber(1)
  }

  function navigatePage(option) {
    if (option === '+') {
      setPageNumber((prev) => prev += 1)
    } else {
      setPageNumber((prev) => prev -= 1)

    }
  }

  return (
    <div className="flex flex-col w-full justify-around items-center">
      <div className="flex flex-wrap gap-y-4 w-full justify-around items-center mb-10">
        <div onClick={() => searchByCategory('Phones')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Phones' && 'bg-red-700'} max-sm:min-w-10`}>
          <p>{activeFilter === 'Phones' ? phonesActive : phonesIcon}</p>
          <p className={`text-xl ${activeFilter === 'Phones' && 'text-white'} max-sm:text-sm`}>Phones</p>
        </div>

        <div onClick={() => searchByCategory('Laptops')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Laptops' && 'bg-red-700'} max-sm:min-w-10`}>
          <p>{activeFilter === 'Laptops' ? laptopsActive : laptopsIcon}</p>
          <p className={`text-xl ${activeFilter === 'Laptops' && 'text-white'} max-sm:text-sm`}>Laptops</p>
        </div>

        <div onClick={() => searchByCategory('Cameras')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Cameras' && 'bg-red-700'} max-sm:min-w-10`}>
          <p>{activeFilter === 'Cameras' ? camerasActive : camerasIcon}</p>
          <p className={`text-xl ${activeFilter === 'Cameras' && 'text-white'} max-sm:text-sm`}>Cameras</p>
        </div>

        <div onClick={() => searchByCategory('Shoes')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Shoes' && 'bg-red-700'} max-sm:min-w-10`}>
          <p>{activeFilter === 'Shoes' ? shoesActive : shoesIcon}</p>
          <p className={`text-xl ${activeFilter === 'Shoes' && 'text-white'} max-sm:text-sm`}>Shoes</p>
        </div>

        <div onClick={() => searchByCategory('Headphones')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Headphones' && 'bg-red-700'}`}>
          <p>{activeFilter === 'Headphones' ? headphonesActive : headphonesIcon}</p>
          <p className={`text-xl ${activeFilter === 'Headphones' && 'text-white'} max-sm:text-sm`}>Headphones</p>
        </div>

      </div>

      <div className="w-full flex flex-col">
        <div className="flex w-full mb-3 p-3 justify-end items-center">
          <button disabled={pageNumber === 1} onClick={() => navigatePage('-')} className="p-1 bg-red-600 rounded-full disabled:bg-red-400">{prevArrow}</button>
          <p className="ml-6">{pageNumber}</p>
          <button onClick={() => navigatePage('+')} className="p-1 ml-6 bg-red-600 rounded-full disabled:bg-red-400">{nextArrow}</button>
        </div>
        <CategoryItems pageNumber={pageNumber} category={activeFilter} />
      </div>

    </div>
  )
}