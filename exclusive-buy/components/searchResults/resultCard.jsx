import Link from "next/link"

export default function ResultCard({ result }) {
  return (
    <div className="flex w-full p-3 border-b border-white justify-start items-center">
      <Link href={`/${result.asin}`} className="line-clamp-1 cursor-pointer text-xs hover:underline">{result.product_title}</Link>
    </div>
  )
}