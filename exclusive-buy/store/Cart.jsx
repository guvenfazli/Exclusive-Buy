"use client"

import { createContext, useState } from "react";

export const Cart = createContext({
  cart: [],
  setCart: () => { }
});

export default function CartContext({ children }) {
  const [cart, setCart] = useState([])

  const cartList = {
    cart: cart,
    setCart: setCart
  }

  return (
    <Cart.Provider value={cartList}>
      {children}
    </Cart.Provider>
  )
}