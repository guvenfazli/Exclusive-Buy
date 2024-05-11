"use client"
import { useEffect, useState } from "react"
import fetchDealItems from "@/utils/dataManagement"
import ItemCard from "../itemCard/itemCard"
import { nextArrow } from "./showcaseIcons"
import { prevArrow } from "./showcaseIcons"
export default function ItemShowcase() {

  const [products, setProducts] = useState()
  const [page, setPage] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDealItems()
      setProducts(data)
    }

    fetchData()
  }, [])

  function navigateSliderPage(option) {
    if (option === '+') {
      setPage((prev) => prev += 3)
    } else if (option === '-') {
      setPage((prev) => prev -= 3)
    }
  }


  return (
    <>
      <div className="flex flex-row overflow-x-hidden w-full flex-nowrap justify-between p-4 gap-y-4 gap-x-4">
        {products && products.map((item) => <ItemCard key={item.deal_id} item={item} page={page} />)}

      </div>
      <div className="flex flex-row w-full justify-around items-center">
        <button className="p-1 bg-red-800 rounded-full" onClick={() => navigateSliderPage('-')}>{prevArrow}</button>
        <button className="p-1 bg-red-800 rounded-full" onClick={() => navigateSliderPage('+')}>{nextArrow}</button>
      </div>
    </>
  )
}