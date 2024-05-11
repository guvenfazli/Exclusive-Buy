import { searchGlass } from './headerIcons'
import { cartIcon } from './headerIcons'
import { heartIcon } from './headerIcons'

export default function Header() {


  return (
    <header className="flex justify-between items-center p-3 bg-white border-b-2 border-gray-200 whitespace-nowrap">
      <div className="flex p-3 max-lg:hidden">
        <p className="text-black text-xl font-bold max-lg:text-base max-lg:whitespace-normal max-lg:text-center">Exclusive Buy</p>
      </div>

      <div className="flex p-3 items-center justify-between max-lg:p-1 max-md:hidden">
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b-2 text-lg border-black">Home</button>
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b-2 text-lg border-black">Contact</button>
        <button className="text-black mr-8 ease-in-out duration-75 hover:border-b-2 text-lg border-black">About</button>
        <button className="text-black ease-in-out duration-75 hover:border-b-2 text-lg border-black">Sign Up</button>
      </div>

      <div className="flex p-3 items-center justify-between max-md:w-full max-sm:justify-center">
        <div className="flex justify-between items-center rounded-md bg-gray-100 px-3">
          <input className="bg-transparent p-3 text-black focus:outline-none" placeholder="What are you looking for?" />
          <p>{searchGlass}</p>
        </div>

        <div className="flex p-3 items-center justify-between ml-12 max-lg:p-1 max-lg:ml-7 max-sm:hidden">
          <button>{cartIcon}</button>
          <button className="ml-4">{heartIcon}</button>
        </div>

      </div>
    </header>
  )
}