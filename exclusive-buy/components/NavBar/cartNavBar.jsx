import { useEffect, useState } from "react"

export default function CartNavBar({ total }) {

  const [isFreeShipment, setIsFreeShipment] = useState(false)

  useEffect(() => {
    if (total >= 200) {
      setIsFreeShipment(true)
    } else {
      setIsFreeShipment(false)
    }
  }, [total])


  return (
    <div className="flex border flex-col justify-between p-3 rounded-2xl items-center w-1/4 min-w-min h-80 max-md:w-full">
      <p className="text-xl font-bold">Summary</p>
      <div className="flex items-center flex-nowrap text-wrap">
        <input type="checkbox" className="m-2 w-4 h-4 cursor-pointer" />
        <p>By checking it, you confirm the <span className="underline ml-1 cursor-pointer duration-150 ease-in-out hover:text-red-700 font-bold">terms of use</span>.</p>
      </div>
      <p className={`text-lg ${isFreeShipment && 'line-through text-gray-400'}`}>Shipment: 12$</p>
      <div className="p-2 border-t flex flex-col justify-between w-full items-center">
        <p className="text-lg mb-4"><span className="text-xl text-red-700 font-bold">Total:</span> {isFreeShipment ? total?.toFixed(2) : (total + 12).toFixed(2)} $ <span className="text-xs">Tax included.</span></p>
        <button className="w-full border bg-red-700 duration-150 ease-in-out text-white text-xl p-2 hover:bg-red-800 text-nowrap">Confirm the Order</button>
      </div>
    </div>
  )
}