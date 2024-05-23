import ResultCard from "./resultCard"
import { motion } from "framer-motion"
export default function SearchResults({ result }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute text-wrap z-10 w-full left-0 bottom-0 transform translate-y-full border bg-slate-950 text-white flex-col justify-start items-start shadow-lg rounded-md">
      {result.map((result) => <ResultCard result={result} />)}
    </motion.div>

  )
}