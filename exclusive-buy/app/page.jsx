import Image from "next/image";
import appleLogo from "@/assets/1200px-Apple_gray_logo 1.png"
import iphoneBg from "@/assets/Iphone.png"
import ItemCard from "@/components/itemCard/itemCard"
import ItemShowcase from "@/components/itemShowcase/itemShowcase"
export default function Home() {


  return (

    <div className="flex flex-col w-full p-5">
      <div>
        <p className="font-semibold text-lg text-red-600">Today's Hot Sales</p>
      </div>

      <ItemShowcase />
    </div>

  );
}


