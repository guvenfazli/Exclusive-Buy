"use client"
import { useContext, useState } from "react"
import { Cart } from "@/store/Cart"
import CartItem from "@/components/cart/cartItem"
export default function CartPage() {

  const cartCtx = useContext(Cart)

  const [itemList, setItemList] = useState(cartCtx?.cart)

  function manageQuantity(item, option) {
    const sameItem = cartCtx.cart.some((sameItem) => sameItem.product_asin === item.product_asin)
    if (option === '+') {
      cartCtx.setCart((prev) => {
        let updatedList = [...prev]
        const addedItemIndex = updatedList.findIndex((sameProduct) => sameProduct.product_asin === item.product_asin)
        updatedList[addedItemIndex].quantity += 1
        return updatedList
      })
    } else if (option === '-') {
      cartCtx.setCart((prev) => {
        let updatedList = [...prev]
        const addedItemIndex = updatedList.findIndex((sameProduct) => sameProduct.product_asin === item.product_asin)
        updatedList[addedItemIndex].quantity -= 1
        if (updatedList[addedItemIndex].quantity === 0) {
          updatedList.splice(addedItemIndex, 1)
        }
        return updatedList
      })
    }
  }

  console.log(itemList)

  return (
    <div className="flex flex-col w-full gap-y-10 justify-center items-center">
      {cartCtx.cart.map((item) => <CartItem key={item.product_asin} item={item} manageQuantity={manageQuantity} />)}
    </div>
  )
}