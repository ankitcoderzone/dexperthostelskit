import ButtonNavigationClient from "@/components/home/ButtonNavigationClient";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full  min-h-screen ">
      <div className="max-w-4xl md:text-3xl sm:text-3xl text-2xl font-bold sm:mt-20 mt-0 m-auto flex items-center flex-col gap-20 p-4 min-h-screen  ">
            <Image
            
            src={"/hostelskit.png"}
            alt="logo"
            width={200}
            height={200}
            className="rounded-full"
            />   
        <p className=" flex flex-wrap justify-center items-center ">
          Minimizing the gap between student and department
        </p>
        <div>
          <ButtonNavigationClient/>
        </div>
        <div  ></div>
      </div>
      <div></div>
    </div>
  );
}
