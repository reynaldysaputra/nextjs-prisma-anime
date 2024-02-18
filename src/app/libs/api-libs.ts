"use client";
import useSWR from 'swr';

interface IGetAnimeProps {
  resource: string,
  limit: string,
  query?: string
}

const fetcher = (...args:any) => fetch(args).then(res => res.json())

export const getAnimes = ({
  resource,
  query = "",
  limit = ""
}: IGetAnimeProps) : any => {
  const { data: animes, isLoading } = useSWR<any>(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}${resource}?limit=${limit}${query !== "" ? `query=${query}` : ""}`, 
    fetcher
  );

  return {
    animes,
    isLoading
  }
}