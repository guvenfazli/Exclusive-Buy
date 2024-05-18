"use client"

import { createContext, useState } from "react";

export const Cart = createContext({
  cart: [],
  setCart: () => { },
  wishList: [],
  setWishList: () => { },
});


export default function CartContext({ children }) {
  const [cart, setCart] = useState([])
  const [wishList, setWishList] = useState([])
  const cartList = {
    cart: cart,
    setCart: setCart,
    wishList: wishList,
    setWishList: setWishList
  }

  return (
    <Cart.Provider value={cartList}>
      {children}
    </Cart.Provider>
  )
}