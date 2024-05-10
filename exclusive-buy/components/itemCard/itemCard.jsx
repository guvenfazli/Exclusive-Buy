export default function ItemCard({ item }) {
  return (
    <div className="flex flex-col justify-between w-1/5 p-4 border-2 max-lg:w-1/4 max-md:w-1/3 max-sm:w-full">
      <div className=" mb-4">
        <p>Product Image</p>
      </div>

      <div className="mb-4 text-ellipsis">
        <p className="line-clamp-3">{item.deal_title}</p>
      </div>

      <div className="flex justify-between">
        {item.deal_price.amount && <p className="text-red-600">{item.deal_price.amount}$</p>}
        {item.list_price.amount && <p className="text-gray-500 text-decoration-line: line-through">{item.list_price.amount}$</p>}
      </div>

      <div>
        <button>Add to Cart</button>
        <button>Add to Wishlist</button>
      </div>

    </div>
  )
}