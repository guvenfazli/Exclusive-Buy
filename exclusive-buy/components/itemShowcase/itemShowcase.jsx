"use client"
import { useEffect, useState } from "react"
import { nextArrow, prevArrow } from "./showcaseIcons"
import { motion } from "framer-motion"
import fetchDealItems from "@/utils/dataManagement"
import ItemCard from "../itemCard/itemCard"
import NavBar from "@/components/NavBar/navbar"
import Loading from "@/components/loading/loading"

export default function ItemShowcase() {
  const [products, setProducts] = useState()
  const [page, setPage] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const data = await fetchDealItems()
      setProducts(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  function navigateSliderPage(option) {
    if (option === '+') {
      setPage((prev) => prev += 2)
    } else if (option === '-') {
      setPage((prev) => prev -= 2)
    }
  }

  console.log(products)

  return (
    <div className="flex overflow-x-hidden mb-12">
      <NavBar />
      {loading ? <Loading /> :
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex overflow-x-hidden flex-col justify-between">
          <div className="flex flex-row overflow-x-hidden w-full flex-nowrap justify-between p-4 gap-y-4 gap-x-4">
            {products && products.map((item) => <ItemCard key={item?.product_asin} item={item} page={page} hot={item} />)}
          </div>
          <div className="flex flex-row w-full justify-around items-center mb-12">
            <button disabled={page === 0} className="p-1 bg-red-600 rounded-full disabled:bg-red-400" onClick={() => navigateSliderPage('-')}>{prevArrow}</button>
            <button disabled={page >= 27} className="p-1 bg-red-600 rounded-full disabled:bg-red-400" onClick={() => navigateSliderPage('+')}>{nextArrow}</button>
          </div>
        </motion.div>
      }

    </div>
  )
}