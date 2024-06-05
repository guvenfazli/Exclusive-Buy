"use client"
import Results from "@/components/searchResults/resultPage"
import ResultNavBar from "@/components/NavBar/resultNavBar"
import { useState, useEffect } from "react"
import { searchProduct, filterListing } from '@/utils/dataManagement'
import Loading from "@/components/loading/loading"
import { nextArrow } from "@/components/itemShowcase/showcaseIcons"
import { prevArrow } from "@/components/itemShowcase/showcaseIcons"


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
  const [page, setPage] = useState(1)

  useEffect(() => {
    async function search() {
      setLoading(true)
      const data = await filterListing(listFilter, priceFilter, page, condition, keyWord)
      setResults(data)
      setLoading(false)
    }

    search()
  }, [page])

  async function filterResults(listFilter, priceFilter, condition) {
    setLoading(true)
    const data = await filterListing(listFilter, priceFilter, page, condition, keyWord)
    setFilterSearch(data)
    setLoading(false)
  }

  function navigatePage(option) {
    if (option === '+') {
      setPage((prev) => prev += 1)
    } else if (option === '-') {
      setPage((prev) => prev -= 1)
    }
  }

  return (
    <div className="p-4 flex w-full">
      <ResultNavBar priceFilter={priceFilter} setPriceFilter={setPriceFilter} isOnSale={isOnSale} setIsOnSale={setIsOnSale} setListFilter={setListFilter} listFilter={listFilter} filterResults={filterResults} condition={condition} setCondition={setCondition} setPage={setPage} />
      <div className="flex w-full flex-col">


        <div className="flex flex-col w-full">
          <div className="w-full px-8 flex justify-between items-center mb-4">

            <div className="flex w-1/6 py-2 border rounded-2xl justify-around items-center max-md:w-1/2 max-lg:w-1/2">
              <div className="flex">
                <p className="text-sm text-black">{(listFilter === 'RELEVANCE' && 'Relevance') || (listFilter === 'LOWEST_PRICE' && 'Cheap to Expensive') || (listFilter === 'HIGHEST_PRICE' && 'Expensive to Cheap') || (listFilter === 'BEST_SELLERS' && 'Best Sellers')}</p>
              </div>

              <div className="flex">
                <p className="text-sm">{condition}</p>
              </div>
            </div>

            <div className="flex w-1/6 justify-around items-center max-md:w-1/2">
              <button onClick={(() => navigatePage('-'))} disabled={page === 1} className="p-1 bg-red-600 rounded-full disabled:bg-red-400">{prevArrow}</button>
              <p className="max-md:text-sm">{page}</p>
              <button onClick={(() => navigatePage('+'))} className="p-1 bg-red-600 rounded-full disabled:bg-red-400">{nextArrow}</button>
            </div>

          </div>
          {loading ? <Loading /> : <Results keyWord={keyWord} results={results} filterSearch={filterSearch} />}
        </div>
      </div>
    </div>
  )
}