export default function NavBar() {
  return (
    <div className="flex flex-col items-start h-96 p-4 w-80 justify-between border-r-2 border-gray-200 max-lg:w-60 max-md:w-40">
      <button className="w-full text-lg">Fashion</button>
      <button className="w-full text-lg">Electronic</button>
      <button className="w-full text-lg">Gaming</button>
      <button className="w-full text-lg">Book Store</button>
      <button className="w-full text-lg">Toys</button>
      <button className="w-full text-lg">Home & Lifestyle</button>
      <button className="w-full text-lg">Sports</button>
      <button className="w-full text-lg">Baby's</button>
    </div>
  )
}