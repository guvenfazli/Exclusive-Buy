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
  const [listFilter, setListFilter] = useState('RELEVANCE')
  const [filterSearch, setFilterSearch] = useState()
  const [condition, setCondition] = useState('ALL')

  useEffect(() => {
    async function search() {
      setLoading(true)
      const data = await searchProduct(keyWord)
      setResults(data)
      setLoading(false)
    }

    search()
  }, [])

  async function filterResults(listFilter, priceFilter, condition) {
    setLoading(true)
    const data = await filterListing(listFilter, priceFilter, condition, keyWord)
    setFilterSearch(data)
    setLoading(false)
  }

  return (
    <div className="p-4 flex w-full">
      <ResultNavBar priceFilter={priceFilter} setPriceFilter={setPriceFilter} isOnSale={isOnSale} setIsOnSale={setIsOnSale} setListFilter={setListFilter} listFilter={listFilter} filterResults={filterResults} condition={condition} setCondition={setCondition} />
      <div className="flex w-full flex-col">
        
        
        <div className="flex w-full">
          {loading ? <Loading /> : <Results keyWord={keyWord} results={results} filterSearch={filterSearch} />}
        </div>
      </div>
    </div>
  )
}