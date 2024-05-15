"use client"

import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"
import Image from "next/image"
import SimilarProducts from "./SimilarProducts"
import ItemPrev from "./ItemPrev"

export default function ItemInfo({ itemId }) {

  const [product, setProduct] = useState()
  const [similarItems, setSimilarItems] = useState()
  const [imgIndex, setImgIndex] = useState(0)
  const itemPhotos = product?.product_photos.map((img) => img)

  function changeItemPhoto(imgIndex) {
    setImgIndex(imgIndex)
  }

  useEffect(() => {
    async function fetchProduct() {
      const data = await fetchDetails(itemId)
      console.log(data)
      setProduct(data)
      setSimilarItems(data.product_variations.style)
    }


    fetchProduct()
  }, [itemId])


  console.log(itemPhotos)

  return (
    <div>
      <div className="flex w-full justify-around h-max p-4 items-start">

        <div className="relative w-1/5 h-96">
          {<Image src={itemPhotos && itemPhotos[imgIndex]} fill />}
          <div className="absolute flex bottom-0 w-full justify-around items-center">
            {itemPhotos?.map((img, index) => <button onClick={() => changeItemPhoto(index)} className="px-2 rounded-3xl text-white bg-red-700">{index + 1}</button>)}
          </div>
        </div>

        <div className="flex flex-col justify-around w-1/2 items-start p-4">
          <div className="flex justify-start items-start mb-2">
            <p className=" text-lg font-bold">{product?.product_title}</p>
          </div>

          <div className="flex justify-start items-start mb-2">
            <p className=" text-lg"><span className="font-bold text-lg mr-2 text-red-600">Rating:</span>{product?.product_star_rating} / 5 <span className="text-xs">{`(${product?.product_num_ratings})`}</span></p>
          </div>


          <div className="flex flex-col justify-start items-start mb-2">
            <p className="text-xl font-bold mb-2 text-red-600">Product Specs</p>
            <div>
              {product?.about_product.map((row) => <p className=" mb-2">{row}</p>)}
            </div>
          </div>

          <div className="flex flex-col justify-start items-start mb-4">
            <p className="text-xl font-bold mb-2 text-red-600">Description</p>
            <div>
              <p className="mb-2">Manufacturer: {product?.product_details.Brand}</p>
              <p className="mb-2">Model: {product?.product_details['Model Name']}</p>
              <p className="mb-2">Color: {product?.product_details.Color}</p>
            </div>
          </div>

          <div className="flex flex-col justify-between items-start mb-4">
            <div>
              <p className="text-xl font-bold mb-2 text-red-600">Customer Overall Review</p>
              <p>{product?.customers_say}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around border h-80 w-1/6 items-center p-4">
          <p className="text-xl font-bold text-red-600">{product?.product_price + '$'}</p>
          <p className="text-sm line-through text-gray-600">{product?.product_original_price}</p>
          <p className={`text-lg text-green-700`}>{product?.product_availability}</p>
          <button className=" bg-red-700 rounded-2xl text-white p-2 w-full ease-in-out duration-100 hover:bg-red-800">Add to Cart</button>
          <button className=" bg-red-700 rounded-2xl text-white p-2 w-full ease-in-out duration-100 hover:bg-red-800">Add to Wishlist</button>
        </div>
      </div>
      {similarItems && similarItems.map((item) => <SimilarProducts key={item.asin} similarItems={item} />)}

    </div>
  )
}