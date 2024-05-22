import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
export default function CartItem({ item, manageQuantity }) {

  const itemPrice = item?.quantity * item.deal_price?.amount || parseInt(item.product_price.replaceAll('$', '')) * item?.quantity
  return (
    <AnimatePresence>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="border p-3 w-4/5 flex justify-around items-center rounded-lg">
        <div className="relative h-60 w-1/6 mr-3">
          {item?.deal_photo && <Image src={item.deal_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
          {item?.product_photo && <Image src={item.product_photo} fill style={{ objectFit: 'contain' }} alt="Product Image" />}
        </div>
        <div className="w-full text-wrap p-2">
          <p className="leading-8 text-lg">{item?.deal_title || item?.product_title}</p>
        </div>
        <div className="flex flex-col w-40 items-center justify-center">
          <div className="flex justify-between w-full items-center mb-4">
            <button className="px-1.5 text-xs  text-white bg-red-700 rounded-full" onClick={() => manageQuantity(item, '-')}>-</button>
            <p>{item?.quantity}</p>
            <button className="px-1 text-xs text-white bg-red-700 rounded-full" onClick={() => manageQuantity(item, '+')}>+</button>
          </div>

          <p className="text-lg text-red-700">{itemPrice?.toFixed(2)} $</p>

        </div>
      </motion.div>
    </AnimatePresence>
  )
}