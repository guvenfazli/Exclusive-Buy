"use client"

import { useState } from "react"
import { phonesIcon, laptopsIcon, camerasIcon, shoesIcon, headphonesIcon } from "./buttonIcons"
import { phonesActive, laptopsActive, camerasActive, shoesActive, headphonesActive } from "./buttonIcons"
import CategoryItems from "../categoryItems/categoryItems"

export default function CategoryButtons() {

  const [activeFilter, setActiveFilter] = useState('Phones')

  function searchByCategory(category) {
    setActiveFilter(category)
  }

  return (
    <div className="flex flex-col w-full justify-around items-center">
      <div className="flex w-full justify-around items-center mb-16">
        <div onClick={() => searchByCategory('Phones')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Phones' && 'bg-red-700'}`}>
          <p>{activeFilter === 'Phones' ? phonesActive : phonesIcon}</p>
          <p className={`text-xl ${activeFilter === 'Phones' && 'text-white'}`}>Phones</p>
        </div>

        <div onClick={() => searchByCategory('Laptops')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Laptops' && 'bg-red-700'}`}>
          <p>{activeFilter === 'Laptops' ? laptopsActive : laptopsIcon}</p>
          <p className={`text-xl ${activeFilter === 'Laptops' && 'text-white'}`}>Laptops</p>
        </div>

        <div onClick={() => searchByCategory('Cameras')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Cameras' && 'bg-red-700'}`}>
          <p>{activeFilter === 'Cameras' ? camerasActive : camerasIcon}</p>
          <p className={`text-xl ${activeFilter === 'Cameras' && 'text-white'}`}>Cameras</p>
        </div>

        <div onClick={() => searchByCategory('Shoes')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Shoes' && 'bg-red-700'}`}>
          <p>{activeFilter === 'Shoes' ? shoesActive : shoesIcon}</p>
          <p className={`text-xl ${activeFilter === 'Shoes' && 'text-white'}`}>Shoes</p>
        </div>

        <div onClick={() => searchByCategory('Headphones')} className={`border flex flex-col cursor-pointer p-8 gap-y-4 min-w-40 justify-center items-center hover:bg-red-200 ease-in-out duration-100 ${activeFilter === 'Headphones' && 'bg-red-700'}`}>
          <p>{activeFilter === 'Headphones' ? headphonesActive : headphonesIcon}</p>
          <p className={`text-xl ${activeFilter === 'Headphones' && 'text-white'}`}>Headphones</p>
        </div>

      </div>
      <div className="w-full flex">
        <CategoryItems category={activeFilter} />

      </div>

    </div>
  )
}