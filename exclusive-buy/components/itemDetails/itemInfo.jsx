"use client"

import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"
import Image from "next/image"
import ItemPrev from "./ItemPrev"
export default function ItemInfo({ itemId }) {

  const [product, setProduct] = useState()
  const [imgIndex, setImgIndex] = useState(0)
  const itemPhotos = product?.product_photos.map((img) => img)

  function changeItemPhoto(imgIndex){
    setImgIndex(imgIndex)
  }

  useEffect(() => {
    async function fetchProduct() {
      const data = await fetchDetails(itemId)
      setProduct(data)
    }


    fetchProduct()
  }, [itemId])


  console.log(itemPhotos)

  return (
    <div className="flex w-full justify-around h-max p-4 items-start">

      <div className="relative w-1/5 h-96">
        {<Image src={itemPhotos && itemPhotos[imgIndex]} fill />}
        <div className="absolute flex bottom-0 w-full justify-around items-center">
          {itemPhotos?.map((img, index) => <button onClick={() => changeItemPhoto(index)} className="px-2 rounded-3xl text-white bg-gray-700">{index + 1}</button>)}
        </div>
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