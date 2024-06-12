import Header from "@/components/Dashboard/Header";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return(
    <div className="mt-4 w-full px-4">
      <Header title="My Collection" />  
    
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Link href="" className="border-2 border-color-accent relative">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="w-full bg-color-accent h-16 absolute bottom-0 flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="border-2 border-color-accent relative">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="w-full bg-color-accent h-16 absolute bottom-0 flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="border-2 border-color-accent relative">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="w-full bg-color-accent h-16 absolute bottom-0 flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
        <Link href="" className="border-2 border-color-accent relative">
          <Image
            src={""}
            alt={""}
            width={350}
            height={350}
            className="w-full"
          />
          <div className="w-full bg-color-accent h-16 absolute bottom-0 flex items-center justify-center">
            <h5 className="text-xl text-center">Judul Anime</h5>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Page;