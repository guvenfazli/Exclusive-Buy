import Image from "next/image";
import appleLogo from "@/assets/1200px-Apple_gray_logo 1.png"
import iphoneBg from "@/assets/Iphone.png"
export default function Home() {
  return (
    <div className="flex flex-row w-full p-5">
      <div className="flex flex-row justify-around w-full p-3 bg-black">
        <div className="flex flex-col p-3 items-start justify-between">
          <div className="flex items-center justify-between mb-4">
            <Image src={appleLogo} className=" mr-7" />
            <p className=" text-white">iPhone 15 Series </p>
          </div>

          <p className="text-white text-5xl font-semibold tracking-wider leading-relaxed">Up to 10% <br></br> off Voucher</p>

          <div>
            <button className="p-2 text-white ease-in-out duration-100 text-lg hover:underline">Shop Now</button>
          </div>
        </div>

        <div className="flex justify-center relative items-center">
          <Image src={iphoneBg}/>
        </div>
      </div>
    </div>

  );
}
