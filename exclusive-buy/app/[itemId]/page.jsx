import ItemInfo from "@/components/itemDetails/itemInfo"

export default function ItemPage({ params }) {

  const itemId = params.itemId

  return (
    <div className="flex w-full">
      <ItemInfo itemId={itemId}/>
    </div>
  )
}