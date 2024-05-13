import ItemInfo from "@/components/itemDetails/itemInfo"

export default function ItemPage({ params }) {

  const itemId = params.itemId


  return (
    <div>
      <ItemInfo itemId={itemId}/>
    </div>
  )
}