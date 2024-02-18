"use client";
import { AnimeList } from "@/components/AnimeList/index";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import { useState } from "react";
import useSWR from 'swr';

const fetcher = (...args:any) => fetch(args).then(res => res.json())

const Page = () => {
  const [page, setPage] = useState(1);
  const { data: animes, error, isLoading } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`, 
    fetcher
  );

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