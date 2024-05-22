import { useEffect, useState, useContext } from "react"
import { Cart } from "@/store/Cart"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
export default function WishListItem({ item }) {

  const cartCtx = useContext(Cart)

  function addToCart(item) {
    cartCtx.setWishList((prev) => {
      let oldList = [...prev]
      const itemIndex = oldList.findIndex((it) => it === item)
      oldList.splice(itemIndex, 1)
      return oldList
    })
    cartCtx.setCart((prev) => {
      let itemList = [...prev]
      itemList.push(item)
      return itemList
    })
  }

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border p-3 w-4/5 flex justify-around items-center rounded-lg">
        <div className="relative h-60 w-1/6 mr-3">
          {item?.deal_photo && <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
          {item?.product_photo && <Image src={item.product_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
        </div>
        <div className="w-full text-wrap p-2">
          <p className="leading-8 text-lg">{item?.deal_title || item?.product_title}</p>
        </div>
        <div className="flex border flex-col h-full text-nowrap items-center justify-around">
          <button onClick={() => addToCart(item)} className="w-full bg-red-700 p-2 rounded-3xl text-sm text-white cursor-pointer hover:bg-red-800">Add to Cart</button>
          <button className="w-full bg-red-700 p-2 rounded-3xl text-sm text-white cursor-pointer hover:bg-red-800">Remove</button>

        </div>
      </motion.div>
    </AnimatePresence>
  )
}