"use client";

import { useRouter } from "next/navigation";
import { BsBackspace } from "react-icons/bs";

const Header = ({title} : {title: string}) => {
  const router = useRouter();

  return(
    <div className="flex justify-between items-center mb-4"> 
      <BsBackspace size={32} className="text-color-primary cursor-pointer" onClick={() => router.back()} />
      <h3 className="text-2xl text-color-primary font-bold">{title}</h3>
    </div>
  )
}

export default Header;