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
    <div className="flex border flex-col justify-between p-3 rounded-2xl items-center w-1/4 h-80">
      <p className="text-xl font-bold">Summary</p>
      <div className="flex items-center flex-wrap text-wrap">
        <input type="checkbox" className="m-2 w-4 h-4 cursor-pointer" />By checking it, you confirm the <span className="underline ml-1 cursor-pointer duration-150 ease-in-out hover:text-red-700 font-bold">terms of use</span>.
      </div>
      <p className={`text-lg ${isFreeShipment && 'line-through'}`}>Shipment: 12$</p>
      <div className="p-2 border-t flex flex-col justify-between w-full items-center">
        <p className="text-lg mb-4">Total: {total?.toFixed(2) + 12}$</p>
        <button className="w-full border bg-red-700 duration-150 ease-in-out text-white text-xl p-2 hover:bg-red-800">Confirm the Order</button>
      </div>
    </div>
  )
}