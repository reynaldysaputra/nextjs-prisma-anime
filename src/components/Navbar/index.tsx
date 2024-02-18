import Link from "next/link"
import { InputSearch } from "./inputSearch"
import { UserActionButton } from "./UserActionButton";

export const Navbar = () => {
  return (
    <header className="bg-color-accent">
      <div className="flex md:flex-row flex-col justify-between p-4 gap-2 md:items-center">
        <Link 
          href={"/"} 
          className="font-bold text-white text-2xl"
        >
          CuyAnimeList
        </Link>
        <InputSearch/>
        {/* @ts-expect-error Server Component */}
        <UserActionButton/>
      </div>
    </header>
  )
}