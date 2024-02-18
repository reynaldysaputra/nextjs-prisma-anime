import Link from "next/link";

export const NotFound = () => {
  return(
    <div className="h-[82vh] max-w-xl mx-auto flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-color-accent text-2xl font-bold">NOT FOUND</h3>
        <Link href={"/"} className="text-color-primary hover:text-color-accent transition-all">Kembali</Link>
      </div>
    </div>
  )
}

export default NotFound;