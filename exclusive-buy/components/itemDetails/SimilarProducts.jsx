import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"
import { bestSelling, notBestSelling } from "@/components/itemCard/itemCardIcons"
import Image from "next/image"
import Link from "next/link"
import Loading from "../loading/loading"
import RatingStars from "../ratingStars/ratingStars"

export default function SimilarProducts({ similarItems }) {

  const [product, setProduct] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      const data = await fetchDetails(similarItems.asin)
      setProduct(data)
      setLoading(false)
    }


    fetchProduct()
  }, [similarItems])
  const categoryRating = Math.round(+product?.product_star_rating)

  if (product) {
    return (
      <div className="flex flex-col w-1/4 border items-center justify-around p-4 relative hover:border-red-400 hover:shadow-red-400">
        <Image src={product?.product_photo} width={200} height={200} style={{ objectFit: 'contain' }} alt="Product Image" loading="lazy" />
        <Link href={`/${product?.product_asin || product?.asin}`} className="text-black line-clamp-3 text-lg mb-4 cursor-pointer hover:underline">{product?.product_title}</Link>
        <div className="flex w-full items-center mb-4 justify-around">
          <p className=" text-red-700 text-lg">{product?.product_price} $</p>
          <p className="text-gray-500">{product?.product_star_rating} <span className="text-gray-500 text-xs">{'(' + product?.product_num_ratings + ')'}</span></p>
          <RatingStars rating={categoryRating} />
        </div>
        <div className="flex w-full justify-center items-center">
          <p className="mr-2">Best Seller: </p>
          {product?.is_best_seller ? bestSelling : notBestSelling}
        </div>
      </div>
    )
  } else if (loading) {
    return (
      <div className="flex flex-row w-full justify-around items-center">
        <Loading />
      </div>
    )
  }

}