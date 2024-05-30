"use client"
import ItemCard from '../itemCard/itemCard'

export default function Results({ results, filterSearch }) {


  if (results && !filterSearch) {
    return (
      <div className="flex flex-wrap gap-4 w-full justify-around items-start">
        {results?.map((item) => <ItemCard key={item.asin} categoryItem={item} />)}
      </div>
    )

  } else if (filterSearch) {
    return (
      <div className="flex flex-wrap gap-4 w-full justify-around items-start">
        {filterSearch?.map((item) => <ItemCard key={item.asin} categoryItem={item} />)}
      </div>
    )
  }
}