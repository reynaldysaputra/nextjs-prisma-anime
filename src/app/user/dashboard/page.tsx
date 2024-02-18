import { authUserSession } from "@/libs/auth-libs";
import Image from "next/image";

const Page = async () => {
  const user = await authUserSession();

  return(
    <div>
      <h3>Dashboard</h3>
      <p>WELCOME, {user?.user?.name}</p>
      <Image
        src={user?.user?.image ?? ""}
        alt="..."
        width={250}
        height={250}
      />
    </div>
  )
}

export default Page;