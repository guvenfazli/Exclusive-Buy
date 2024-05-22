"use client"
import { useContext, useEffect, useState } from "react"
import { Cart } from "@/store/Cart"
import CartItem from "@/components/cart/cartItem"
import CartNavBar from "@/components/NavBar/cartNavBar"

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

  
  return (
    <div className="flex justify-between items-start py-4">
      <div className="flex flex-col w-full gap-y-10 justify-center items-center">
        {cartCtx.cart.map((item) => <CartItem key={item.product_asin} item={item} manageQuantity={manageQuantity} />)}
      </div>
      <CartNavBar total={totalPrice} />
    </div>
  )
}