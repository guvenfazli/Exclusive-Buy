"use client"
import { useContext, useEffect, useState } from "react"
import { addToWishListIcon, addToCartIcon, bestSelling } from "@/components/itemCard/itemCardIcons"
import { AnimatePresence, motion } from "framer-motion"
import { Cart } from "@/store/Cart"
import Image from "next/image"
import Link from "next/link"
import RatingStars from "@/components/ratingStars/ratingStars"

export default function ItemCard({ item, page, hot, categoryItem }) {

  const [addedToCart, setAddedToCart] = useState(false)
  const [addedToWish, setAddedToWish] = useState(false)
  const [alreadyInWish, setAlreadyInWish] = useState(false)
  const cartCtx = useContext(Cart)
  const categoryRating = Math.round(+categoryItem?.product_star_rating)
  useEffect(() => {
    if (addedToCart) {
      setTimeout(() => {
        setAddedToCart(false)
      }, 1500)
    } else if (addedToWish) {
      setTimeout(() => {
        setAddedToWish(false)
      }, 1500)
    }

    if (categoryItem) {
      const sameItem = cartCtx.wishList.some((wishItem) => wishItem.product_title === categoryItem.product_title)
      if (sameItem) {
        setAlreadyInWish(true)
      }
    } else if (hot) {
      const sameItem = cartCtx.wishList.some((wishItem) => wishItem.product_title === hot.product_title)
      if (sameItem) {
        setAlreadyInWish(true)
      }
    }
  }, [addedToCart, addedToWish])




  function addToCart(item) {
    setAddedToCart(true)
    let sameItem;
    if (item.product_asin) {
      sameItem = cartCtx.cart.some((sameItem) => sameItem.product_asin === item.product_asin)
    } else if (item.asin) {
      sameItem = cartCtx.cart.some((sameItem) => sameItem.asin === item.asin)
    }
    if (!sameItem) {
      cartCtx.setCart((prev) => {
        let updatedList = [...prev]
        updatedList.push({ ...item, quantity: 1 })
        return updatedList
      })
    } else if (sameItem) {
      cartCtx.setCart((prev) => {
        let updatedList = [...prev]
        const addedItemIndex = updatedList.findIndex((sameProduct) => sameProduct.product_asin === item.product_asin)
        updatedList[addedItemIndex].quantity += 1
        return updatedList
      })
    }

  }

  function addToWishList(item) {
    setAddedToWish(true)
    cartCtx.setWishList((prev) => {
      let updatedList = [...prev]
      updatedList.push(item)
      return updatedList
    })
  }


  if (hot && !categoryItem) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`flex shadow-sm flex-col flex-shrink-0 flex-grow-0 duration-700 ease-in-out justify-between w-1/5 p-4 border max-lg:w-1/4 max-md:w-1/3 max-sm:w-full hover:border-red-400 hover:shadow-red-400`}
        style={{ translate: `${page * -100}%` }}>
        <div className="mb-4 relative h-60 w-full">
          {item?.deal_photo && <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
        </div>

        <div className="mb-4 text-ellipsis">
          <Link href={`/${item.product_asin}`} className="line-clamp-2 font-bold hover:underline cursor-pointer max-md:text-sm">{item.deal_title}</Link>
        </div>

        <div className="flex justify-between mb-4">
          {item.deal_price.amount && <p className="text-red-600 text-lg max-lg:text-sm">{item.deal_price.amount}$</p>}
          {item.list_price.amount && <p className="text-gray-500 text-lg line-through max-lg:text-sm">{item.list_price.amount}$</p>}
        </div>

        <div className=" mb-4">
          <p className="text-gray-500 text-base">Save: {item.savings_amount.amount}$</p>
        </div>

        <div className="flex flex-row items-center justify-between" >
          <button onClick={() => addToCart(item)} className={`duration-150 ease-in-out ${addedToCart ? 'bg-green-600' : 'bg-red-600'} p-2 rounded-full`}>{addToCartIcon}</button>
          <AnimatePresence>
            {addedToCart && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-sm border px-3 bg-red-600 text-white rounded-3xl ">Added!</motion.p>}
          </AnimatePresence>
          <button onClick={() => addToWishList(item)} disabled={alreadyInWish} className={`duration-150 ease-in-out ${addedToWish ? 'bg-green-600' : 'bg-red-600'} p-2 rounded-full disabled:bg-green-500`}>{addToWishListIcon}</button>
        </div>

      </motion.div>
    )
  } else if (!hot && categoryItem) {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`flex shadow-sm flex-col flex-shrink-0 flex-grow-0 duration-700 ease-in-out justify-between w-1/5 p-4 border max-lg:w-1/4 max-md:w-1/3 max-sm:w-full hover:border-red-400 hover:shadow-red-400`}>
        <div className="mb-4 relative h-60 w-full">
          {categoryItem?.product_photo && <Image src={categoryItem.product_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
        </div>

        <div className="mb-4 text-ellipsis">
          <Link href={`/${categoryItem.asin}`} className="line-clamp-2 font-bold hover:underline cursor-pointer">{categoryItem?.product_title}</Link>
        </div>

        <div className="flex justify-between mb-4">
          <p className="text-red-600 text-lg">{categoryItem?.product_price ? categoryItem?.product_price : '$199.99'}</p>
        </div>

        <div className="flex w-full mb-4 justify-between items-center">
          <div className="w-full">
            <div className="flex relative items-center w-full justify-between ">
              <p className="text-gray-500 text-base">Rating: {categoryItem?.product_star_rating ? categoryItem?.product_star_rating : 4.7} </p>
              <RatingStars rating={categoryRating} />
            </div>
            <p className="text-gray-400 text-sm">{categoryItem?.product_num_ratings ? '(' + categoryItem?.product_num_ratings + ')' : '(' + 164 + ')'}</p>
          </div>
          {categoryItem?.is_best_seller && bestSelling}
        </div>

        <div className="flex flex-row items-center justify-between" >
          <button onClick={() => addToCart(categoryItem)} className={`duration-150 ease-in-out ${addedToCart ? 'bg-green-600' : 'bg-red-600'} p-2 rounded-full`}>{addToCartIcon}</button>
          <AnimatePresence>
            {addedToCart && <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="text-sm border px-3 bg-red-600 text-white rounded-3xl ">Added!</motion.p>}
          </AnimatePresence>
          <button onClick={() => addToWishList(categoryItem)} disabled={alreadyInWish} className={`bg-red-600 ease-in-out duration-100 p-2 rounded-full hover:bg-red-700 ${alreadyInWish && 'bg-green-700'} disabled:bg-green-500`}>{addToWishListIcon}</button>
        </div>

      </motion.div>
    )
  }


}