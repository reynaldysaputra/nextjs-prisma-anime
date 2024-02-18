"use client";

import { getAnimes } from '@/libs/api-libs';
import { Header } from '@/components/AnimeList/Header';
import { AnimeList } from '@/components/AnimeList/index';

const Page = ({params}: any) => {
  const {keyword} = params;
  const {animes, isLoading} = getAnimes({
    resource: "/anime",
    query: keyword
  });

  if(isLoading) return <h1 className="p-4 text-color-accent">Loading...</h1>

  return(
    <div>
      <section>
        <Header title={`Pencarian Untuk ${decodeURI(keyword)}...`}/>              
        <AnimeList dataAnimes={animes}/>
      </section>
    </div>
  )
}

export default Page;