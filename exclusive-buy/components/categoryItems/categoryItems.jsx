import { useEffect, useState } from "react"
import { fetchByCategory } from "../../utils/dataManagement"
import ItemCard from "../itemCard/itemCard"
import Loading from "@/components/loading/loading"
export default function CategoryItems({ category, pageNumber }) {

  const [categoryData, setCategoryData] = useState()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const data = await fetchByCategory(category, pageNumber)
      setLoading(false)
      console.log(data)
      setCategoryData(data)
    }

    fetchData()
  }, [category, pageNumber])

  return (
    <div className="flex flex-row flex-wrap gap-x-4 gap-y-4 justify-center items-start">
      {loading ? <Loading /> :
        categoryData?.map((item) => <ItemCard key={item.asin} categoryItem={item} />)
      }
    </div>
  )
}