"use client"

import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"
import Image from "next/image"
import ItemPrev from "./ItemPrev"
export default function ItemInfo({ itemId }) {




  const [product, setProduct] = useState()

  useEffect(() => {
    async function fetchProduct() {
      const data = await fetchDetails(itemId)
      console.log(data)
      setProduct(data)
    }

    fetchProduct()
  }, [itemId])

  const itemPhotos = product?.product_photos.map((img) => img)

  console.log(itemPhotos)

  return (
    <div className="flex w-full justify-around border h-max p-4 items-start">

      <div className="relative w-1/2 h-96">
        {<Image src={itemPhotos[0]} fill />}
      </div>

      <div className="flex flex-col justify-around items-start">
        <div className="flex justify-start items-start">
          <p>{product?.product_title}</p>
        </div>

        <div className="flex justify-start items-start">
          <p>Rating:{product?.product_star_rating} {`(${product?.product_num_rating})`}</p>
        </div>


        <div className="flex flex-col justify-start items-start">
          <p>Product Specs</p>
          <div>
            {product?.about_product.map((row) => <p>{row}</p>)}
          </div>
        </div>

        <div className="flex flex-col justify-start items-start">
          <p>Description</p>
          <div>
            <p>Manufacturer: {product?.Manufacturer}</p>
            <p>Category: {product?.Department}</p>
          </div>
        </div>

        <div className="flex flex-col justify-between items-start">
          <div>
            <p>Customer Overall Review</p>
            <p>{product?.customers_say}</p>
          </div>
        </div>
      </div>
    </div>
  )
}