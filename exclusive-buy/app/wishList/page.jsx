"use client"
import { useEffect, useState, useContext } from "react"
import { Cart } from "@/store/Cart"
import WishListItem from "@/components/cart/wishListItem"
export default function WishListPage() {

  const cartCtx = useContext(Cart)
  const [wishList, setWishList] = useState(cartCtx.wishList)

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

  return (
    <div className="flex flex-col w-full justify-start items-center py-4 gap-y-10">
      {cartCtx.wishList.map((item) => <WishListItem item={item} addToCart={addToCart} removeWish={removeWish} />)}
    </div>
  )
}