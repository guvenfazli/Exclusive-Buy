import Link from "next/link"

export default function NavBar() {
  return (
    <div className="flex flex-col items-start h-full p-4 w-44 justify-around border-r border-gray-200 max-lg:w-60 max-md:w-40 max-sm:hidden">
      <Link href={'/searchResults/Fashion'} className="w-full text-lg">Fashion</Link>
      <Link href={'/searchResults/Electronic'} className="w-full text-lg">Electronic</Link>
      <Link href={'/searchResults/Gaming'} className="w-full text-lg">Gaming</Link>
      <Link href={'/searchResults/Books'} className="w-full text-lg">Book Store</Link>
      <Link href={'/searchResults/Toys'} className="w-full text-lg">Toys</Link>
      <Link href={'/searchResults/Lifestyle'} className="w-full text-lg">Lifestyle</Link>
      <Link href={'/searchResults/Sports'} className="w-full text-lg">Sports</Link>
      <Link href={'/searchResults/Baby'} className="w-full text-lg">Baby&apos;s</Link>
      <Link href={'/searchResults/Kitchen'} className="w-full text-lg">Kitchen</Link>
      <Link href={'/searchResults/Shoes'} className="w-full text-lg">Shoes</Link>
      <Link href={'/searchResults/TV'} className="w-full text-lg">TVs</Link>
      <Link href={'/searchResults/Photography'} className="w-full text-lg">Photography</Link>
    </div>
  )
}