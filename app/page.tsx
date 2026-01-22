import ButtonNavigationClient from "@/components/home/ButtonNavigationClient";

export default function Home() {
  return (
    <div className="w-full  min-h-screen ">
      <div className="max-w-7xl md:text-5xl sm:text-4xl text-2xl font-bold mt-40 m-auto flex items-center flex-col gap-20 p-4 min-h-screen  ">
        LOGO
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
