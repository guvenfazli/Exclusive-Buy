"use client"
import { useContext, useEffect, useState } from "react"
import { Cart } from "@/store/Cart"
import CartItem from "@/components/cart/cartItem"
import CartNavBar from "@/components/NavBar/cartNavBar"
import { cartIcon } from "@/components/header/headerIcons"
import Link from "next/link"

export default function CartPage() {

  const cartCtx = useContext(Cart)
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    setTotalPrice(() => {
      const deal = cartCtx.cart.filter((item) => item.deal_price)
      const dealPrices = deal.map((price) => parseFloat(price.deal_price.amount) * price.quantity)
      const dealSum = dealPrices.reduce((a, b) => a + b, 0)
      const offDeal = cartCtx.cart.filter((item) => item.product_price)
      const offDealPrices = offDeal.map((price) => parseFloat(price.product_price.replaceAll('$', '')) * price.quantity)
      const offDealSum = offDealPrices.reduce((a, b) => a + b, 0)
      let totalPrice = dealSum + offDealSum
      return totalPrice
    })
  }, [cartCtx.cart])


  console.log(cartCtx.cart)

  function manageQuantity(item, option) {
    if (option === '+') {
      cartCtx.setCart((prev) => {
        let updatedList = [...prev]
        const addedItemIndex = updatedList.findIndex((sameProduct) => {
          if (sameProduct.product_asin) {
            return sameProduct.product_asin === item.product_asin
          } else if (sameProduct.asin) {
            return sameProduct.asin === item.asin
          }
        })
        updatedList[addedItemIndex].quantity += 1
        return updatedList
      })

    } else if (option === '-') {
      cartCtx.setCart((prev) => {
        let updatedList = [...prev]
        const addedItemIndex = updatedList.findIndex((sameProduct) => {
          if (sameProduct.product_asin) {
            return sameProduct.product_asin === item.product_asin
          } else if (sameProduct.asin) {
            return sameProduct.asin === item.asin
          }
        })
        updatedList[addedItemIndex].quantity -= 1
        if (updatedList[addedItemIndex].quantity === 0) {
          updatedList.splice(addedItemIndex, 1)
        }
        return updatedList
      })
    }
  }

  if (cartCtx.cart.length >= 1) {
    return (
      <div className="flex justify-around w-full px-4 items-start py-4 max-md:flex-col max-md:items-center max-md:gap-y-4">
        <div className="flex flex-col gap-y-10">
          {cartCtx.cart.map((item) => <CartItem key={item.product_asin} item={item} manageQuantity={manageQuantity} />)}
        </div>
        <CartNavBar total={totalPrice} />
      </div>
    )
  } else if (cartCtx.cart.length <= 0) {
    return (
      <div className="w-full flex py-4 justify-center items-center">
        <div className="w-2/5 border flex justify-between p-5 shadow-md rounded-xl items-center">
          {cartIcon}
          <p className="text-xl text-black">You did not add any item into your cart.</p>
          <Link href={'/'} className=" bg-red-700 text-xl text-white p-2 px-9 shadow-sm">Start Shopping</Link>
        </div>
      </div>
    )
  }

}