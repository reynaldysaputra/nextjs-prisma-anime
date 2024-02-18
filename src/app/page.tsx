"use client";
import { AnimeList } from "../components/AnimeList/index";
import { Header } from "@/components/AnimeList/Header";
import { getAnimes } from "../libs/api-libs";

export default function Page() {
  const {animes: topAnimes, isLoading} = getAnimes({
    resource: "/top/anime",
    limit: "8"
  });

  const {animes: recommendedAnimes} = getAnimes({
    resource: "/recommendations/anime",
  });

  const rdmNumber = Math.floor(Math.random() * 200);

  if(isLoading) return <h1 className="p-4 text-color-accent">Loading...</h1>

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title="Paling Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />              
        <AnimeList
          dataAnimes={topAnimes}
        />
      </section>

      {/* Anime Recomendation */}
      <section>
        <Header
          title="Rekomendasi"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />              
        <AnimeList
          dataAnimes={{
            data: recommendedAnimes?.data.flatMap((item : any) => item.entry).slice(rdmNumber === 200 ? 10 : rdmNumber, rdmNumber === 200 ? 15 : rdmNumber + 5)
          }}
        />
      </section>
    </>
  );
}
