"use client";

import { Header } from '@/components/AnimeList/Header';
import { AnimeList } from '@/components/AnimeList/index';
import useSWR from 'swr';

const fetcher = (...args:any) => fetch(args).then(res => res.json())

const Page = ({params}: any) => {
  const {keyword} = params;
  const { data: animes, error, isLoading } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeURI(keyword)}`, 
    fetcher
  );

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