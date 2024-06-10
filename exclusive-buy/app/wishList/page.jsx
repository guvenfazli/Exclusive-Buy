"use client"
import { useContext } from "react"
import { Cart } from "@/store/Cart"
import { heartIcon } from "@/components/header/headerIcons"
import WishListItem from "@/components/cart/wishListItem"
import Link from "next/link"

export default function WishListPage() {

  const cartCtx = useContext(Cart)

  function addToCart(item) {
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

    cartCtx.setWishList((prev) => {
      let updatedList = [...prev]
      const addedItemIndex = updatedList.findIndex((sameProduct) => {
        if (sameProduct.product_asin) {
          return sameProduct.product_asin === item.product_asin
        } else if (sameProduct.asin) {
          return sameProduct.asin === item.asin
        }
      })
      updatedList.splice(addedItemIndex, 1)
      return updatedList
    })
  }

  function removeWish(item) {
    cartCtx.setWishList((prev) => {
      let updatedList = [...prev]
      const addedItemIndex = updatedList.findIndex((sameProduct) => {
        if (sameProduct.product_asin) {
          return sameProduct.product_asin === item.product_asin
        } else if (sameProduct.asin) {
          return sameProduct.asin === item.asin
        }
      })
      updatedList.splice(addedItemIndex, 1)
      return updatedList
    })
  }

  if (cartCtx.wishList.length >= 1) {
    return (
      <div className="flex flex-col w-full justify-start items-center py-4 gap-y-10">
        {cartCtx.wishList.map((item) => <WishListItem key={item.product_asin || item.asin} item={item} addToCart={addToCart} removeWish={removeWish} />)}
      </div>
    )
  } else {
    return (
      <div className="w-full flex py-4 justify-center items-center">
        <div className="w-2/5 border flex justify-between p-5 shadow-md rounded-xl items-center">
          {heartIcon}
          <p className="text-xl text-black">You did not add any item into your wishlist.</p>
          <Link href={'/'} className=" bg-red-700 text-xl text-white p-2 px-9 shadow-sm">Start Adding</Link>
        </div>
      </div>
    )
  }
}