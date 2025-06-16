import Image from "next/image";
import ImageRotate from "./animations/image-rotate";
import { cn } from "../lib/utils";

const ClientsSlider = ({ data }) => {

  
  return (
    <div className="relative z-10 bg-transparent">
      <div className="flex flex-col items-center">
        <h1 className="title text-center text-2xl lg:text-3xl">Clients we have worked for</h1>
      </div>
      <div className="container mt-0 flex w-11/12 justify-center ">
        <div className=" hidden w-full grid-cols-2 items-center justify-center justify-items-center gap-10 pb-12 lg:grid lg:h-[100px] lg:grid-cols-4 lg:gap-32 lg:pb-24">
          <ImageRotate imgs={data.slice(0, 2)} delay={0} />
          <ImageRotate imgs={data.slice(3, 5)} delay={0} />
          <ImageRotate imgs={data.slice(6, 8)} delay={0} />
          <ImageRotate imgs={data.slice(9, 11)} delay={0} />
        </div>

        <div className="my-10 grid w-full grid-cols-3 gap-y-6 gap-x-10 lg:my-20 lg:hidden lg:grid-cols-4 lg:gap-14">
          {data.map((item) => (
            <div
              key={item.id}
              className="flex h-[60px] items-center justify-center"
            >
              <Image
                height={100}
                width={200}
                src={item.img}
                alt="logo"
                className={cn("w-auto", item.height)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientsSlider;
