"use client"
import Results from "@/components/searchResults/resultPage"
import ResultNavBar from "@/components/NavBar/resultNavBar"
import { useState } from "react"
export default function SearchResultPage({ params }) {

  const keyWord = params.keyWord
  const [priceFilter, setPriceFilter] = useState({
    min: 0,
    max: 0
  })


  return (
    <div className="p-4 flex w-full">
      <ResultNavBar priceFilter={priceFilter} setPriceFilter={setPriceFilter} />
      <Results keyWord={keyWord} />
    </div>
  )
}