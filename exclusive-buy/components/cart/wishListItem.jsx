import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
export default function WishListItem({ item, addToCart, removeWish }) {

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="border p-3 w-4/5 flex justify-around items-center rounded-lg max-md:w-full max-[460px]:flex-col">
        <div className="relative h-60 w-2/5 mr-3">
          {item?.deal_photo && <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
          {item?.product_photo && <Image src={item.product_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
        </div>
        <div className="flex flex-col items-start w-full text-wrap p-2">
          <Link href={`/${item.asin || item.product_asin}`} className="leading-8 text-lg mb-4 hover:underline max-md:text-base">{item?.deal_title || item?.product_title}</Link>
          <p className="text-lg text-red-700">{item?.product_price || '$' + item?.deal_price.amount}</p>
        </div>
        <div className="flex text-nowrap items-center justify-around">
          <button onClick={() => addToCart(item)} className="w-full bg-red-700 p-2 rounded-3xl text-sm text-white cursor-pointer hover:bg-red-800">Add to Cart</button>
          <button onClick={() => removeWish(item)} className="w-full ml-5 bg-red-700 p-2 rounded-3xl text-sm text-white cursor-pointer hover:bg-red-800">Remove</button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}