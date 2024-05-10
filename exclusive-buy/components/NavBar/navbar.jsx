export default function NavBar() {
  return (
    <div className="flex flex-col items-start h-96 p-4  w-80 justify-between border-r-2 border-gray-200">
      <button className="font-bold w-full">Fashion</button>
      <button className="font-bold w-full">Tech</button>
      <button className="font-bold w-full">Gaming</button>
      <button className="font-bold w-full">Book Store</button>
      <button className="font-bold w-full">Toys</button>
      <button className="font-bold w-full">Home & Lifestyle</button>
      <button className="font-bold w-full">Sports</button>
      <button className="font-bold w-full">Baby's</button>
    </div>
  )
}