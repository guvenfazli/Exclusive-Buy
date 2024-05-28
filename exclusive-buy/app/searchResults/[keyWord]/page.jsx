import Results from "@/components/searchResults/resultPage"
import ResultNavBar from "@/components/NavBar/resultNavBar"
export default function SearchResultPage({ params }) {

  const keyWord = params.keyWord


  return (
    <div className="p-4 flex w-full">
      <ResultNavBar />
      <Results keyWord={keyWord} />
    </div>
  )
}