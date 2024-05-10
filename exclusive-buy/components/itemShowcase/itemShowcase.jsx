"use client"
import { useEffect, useState } from "react"
import fetchDealItems from "@/utils/dataManagement"
import ItemCard from "../itemCard/itemCard"
export default function ItemShowcase() {

  const [products, setProducts] = useState()

  useEffect(() => {
    async function fetchData() {
      const data = await fetchDealItems()
      setProducts(data)
    }

    fetchData()
  }, [])


  return (
    <div className="flex flex-row w-full flex-wrap border-2 justify-center p-4 gap-y-4 gap-x-4">
      {products && products.map((item) => <ItemCard key={item.deal_id} item={item} />)}
    </div>
  )
}