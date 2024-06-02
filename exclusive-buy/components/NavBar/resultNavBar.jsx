"use client"

import { useRef } from "react"

export default function ResultNavBar({ priceFilter, setPriceFilter, isOnSale, setIsOnSale, setListFilter, listFilter, filterResults, condition, setCondition, setPage }) {

  const minPrice = useRef()
  const maxPrice = useRef()

  function changePriceFilter(price, priceType) {
    setPriceFilter((prev) => {
      let newPrice = { ...prev }
      newPrice[price] = priceType.current.value
      return newPrice
    })
    setPage(1)
  }


  return (
    <div className="flex gap-y-4 flex-col">
      <div className="flex relative py-2 flex-col gap-y-4 w-full">
        <p className="text-lg">Price</p>
        <input placeholder="Min" value={priceFilter.min} onChange={() => changePriceFilter('min', minPrice)} ref={minPrice} className="border p-1" />
        <input placeholder="Max" value={priceFilter.max} onChange={() => changePriceFilter('max', maxPrice)} ref={maxPrice} className="border p-1" />
        <div className="flex items-center">
          <div className="flex w-1/2">
            <input type="range" onChange={() => changePriceFilter('min', minPrice)} ref={minPrice} min="0" max="1000" className="flex w-full left-0 bottom-1" />
          </div>
          <div className="flex w-1/2">
            <input type="range" onChange={() => changePriceFilter('max', maxPrice)} ref={maxPrice} min="1000" max="5000" className="flex w-full right-0 bottom-1" />
          </div>
        </div>
      </div>
      <p className="text-lg">On Sale?</p>
      <div className="flex flex-col border-b py-2 w-full justify-start items-start">
        <div className="flex items-center justify-start">
          <input onClick={() => setIsOnSale(true)} type="checkbox" id="yes" name="yes" checked={isOnSale} className="w-3 mr-1 h-3 cursor-pointer" />
          <p className="text-sm">Yes</p>
        </div>
        <div className="flex py-2 items-center justify-start">
          <input onClick={() => setIsOnSale(false)} type="checkbox" id="yes" name="yes" checked={!isOnSale} className="w-3 mr-1 h-3 cursor-pointer" />
          <p className="text-sm">No</p>
        </div>
      </div>
      <div className="flex border-b py-2 gap-y-2 flex-col">
        <p className="text-lg">Listing</p>
        <div className="flex flex-col items-start gap-y-2">
          <div className="flex w-full items-center justify-start">
            <button onClick={() => setListFilter('LOWEST_PRICE')} className={`border-2 mr-2 border-red-700 ease-in-out duration-100 rounded-full p-1.5 hover:bg-red-200 ${listFilter === 'LOWEST_PRICE' && 'bg-red-300'}`}></button>
            <p className="text-sm">Cheap to Expensive</p>
          </div>
          <div className="flex w-full items-center justify-start">
            <button onClick={() => setListFilter('HIGHEST_PRICE')} className={`border-2 mr-2 border-red-700 ease-in-out duration-100 rounded-full p-1.5 hover:bg-red-200 ${listFilter === 'HIGHEST_PRICE' && 'bg-red-300'}`}></button>
            <p className="text-sm">Expensive to Cheap</p>
          </div>
          <div className="flex w-full items-center justify-start">
            <button onClick={() => setListFilter('BEST_SELLERS')} className={`border-2 mr-2 border-red-700 ease-in-out duration-100 rounded-full p-1.5 hover:bg-red-200 ${listFilter === 'BEST_SELLERS' && 'bg-red-300'}`}></button>
            <p className="text-sm">Best Sellers</p>
          </div>
          <div className="flex w-full items-center justify-start">
            <button onClick={() => setListFilter('RELEVANCE')} className={`border-2 mr-2 border-red-700 ease-in-out duration-100 rounded-full p-1.5 hover:bg-red-200 ${listFilter === 'RELEVANCE' && 'bg-red-300'}`}></button>
            <p className="text-sm">A - Z</p>
          </div>
        </div>
      </div>
      <div className="flex border-b py-2 gap-y-2 flex-col">
        <p className="text-lg">Condition</p>
        <div className="flex items-center justify-start">
          <input onClick={() => setCondition('NEW')} type="checkbox" id="yes" name="yes" checked={condition === 'NEW'} className="w-3 mr-1 h-3 cursor-pointer" />
          <p className="text-sm">New</p>
        </div>
        <div className="flex items-center justify-start">
          <input onClick={() => setCondition('USED')} type="checkbox" id="yes" name="yes" checked={condition === 'USED'} className="w-3 mr-1 h-3 cursor-pointer" />
          <p className="text-sm">Used</p>
        </div>
        <div className="flex items-center justify-start">
          <input onClick={() => setCondition('ALL')} type="checkbox" id="yes" name="yes" checked={condition === 'ALL'} className="w-3 mr-1 h-3 cursor-pointer" />
          <p className="text-sm">All</p>
        </div>

      </div>
      <div className="flex justify-center items-center">
        <button onClick={() => filterResults(listFilter, priceFilter, condition)} className="bg-red-700 px-5 rounded-md py-1 text-lg text-white duration-75 ease-in-out hover:bg-red-800">Filter</button>
      </div>

    </div>
  )
}