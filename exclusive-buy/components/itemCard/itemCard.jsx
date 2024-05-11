import { addToWishListIcon } from "@/components/itemCard/itemCardIcons"
import { addToCartIcon } from "@/components/itemCard/itemCardIcons"
import Image from "next/image"
export default function ItemCard({ item, page }) {


  //  <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} />



  return (
    <div className={`flex flex-col flex-shrink-0 flex-grow-0 duration-700 ease-in-out justify-between w-1/5 p-4 border-2 max-lg:w-1/4 max-md:w-1/3 max-sm:w-full`} style={{ translate: `${page * -100}%` }}>
      <div className="mb-4 relative h-60 w-full">
        {item.deal_photo && <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} />}
      </div>

      <div className="mb-4 text-ellipsis">
        <p className="line-clamp-2 font-bold">{item.deal_title}</p>
      </div>

      <div className="flex justify-between mb-4">
        {item.deal_price.amount && <p className="text-red-600 text-lg">{item.deal_price.amount}$</p>}
        {item.list_price.amount && <p className="text-gray-500 text-lg line-through">{item.list_price.amount}$</p>}
      </div>

      <div className=" mb-4">
        <p className="text-gray-500 text-base">Save: {item.savings_amount.amount}$</p>
      </div>

      <div className="flex flex-row items-center justify-between" >
        <button className="bg-red-600 p-2 rounded-full">{addToCartIcon}</button>
        <button className="bg-red-600 p-2 rounded-full">{addToWishListIcon}</button>
      </div>

    </div>
  )
}