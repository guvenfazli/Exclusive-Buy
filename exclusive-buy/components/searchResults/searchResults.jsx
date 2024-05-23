import ResultCard from "./resultCard"
export default function SearchResults({ result }) {
  return (
    <div className="absolute text-wrap z-10 w-full left-0 bottom-0 transform translate-y-full border bg-slate-950 text-white flex-col justify-start items-start shadow-lg rounded-md">
      {result.map((result) => <ResultCard result={result} />)}




    </div>
  )
}