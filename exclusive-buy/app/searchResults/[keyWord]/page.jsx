"use client"
import Results from "@/components/searchResults/resultPage"
import ResultNavBar from "@/components/NavBar/resultNavBar"
import { useState, useEffect } from "react"
import { searchProduct, filterListing } from '@/utils/dataManagement'
import Loading from "@/components/loading/loading"

export default function SearchResultPage({ params }) {

  const keyWord = params.keyWord
  const [priceFilter, setPriceFilter] = useState({
    min: 1,
    max: 5000
  })
  const [results, setResults] = useState()
  const [loading, setLoading] = useState(false)
  const [isOnSale, setIsOnSale] = useState(false)
  const [listFilter, setListFilter] = useState()
  const [filterSearch, setFilterSearch] = useState()

  useEffect(() => {
    async function search() {
      setLoading(true)
      const data = await searchProduct(keyWord)
      setResults(data)
      setLoading(false)
    }

    search()
  }, [])

  async function filterResults(listFilter, priceFilter) {
    setLoading(true)
    const data = await filterListing(listFilter, priceFilter, keyWord)
    console.log(data)
    setFilterSearch(data)
    setLoading(false)
  }




  return (
    <div className="p-4 flex w-full">
      <ResultNavBar priceFilter={priceFilter} setPriceFilter={setPriceFilter} isOnSale={isOnSale} setIsOnSale={setIsOnSale} setListFilter={setListFilter} listFilter={listFilter} filterResults={filterResults} />
      {loading ? <Loading /> : <Results keyWord={keyWord} results={results} filterSearch={filterSearch} />}
    </div>
  )
}