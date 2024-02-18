"use client"

import { useRouter } from "next/navigation";
import { useRef } from "react"
import { BiSearch } from "react-icons/bi"

export const InputSearch = () => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    if(searchRef.current?.value === "") return alert("Isi inputkan terlebih dahulu");

    event.preventDefault();
    const keyword = searchRef.current?.value;
    router.push(`/search/${keyword}`);
  }

  return(
    <form 
      className="relative"
      onSubmit={(event:any) => handleSearch(event)}
    >
      <input 
        placeholder="Cari anime..." 
        className="p-2 rounded w-full"
        ref={searchRef}
      />
      <button 
        className="absolute top-2 end-2"
        type="submit"
      >
        <BiSearch size={24} />
      </button>
    </form>
  )
}