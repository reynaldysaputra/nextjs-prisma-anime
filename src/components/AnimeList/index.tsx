import Image from "next/image"
import Link from "next/link"

interface IAnimeListProps {
  dataAnimes: any
}

export const AnimeList:React.FC<IAnimeListProps> = ({
  dataAnimes
}) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
      {dataAnimes?.data?.map((anime: any) => (
        <Link key={anime.mal_id} href={`/anime/${anime.mal_id}`} className="shadow-lg text-color-primary hover:text-color-accent transition-all">
          <Image
            src={anime.images.webp.image_url}
            alt={"..."}
            width={350}
            height={350}
            className="w-full max-h-64 object-cover"
          />
          <h3 className="font-bold md:text-xl text-md p-4">{anime.title}</h3>
        </Link>
      ))}
    </div>
  )
}