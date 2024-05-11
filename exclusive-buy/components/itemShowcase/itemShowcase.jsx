"use client"
import { useEffect, useState } from "react"
import fetchDealItems from "@/utils/dataManagement"
import ItemCard from "../itemCard/itemCard"
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
      <div className="flex border-2 flex-row w-full justify-center items-center">
        <button onClick={() => navigateSliderPage('-')}>Previous</button>
        <button onClick={() => navigateSliderPage('+')}>Next</button>
      </div>
    </>
  )
}