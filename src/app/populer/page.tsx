"use client";
import { AnimeList } from "@/components/AnimeList/index";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useState } from "react";
import { getAnimes } from "../../libs/api-libs";

const Page = () => {
  const [page, setPage] = useState(1);
  const {animes, isLoading} = getAnimes({
    resource: "/top/anime",
    limit: "10",
    page: page.toString()
  })

  if(isLoading) return <h1 className="p-4 text-color-accent">Loading...</h1>

  return(
    <div>
      <HeaderMenu title={`ANIME TERPOPULER #${page}`} />
      <AnimeList dataAnimes={animes} />
      <Pagination 
        page={page} 
        lastPage={animes.pagination?.last_visible_page}
        setPage={setPage}
      />
    </div>
  )
}

export default Page;