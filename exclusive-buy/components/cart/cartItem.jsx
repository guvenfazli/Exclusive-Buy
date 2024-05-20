import Image from "next/image"

export default function CartItem({ item, manageQuantity }) {


  return (
    <div className="border p-3 w-4/5 flex justify-around items-center">
      <div className="relative h-60 w-3/6">
        {item?.deal_photo && <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
        {item?.product_photo && <Image src={item.product_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
      </div>
      <div className="w-full text-wrap p-2">
        <p className="leading-8">{item?.deal_title || item?.product_title}</p>
      </div>
      <div className="flex justify-between w-1/6 items-center">
        <button className="px-1 text-xs text-white bg-red-700 rounded-full" onClick={() => manageQuantity(item, '-')}>-</button>
        <p>{item?.quantity}</p>
        <button className="px-1 text-xs text-white bg-red-700 rounded-full" onClick={() => manageQuantity(item, '+')}>+</button>
      </div>
    </div>
  )
}