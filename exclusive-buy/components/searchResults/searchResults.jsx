import ResultCard from "./resultCard"
import { motion } from "framer-motion"
export default function SearchResults({ result, isVisible, setIsVisible }) {


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseLeave={() => setIsVisible(false)} className={`absolute text-wrap z-10 w-full left-0 bottom-0 transform translate-y-full border bg-slate-950 text-white flex-col justify-start items-start shadow-lg rounded-md ${isVisible ? 'visible' : 'invisible'}`}>
      {result.map((result) => <ResultCard key={result.asin} result={result} />)}
    </motion.div>

  )
}