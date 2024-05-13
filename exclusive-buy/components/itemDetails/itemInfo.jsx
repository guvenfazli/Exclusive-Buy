"use client"

import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"
export default function ItemInfo({itemId}) {

  const [product, setProduct] = useState()

  useEffect(() => {
    async function fetchProduct() {
      const data = await fetchDetails(itemId)
      console.log(data)
      setProduct(data)
    }

    fetchProduct()
  })

  return (
    <div>
      <p>{product?.product_title}</p>
    </div>
  )
}