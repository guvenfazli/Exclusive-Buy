import ItemShowcase from "@/components/itemShowcase/itemShowcase"
import CategoryButtons from "@/components/category/CategoryButtons"

export default function Home() {


  return (

    <div className="flex overflow-x-hidden flex-col w-full p-5">
      <div className="flex w-full justify-center items-start">
        <p className="font-semibold text-lg text-red-600">Today&apos;s Hot Sales</p>
      </div>

      <ItemShowcase />
      <CategoryButtons />
    </div>

  );
}


