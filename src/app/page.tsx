"use client";
import { AnimeList } from "../components/AnimeList/index";
import { Header } from "@/components/AnimeList/Header";
import { getAnimes } from "./libs/api-libs";

export default function Page() {
  const {animes, isLoading} = getAnimes({
    resource: "/top/anime",
    limit: "8"
  });

  if(isLoading) return <h1 className="p-4 text-color-accent">Loading...</h1>

  return (
    <>
      {/* Anime Populer */}
      <section>
        <Header
          title="Populer"
          linkTitle="Lihat Semua"
          linkHref="/populer"
        />              
        <AnimeList
          dataAnimes={animes}
        />
      </section>
    </>
  );
}
