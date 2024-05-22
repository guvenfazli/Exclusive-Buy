"use client"

import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"
import Image from "next/image"
import SimilarProducts from "./SimilarProducts"
import Loading from "../loading/loading"

export default function ItemInfo({ itemId }) {

  const [product, setProduct] = useState()
  const [similarItems, setSimilarItems] = useState()
  const [itemSpecs, setItemSpecs] = useState()
  const [imgIndex, setImgIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const itemPhotos = product?.product_photos.map((img) => img)


  function changeItemPhoto(imgIndex) {
    setImgIndex(imgIndex)
  }

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      const data = await fetchDetails(itemId)
      setProduct(data)
      setLoading(false)
      setItemSpecs(Object.entries(data.product_details))
      setSimilarItems(data.product_variations.style)
    }


    fetchProduct()
  }, [itemId])



  return (
    <div className="w-full">
      {loading ? <Loading /> :
        <>
          <div className="flex w-full text-lg justify-around h-max p-4 items-start">

            <div className="relative w-1/5 h-96">
              {<Image src={itemPhotos && itemPhotos[imgIndex]} fill style={{ objectFit: 'contain' }} loading="lazy" alt="Product Image" />}
              <div className="absolute flex bottom-0 w-full justify-around items-center">
                {itemPhotos?.map((img, index) => <button key={img} onClick={() => changeItemPhoto(index)} className="px-2 py-2 border-4 border-red-700 rounded-3xl bg-white"></button>)}
              </div>
            </div>

            <div className="flex flex-col justify-around w-1/2 items-start p-4">
              <div className="flex justify-start items-start mb-2">
                <p className="font-bold">{product?.product_title}</p>
              </div>

              <div className="flex justify-start items-start mb-2">
                <p><span className="font-bold mr-2 text-red-600">Rating:</span>{product?.product_star_rating} / 5 <span className="text-xs">{`(${product?.product_num_ratings})`}</span></p>
              </div>


              <div className="flex flex-col justify-start items-start mb-2">
                <p className="text-xl font-bold mb-2 text-red-600">Product Specs</p>
                <div>
                  {product?.about_product.map((row) => <p className="mb-2">{row}</p>)}
                </div>
              </div>



              {itemSpecs?.length > 0 &&
                <div className="flex flex-col justify-start items-start mb-4">
                  <p className="text-xl font-bold mb-2 text-red-600">Description</p>

                  <div>
                    {itemSpecs?.map((spec, index) => <p key={index} className="mb-2">{spec[0]}: {spec[1]}</p>)}
                  </div>
                </div>}


              <div className="flex flex-col justify-between items-start mb-4">
                {product?.customers_say && <div>
                  <p className="text-xl font-bold mb-2 text-red-600">Customer Overall Review</p>
                  <p>{product?.customers_say}</p>
                </div>}

              </div>
            </div>

            <div className="flex flex-col justify-around border h-80 w-1/6 items-center p-4">
              <p className="text-xl font-bold text-red-600">{product?.product_price + '$'}</p>
              <p className="text-sm line-through text-gray-600">{product?.product_original_price}</p>
              <p className={`text-green-700`}>{product?.product_availability}</p>
              <button className=" bg-red-700 rounded-2xl text-white p-2 w-full ease-in-out duration-100 hover:bg-red-800">Add to Cart</button>
              <button className=" bg-red-700 rounded-2xl text-white p-2 w-full ease-in-out duration-100 hover:bg-red-800">Add to Wishlist</button>
            </div>
          </div>
          <div className="flex w-full gap-y-4 gap-x-4 flex-wrap justify-around items-start">
            {similarItems && similarItems.map((item) => <SimilarProducts key={item.asin} similarItems={item} />)}
          </div>
        </>
      }



    </div>
  )
}