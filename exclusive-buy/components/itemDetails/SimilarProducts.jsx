import { useEffect, useState } from "react"
import { fetchDetails } from "../../utils/dataManagement"

export default function SimilarProducts({ similarItems }) {

  const [product, setProduct] = useState()

  useEffect(() => {
    async function fetchProduct() {
      const data = await fetchDetails(similarItems.asin)
      setProduct(data)
    }


    fetchProduct()
  }, [similarItems])


  return (
    <div className="border flex justify-around items-center p-4">
      {console.log(product)}
      <p className=" text-black">{product?.product_title}</p>
    </div>
  )
}