import { addToWishListIcon } from "@/components/itemCard/itemCardIcons"
import { addToCartIcon } from "@/components/itemCard/itemCardIcons"

export default function ItemCard({ item }) {
  return (
    <div className="flex flex-col justify-between w-1/5 p-4 border-2 max-lg:w-1/4 max-md:w-1/3 max-sm:w-full">
      <div className=" mb-4">
        <p>Product Image</p>
      </div>

      <div className="mb-4 text-ellipsis">
        <p className="line-clamp-2 font-bold">{item.deal_title}</p>
      </div>

      <div className="flex justify-between mb-4">
        {item.deal_price.amount && <p className="text-red-600 text-lg">{item.deal_price.amount}$</p>}
        {item.list_price.amount && <p className="text-gray-500 text-lg line-through">{item.list_price.amount}$</p>}
      </div>

      <div className="flex flex-row items-center justify-between" >
        <button className="bg-red-600 p-2 rounded-full">{addToCartIcon}</button>
        <button className="bg-red-600 p-2 rounded-full">{addToWishListIcon}</button>
      </div>

    </div>
  )
}