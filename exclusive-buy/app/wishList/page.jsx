"use client"
import { useEffect, useState, useContext } from "react"
import { Cart } from "@/store/Cart"
import WishListItem from "@/components/cart/wishListItem"
export default function WishListPage() {

  const cartCtx = useContext(Cart)
  const [wishList, setWishList] = useState(cartCtx.wishList)



  return (
    <div className="flex flex-col w-full justify-start items-center py-4 gap-y-10">
      {wishList.map((item) => <WishListItem item={item} />)}
    </div>
  )
}