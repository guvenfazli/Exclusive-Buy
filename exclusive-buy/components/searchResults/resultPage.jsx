"use client"
import { searchProduct } from '@/utils/dataManagement'
import { useEffect, useState } from 'react'
import ItemCard from '../itemCard/itemCard'
import Loading from "@/components/loading/loading"

export default function Results({ keyWord }) {

  const [results, setResults] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function search() {
      setLoading(true)
      const data = await searchProduct(keyWord)
      setResults(data)
      setLoading(false)

    }

    search()
  }, [])

  return (
    <>
      {loading ?
        <div className='flex w-full justify-center items-center'>
          <Loading />
        </div> :
        <div className="flex flex-wrap gap-4 w-full justify-around items-start">
          {results?.map((item) => <ItemCard key={item.asin} categoryItem={item} />)}
        </div>
      }
    </>
  )
}